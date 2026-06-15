export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: string;
  description: string;
  overview: string;
  keyBenefits: string[];
  reconstitutionInstructions: string[];
  dosingGuidelines: string[];
  monitoring: string[];
  note: string;
  faqs: { q: string; a: string }[];
  variants: { label: string; price?: number; imageUrl?: string }[];
  imageUrl?: string;
}

export const products: Product[] = [
  {
    id: 'retatrutide',
    slug: 'retatrutide',
    name: 'Retatrutide',
    tagline: 'Triple Incretin Receptor Agonist | GLP-1 + GIP + Glucagon for Advanced Fat Loss',
    category: 'Fat Loss',
    overview:
      'Retatrutide is a next-generation triple incretin agonist, targeting GLP-1 (glucagon-like peptide-1), GIP (glucose-dependent insulinotropic polypeptide), and Glucagon receptors simultaneously. This unique triple-action mechanism offers a powerful blend of appetite suppression, fat oxidation, and energy regulation, positioning Retatrutide at the forefront of advanced weight management and metabolic enhancement therapies.',
    description:
      'Triple Incretin Receptor Agonist targeting GLP-1, GIP, and Glucagon receptors simultaneously for powerful fat loss and metabolic optimization.',
    keyBenefits: [
      'Promotes deep, sustained fat loss through increased metabolic rate',
      'Strong appetite and craving suppression',
      'Enhances insulin sensitivity and glycemic control',
      'Supports lipid metabolism and energy balance',
      'Once-weekly subcutaneous dosing for convenience',
    ],
    reconstitutionInstructions: [
      'Reconstitute using Bacteriostatic Water (BAC)',
      'Example: Add 2mL of BAC to a 5mg vial for a 2.5mg/mL solution',
      'Gently swirl (do not shake) until dissolved completely',
      'Store reconstituted Retatrutide in the refrigerator (2–8°C)',
    ],
    dosingGuidelines: [
      'Initial dose: start low (e.g., 0.25–0.5mg weekly)',
      'Therapeutic range: 1–5mg+ weekly, titrated based on tolerance and goal',
      'Administer via subcutaneous injection (abdomen, thigh, or upper arm)',
      'Duration: 12–24 weeks typical for significant body composition changes',
    ],
    monitoring: [
      'Common side effects: Nausea, fullness, slowed digestion, mild fatigue (usually temporary)',
      'Monitor: Blood glucose, hydration, GI tolerance, and lipid markers',
      'Contraindications: History of medullary thyroid carcinoma (MTC) or MEN2 syndromes',
    ],
    note: 'Retatrutide is designed for individuals seeking an aggressive yet clinically supported fat-loss solution. Its triple-action profile delivers compounded benefits over traditional single-pathway agents.',
    faqs: [
      {
        q: 'What Carrier Oil/solvents are used for your injectables?',
        a: 'USP Grade MCT oil is the carrier oil. The only solvents used are Benzyl Alcohol & Benzyl Benzoate (BA & BB).',
      },
      {
        q: 'Do your products come with bacteriostatic water?',
        a: 'No, you must purchase it separately.',
      },
      {
        q: 'What payment methods do you accept?',
        a: 'Mainly Bitcoin, if needed PayPal, Alibaba Credit Insurance Order and Bank Transfer.',
      },
      {
        q: 'How long does shipping take?',
        a: 'Depending on your location, most customers receive their order in 2–10 business days.',
      },
    ],
    variants: [
      { label: '5mg × 10 Vials', price: 45 },
      { label: '10mg × 10 Vials', price: 68 },
      { label: '15mg × 10 Vials', price: 95 },
      { label: '20mg × 10 Vials', price: 113 },
      { label: '30mg × 10 Vials', price: 153 },
      { label: '40mg × 10 Vials', price: 194 },
      { label: '60mg × 10 Vials', price: 284 },
    ],
    imageUrl: '/images/products/Retatrutide.png',
  },
  {
    id: 'tirzepatide',
    slug: 'tirzepatide',
    name: 'Tirzepatide Kit',
    tagline: 'Dual GLP-1/GIP Receptor Agonist | Advanced Injectable for Weight Management',
    category: 'Fat Loss',
    overview:
      'Tirzepatide is a cutting-edge dual incretin agonist that mimics both GLP-1 (glucagon-like peptide-1) and GIP (glucose-dependent insulinotropic polypeptide) — two key hormones involved in regulating blood sugar, satiety, and energy balance. This unique mechanism allows for enhanced appetite suppression, improved insulin sensitivity, and significant fat loss when combined with proper nutrition and lifestyle protocols.',
    description:
      'Dual GLP-1/GIP Receptor Agonist for advanced weight management and metabolic support with once-weekly dosing.',
    keyBenefits: [
      'Dramatically reduces hunger and cravings',
      'Promotes significant and sustainable weight loss',
      'Improves glucose regulation and insulin efficiency',
      'Once-weekly subcutaneous injection for ease of use',
      'Supports cardiometabolic health markers (A1C, triglycerides, blood pressure)',
    ],
    reconstitutionInstructions: [
      'Reconstitute with Bacteriostatic Water (BAC)',
      'Example: Add 2mL of BAC to a 5mg vial to yield 2.5mg/mL',
      'Gently swirl (do not shake) until fully dissolved',
      'Store reconstituted Tirzepatide in the refrigerator (2–8°C)',
    ],
    dosingGuidelines: [
      'Start at 2.5mg weekly, titrate upward gradually',
      'Therapeutic range: 5mg–15mg per week depending on goals and tolerance',
      'Administer subcutaneously in the abdomen, thigh, or upper arm',
    ],
    monitoring: [
      'Common side effects: Mild nausea, early satiety, constipation, or fatigue (typically temporary)',
      'Monitor: Blood sugar, hydration, and gastrointestinal tolerance',
      'Not suitable for individuals with a personal/family history of medullary thyroid carcinoma (MTC) or MEN2 syndromes',
    ],
    note: 'Tirzepatide is a powerful tool for transforming body composition, especially when paired with structured nutrition, regular movement, and long-term metabolic support strategies.',
    faqs: [
      {
        q: 'What forms does this product come in?',
        a: 'Supplied as a lyophilized powder requiring reconstitution prior to use.',
      },
      {
        q: 'How is this different from Retatrutide?',
        a: 'Tirzepatide targets two receptors (GLP-1 + GIP) while Retatrutide targets three (GLP-1 + GIP + Glucagon).',
      },
    ],
    variants: [
      { label: '5mg × 10 Vials', price: 36, imageUrl: '/images/products/TR5.png' },
      { label: '10mg × 10 Vials', price: 44, imageUrl: '/images/products/TR10.png' },
      { label: '15mg × 10 Vials', price: 59, imageUrl: '/images/products/TR15.png' },
      { label: '20mg × 10 Vials', price: 69, imageUrl: '/images/products/TR20.png' },
      { label: '30mg × 10 Vials', price: 95, imageUrl: '/images/products/TR30.png' },
      { label: '40mg × 10 Vials', price: 117, imageUrl: '/images/products/TR40.png' },
      { label: '50mg × 10 Vials', price: 144, imageUrl: '/images/products/TR50.png' },
      { label: '60mg × 10 Vials', price: 158, imageUrl: '/images/products/TR60.png' },
      { label: '70mg × 10 Vials', price: 207, imageUrl: '/images/products/TR70.png' },
      { label: '80mg × 10 Vials', price: 234, imageUrl: '/images/products/TR80.png' },
      { label: '90mg × 10 Vials', price: 243, imageUrl: '/images/products/TR90.png' },
      { label: '100mg × 10 Vials', price: 257, imageUrl: '/images/products/TR100.png' },
      { label: '110mg × 10 Vials', price: 279, imageUrl: '/images/products/TR110.png' },
      { label: '120mg × 10 Vials', price: 284, imageUrl: '/images/products/TR120.png' },
    ],
    imageUrl: '/images/products/Tirzepatide.png',
  },
  {
    id: 'semaglutide',
    slug: 'semaglutide',
    name: 'Semaglutide',
    tagline: 'GLP-1 Receptor Agonist | Weight Management & Metabolic Health',
    category: 'Fat Loss',
    overview:
      'Semaglutide is a GLP-1 receptor agonist that mimics the action of the naturally occurring hormone GLP-1. It works by slowing stomach emptying, reducing appetite, and promoting feelings of fullness, making it a powerful tool for weight management and glycemic control.',
    description:
      'Semaglutide GLP-1 agonist for effective appetite control and sustainable weight loss.',
    keyBenefits: [
      'Significant and sustained weight loss',
      'Appetite suppression and reduced caloric intake',
      'Improved blood sugar regulation',
      'Once-weekly subcutaneous injection',
      'Well-tolerated with gradual dose escalation',
    ],
    reconstitutionInstructions: [
      'Reconstitute with Bacteriostatic Water (BAC)',
      'Gently swirl until fully dissolved (do not shake)',
      'Refrigerate after reconstitution (2–8°C)',
    ],
    dosingGuidelines: [
      'Start at 0.25mg weekly for 4 weeks, titrate upward',
      'Therapeutic range: 1–2.5mg weekly',
      'Inject subcutaneously in abdomen, thigh, or upper arm',
    ],
    monitoring: [
      'Monitor blood glucose levels',
      'Watch for gastrointestinal side effects (nausea, fullness)',
      'Monitor for signs of thyroid C-cell tumors',
    ],
    note: 'Semaglutide is one of the most studied GLP-1 agonists for weight management.',
    faqs: [],
    variants: [
      { label: '5mg × 10 Vials', price: 35 },
      { label: '10mg × 10 Vials', price: 45 },
      { label: '15mg × 10 Vials', price: 55 },
      { label: '20mg × 10 Vials', price: 60 },
      { label: '30mg × 10 Vials', price: 75 },
    ],
    imageUrl: '/images/products/Semaglutide.png',
  },
  {
    id: 'glow',
    slug: 'glow',
    name: 'GLOW',
    tagline: 'GHK-Cu + BPC-157 + TB-500 Peptide Blend for Tissue Regeneration',
    category: 'Tissue Repair',
    overview:
      'The GLOW Blend combines three well-studied peptides – GHK-Cu, BPC-157, and TB-500 – into a precise formula for advanced scientific research. Each peptide adds unique qualities, and together they create a stronger foundation for exploring tissue repair, recovery, and cellular balance.',
    description:
      'Synergistic peptide blend combining GHK-Cu (50mg), BPC-157 (10mg), and TB-500 (10mg) for tissue regeneration and recovery.',
    keyBenefits: [
      'GHK-Cu: promotes collagen and elastin production, gene expression related to tissue repair',
      'BPC-157: supports angiogenesis, reduces inflammation, accelerates tissue repair',
      'TB-500: reduces inflammation, accelerates wound repair, promotes angiogenesis',
      'Supports epithelial cell health and skin regeneration',
      'Precision-formulated for extended research studies',
    ],
    reconstitutionInstructions: [
      'Reconstitute with Bacteriostatic Water (BAC)',
      'Gently swirl until fully dissolved (do not shake)',
      'Refrigerate after reconstitution (2–8°C)',
      'Use within 90 days for optimal stability',
    ],
    dosingGuidelines: [
      'Typical dose: 250–500mcg per injection',
      'Administer subcutaneously near site of injury or systemically',
      'Cycle: 4–8 weeks, followed by a break',
    ],
    monitoring: [
      'Monitor for local injection site reactions',
      'Track recovery progress and range of motion improvements',
    ],
    note: 'Ideal for athletes, active individuals or those recovering from soft tissue injuries, tendinitis, ligament injuries, and post-surgery recovery. GMP-compliant facility with ≥99% purity.',
    faqs: [
      {
        q: 'What is the formulation ratio?',
        a: 'GHK-Cu: 50mg, BPC-157: 10mg, TB-500: 10mg per vial.',
      },
    ],
    variants: [
      { label: 'GLOW 50 (GHK-Cu 35mg + TB-500 10mg + BPC-157 5mg)', price: 200 },
      { label: 'GLOW 70 (TB-500 10mg + BPC-157 10mg + GHK-Cu 50mg)', price: 230 },
    ],
    imageUrl: '/images/products/GLOW 50.png',
  },
  {
    id: 'klow80',
    slug: 'klow80',
    name: 'KLOW80',
    tagline: 'BPC-157 + TB-500 + KPV + GHK-Cu | Advanced Recovery & Joint Repair Blend',
    category: 'Tissue Repair',
    overview:
      'KLOW is a quadruple-peptide research blend combining four clinically studied compounds — BPC-157, TB-500, KPV, and GHK-Cu — into one stable lyophilized vial. Optimized for joint, tendon, gut, and muscular recovery studies with a unique anti-inflammatory dimension through KPV.',
    description:
      'Quadruple-peptide blend (BPC-157, TB-500, KPV, GHK-Cu) for advanced joint, tendon, gut, and muscle recovery.',
    keyBenefits: [
      'BPC-157: Promotes vascularization and tissue regeneration',
      'TB-500: Improves flexibility, reduces scar tissue, accelerates cell migration',
      'KPV: Anti-inflammatory tripeptide for gut and immune modulation',
      'GHK-Cu: Stimulates collagen synthesis and dermal repair',
      'Full-body recovery for post-stress and musculoskeletal research',
    ],
    reconstitutionInstructions: [
      'Reconstitute with Bacteriostatic Water (BAC)',
      'Gently swirl until fully dissolved',
      'Refrigerate after reconstitution (2–8°C)',
    ],
    dosingGuidelines: [
      'Typical dose: 250–500mcg per injection',
      'Administer subcutaneously near site of injury or systemically',
      'Cycle: 4–8 weeks',
    ],
    monitoring: [
      'Monitor for local injection site reactions',
      'Track joint mobility and recovery progress',
    ],
    note: 'While GLOW emphasizes skin-focused peptide research, KLOW is optimized for joint, tendon, gut, and muscular recovery. The inclusion of KPV gives it a unique anti-inflammatory dimension.',
    faqs: [
      {
        q: 'How is KLOW different from GLOW?',
        a: 'KLOW adds KPV (anti-inflammatory) to the blend, making it ideal for joint, gut, and muscular recovery. GLOW focuses on skin and tissue regeneration.',
      },
    ],
    variants: [{ label: 'KLOW80 (GHK-Cu 50mg + BPC-157 10mg + TB-500 10mg + KPV 10mg)', price: 258 }],
    imageUrl: '/images/products/KLOW80.png',
  },
  {
    id: 'nad-plus',
    slug: 'nad-plus',
    name: 'NAD+',
    tagline: 'Nicotinamide Adenine Dinucleotide | Cellular Energy, DNA Repair & Anti-Aging',
    category: 'Anti-Aging',
    overview:
      'The main benefits of NAD+ (nicotinamide adenine dinucleotide) lie in promoting cellular energy production, repairing DNA damage, slowing aging, and supporting brain and nervous system function. It helps the body generate energy to maintain normal function, repairs DNA damage caused by stress and aging, and slows the cellular aging process.',
    description:
      'NAD+ supports cellular energy production, DNA repair, anti-aging, and cognitive function through multiple pathways.',
    keyBenefits: [
      'Promotes cellular energy production (ATP)',
      'Repairs DNA damage caused by stress and aging',
      'Slows cellular aging and maintains chromosome stability',
      'Supports cognitive function and brain health',
      'Enhances immunity and overall vitality',
    ],
    reconstitutionInstructions: [
      'Reconstitute with sterile water',
      'Use immediately or refrigerate',
    ],
    dosingGuidelines: [
      'Typical dose: 100–500mg daily, titrated individually',
      'Administer via subcutaneous injection or IV (under supervision)',
    ],
    monitoring: [
      'Monitor energy levels and cognitive clarity',
      'Check for flushing or GI discomfort at high doses',
    ],
    note: 'NAD+ levels decline with age; supplementation supports metabolic health and longevity.',
    faqs: [
      {
        q: 'What happens to NAD+ levels with age?',
        a: 'NAD+ levels naturally decline with age, which is why supplementation becomes increasingly beneficial for metabolic health.',
      },
    ],
    variants: [
      { label: '500mg × 10 Vials', price: 65 },
      { label: '1000mg × 10 Vials', price: 100 },
    ],
    imageUrl: '/images/products/NAD+.png',
  },
  {
    id: 'tesamorelin',
    slug: 'tesamorelin',
    name: 'Tesamorelin',
    tagline: 'Growth Hormone-Releasing Hormone Analogue | Visceral Fat Reduction',
    category: 'Fat Loss',
    overview:
      'Tesamorelin is a growth hormone-releasing hormone (GHRH) analogue whose primary function is to specifically reduce fat accumulation, particularly visceral fat. It achieves this by acting on growth hormone-releasing hormone receptors, and can help improve HIV-related lipohypertrophy and has a potential reduction in the risk of fatty liver disease.',
    description:
      'Growth hormone-releasing hormone analogue specifically designed to reduce visceral fat accumulation.',
    keyBenefits: [
      'Specifically reduces visceral fat accumulation',
      'Targeted for HIV-infected individuals with lipohypertrophy',
      'Acts on relevant receptors to reduce fat through HGH pathway',
      'May reduce the risk of fatty liver disease',
      'Supports body composition optimization',
    ],
    reconstitutionInstructions: [
      'Reconstitute with Bacteriostatic Water',
      'Gently swirl to dissolve',
      'Refrigerate after reconstitution',
    ],
    dosingGuidelines: [
      'Typical therapeutic protocols per physician guidance',
      'Administer via subcutaneous injection',
      'Cycle duration as directed by healthcare provider',
    ],
    monitoring: [
      'Monitor body composition and visceral fat levels',
      'Track growth hormone and IGF-1 levels',
    ],
    note: 'Tesamorelin is specifically designed for visceral fat reduction and should be used under professional supervision.',
    faqs: [],
    variants: [
      { label: '5mg × 10 Vials', price: 113 },
      { label: '10mg × 10 Vials', price: 193 },
      { label: '20mg × 10 Vials', price: 370 },
    ],
    imageUrl: '/images/products/Tesamorelin.png',
  },
  {
    id: 'bpc157tb500',
    slug: 'bpc157tb500',
    name: 'BPC157+TB500',
    tagline: 'BPC-157 + TB-500 Blend | Musculoskeletal Repair & Whole Body Recovery',
    category: 'Tissue Repair',
    overview:
      'This powerful peptide blend combines BPC-157 and TB-500, two of the most studied peptides for tissue regeneration, anti-inflammatory response, and injury repair. When used together, they create a synergistic effect that supports local healing and systemic repair mechanisms throughout the body.',
    description:
      'Regenerative peptide combo (5mg BPC-157 + 5mg TB-500) for musculoskeletal repair and whole body recovery.',
    keyBenefits: [
      'Supports rapid healing of soft tissue injuries',
      'Enhances collagen production and angiogenesis',
      'Reduces inflammation and oxidative stress',
      'Promotes joint, tendon and muscle regeneration',
      'Ideal for tendinitis, ligament injuries, and post-operative recovery',
    ],
    reconstitutionInstructions: [
      'Reconstitute with Bacteriostatic Water (BAC)',
      'Example: Add 3mL BAC to obtain a 5mg/mL complete mixed solution',
      'Swirl gently (do not shake) until completely dissolved',
      'Refrigerate (2–8°C) and use within 30 days',
    ],
    dosingGuidelines: [
      'Typical dose: 250–500mcg daily (in divided or single doses)',
      'Frequency: 5–7 times per week depending on regimen',
      'Cycle duration: 2–6 weeks depending on severity and recovery goals',
    ],
    monitoring: [
      'Well tolerated; low risk of side effects in healthy individuals',
      'Best results when combined with activity training, physical therapy, or rehabilitation',
    ],
    note: 'Ideal for athletes, active individuals or those recovering from soft tissue injuries, tendinitis, ligament injuries, and post-surgery recovery.',
    faqs: [],
    variants: [
      { label: '5mg+5mg / 10mg (BPC-157 5mg + TB-500 5mg)', price: 120 },
      { label: '10mg+10mg / 20mg (BPC-157 10mg + TB-500 10mg)', price: 203 },
    ],
    imageUrl: '/images/products/TB500.png',
  },
  {
    id: 'mots-c',
    slug: 'mots-c',
    name: 'MOTS-C',
    tagline: 'Mitochondrial-Derived Polypeptide | Metabolic Regulation & Anti-Aging',
    category: 'Anti-Aging',
    overview:
      'MOTS-c is a mitochondrial-derived polypeptide (MDP) whose functions include regulating metabolism (enhancing insulin sensitivity and promoting glucose uptake), antioxidation, and anti-inflammation. Studies have shown that MOTS-c has potential therapeutic value for treating diseases related to aging and metabolic disorders.',
    description:
      'MOTS-c regulates metabolism, enhances insulin sensitivity, and offers antioxidant and anti-inflammatory effects through AMPK pathway activation.',
    keyBenefits: [
      'Enhances insulin sensitivity via AMPK/PGC-1α pathway',
      'Promotes cellular glucose uptake',
      'Activates Nrf2/Keap1 antioxidant pathway',
      'Inhibits NF-κB inflammatory pathway',
      'Penetrates the blood-brain barrier for neuroprotective effects',
    ],
    reconstitutionInstructions: [
      'Reconstitute with Bacteriostatic Water',
      'Gently swirl until dissolved',
      'Refrigerate after reconstitution',
    ],
    dosingGuidelines: [
      'Dose as directed by research protocol',
      'Administer via subcutaneous injection',
    ],
    monitoring: [
      'Monitor metabolic markers and glucose levels',
      'Track inflammatory biomarkers',
    ],
    note: 'MOTS-c has potential therapeutic value for type 2 diabetes, obesity, Alzheimer\'s disease, and autoimmune diseases.',
    faqs: [],
    variants: [
      { label: '10mg × 10 Vials', price: 70 },
      { label: '20mg × 10 Vials', price: 130 },
      { label: '30mg × 10 Vials', price: 190 },
      { label: '40mg × 10 Vials', price: 230 },
    ],
    imageUrl: '/images/products/MOTS-C.png',
  },
  {
    id: 'ipamorelin',
    slug: 'ipamorelin',
    name: 'Ipamorelin',
    tagline: 'Growth Hormone Secretagogue | Lean Muscle, Fat Loss & Anti-Aging',
    category: 'Growth Hormone',
    overview:
      'Ipamorelin is a peptide that has been shown to increase growth hormone levels in humans by stimulating the hypothalamus. It works by binding to IGF-1 receptors in the body and mimicking its effects, causing an increase in muscle mass and strength as well as fat loss due to increased metabolism.',
    description:
      'Growth hormone secretagogue that naturally increases HGH production for lean muscle, fat loss, and anti-aging benefits.',
    keyBenefits: [
      'Increases lean muscle mass through growth of new muscle cells',
      'Reduces body fat through enhanced metabolism and lipolysis',
      'Increases energy, strength and stamina',
      'Deeper, more restful sleep',
      'Improved skin tone, reduced wrinkles, thicker hair',
    ],
    reconstitutionInstructions: [
      'Reconstitute with Bacteriostatic Water',
      'Gently swirl until fully dissolved',
      'Refrigerate after reconstitution',
    ],
    dosingGuidelines: [
      'Typical dosing protocol per research guidelines',
      'Administer via subcutaneous injection',
      'Cycle: 3–6 months for full benefits',
    ],
    monitoring: [
      'Track IGF-1 levels and body composition',
      'Monitor sleep quality and energy levels',
    ],
    note: 'Ipamorelin is a well-tolerated and safe way to increase natural production of human growth hormone. It is a GH secretagogue that naturally increases HGH production rather than replacing it.',
    faqs: [],
    variants: [
      { label: '5mg × 10 Vials', price: 40 },
      { label: '10mg × 10 Vials', price: 75 },
    ],
    imageUrl: '/images/products/Ipamorelin.png',
  },
  {
    id: 'ghk-cu',
    slug: 'ghk-cu',
    name: 'GHK-CU',
    tagline: 'Glycyl-L-histidyl-L-lysine + Copper | Skin Health, Wound Healing & Anti-Aging',
    category: 'Beauty',
    overview:
      'GHK-Cu is a naturally occurring peptide (glycyl-L-histidyl-L-lysine) that binds to copper ions, making it a potent ingredient in cosmetic and regenerative products. It is used to promote skin and hair health by stimulating collagen and elastin, improving skin firmness, reducing wrinkles, enhancing wound healing, and providing antioxidant and anti-inflammatory benefits.',
    description:
      'Copper-binding peptide for skin remodeling, wound healing, and anti-aging through gene expression modulation.',
    keyBenefits: [
      'Promotes skin remodeling, reduces fine lines and wrinkles',
      'Improves skin firmness, elasticity, and density',
      'Accelerates wound healing across all phases',
      'Antioxidant and anti-inflammatory effects',
      'Stimulates collagen and elastin production',
    ],
    reconstitutionInstructions: [
      'Reconstitute with sterile water for topical or injection use',
      'Gently swirl until dissolved',
      'Store lyophilized at -20°C',
    ],
    dosingGuidelines: [
      'For topical use: apply as directed serum/cream formulation',
      'For injection: per research protocol guidance',
    ],
    monitoring: [
      'Monitor skin health and wound healing progress',
      'Track collagen and elastin markers',
    ],
    note: 'GHK-Cu modulates the expression of many human genes, potentially reversing some gene expression patterns to a healthier state.',
    faqs: [],
    variants: [
      { label: '50mg × 10 Vials', price: 34 },
      { label: '100mg × 10 Vials', price: 62 },
    ],
    imageUrl: '/images/products/chk-cu.jpg',
  },
  {
    id: 'aod-9604',
    slug: 'aod-9604',
    name: 'AOD-9604',
    tagline: 'Advanced Obesity Drug 9604 | Fat Reduction Without Blood Sugar Effects',
    category: 'Fat Loss',
    overview:
      'AOD-9604 (Advanced Obesity Drug 9604) is a modified fragment of human growth hormone (hGH), specifically amino acids 177–191. It was developed to mimic the fat-reducing effects of hGH without negative side effects on blood sugar or growth.',
    description:
      'Modified hGH fragment designed for targeted fat loss without impacting blood sugar levels or IGF-1.',
    keyBenefits: [
      'Mimics the fat-reducing effects of hGH without blood sugar effects',
      'Does not affect insulin-like growth factor-1 (IGF-1) levels',
      'Stimulates lipolysis and inhibits lipogenesis',
      'Non-methylated, well-tolerated compound',
      'Suitable for long-term use cycles',
    ],
    reconstitutionInstructions: [
      'Reconstitute with Bacteriostatic Water',
      'Gently swirl to dissolve',
      'Note: AOD-9604 may gel after reconstitution — add sterile acetic acid dropwise if needed',
    ],
    dosingGuidelines: [
      'Typical dosage: 300–500mcg daily',
      'Subcutaneous injection, preferably on empty stomach',
      'Cycle: 8–12 weeks use, then 4-week rest',
    ],
    monitoring: [
      'Track fat loss progress via body composition',
      'No significant impact on IGF-1 expected',
    ],
    note: 'AOD-9604 is considered one of the safest peptide options for weight management with no significant effect on blood glucose levels.',
    faqs: [
      {
        q: 'Why does AOD-9604 gel after reconstitution?',
        a: 'Gelation is usually caused by pH imbalance. Adding sterile acetic acid dropwise can help address this.',
      },
    ],
    variants: [
      { label: '5mg × 10 Vials', price: 100 },
      { label: '10mg × 10 Vials', price: 195 },
    ],
  },
  {
    id: 'lipo-c-fat-blaster',
    slug: 'lipo-c-fat-blaster',
    name: 'Lipo-C Fat Blaster',
    tagline: 'Lipotropic Injection Blend | Metabolism Boost & Fat Processing Support',
    category: 'Fat Loss',
    overview:
      'Lipo-C Fat Blaster benefits include boosting metabolism, supporting the liver in fat processing, and increasing energy levels, especially when combined with a healthy diet and exercise. These injections can help target stubborn fat areas and are considered a minimally invasive alternative to some weight loss approaches.',
    description:
      'Lipotropic injection blend supporting metabolism, liver function, and targeted fat reduction.',
    keyBenefits: [
      'Boosts metabolism and supports natural fat-burning processes',
      'Increases energy levels for workouts and daily activity',
      'Supports liver function and fat breakdown',
      'Targets stubborn fat in specific resistant areas',
      'Minimally invasive with no downtime',
    ],
    reconstitutionInstructions: [
      'Reconstitute as directed',
      'Use immediately or refrigerate',
    ],
    dosingGuidelines: [
      'Per research protocol guidelines',
      'Subcutaneous or intramuscular injection',
    ],
    monitoring: [
      'Track energy levels and body composition',
      'Monitor liver function markers',
    ],
    note: 'Lipo-C injections are often used in conjunction with B vitamins such as vitamin B12 to accelerate metabolism.',
    faqs: [],
    variants: [
      { label: 'Lipo-C Fat Blaster (526mg/ml × 10ml)', price: 188 },
      { label: 'Lipo-C Focus (425mg/ml × 10ml)', price: 183 },
      { label: 'Super Shred (350mg/ml × 10ml)', price: 180 },
    ],
    imageUrl: '/images/products/LC526.png',
  },
  {
    id: 'hgh',
    slug: 'hgh',
    name: 'HGH',
    tagline: 'Human Growth Hormone | Growth, Metabolism & Body Composition',
    category: 'Growth Hormone',
    overview:
      'Human growth hormone (HGH), also known as somatotropin, is a 191 amino acid single-chain polypeptide produced by somatotropic cells within the anterior pituitary gland. HGH helps kids grow and affects how the body uses food for energy by boosting IGF-1 (insulin-like growth factor-1).',
    description:
      '191 amino acid growth hormone for growth, metabolism optimization, and body composition improvement.',
    keyBenefits: [
      'Promotes growth during childhood and adolescence',
      'Maintains body composition and muscle mass in adults',
      'Boosts metabolism and fat utilization',
      'Supports bone density and tissue repair',
      'Enhances cognitive function and energy levels',
    ],
    reconstitutionInstructions: [
      'Reconstitute with Bacteriostatic Water',
      'Gently swirl until dissolved',
      'Refrigerate after reconstitution',
    ],
    dosingGuidelines: [
      'Dosing per physician or research protocol',
      'Subcutaneous injection',
    ],
    monitoring: [
      'Monitor IGF-1 levels regularly',
      'Track body composition and growth markers',
    ],
    note: 'HGH affects how the body uses food for energy and tells cells in bones and cartilage to multiply.',
    faqs: [],
    variants: [{ label: '75iu × 10 Vials', price: 65 }],
    imageUrl: '/images/products/HMG.png',
  },
  {
    id: 'cjc-1295-no-dac',
    slug: 'cjc-1295-no-dac',
    name: 'CJC-1295 no DAC',
    tagline: 'Growth Hormone-Releasing Hormone Analogue | Muscle Growth & Fat Reduction',
    category: 'Growth Hormone',
    overview:
      'CJC-1295 no DAC is a synthetic peptide, a growth hormone-releasing hormone (GHRH) analogue, whose main function is to promote the secretion of growth hormone. This can lead to various physiological effects, including promoting muscle growth, accelerating fat reduction, improving sleep quality, and promoting hydration.',
    description:
      'GHRH analogue that promotes growth hormone secretion for muscle growth, fat reduction, and improved sleep.',
    keyBenefits: [
      'Stimulates pituitary gland to secrete growth hormone',
      'Increases lean body mass and muscle mass',
      'Promotes lipolysis and fat reduction',
      'Improves sleep quality and promotes deeper sleep',
      'Supports hydration and tissue repair',
    ],
    reconstitutionInstructions: [
      'Reconstitute with Bacteriostatic Water',
      'Gently swirl until dissolved',
    ],
    dosingGuidelines: [
      'Per research protocol',
      'Subcutaneous injection',
    ],
    monitoring: [
      'Monitor IGF-1 levels',
      'Track body composition and sleep quality',
    ],
    note: 'CJC-1295 is listed on the Doping Control List and is strictly prohibited in sports competitions.',
    faqs: [],
    variants: [
      { label: '5mg × 10 Vials', price: 85 },
      { label: '10mg × 10 Vials', price: 160 },
    ],
    imageUrl: '/images/products/CJC-1295 without DAC.png',
  },
  {
    id: 'cagri-sema',
    slug: 'cagri-sema',
    name: 'Cagri + Sema',
    tagline: 'CagriSema | Dual Pathway Synergy for Maximum Appetite Control & Weight Loss',
    category: 'Fat Loss',
    overview:
      'The uniqueness of CagriSema lies in its ability to exert a synergistic effect through two different pathways. Semaglutide (GLP-1 agonist) increases satiety by delaying gastric emptying and inhibiting the appetite center. Cagrilintide (amylin analogue) enhances satiety signals by activating areas in the brain responsible for regulating appetite.',
    description:
      'Dual-pathway combination of Cagrilintide and Semaglutide for maximum appetite control and sustainable weight loss.',
    keyBenefits: [
      'Dual-pathway appetite and metabolic synergy',
      'Significantly reduces energy intake',
      'Helps counteract metabolic adaptation during weight loss',
      'Maintains higher energy expenditure during caloric deficit',
      'Once-weekly dosing for convenience',
    ],
    reconstitutionInstructions: [
      'Reconstitute with Bacteriostatic Water',
      'Gently swirl until dissolved',
    ],
    dosingGuidelines: [
      'Cagri-Sema combination administered once weekly',
      'Start with lower doses and titrate up',
    ],
    monitoring: [
      'Monitor for GI side effects (nausea, fullness)',
      'Track weight loss and metabolic markers',
    ],
    note: 'One of the most powerful combination therapies for obesity management with clinically proven outcomes.',
    faqs: [
      {
        q: 'How does it differ from Tirzepatide?',
        a: 'CagriSema combines GLP-1 (Semaglutide) with an amylin analogue (Cagrilintide), while Tirzepatide is a single molecule targeting both GLP-1 and GIP.',
      },
    ],
    variants: [{ label: '5mg+5mg / 10mg (Cagrilintide 5mg + Semaglutide 5mg)', price: 188 }],
    imageUrl: '/images/products/CS10.png',
  },
  {
    id: 'lipo-c-enhanced',
    slug: 'lipo-c-enhanced',
    name: 'Lipo-C Enhanced v3',
    tagline: 'Liposomal Vitamin C | Immune Support, Antioxidant & Collagen Production',
    category: 'Beauty',
    overview:
      'Lipo-C Enhanced is a liposomal vitamin C produced through liposomalization technology. It encapsulates vitamin C within tiny lipid vesicles composed of phospholipids, protecting it from digestive damage and facilitating more efficient transportation to cells.',
    description:
      'Enhanced vitamin C formulation with liposome technology for superior absorption, immune support, and antioxidant protection.',
    keyBenefits: [
      'Enhances immune function and supports immune cells',
      'Potent antioxidant that neutralizes free radicals',
      'Promotes collagen synthesis for skin and tissue health',
      'Improves skin health and wound healing',
      'Alleviates fatigue and supports overall vitality',
    ],
    reconstitutionInstructions: [
      'Mix with cold water, juice, or smoothies',
      'Follow instructions for optimal taste and absorption',
    ],
    dosingGuidelines: [
      'Follow recommended daily intake guidelines',
      'Use gradually to adapt to taste',
    ],
    monitoring: [
      'Monitor for gastrointestinal discomfort at high doses',
      'Consult doctor if diabetic (may interfere with blood sugar tests)',
    ],
    note: 'Liposome technology enhances absorption efficiency compared to standard vitamin C supplements.',
    faqs: [],
    variants: [{ label: '10ml × 10 Vials', price: 173 }],
    imageUrl: '/images/products/Lipo-C Enhanced version 3.png',
  },
  {
    id: 'tal-tau',
    slug: 'tal-tau',
    name: 'TAl/Tau Aggregation Inhibiting Peptide',
    tagline: 'Tau Protein Aggregation Inhibitor | Neurodegenerative Disease Research',
    category: 'Anti-Aging',
    overview:
      'The function of Tau protein aggregation inhibitory peptides is to inhibit the aggregation of Tau protein. This may play a crucial role in the treatment of diseases related to Tau protein, such as Alzheimer\'s disease. These peptides can cross the blood-brain barrier and effectively inhibit Tau aggregation in both in vitro and in vivo models.',
    description:
      'Tau aggregation inhibitor for neurodegenerative disease research, potentially effective against Alzheimer\'s disease.',
    keyBenefits: [
      'Inhibits Tau protein aggregation (key factor in nerve cell damage)',
      'Helps delay or improve progression of neurodegenerative diseases',
      'Can cross the blood-brain barrier (oral activity in some variants)',
      'Improves behavioral phenotypes in disease models',
      'Potential therapeutic for Alzheimer\'s disease research',
    ],
    reconstitutionInstructions: [
      'Reconstitute per research protocol',
      'Store as directed',
    ],
    dosingGuidelines: [
      'Per research protocol guidelines',
    ],
    monitoring: [
      'Track neurological and behavioral markers',
      'Monitor for cognitive improvements',
    ],
    note: 'RI-AG03 is an example of an oral-activity Tau aggregation inhibitor that can cross the blood-brain barrier.',
    faqs: [],
    variants: [
      { label: '5mg × 10 Vials', price: 120 },
      { label: '10mg × 10 Vials', price: 200 },
    ],
    imageUrl: '/images/products/TAL.png',
  },
  {
    id: 'mic-blend',
    slug: 'mic-blend',
    name: 'MIC blend',
    tagline: 'Methionine + Inositol + Choline | Lipotropic Injection for Fat Metabolism',
    category: 'Fat Loss',
    overview:
      'MIC blend peptides typically refer to a mixture of three substances: Methionine, Inositol, and Choline. They are often used in the form of lipotropic injections to assist in fat metabolism and weight management by helping the body break down and process fat more effectively.',
    description:
      'Lipotropic injection blend (Methionine, Inositol, Choline) for enhanced fat metabolism and liver health.',
    keyBenefits: [
      'Promotes fat breakdown and prevents excessive fat accumulation in the liver',
      'Supports liver health and detoxification',
      'Boosts energy levels and metabolism',
      'May improve mood and cognitive function',
      'Supports a healthy, active lifestyle',
    ],
    reconstitutionInstructions: [
      'Reconstitute as directed',
      'Use immediately or refrigerate',
    ],
    dosingGuidelines: [
      'Per research protocol guidelines',
      'Subcutaneous or intramuscular injection',
    ],
    monitoring: [
      'Track energy levels and body composition',
      'Monitor liver function markers',
    ],
    note: 'Often used in conjunction with B vitamins such as vitamin B12 to maximize metabolic benefits.',
    faqs: [],
    variants: [{ label: '10ml × 10 Vials', price: 120 }],
    imageUrl: '/images/products/MIC blend.png',
  },
];

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  imageUrl: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'peptide-laboratory-pioneers',
    title: 'Henghuang Trading Pioneers Next-Generation Breakthroughs in Biotechnology',
    date: 'August 22, 2025',
    excerpt:
      'In the rapidly evolving field of biotechnology, Henghuang Trading is emerging as a global leader in the research, development, and application of peptide-based innovations.',
    imageUrl: 'https://huataipeptide.com/wp-content/uploads/2025/08/news1-300x225.jpg',
    content: `In the rapidly evolving field of biotechnology, Henghuang Trading is emerging as a global leader in the research, development, and application of peptide-based innovations. With a strong focus on cutting-edge science, advanced manufacturing processes, and international collaboration, the laboratory is driving the future of pharmaceuticals, diagnostics, and sustainable materials.

Founded with the mission to bridge science and practical application, Henghuang Trading has built a reputation for delivering high-purity peptides tailored for medical research, therapeutic solutions, and industrial use. The company's state-of-the-art facilities are equipped with advanced synthesis and analysis platforms, ensuring precision, scalability, and compliance with international quality standards.

"Peptides represent the future of medicine," said Dr. Li Wen, Chief Scientific Officer of Henghuang Trading. "Their versatility allows us to explore treatments for cancer, metabolic diseases, and even the development of next-generation vaccines. Our team is committed to advancing discoveries from the laboratory to real-world applications."

Beyond healthcare, Henghuang Trading is expanding into sustainable materials and smart biomolecules, positioning itself at the intersection of life sciences and green innovation. Strategic collaborations with global universities, biotech startups, and pharmaceutical companies have strengthened its research pipeline and accelerated the path from concept to commercialization.

Industry experts note that the growing demand for peptide-based drugs is set to transform the pharmaceutical market, with projections estimating multi-billion-dollar growth by 2030. Henghuang Trading is poised to capture this momentum, reinforcing its role as a pioneer in biotechnology innovation.

As the world seeks faster, safer, and more effective biomedical solutions, Henghuang Trading continues to push boundaries, combining scientific expertise with visionary leadership. Its journey symbolizes not just technological advancement, but also the promise of a healthier and more sustainable future.`,
  },
  {
    slug: 'next-generation-peptide-innovations',
    title: 'Next-Generation Peptide Innovations Driving Biotechnology Breakthroughs',
    date: 'August 22, 2025',
    excerpt:
      'Discover how leading peptide laboratories are driving next-generation breakthroughs in biotechnology, transforming medicine, research, and innovative therapies.',
    imageUrl: 'https://huataipeptide.com/wp-content/uploads/2025/08/news2-300x225.jpg',
    content: `In the rapidly evolving world of biotechnology, peptide research has emerged as a critical driver of innovation. Leading peptide laboratories are pioneering next-generation breakthroughs that are reshaping medicine, diagnostics, and therapeutic solutions.

Peptides, short chains of amino acids, play a vital role in regulating biological processes. Recent advancements in peptide synthesis and engineering have opened doors to novel treatments for a wide range of conditions, from cancer and metabolic disorders to neurodegenerative diseases. By focusing on high-precision design, these laboratories are creating peptides with enhanced stability, bioavailability, and specificity, ensuring maximum therapeutic efficacy.

One of the key areas of focus is innovative peptide therapeutics. These next-generation peptides are designed to target specific molecular pathways, offering solutions that traditional small molecules or biologics cannot achieve. This precision enables researchers to develop highly effective treatments with minimal side effects.

Beyond therapeutics, peptide technology is also transforming biotechnology research. Peptides are increasingly used as molecular probes, biomarkers, and diagnostic tools, providing deeper insights into cellular mechanisms and disease pathways. This integration of peptide science into broader biotech applications is accelerating discovery and paving the way for personalized medicine.

As biotechnology continues to advance, the role of peptide laboratories remains crucial. Their commitment to cutting-edge research and innovation ensures that the next generation of peptide-based solutions will continue to drive breakthroughs, improving human health and transforming the field of biotechnology.`,
  },
  {
    slug: 'freeze-dried-powder-production',
    title: 'Freeze-Dried Powder Production Emerges as a Key Driver in Modern Biotechnology',
    date: 'August 22, 2025',
    excerpt:
      'As global demand for stable, efficient, and high-quality biopharmaceutical products continues to surge, freeze-dried powder production is becoming a cornerstone technology.',
    imageUrl: 'https://huataipeptide.com/wp-content/uploads/2025/08/news3-300x225.jpg',
    content: `August 22, 2025 – As global demand for stable, efficient, and high-quality biopharmaceutical products continues to surge, freeze-dried powder production is becoming a cornerstone technology in the biotechnology and pharmaceutical industries. Experts highlight that this process—also known as lyophilization—offers unmatched advantages in drug stability, storage, and transportation.

Freeze-dried powders are widely applied in vaccines, peptide drugs, antibiotics, and cosmetic formulations. Unlike liquid preparations, freeze-dried products retain their bioactivity for longer periods without refrigeration, making them especially valuable for global health initiatives and emerging markets where cold-chain logistics remain a challenge.

"Freeze-drying is not just a preservation method—it's a platform for innovation," said Dr. Zhang Yu, Head of Production at a leading biotech manufacturer. "Our advanced freeze-dried powder production lines allow us to deliver safer, more stable, and globally accessible medicines."

Recent industry reports forecast strong growth in the freeze-dried pharmaceuticals sector, with market size expected to exceed tens of billions of dollars by 2030. The technology is also expanding into new fields such as nutraceuticals, functional foods, and regenerative medicine, further broadening its industrial relevance.

In response to this trend, several biotech firms are investing heavily in state-of-the-art production facilities. Automated systems, quality monitoring technologies, and sustainable energy practices are being integrated to enhance production efficiency while meeting international regulatory standards.

Analysts note that the growing emphasis on long-term drug stability, combined with global healthcare demands, will keep freeze-dried powder production at the forefront of pharmaceutical innovation. With continuous technological advancements, the field is poised to play a decisive role in shaping the next decade of medicine.`,
  },
  {
    slug: 'revolutionizing-biotechnology',
    title: 'Revolutionizing Biotechnology: Next-Generation Peptide Innovations',
    date: 'August 22, 2025',
    excerpt:
      'In the realm of modern biotechnology, peptides have emerged as a cornerstone of innovation. Leading peptide laboratories are pioneering next-generation solutions.',
    imageUrl: 'https://huataipeptide.com/wp-content/uploads/2025/08/news4-300x225.jpg',
    content: `In the realm of modern biotechnology, peptides have emerged as a cornerstone of innovation. Leading peptide laboratories are pioneering next-generation solutions that are transforming healthcare, drug development, and scientific research.

Understanding Peptides and Their Role in Biotechnology
Peptides are short chains of amino acids that play a critical role in regulating biological functions. Their unique properties allow them to interact with specific cellular targets, making them ideal for therapeutic applications. Recent advances in peptide synthesis and design have enabled researchers to create molecules with improved stability, specificity, and bioavailability, pushing the boundaries of modern medicine.

Next-Generation Peptide Therapeutics
One of the most exciting areas of peptide research lies in therapeutics. Innovative peptides are now being engineered to precisely target disease pathways, offering potential treatments for cancer, metabolic disorders, autoimmune diseases, and neurodegenerative conditions. These next-generation peptides provide high efficacy with fewer side effects compared to conventional therapies, marking a significant leap forward in personalized medicine.

Peptides in Diagnostics and Research
Beyond therapeutics, peptides are playing a vital role in diagnostics and biomedical research. They serve as biomarkers, molecular probes, and research tools that allow scientists to study complex biological systems in unprecedented detail. By integrating peptide technology into biotechnology research, laboratories are accelerating discoveries and driving more effective solutions across medicine and healthcare.

The Future of Peptide Innovation
As the biotechnology sector continues to evolve, peptide laboratories remain at the forefront of innovation. Their work in developing next-generation peptides not only contributes to groundbreaking treatments but also supports the advancement of precision medicine and sustainable biotech solutions. The synergy between peptide research and biotechnology promises a future where medical and scientific breakthroughs are faster, safer, and more effective than ever before.`,
  },
];

