'use client';

import { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { Product } from '@/data/products';

export interface CartItem {
  product: Product;
  variantIndex: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

type CartAction =
  | { type: 'ADD'; product: Product; variantIndex: number; quantity: number }
  | { type: 'REMOVE'; productId: string; variantIndex: number }
  | { type: 'UPDATE_QTY'; productId: string; variantIndex: number; quantity: number }
  | { type: 'CLEAR' };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD': {
      const key = `${action.product.id}-${action.variantIndex}`;
      const existing = state.items.findIndex(
        (i) => `${i.product.id}-${i.variantIndex}` === key
      );
      if (existing >= 0) {
        const items = [...state.items];
        items[existing] = { ...items[existing], quantity: items[existing].quantity + action.quantity };
        return { items };
      }
      return {
        items: [
          ...state.items,
          { product: action.product, variantIndex: action.variantIndex, quantity: action.quantity },
        ],
      };
    }
    case 'REMOVE':
      return {
        items: state.items.filter(
          (i) => !(i.product.id === action.productId && i.variantIndex === action.variantIndex)
        ),
      };
    case 'UPDATE_QTY':
      if (action.quantity <= 0) {
        return {
          items: state.items.filter(
            (i) => !(i.product.id === action.productId && i.variantIndex === action.variantIndex)
          ),
        };
      }
      return {
        items: state.items.map((i) =>
          i.product.id === action.productId && i.variantIndex === action.variantIndex
            ? { ...i, quantity: action.quantity }
            : i
        ),
      };
    case 'CLEAR':
      return { items: [] };
    default:
      return state;
  }
}

interface CartContextValue {
  items: CartItem[];
  addItem: (product: Product, variantIndex: number, quantity?: number) => void;
  removeItem: (productId: string, variantIndex: number) => void;
  updateQty: (productId: string, variantIndex: number, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  useEffect(() => {
    try {
      const saved = localStorage.getItem('ht-cart');
      if (saved) {
        const parsed = JSON.parse(saved) as CartItem[];
        parsed.forEach((item) => {
          dispatch({ type: 'ADD', product: item.product, variantIndex: item.variantIndex, quantity: item.quantity });
        });
      }
    } catch {}
  }, []);

  useEffect(() => {
    localStorage.setItem('ht-cart', JSON.stringify(state.items));
  }, [state.items]);

  const addItem = (product: Product, variantIndex: number, quantity = 1) =>
    dispatch({ type: 'ADD', product, variantIndex, quantity });
  const removeItem = (productId: string, variantIndex: number) =>
    dispatch({ type: 'REMOVE', productId, variantIndex });
  const updateQty = (productId: string, variantIndex: number, quantity: number) =>
    dispatch({ type: 'UPDATE_QTY', productId, variantIndex, quantity });
  const clearCart = () => dispatch({ type: 'CLEAR' });

  const totalItems = state.items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = state.items.reduce((sum, i) => {
    const price = i.product.variants[i.variantIndex]?.price ?? 0;
    return sum + price * i.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{ items: state.items, addItem, removeItem, updateQty, clearCart, totalItems, subtotal }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside CartProvider');
  return ctx;
}