export const contactInfo = {
  email: '123456789li828@gmail.com',
  whatsapp: '+8618296549992',
  phone: '+8618296549992',
};

export const salesExperts = [
  { name: 'Mia Zhang',   role: 'International Sales',    imageUrl: '/images/sales/601781000764_.pic.jpg',  whatsapp: '+852 4487 2756',  email: '123456789li828@gmail.com'       },
  { name: 'Anna Fan',    role: 'Customer Support',        imageUrl: '/images/sales/721781000854_.pic.jpg',  whatsapp: '+852 9500 9381',  email: 'huangbobin11@outlook.com'       },
  { name: 'Sini Wang',   role: 'Technical Sales',         imageUrl: '/images/sales/661781000814_.pic.jpg',  whatsapp: '+852 6077 2300',  email: 'shsvvi@outlook.com'             },
  { name: 'Mary Chen',   role: 'Regional Sales',          imageUrl: '/images/sales/691781000835_.pic.jpg',  whatsapp: '+852 7035 2507',  email: 'dhhzbj@outlook.com'             },
  { name: 'Linda Liu',   role: 'Account Manager',         imageUrl: '/images/sales/681781000827_.pic.jpg',  whatsapp: '+852 6489 0594',  email: 'dhhdjzhu@outlook.com'           },
  { name: 'Ruby Wu',     role: 'Business Development',    imageUrl: '/images/sales/711781000847_.pic.jpg',  whatsapp: '+852 4428 8242',  email: 'dhhdai@outlook.com'             },
  { name: 'Joy Yang',    role: 'Client Relations',       imageUrl: '/images/sales/581781000758_.pic.jpg',  whatsapp: '+852 7058 1272',  email: 'huangbobo33@outlook.com'        },
  { name: 'Emily Zhou',  role: 'Sales Coordinator',       imageUrl: '/images/sales/591781000761_.pic.jpg',  whatsapp: '+852 7053 0460',  email: 'aliviawolfftln@outlook.com'     },
  { name: 'David Lin',   role: 'Export Sales',            imageUrl: '/images/sales/621781000775_.pic.jpg',  whatsapp: '+852 9354 1384',  email: 'ggaazll@outlook.com'            },
  { name: 'Sophie Tan',  role: 'Sales Representative',   imageUrl: '/images/sales/671781000821_.pic.jpg',  whatsapp: '+852 4754 2764',  email: 'shsgsgsjjs@outlook.com'         },
];
