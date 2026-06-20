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

// helper for variant image paths
const v = (file: string) => `/images/products/${file}`;

// All prices sourced from 素材/价格表.xlsx
export const products: Product[] = [
  // ---------- Fat Loss ----------
  {
    id: 'retatrutide',
    slug: 'retatrutide',
    name: 'Retatrutide',
    tagline: 'Triple Incretin Receptor Agonist | GLP-1 + GIP + Glucagon for Advanced Fat Loss',
    category: 'Fat Loss',
    overview:
      'Retatrutide is a next-generation triple incretin agonist, targeting GLP-1 (glucagon-like peptide-1), GIP (glucose-dependent insulinotropic polypeptide), and Glucagon receptors simultaneously. This unique triple-action mechanism offers a powerful blend of appetite suppression, fat oxidation, and energy regulation.',
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
    note: 'Storage: 2-8°C. Retatrutide is designed for individuals seeking an aggressive yet clinically supported fat-loss solution.',
    faqs: [
      { q: 'What Carrier Oil/solvents are used for your injectables?', a: 'USP Grade MCT oil is the carrier oil. The only solvents used are Benzyl Alcohol & Benzyl Benzoate (BA & BB).' },
      { q: 'Do your products come with bacteriostatic water?', a: 'No, you must purchase it separately.' },
      { q: 'What payment methods do you accept?', a: 'Mainly Bitcoin (BTC) and USDT (ERC-20). Bank Transfer is also available for large orders — please confirm with our sales team.' },
      { q: 'How long does shipping take?', a: 'Depending on your location, most customers receive their order in 2–10 business days.' },
    ],
    variants: [
      { label: '5mg × 10 Vials', price: 45, imageUrl: v('RT5.png') },
      { label: '10mg × 10 Vials', price: 60, imageUrl: v('RT10.png') },
      { label: '15mg × 10 Vials', price: 90, imageUrl: v('RT15.png') },
      { label: '20mg × 10 Vials', price: 110, imageUrl: v('RT20.png') },
      { label: '30mg × 10 Vials', price: 160, imageUrl: v('RT30.png') },
      { label: '40mg × 10 Vials', price: 200, imageUrl: v('RT40.png') },
      { label: '60mg × 10 Vials', price: 260, imageUrl: v('RT60.png') },
    ],
    imageUrl: v('RT15.png'),
  },
  {
    id: 'tirzepatide',
    slug: 'tirzepatide',
    name: 'Tirzepatide',
    tagline: 'Dual GLP-1/GIP Receptor Agonist | Advanced Injectable for Weight Management',
    category: 'Fat Loss',
    overview:
      'Tirzepatide is a cutting-edge dual incretin agonist that mimics both GLP-1 (glucagon-like peptide-1) and GIP (glucose-dependent insulinotropic polypeptide) — two key hormones involved in regulating blood sugar, satiety, and energy balance.',
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
    note: 'Storage: 2-8°C. Tirzepatide is a powerful tool for transforming body composition.',
    faqs: [
      { q: 'What forms does this product come in?', a: 'Supplied as a lyophilized powder requiring reconstitution prior to use.' },
      { q: 'How is this different from Retatrutide?', a: 'Tirzepatide targets two receptors (GLP-1 + GIP) while Retatrutide targets three (GLP-1 + GIP + Glucagon).' },
    ],
    variants: [
      { label: '5mg × 10 Vials', price: 35, imageUrl: v('TR5.png') },
      { label: '10mg × 10 Vials', price: 50, imageUrl: v('TR10.png') },
      { label: '15mg × 10 Vials', price: 60, imageUrl: v('TR15.png') },
      { label: '20mg × 10 Vials', price: 75, imageUrl: v('TR20.png') },
      { label: '30mg × 10 Vials', price: 95, imageUrl: v('TR30.png') },
      { label: '40mg × 10 Vials', price: 130, imageUrl: v('TR40.png') },
      { label: '50mg × 10 Vials', price: 160, imageUrl: v('TR50.png') },
      { label: '60mg × 10 Vials', price: 175, imageUrl: v('TR60.png') },
      { label: '70mg × 10 Vials', price: 220, imageUrl: v('TR70.png') },
      { label: '80mg × 10 Vials', price: 235, imageUrl: v('TR80.png') },
      { label: '90mg × 10 Vials', price: 270, imageUrl: v('TR90.png') },
      { label: '100mg × 10 Vials', price: 280, imageUrl: v('TR100.png') },
      { label: '110mg × 10 Vials', price: 310, imageUrl: v('TR110.png') },
      { label: '120mg × 10 Vials', price: 315, imageUrl: v('TR120.png') },
    ],
    imageUrl: v('TR15.png'),
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
    note: 'Storage: 2-8°C. Semaglutide is one of the most studied GLP-1 agonists for weight management.',
    faqs: [],
    variants: [
      { label: '5mg × 10 Vials', price: 35, imageUrl: v('SM5.png') },
      { label: '10mg × 10 Vials', price: 50, imageUrl: v('SM10.png') },
      { label: '15mg × 10 Vials', price: 60, imageUrl: v('SM15.png') },
      { label: '20mg × 10 Vials', price: 70, imageUrl: v('SM20.png') },
      { label: '30mg × 10 Vials', price: 80, imageUrl: v('SM30.png') },
    ],
    imageUrl: v('SM15.png'),
  },
  {
    id: 'cagrilintide',
    slug: 'cagrilintide',
    name: 'Cagrilintide',
    tagline: 'Amylin Analogue | Long-acting Satiety Regulation for Weight Management',
    category: 'Fat Loss',
    overview:
      'Cagrilintide is a long-acting amylin analogue that promotes weight loss by enhancing satiety signals, slowing gastric emptying, and reducing food intake. It works synergistically with GLP-1 agonists such as Semaglutide.',
    description:
      'Long-acting amylin analogue for enhanced satiety, reduced food intake, and sustainable weight management.',
    keyBenefits: [
      'Enhances satiety and reduces food intake',
      'Slows gastric emptying for prolonged fullness',
      'Synergistic effect when combined with Semaglutide',
      'Once-weekly subcutaneous dosing',
      'Supports sustainable, non-restrictive weight loss',
    ],
    reconstitutionInstructions: [
      'Reconstitute with Bacteriostatic Water (BAC)',
      'Gently swirl until fully dissolved (do not shake)',
      'Refrigerate after reconstitution (2–8°C)',
    ],
    dosingGuidelines: [
      'Start at low dose and titrate gradually per research protocol',
      'Administer subcutaneously once weekly',
      'Combine with GLP-1 agonist (e.g., Semaglutide) for CagriSema synergy',
    ],
    monitoring: [
      'Monitor GI tolerance and nausea',
      'Track weight loss and metabolic markers',
    ],
    note: 'Often used in combination with Semaglutide (CagriSema) for powerful dual-pathway appetite suppression.',
    faqs: [
      { q: 'What is CagriSema?', a: 'CagriSema is a combination therapy of Cagrilintide (amylin analogue) and Semaglutide (GLP-1 agonist) for maximum appetite control.' },
    ],
    variants: [
      { label: '5mg × 10 Vials', price: 95, imageUrl: v('CGL5.png') },
      { label: '10mg × 10 Vials', price: 170, imageUrl: v('CGL10.png') },
    ],
    imageUrl: v('CGL5.png'),
  },
  {
    id: 'mazdutide',
    slug: 'mazdutide',
    name: 'Mazdutide',
    tagline: 'GLP-1/Glucagon Dual Agonist | Innovative Peptide for Obesity & Metabolic Disease',
    category: 'Fat Loss',
    overview:
      'Mazdutide (MAZ5/MAZ10) is a novel GLP-1/glucagon receptor dual agonist that promotes weight loss through appetite suppression and increased energy expenditure. It represents the next generation of dual-pathway obesity therapeutics.',
    description:
      'Innovative GLP-1/glucagon dual agonist for weight loss, glycemic control, and metabolic disease treatment.',
    keyBenefits: [
      'Dual mechanism: appetite suppression + increased energy expenditure',
      'Significant weight loss with improved body composition',
      'Improves glycemic control and insulin sensitivity',
      'May improve lipid profiles and liver fat',
      'Once-weekly subcutaneous dosing',
    ],
    reconstitutionInstructions: [
      'Reconstitute with Bacteriostatic Water (BAC)',
      'Gently swirl until fully dissolved',
      'Refrigerate after reconstitution (2–8°C)',
    ],
    dosingGuidelines: [
      'Start at low dose, titrate upward per protocol',
      'Once-weekly subcutaneous injection',
      'Therapeutic range per research protocol',
    ],
    monitoring: [
      'Monitor blood glucose and GI tolerance',
      'Track weight loss and body composition',
    ],
    note: 'Mazdutide is part of the new wave of dual incretin/glucagon agonists for metabolic disease research.',
    faqs: [],
    variants: [
      { label: '5mg × 10 Vials', price: 120, imageUrl: v('Ma5.png') },
      { label: '10mg × 10 Vials', price: 210, imageUrl: v('Ma10.png') },
    ],
    imageUrl: v('Ma5.png'),
  },
  {
    id: 'survodutide',
    slug: 'survodutide',
    name: 'Survodutide',
    tagline: 'GLP-1/Glucagon Dual Agonist | MASH & Obesity Research Peptide',
    category: 'Fat Loss',
    overview:
      'Survodutide (SUR5/SUR10) is a GLP-1/glucagon receptor dual agonist being investigated for obesity and metabolic dysfunction-associated steatohepatitis (MASH). It combines appetite suppression with increased energy expenditure.',
    description:
      'Dual GLP-1/glucagon agonist researched for obesity, MASH, and metabolic liver disease.',
    keyBenefits: [
      'Dual incretin/glucagon mechanism for fat loss',
      'Targets liver fat and metabolic liver disease',
      'Significant weight loss in clinical studies',
      'Improves insulin sensitivity',
      'Once-weekly dosing',
    ],
    reconstitutionInstructions: [
      'Reconstitute with Bacteriostatic Water (BAC)',
      'Gently swirl until fully dissolved',
      'Refrigerate after reconstitution (2–8°C)',
    ],
    dosingGuidelines: [
      'Once-weekly subcutaneous injection',
      'Titrate upward per research protocol',
    ],
    monitoring: [
      'Monitor liver enzymes and lipid markers',
      'Track weight loss and GI tolerance',
    ],
    note: 'Investigated for both obesity and MASH (metabolic dysfunction-associated steatohepatitis).',
    faqs: [],
    variants: [
      { label: '5mg × 10 Vials', price: 170, imageUrl: v('SUR5.png') },
      { label: '10mg × 10 Vials', price: 280, imageUrl: v('SUR10.png') },
    ],
    imageUrl: v('SUR5.png'),
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
    variants: [
      { label: '5mg+5mg / 10mg (Cagrilintide 5mg + Semaglutide 5mg)', price: 185, imageUrl: v('CS10.png') },
    ],
    imageUrl: v('CS10.png'),
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
    note: 'AOD-9604 is considered one of the safest peptide options for weight management.',
    faqs: [
      { q: 'Why does AOD-9604 gel after reconstitution?', a: 'Gelation is usually caused by pH imbalance. Adding sterile acetic acid dropwise can help address this.' },
    ],
    variants: [
      { label: '2mg × 10 Vials', price: 60, imageUrl: v('2AD.png') },
      { label: '5mg × 10 Vials', price: 100, imageUrl: v('5AD.png') },
      { label: '10mg × 10 Vials', price: 190, imageUrl: v('10AD.png') },
    ],
    imageUrl: v('5AD.png'),
  },
  {
    id: 'tesamorelin',
    slug: 'tesamorelin',
    name: 'Tesamorelin',
    tagline: 'Growth Hormone-Releasing Hormone Analogue | Visceral Fat Reduction',
    category: 'Fat Loss',
    overview:
      'Tesamorelin is a growth hormone-releasing hormone (GHRH) analogue whose primary function is to specifically reduce fat accumulation, particularly visceral fat.',
    description:
      'Growth hormone-releasing hormone analogue specifically designed to reduce visceral fat accumulation.',
    keyBenefits: [
      'Specifically reduces visceral fat accumulation',
      'Targeted for individuals with lipohypertrophy',
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
    ],
    monitoring: [
      'Monitor body composition and visceral fat levels',
      'Track growth hormone and IGF-1 levels',
    ],
    note: 'Tesamorelin is specifically designed for visceral fat reduction.',
    faqs: [],
    variants: [
      { label: '5mg × 10 Vials', price: 105, imageUrl: v('TSM5.png') },
      { label: '10mg × 10 Vials', price: 190, imageUrl: v('TSM10.png') },
      { label: '20mg × 10 Vials', price: 350, imageUrl: v('TSM20.png') },
    ],
    imageUrl: v('TSM10.png'),
  },
  {
    id: 'adipotide',
    slug: 'adipotide',
    name: 'Adipotide (FTPP)',
    tagline: 'Targeted Peptide for White Adipose Tissue Reduction',
    category: 'Fat Loss',
    overview:
      'Adipotide (FTPP) is a pro-apoptotic peptide that targets the blood vessels supplying white adipose tissue, leading to targeted fat reduction.',
    description:
      'Pro-apoptotic research peptide targeting white adipose tissue vasculature for targeted fat reduction.',
    keyBenefits: [
      'Targeted action on white adipose tissue blood supply',
      'Promotes fat cell apoptosis',
      'Reduces visceral and subcutaneous fat',
      'Research-grade peptide for advanced studies',
    ],
    reconstitutionInstructions: [
      'Reconstitute with Bacteriostatic Water',
      'Gently swirl to dissolve',
      'Refrigerate after reconstitution',
    ],
    dosingGuidelines: [
      'Per research protocol',
      'Subcutaneous injection',
    ],
    monitoring: [
      'Monitor body composition changes',
      'Track hydration and kidney function markers',
    ],
    note: 'Adipotide is intended for advanced research applications only.',
    faqs: [],
    variants: [
      { label: '2mg × 10 Vials', price: 90, imageUrl: v('AP2.png') },
      { label: '5mg × 10 Vials', price: 165, imageUrl: v('AP5.png') },
    ],
    imageUrl: v('AP2.png'),
  },

  // ---------- Growth Hormone ----------
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
    note: 'Ipamorelin is a well-tolerated and safe way to increase natural production of human growth hormone.',
    faqs: [],
    variants: [
      { label: '5mg × 10 Vials', price: 45, imageUrl: v('IPA5.png') },
      { label: '10mg × 10 Vials', price: 65, imageUrl: v('IPA10.png') },
    ],
    imageUrl: v('IPA5.png'),
  },
  {
    id: 'cjc-1295-with-dac',
    slug: 'cjc-1295-with-dac',
    name: 'CJC-1295 with DAC',
    tagline: 'Long-acting GHRH Analogue | Sustained Growth Hormone Release',
    category: 'Growth Hormone',
    overview:
      'CJC-1295 with DAC (Drug Affinity Complex) is a long-acting GHRH analogue that extends the half-life of growth hormone-releasing hormone, providing sustained GH elevation over several days.',
    description:
      'Long-acting GHRH analogue (with DAC) for sustained growth hormone release, lean mass gain, and fat loss.',
    keyBenefits: [
      'Extended half-life (up to 8 days) due to DAC',
      'Sustained GH release for steady IGF-1 elevation',
      'Promotes lean muscle and fat reduction',
      'Improved sleep and recovery',
      'Less frequent dosing required',
    ],
    reconstitutionInstructions: [
      'Reconstitute with Bacteriostatic Water',
      'Gently swirl until dissolved',
    ],
    dosingGuidelines: [
      '1–2 times per week subcutaneous injection',
      'Per research protocol',
    ],
    monitoring: [
      'Monitor IGF-1 levels',
      'Track body composition changes',
    ],
    note: 'The DAC complex provides prolonged GH release compared to the no-DAC version.',
    faqs: [],
    variants: [
      { label: '2mg × 10 Vials', price: 95, imageUrl: v('CD2.png') },
      { label: '5mg × 10 Vials', price: 175, imageUrl: v('CD5.png') },
    ],
    imageUrl: v('CD5.png'),
  },
  {
    id: 'cjc-1295-no-dac',
    slug: 'cjc-1295-no-dac',
    name: 'CJC-1295 no DAC',
    tagline: 'Short-acting GHRH Analogue | Pulsatile Growth Hormone Release',
    category: 'Growth Hormone',
    overview:
      'CJC-1295 no DAC is a synthetic GHRH analogue that promotes the secretion of growth hormone in a more pulsatile manner, similar to natural GH release patterns.',
    description:
      'GHRH analogue (no DAC) that promotes growth hormone secretion for muscle growth, fat reduction, and improved sleep.',
    keyBenefits: [
      'Stimulates pituitary gland to secrete growth hormone',
      'Increases lean body mass and muscle mass',
      'Promotes lipolysis and fat reduction',
      'Improves sleep quality and deeper sleep',
      'Supports hydration and tissue repair',
    ],
    reconstitutionInstructions: [
      'Reconstitute with Bacteriostatic Water',
      'Gently swirl until dissolved',
    ],
    dosingGuidelines: [
      'Per research protocol',
      'Subcutaneous injection (often daily or 5x/week)',
    ],
    monitoring: [
      'Monitor IGF-1 levels',
      'Track body composition and sleep quality',
    ],
    note: 'Often stacked with Ipamorelin/GHRP for synergistic GH release.',
    faqs: [],
    variants: [
      { label: '2mg × 10 Vials', price: 45, imageUrl: v('CND2.png') },
      { label: '5mg × 10 Vials', price: 80, imageUrl: v('CND5.png') },
      { label: '10mg × 10 Vials', price: 145, imageUrl: v('CND10.png') },
    ],
    imageUrl: v('CND5.png'),
  },
  {
    id: 'cjc-no-dac',
    slug: 'cjc-no-dac',
    name: 'CJC no Dac',
    tagline: 'CJC-1295 no DAC Blend | Multi-dose GHRH Combination',
    category: 'Growth Hormone',
    overview:
      'The CJC no DAC blend combines GHRH analogue at different concentrations in a single vial for flexible dosing and enhanced GH pulsatility research.',
    description:
      'GHRH analogue blend (5mg+5mg/10mg and 10mg+10mg/20mg) for flexible dosing protocols.',
    keyBenefits: [
      'Combined dosing flexibility in a single vial',
      'Promotes natural pulsatile GH release',
      'Supports muscle gain and fat loss',
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
    ],
    note: 'Blended format for convenient multi-dose research applications.',
    faqs: [],
    variants: [
      { label: '5mg+5mg / 10mg', price: 135, imageUrl: v('CP10.png') },
      { label: '10mg+10mg / 20mg', price: 245, imageUrl: v('CP20.png') },
    ],
    imageUrl: v('CP10.png'),
  },
  {
    id: 'hexarelin',
    slug: 'hexarelin',
    name: 'Hexarelin',
    tagline: 'Potent GHRP | Strong GH Pulse & Cardioprotective Research',
    category: 'Growth Hormone',
    overview:
      'Hexarelin (HX) is one of the most potent growth hormone-releasing peptides (GHRPs), producing strong GH pulses with additional cardioprotective research applications.',
    description:
      'Potent GHRP hexapeptide for strong GH release and cardiovascular research.',
    keyBenefits: [
      'Strong GH pulse stimulation',
      'Cardioprotective research applications',
      'Promotes lean mass and fat loss',
      'Improved recovery and sleep',
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
      'Monitor IGF-1 and prolactin levels',
      'Track body composition',
    ],
    note: 'Hexarelin is the most potent GHRP but may elevate prolactin with prolonged use.',
    faqs: [],
    variants: [
      { label: '2mg × 10 Vials', price: 60, imageUrl: v('HX2.png') },
      { label: '5mg × 10 Vials', price: 95, imageUrl: v('HX5.png') },
      { label: '10mg × 10 Vials', price: 160, imageUrl: v('HX10.png') },
    ],
    imageUrl: v('HX5.png'),
  },
  {
    id: 'ghrp-2',
    slug: 'ghrp-2',
    name: 'GHRP-2',
    tagline: 'Growth Hormone Releasing Peptide | Strong GH Pulse',
    category: 'Growth Hormone',
    overview:
      'GHRP-2 is a synthetic ghrelin receptor agonist that stimulates growth hormone release. It has a strong, dose-dependent GH pulse without significantly affecting cortisol.',
    description:
      'Synthetic ghrelin mimetic for strong, dose-dependent GH release.',
    keyBenefits: [
      'Strong, dose-dependent GH release',
      'Promotes appetite (useful for bulking)',
      'Supports lean mass gain',
      'Improved recovery and sleep',
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
    ],
    note: 'May increase appetite, which can be beneficial for bulking protocols.',
    faqs: [],
    variants: [
      { label: '5mg × 10 Vials', price: 30, imageUrl: v('G25.png') },
      { label: '10mg × 10 Vials', price: 55, imageUrl: v('G210.png') },
    ],
    imageUrl: v('G25.png'),
  },
  {
    id: 'ghrp-6',
    slug: 'ghrp-6',
    name: 'GHRP-6',
    tagline: 'Growth Hormone Releasing Peptide | GH Pulse & Appetite Boost',
    category: 'Growth Hormone',
    overview:
      'GHRP-6 is a ghrelin receptor agonist that stimulates growth hormone release and significantly increases appetite, making it useful for bulking and recovery phases.',
    description:
      'Ghrelin mimetic peptide for strong GH pulse and appetite stimulation.',
    keyBenefits: [
      'Strong GH pulse stimulation',
      'Significant appetite increase (bulking-friendly)',
      'Supports lean mass gain',
      'Improved recovery and sleep',
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
    ],
    note: 'Strongest appetite-stimulating GHRP, ideal for bulking protocols.',
    faqs: [],
    variants: [
      { label: '5mg × 10 Vials', price: 30, imageUrl: v('G65.png') },
      { label: '10mg × 10 Vials', price: 55, imageUrl: v('G610.png') },
    ],
    imageUrl: v('G65.png'),
  },
  {
    id: 'sermorelin',
    slug: 'sermorelin',
    name: 'Sermorelin Acetate',
    tagline: 'GHRH Analogue (1-29) | Pulsatile Growth Hormone Release',
    category: 'Growth Hormone',
    overview:
      'Sermorelin Acetate is a GHRH analogue (the first 29 amino acids of GHRH) that stimulates the pituitary gland to release growth hormone in a natural pulsatile manner.',
    description:
      'GHRH (1-29) analogue for natural pulsatile GH release, anti-aging, and recovery.',
    keyBenefits: [
      'Stimulates natural pulsatile GH release',
      'Anti-aging and longevity research',
      'Improves sleep quality',
      'Supports lean mass and fat loss',
      'Generally well-tolerated',
    ],
    reconstitutionInstructions: [
      'Reconstitute with Bacteriostatic Water',
      'Gently swirl until dissolved',
    ],
    dosingGuidelines: [
      'Typically dosed at bedtime per research protocol',
      'Subcutaneous injection',
    ],
    monitoring: [
      'Monitor IGF-1 levels',
      'Track sleep and recovery',
    ],
    note: 'Sermorelin is widely used in anti-aging protocols due to its natural GH release pattern.',
    faqs: [],
    variants: [
      { label: '5mg × 10 Vials', price: 80, imageUrl: v('SMO-5.png') },
      { label: '10mg × 10 Vials', price: 145, imageUrl: v('SMO-10.png') },
    ],
    imageUrl: v('SMO-5.png'),
  },
  {
    id: 'igf-1lr3',
    slug: 'igf-1lr3',
    name: 'IGF-1 LR3',
    tagline: 'Long Arginine IGF-1 | Potent Anabolic & Muscle Growth Research',
    category: 'Growth Hormone',
    overview:
      'IGF-1 LR3 (Long Arginine IGF-1) is a modified form of IGF-1 with an extended half-life, promoting potent anabolic effects including muscle cell hyperplasia and enhanced recovery.',
    description:
      'Modified IGF-1 with extended half-life for anabolic research and muscle growth.',
    keyBenefits: [
      'Promotes muscle cell hyperplasia (new cell growth)',
      'Enhanced protein synthesis',
      'Supports recovery and tissue repair',
      'Improved insulin sensitivity',
      'Synergistic with GH peptides',
    ],
    reconstitutionInstructions: [
      'Reconstitute with Bacteriostatic Water',
      'Gently swirl until dissolved',
    ],
    dosingGuidelines: [
      'Per research protocol',
      'Subcutaneous or intramuscular injection',
    ],
    monitoring: [
      'Monitor blood glucose',
      'Track body composition and recovery',
    ],
    note: 'IGF-1 LR3 has significantly longer half-life than regular IGF-1 due to the LR3 modification.',
    faqs: [],
    variants: [
      { label: '0.1mg × 10 Vials', price: 50, imageUrl: v('IGF-01.png') },
      { label: '1mg × 10 Vials', price: 210, imageUrl: v('IGF-1.png') },
    ],
    imageUrl: v('IGF-1.png'),
  },
  {
    id: 'igf-des',
    slug: 'igf-des',
    name: 'IGF DES',
    tagline: 'Truncated IGF-1 | Potent Local Anabolic Research Peptide',
    category: 'Growth Hormone',
    overview:
      'IGF DES (1-3) is a truncated form of IGF-1 with greater potency at local tissue sites, especially useful for targeted muscle growth research.',
    description:
      'Truncated IGF-1 with enhanced local anabolic activity for targeted research.',
    keyBenefits: [
      'Enhanced local anabolic activity',
      'Promotes targeted muscle growth',
      'Faster acting than full IGF-1',
      'Useful for site-specific research',
    ],
    reconstitutionInstructions: [
      'Reconstitute with Bacteriostatic Water',
      'Gently swirl until dissolved',
    ],
    dosingGuidelines: [
      'Per research protocol',
      'Subcutaneous injection near target site',
    ],
    monitoring: [
      'Monitor blood glucose',
    ],
    note: 'IGF DES (1-3) is more potent locally than systemically.',
    faqs: [],
    variants: [
      { label: '2mg × 10 Vials', price: 65, imageUrl: v('IGD.png') },
    ],
    imageUrl: v('IGD.png'),
  },
  {
    id: 'ace-031',
    slug: 'ace-031',
    name: 'ACE-031',
    tagline: 'ActRIIB Receptor Decoy | Myostatin Inhibition Research',
    category: 'Growth Hormone',
    overview:
      'ACE-031 is a soluble form of the activin receptor type IIB (ActRIIB) that acts as a myostatin inhibitor, promoting muscle growth by blocking the signals that limit muscle development.',
    description:
      'Myostatin-inhibiting ActRIIB decoy for muscle growth research.',
    keyBenefits: [
      'Inhibits myostatin (muscle growth limiter)',
      'Promotes rapid lean muscle gains',
      'Improves muscle strength research outcomes',
      'Research-grade fusion protein',
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
      'Monitor body composition',
      'Track muscle mass gains',
    ],
    note: 'ACE-031 was developed for muscle wasting diseases and is now popular in research for muscle growth.',
    faqs: [],
    variants: [
      { label: '1mg × 10 Vials', price: 60, imageUrl: v('AE1.png') },
      { label: '5mg × 10 Vials', price: 180, imageUrl: v('AE5.png') },
    ],
    imageUrl: v('AE5.png'),
  },

  // ---------- Tissue Repair ----------
  {
    id: 'bpc157',
    slug: 'bpc157',
    name: 'BPC-157',
    tagline: 'Body Protection Compound | Gut, Tendon & Soft Tissue Repair',
    category: 'Tissue Repair',
    overview:
      'BPC-157 (Body Protection Compound) is a synthetic peptide derived from gastric juice, widely researched for its regenerative effects on gut lining, tendons, ligaments, and soft tissues.',
    description:
      'Regenerative pentadecapeptide for gut health, tendon repair, and whole-body recovery.',
    keyBenefits: [
      'Accelerates tendon and ligament healing',
      'Supports gut lining repair and integrity',
      'Reduces systemic inflammation',
      'Promotes angiogenesis (new blood vessel formation)',
      'Neuroprotective research applications',
    ],
    reconstitutionInstructions: [
      'Reconstitute with Bacteriostatic Water (BAC)',
      'Gently swirl until fully dissolved',
      'Refrigerate after reconstitution (2–8°C)',
    ],
    dosingGuidelines: [
      'Typical dose: 250–500mcg twice daily',
      'Subcutaneous injection near injury site or systemically',
      'Cycle: 4–8 weeks, followed by a break',
    ],
    monitoring: [
      'Monitor for local injection site reactions',
      'Track recovery progress',
    ],
    note: 'BPC-157 is one of the most versatile regenerative peptides, especially for soft tissue and gut health.',
    faqs: [],
    variants: [
      { label: '5mg × 10 Vials', price: 45, imageUrl: v('BC5.png') },
      { label: '10mg × 10 Vials', price: 55, imageUrl: v('BC10.png') },
    ],
    imageUrl: v('BC5.png'),
  },
  {
    id: 'tb500',
    slug: 'tb500',
    name: 'TB-500 (Thymosin B4)',
    tagline: 'Thymosin Beta-4 | Systemic Recovery & Flexibility',
    category: 'Tissue Repair',
    overview:
      'TB-500 (Thymosin Beta-4) is a synthetic version of Thymosin Beta-4, a naturally occurring peptide involved in actin sequestration. It promotes systemic recovery, flexibility, and wound healing.',
    description:
      'Thymosin Beta-4 fragment for systemic recovery, flexibility, and wound healing.',
    keyBenefits: [
      'Promotes systemic recovery throughout the body',
      'Improves flexibility and reduces scar tissue',
      'Accelerates wound healing',
      'Reduces inflammation',
      'Encourages cell migration and tissue regeneration',
    ],
    reconstitutionInstructions: [
      'Reconstitute with Bacteriostatic Water (BAC)',
      'Gently swirl until fully dissolved',
      'Refrigerate after reconstitution (2–8°C)',
    ],
    dosingGuidelines: [
      'Loading dose: 2–2.5mg twice weekly for 4–6 weeks',
      'Maintenance: 2–2.5mg every 2 weeks',
      'Subcutaneous or intramuscular injection',
    ],
    monitoring: [
      'Monitor recovery progress',
      'Track flexibility and wound healing',
    ],
    note: 'TB-500 is complementary to BPC-157 — often stacked for whole-body recovery.',
    faqs: [],
    variants: [
      { label: '5mg × 10 Vials', price: 85, imageUrl: v('BT5.png') },
      { label: '10mg × 10 Vials', price: 160, imageUrl: v('BT10.png') },
    ],
    imageUrl: v('BT5.png'),
  },
  {
    id: 'bpc157tb500',
    slug: 'bpc157tb500',
    name: 'BPC-157 + TB-500',
    tagline: 'Regenerative Peptide Combo | Musculoskeletal Repair & Whole Body Recovery',
    category: 'Tissue Repair',
    overview:
      'This powerful peptide blend combines BPC-157 and TB-500, two of the most studied peptides for tissue regeneration, anti-inflammatory response, and injury repair.',
    description:
      'Regenerative peptide combo (BPC-157 + TB-500) for musculoskeletal repair and whole body recovery.',
    keyBenefits: [
      'Supports rapid healing of soft tissue injuries',
      'Enhances collagen production and angiogenesis',
      'Reduces inflammation and oxidative stress',
      'Promotes joint, tendon and muscle regeneration',
      'Ideal for tendinitis, ligament injuries, and post-operative recovery',
    ],
    reconstitutionInstructions: [
      'Reconstitute with Bacteriostatic Water (BAC)',
      'Swirl gently (do not shake) until completely dissolved',
      'Refrigerate (2–8°C) and use within 30 days',
    ],
    dosingGuidelines: [
      'Typical dose: 250–500mcg daily (in divided or single doses)',
      'Frequency: 5–7 times per week depending on regimen',
      'Cycle duration: 2–6 weeks',
    ],
    monitoring: [
      'Well tolerated; low risk of side effects',
      'Best results when combined with activity training, physical therapy, or rehabilitation',
    ],
    note: 'Ideal for athletes, active individuals or those recovering from soft tissue injuries.',
    faqs: [],
    variants: [
      { label: '5mg+5mg / 10mg (BPC-157 5mg + TB-500 5mg)', price: 120, imageUrl: v('BB10.png') },
      { label: '10mg+10mg / 20mg (BPC-157 10mg + TB-500 10mg)', price: 195, imageUrl: v('BB20.png') },
    ],
    imageUrl: v('BB10.png'),
  },
  {
    id: 'glow70',
    slug: 'glow70',
    name: 'GLOW 70',
    tagline: 'GHK-Cu + BPC-157 + TB-500 (70mg) | Tissue Regeneration Blend',
    category: 'Tissue Repair',
    overview:
      'GLOW 70 is a research-grade blend combining GHK-Cu 50mg, TB-500 10mg, and BPC-157 10mg in a 70mg vial — a synergistic formula for advanced recovery and tissue regeneration research.',
    description:
      'Synergistic peptide blend (GHK-Cu 50mg + TB-500 10mg + BPC-157 10mg / 70mg total) for tissue regeneration and recovery.',
    keyBenefits: [
      'GHK-Cu: promotes collagen and elastin production',
      'BPC-157: supports angiogenesis, reduces inflammation',
      'TB-500: reduces inflammation, accelerates wound repair',
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
      'Subcutaneous near injury site or systemically',
      'Cycle: 4–8 weeks, followed by a break',
    ],
    monitoring: [
      'Monitor for local injection site reactions',
      'Track recovery progress',
    ],
    note: 'GMP-compliant facility with ≥99% purity. Ideal for skin and tissue regeneration research.',
    faqs: [
      { q: 'What is the formulation ratio?', a: 'GHK-Cu: 50mg, TB-500: 10mg, BPC-157: 10mg per vial (70mg total).' },
    ],
    variants: [
      { label: 'GLOW 70 (GHK-Cu 50mg + TB-500 10mg + BPC-157 10mg)', price: 215, imageUrl: v('BPG70.png') },
    ],
    imageUrl: v('BPG70.png'),
  },
  {
    id: 'glow-kpv',
    slug: 'glow-kpv',
    name: 'GLOW + KPV',
    tagline: 'GHK-Cu + TB-500 + BPC + KPV Blend (80mg) | Advanced Anti-Inflammatory Recovery',
    category: 'Tissue Repair',
    overview:
      'GLOW + KPV is an advanced 80mg peptide blend featuring GHK-Cu, TB-500, BPC, and KPV — combining the regenerative power of GLOW with the anti-inflammatory properties of KPV.',
    description:
      'Advanced 80mg blend (GHK-Cu + TB-500 + BPC + KPV) for comprehensive recovery and anti-inflammatory support.',
    keyBenefits: [
      'Combines regenerative and anti-inflammatory peptides',
      'KPV reduces inflammation and supports gut health',
      'Promotes tissue repair and recovery',
      'Ideal for chronic inflammation research',
    ],
    reconstitutionInstructions: [
      'Reconstitute with Bacteriostatic Water (BAC)',
      'Gently swirl until fully dissolved',
      'Refrigerate after reconstitution (2–8°C)',
    ],
    dosingGuidelines: [
      'Per research protocol',
      'Subcutaneous injection',
    ],
    monitoring: [
      'Monitor for injection site reactions',
      'Track recovery and inflammation markers',
    ],
    note: 'Combines GLOW with KPV for enhanced anti-inflammatory effect.',
    faqs: [],
    variants: [
      { label: 'GLOW + KPV 80mg', price: 255, imageUrl: v('GLOW+kpv.png') },
    ],
    imageUrl: v('GLOW+kpv.png'),
  },
  {
    id: 'klow80',
    slug: 'klow80',
    name: 'KLOW80',
    tagline: 'BPC-157 + TB-500 + KPV + GHK-Cu | Advanced Recovery & Joint Repair Blend',
    category: 'Tissue Repair',
    overview:
      'KLOW is a quadruple-peptide research blend combining BPC-157, TB-500, KPV, and GHK-Cu — optimized for joint, tendon, gut, and muscular recovery studies with a unique anti-inflammatory dimension through KPV.',
    description:
      'Quadruple-peptide blend (BPC-157, TB-500, KPV, GHK-Cu) for advanced joint, tendon, gut, and muscle recovery.',
    keyBenefits: [
      'BPC-157: Promotes vascularization and tissue regeneration',
      'TB-500: Improves flexibility, reduces scar tissue',
      'KPV: Anti-inflammatory tripeptide for gut and immune modulation',
      'GHK-Cu: Stimulates collagen synthesis and dermal repair',
      'Full-body recovery for musculoskeletal research',
    ],
    reconstitutionInstructions: [
      'Reconstitute with Bacteriostatic Water (BAC)',
      'Gently swirl until fully dissolved',
      'Refrigerate after reconstitution (2–8°C)',
    ],
    dosingGuidelines: [
      'Typical dose: 250–500mcg per injection',
      'Subcutaneous near injury site or systemically',
      'Cycle: 4–8 weeks',
    ],
    monitoring: [
      'Monitor for local injection site reactions',
      'Track joint mobility and recovery progress',
    ],
    note: 'KLOW adds KPV (anti-inflammatory) for joint, gut, and muscular recovery.',
    faqs: [
      { q: 'How is KLOW different from GLOW?', a: 'KLOW adds KPV (anti-inflammatory) to the blend, making it ideal for joint, gut, and muscular recovery.' },
    ],
    variants: [
      { label: 'KLOW80 (GHK-Cu 50mg + BPC-157 10mg + TB-500 10mg + KPV 10mg)', price: 258, imageUrl: v('GBTK80.png') },
    ],
    imageUrl: v('GBTK80.png'),
  },
  {
    id: 'kpv',
    slug: 'kpv',
    name: 'KPV',
    tagline: 'Anti-inflammatory Tripeptide | Gut Health & Immune Modulation',
    category: 'Tissue Repair',
    overview:
      'KPV is a short tripeptide (Lys-Pro-Val) derived from alpha-MSH with potent anti-inflammatory properties, particularly useful for gut inflammation and immune modulation research.',
    description:
      'Anti-inflammatory tripeptide for gut health, inflammatory bowel research, and immune modulation.',
    keyBenefits: [
      'Potent anti-inflammatory effects',
      'Supports gut lining and reduces intestinal inflammation',
      'Modulates immune response',
      'May benefit skin inflammation',
    ],
    reconstitutionInstructions: [
      'Reconstitute with Bacteriostatic Water',
      'Gently swirl until dissolved',
    ],
    dosingGuidelines: [
      'Per research protocol',
      'Subcutaneous injection or oral',
    ],
    monitoring: [
      'Monitor inflammation markers',
    ],
    note: 'KPV is one of the smallest bioactive peptides, ideal for gut and inflammation research.',
    faqs: [],
    variants: [
      { label: '10mg × 10 Vials', price: 65, imageUrl: v('KP10.png') },
    ],
    imageUrl: v('KP10.png'),
  },

  // ---------- Anti-Aging ----------
  {
    id: 'nad-plus',
    slug: 'nad-plus',
    name: 'NAD+',
    tagline: 'Nicotinamide Adenine Dinucleotide | Cellular Energy, DNA Repair & Anti-Aging',
    category: 'Anti-Aging',
    overview:
      'NAD+ (nicotinamide adenine dinucleotide) promotes cellular energy production, repairs DNA damage, slows aging, and supports brain and nervous system function.',
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
      { q: 'What happens to NAD+ levels with age?', a: 'NAD+ levels naturally decline with age, which is why supplementation becomes increasingly beneficial.' },
    ],
    variants: [
      { label: '100mg × 10 Vials', price: 80, imageUrl: v('NJ100.png') },
      { label: '500mg × 10 Vials', price: 60, imageUrl: v('NJ500.png') },
      { label: '1000mg × 10 Vials', price: 80, imageUrl: v('NJ1000.png') },
    ],
    imageUrl: v('NJ500.png'),
  },
  {
    id: 'mots-c',
    slug: 'mots-c',
    name: 'MOTS-C',
    tagline: 'Mitochondrial-Derived Polypeptide | Metabolic Regulation & Anti-Aging',
    category: 'Anti-Aging',
    overview:
      'MOTS-c is a mitochondrial-derived polypeptide (MDP) whose functions include regulating metabolism (enhancing insulin sensitivity and promoting glucose uptake), antioxidation, and anti-inflammation.',
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
    note: 'HAVE STOCK. MOTS-c has potential therapeutic value for type 2 diabetes, obesity, Alzheimer\'s, and autoimmune diseases.',
    faqs: [],
    variants: [
      { label: '10mg × 10 Vials', price: 65, imageUrl: v('MS10.png') },
      { label: '20mg × 10 Vials', price: 130, imageUrl: v('MS20.png') },
      { label: '30mg × 10 Vials', price: 190, imageUrl: v('MS30.png') },
      { label: '40mg × 10 Vials', price: 210, imageUrl: v('MS40.png') },
    ],
    imageUrl: v('MS20.png'),
  },
  {
    id: 'epithalon',
    slug: 'epithalon',
    name: 'Epithalon',
    tagline: 'Telomerase Activating Tetrapeptide | Anti-Aging & Longevity',
    category: 'Anti-Aging',
    overview:
      'Epithalon is a synthetic tetrapeptide (Ala-Glu-Asp-Gly) that activates telomerase, the enzyme responsible for maintaining telomere length — a key biomarker of cellular aging.',
    description:
      'Telomerase-activating tetrapeptide for anti-aging, longevity, and telomere maintenance research.',
    keyBenefits: [
      'Activates telomerase to maintain telomere length',
      'May slow cellular aging',
      'Supports circadian rhythm regulation',
      'Antioxidant research applications',
      'Longevity research applications',
    ],
    reconstitutionInstructions: [
      'Reconstitute with Bacteriostatic Water',
      'Gently swirl until dissolved',
    ],
    dosingGuidelines: [
      'Twice-yearly protocols (per research guidelines)',
      'Subcutaneous injection',
    ],
    monitoring: [
      'Monitor telomere length markers',
    ],
    note: 'Epithalon is one of the most researched longevity peptides.',
    faqs: [],
    variants: [
      { label: '10mg × 10 Vials', price: 45, imageUrl: v('ET10.png') },
      { label: '50mg × 10 Vials', price: 165, imageUrl: v('ET50.png') },
    ],
    imageUrl: v('ET10.png'),
  },
  {
    id: 'foxo4',
    slug: 'foxo4',
    name: 'FOXO4',
    tagline: 'FOXO4-DRI | Senolytic Peptide for Cellular Senescence Research',
    category: 'Anti-Aging',
    overview:
      'FOXO4-DRI is a senolytic peptide designed to interfere with the FOXO4-p53 interaction, selectively triggering apoptosis in senescent (aged) cells while leaving healthy cells unaffected.',
    description:
      'Senolytic peptide that selectively clears senescent cells via FOXO4-p53 disruption.',
    keyBenefits: [
      'Selectively clears senescent cells',
      'Restores tissue function in aged subjects',
      'Reduces systemic inflammation',
      'Anti-aging and longevity research',
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
      'Track senescent cell markers',
    ],
    note: 'FOXO4-DRI represents a new class of senolytic peptides.',
    faqs: [],
    variants: [
      { label: '10mg × 10 Vials', price: 323, imageUrl: v('F410.png') },
    ],
    imageUrl: v('F410.png'),
  },
  {
    id: 'ghk-cu',
    slug: 'ghk-cu',
    name: 'GHK-CU',
    tagline: 'Copper-binding Peptide | Skin Health, Wound Healing & Anti-Aging',
    category: 'Beauty',
    overview:
      'GHK-Cu is a naturally occurring peptide (glycyl-L-histidyl-L-lysine) that binds to copper ions. It promotes skin and hair health by stimulating collagen and elastin, improving skin firmness, reducing wrinkles, and providing antioxidant benefits.',
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
      { label: '50mg × 10 Vials', price: 30, imageUrl: v('CU50.png') },
      { label: '100mg × 10 Vials', price: 35, imageUrl: v('CU100.png') },
    ],
    imageUrl: v('CU50.png'),
  },

  // ---------- Cognitive / Neuro ----------
  {
    id: 'selank',
    slug: 'selank',
    name: 'Selank',
    tagline: 'Anxiolytic Nootropic Peptide | Mood, Cognition & Immune Modulation',
    category: 'Cognitive',
    overview:
      'Selank is a synthetic analogue of tuftsin, developed for its anxiolytic and nootropic properties. It modulates serotonin and BDNF levels while supporting immune function.',
    description:
      'Anxiolytic and nootropic peptide for mood, cognition, and immune modulation.',
    keyBenefits: [
      'Reduces anxiety and promotes calm',
      'Improves memory and learning',
      'Supports BDNF and serotonin balance',
      'Modulates immune response',
      'No sedative effects',
    ],
    reconstitutionInstructions: [
      'Reconstitute with Bacteriostatic Water',
      'Gently swirl until dissolved',
    ],
    dosingGuidelines: [
      'Per research protocol',
      'Subcutaneous injection or intranasal',
    ],
    monitoring: [
      'Track mood and cognitive markers',
    ],
    note: 'Selank is popular in research for anxiety and cognitive support without sedation.',
    faqs: [],
    variants: [
      { label: '5mg × 10 Vials', price: 45, imageUrl: v('SK5.png') },
      { label: '10mg × 10 Vials', price: 65, imageUrl: v('SK10.png') },
    ],
    imageUrl: v('SK5.png'),
  },
  {
    id: 'semax',
    slug: 'semax',
    name: 'Semax',
    tagline: 'Nootropic Heptapeptide | Neuroprotection & Cognitive Enhancement',
    category: 'Cognitive',
    overview:
      'Semax is a synthetic peptide analogue of ACTH (4-10) developed for its neuroprotective and nootropic properties. It enhances BDNF and NGF expression in the brain.',
    description:
      'Neuroprotective heptapeptide for cognitive enhancement, neurogenesis, and BDNF support.',
    keyBenefits: [
      'Enhances BDNF and NGF expression',
      'Improves memory and attention',
      'Neuroprotective research applications',
      'Supports cognitive recovery',
    ],
    reconstitutionInstructions: [
      'Reconstitute with Bacteriostatic Water',
      'Gently swirl until dissolved',
    ],
    dosingGuidelines: [
      'Per research protocol',
      'Subcutaneous injection or intranasal',
    ],
    monitoring: [
      'Track cognitive markers',
    ],
    note: 'Semax is widely researched for cognitive and neuroprotective applications.',
    faqs: [],
    variants: [
      { label: '5mg × 10 Vials', price: 50, imageUrl: v('XA5.png') },
      { label: '10mg × 10 Vials', price: 65, imageUrl: v('XA10.png') },
    ],
    imageUrl: v('XA5.png'),
  },
  {
    id: 'ss31',
    slug: 'ss31',
    name: 'SS-31',
    tagline: 'Mitochondria-targeted Antioxidant Peptide | Elamipretide',
    category: 'Anti-Aging',
    overview:
      'SS-31 (Elamipretide) is a mitochondria-targeted antioxidant peptide that concentrates in the inner mitochondrial membrane to reduce oxidative stress and improve mitochondrial function.',
    description:
      'Mitochondria-targeted tetrapeptide for oxidative stress reduction and mitochondrial function support.',
    keyBenefits: [
      'Targets mitochondrial inner membrane',
      'Reduces oxidative stress at the source',
      'Improves mitochondrial bioenergetics',
      'Research applications for aging, heart failure, and muscle function',
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
      'Track mitochondrial function markers',
    ],
    note: 'SS-31 selectively targets mitochondria for superior antioxidant effects.',
    faqs: [],
    variants: [
      { label: '10mg × 10 Vials', price: 90, imageUrl: v('2S10.png') },
      { label: '25mg × 10 Vials', price: 223, imageUrl: v('2S25.png') },
      { label: '50mg × 10 Vials', price: 340, imageUrl: v('2S50.png') },
    ],
    imageUrl: v('2S10.png'),
  },
  {
    id: 'tal-tau',
    slug: 'tal-tau',
    name: 'TAl/Tau Aggregation Inhibiting Peptide',
    tagline: 'Tau Protein Aggregation Inhibitor | Neurodegenerative Disease Research',
    category: 'Cognitive',
    overview:
      'Tau protein aggregation inhibitory peptides inhibit the aggregation of Tau protein — a key factor in neurodegenerative diseases such as Alzheimer\'s.',
    description:
      'Tau aggregation inhibitor for neurodegenerative disease research, potentially effective against Alzheimer\'s disease.',
    keyBenefits: [
      'Inhibits Tau protein aggregation',
      'May delay neurodegenerative disease progression',
      'Crosses the blood-brain barrier (oral activity in some variants)',
      'Improves behavioral phenotypes in disease models',
    ],
    reconstitutionInstructions: [
      'Reconstitute per research protocol',
      'Store as directed',
    ],
    dosingGuidelines: ['Per research protocol guidelines'],
    monitoring: ['Track neurological and behavioral markers'],
    note: 'Customization available. RI-AG03 is an example oral-activity Tau aggregation inhibitor.',
    faqs: [],
    variants: [
      { label: '5mg × 10 Vials', price: 120, imageUrl: v('TAL5.png') },
      { label: '10mg × 10 Vials', price: 200, imageUrl: v('TAL10.png') },
    ],
    imageUrl: v('TAL10.png'),
  },
  {
    id: 'dsip',
    slug: 'dsip',
    name: 'DSIP',
    tagline: 'Delta Sleep-Inducing Peptide | Sleep, Stress & Hormone Modulation',
    category: 'Cognitive',
    overview:
      'DSIP (Delta Sleep-Inducing Peptide) is a neuropeptide that promotes delta sleep (deep sleep) and modulates stress hormones and circadian rhythms.',
    description:
      'Delta sleep-inducing peptide for deep sleep, stress reduction, and circadian rhythm research.',
    keyBenefits: [
      'Promotes deep delta-wave sleep',
      'Reduces stress and cortisol',
      'Modulates circadian rhythm',
      'Supports recovery and hormone balance',
    ],
    reconstitutionInstructions: [
      'Reconstitute with Bacteriostatic Water',
      'Gently swirl until dissolved',
    ],
    dosingGuidelines: [
      'Per research protocol',
      'Subcutaneous injection (often before sleep)',
    ],
    monitoring: [
      'Track sleep quality and cortisol levels',
    ],
    note: 'DSIP is commonly researched for sleep and stress modulation.',
    faqs: [],
    variants: [
      { label: '5mg × 10 Vials', price: 45, imageUrl: v('DS5.png') },
      { label: '10mg × 10 Vials', price: 75, imageUrl: v('DS10.png') },
    ],
    imageUrl: v('DS5.png'),
  },
  {
    id: 'kisspeptin-10',
    slug: 'kisspeptin-10',
    name: 'Kisspeptin-10',
    tagline: 'Reproductive Hormone Regulator | GnRH & HPG Axis Research',
    category: 'Cognitive',
    overview:
      'Kisspeptin-10 is a decapeptide that regulates the hypothalamic-pituitary-gonadal (HPG) axis by stimulating GnRH release, with research applications in reproductive endocrinology.',
    description:
      'Kisspeptin-10 peptide for HPG axis research, reproductive hormone regulation, and fertility studies.',
    keyBenefits: [
      'Stimulates GnRH release',
      'Regulates LH and FSH',
      'Research applications in reproductive endocrinology',
    ],
    reconstitutionInstructions: [
      'Reconstitute with Bacteriostatic Water',
      'Gently swirl until dissolved',
    ],
    dosingGuidelines: ['Per research protocol'],
    monitoring: ['Monitor LH, FSH, and sex hormones'],
    note: 'Kisspeptin-10 is the smallest bioactive fragment of the kisspeptin family.',
    faqs: [],
    variants: [
      { label: '5mg × 10 Vials', price: 60, imageUrl: v('KS5.png') },
      { label: '10mg × 10 Vials', price: 85, imageUrl: v('KS10.png') },
    ],
    imageUrl: v('KS5.png'),
  },
  {
    id: 'gonadorelin',
    slug: 'gonadorelin',
    name: 'Gonadorelin Acetate',
    tagline: 'GnRH Agonist | Reproductive Axis Research',
    category: 'Cognitive',
    overview:
      'Gonadorelin Acetate is a synthetic GnRH (gonadotropin-releasing hormone) agonist used in research on the hypothalamic-pituitary-gonadal axis.',
    description:
      'Synthetic GnRH agonist for reproductive axis research and hormone regulation.',
    keyBenefits: [
      'Stimulates LH and FSH release',
      'Research applications in reproductive endocrinology',
      'Supports HPG axis studies',
    ],
    reconstitutionInstructions: [
      'Reconstitute with Bacteriostatic Water',
      'Gently swirl until dissolved',
    ],
    dosingGuidelines: ['Per research protocol'],
    monitoring: ['Monitor LH, FSH, and sex hormones'],
    note: 'Synthetic version of naturally occurring GnRH.',
    faqs: [],
    variants: [
      { label: '2mg × 10 Vials', price: 40, imageUrl: v('GND2.png') },
      { label: '5mg × 10 Vials', price: 50, imageUrl: v('GND5.png') },
    ],
    imageUrl: v('GND2.png'),
  },
  {
    id: 'oxytocin',
    slug: 'oxytocin',
    name: 'Oxytocin',
    tagline: 'Social Bonding & Reproductive Peptide | Mood & Behavior Research',
    category: 'Cognitive',
    overview:
      'Oxytocin is a naturally occurring neuropeptide involved in social bonding, trust, reproductive behavior, and stress regulation.',
    description:
      'Synthetic oxytocin peptide for social bonding, mood, and reproductive research.',
    keyBenefits: [
      'Promotes social bonding and trust',
      'Reduces stress and anxiety',
      'Supports reproductive health research',
    ],
    reconstitutionInstructions: [
      'Reconstitute with Bacteriostatic Water',
      'Gently swirl until dissolved',
    ],
    dosingGuidelines: ['Per research protocol'],
    monitoring: ['Track mood and behavioral markers'],
    note: 'Often called the "love hormone" — key in social and reproductive behavior.',
    faqs: [],
    variants: [
      { label: '5mg × 10 Vials', price: 45, imageUrl: v('OT5.png') },
      { label: '10mg × 10 Vials', price: 65, imageUrl: v('OT10.png') },
    ],
    imageUrl: v('OT5.png'),
  },
  {
    id: 'pt-141',
    slug: 'pt-141',
    name: 'PT-141 (Bremelanotide)',
    tagline: 'Melanocortin Receptor Agonist | Libido & Sexual Health Research',
    category: 'Cognitive',
    overview:
      'PT-141 (Bremelanotide) is a melanocortin receptor agonist that acts on the central nervous system to support libido and sexual function research.',
    description:
      'PT-141 melanocortin agonist for sexual health and libido research.',
    keyBenefits: [
      'Central nervous system action on libido',
      'Research applications for both men and women',
      'No cardiovascular side effects typical of PDE5 inhibitors',
    ],
    reconstitutionInstructions: [
      'Reconstitute with Bacteriostatic Water',
      'Gently swirl until dissolved',
    ],
    dosingGuidelines: ['Per research protocol', 'Subcutaneous injection'],
    monitoring: ['Track behavioral responses'],
    note: 'PT-141 works centrally via melanocortin receptors rather than vascularly.',
    faqs: [],
    variants: [
      { label: '10mg × 10 Vials', price: 65, imageUrl: v('P41.png') },
    ],
    imageUrl: v('P41.png'),
  },
  {
    id: 'mt2',
    slug: 'mt2',
    name: 'MT2',
    tagline: 'Melatonin Receptor Agonist | Sleep & Circadian Research Peptide',
    category: 'Cognitive',
    overview:
      'MT2 is a selective melatonin receptor agonist used in research targeting MT2 receptors, which are primarily involved in circadian rhythm regulation and sleep onset.',
    description:
      'Selective MT2 melatonin receptor agonist for sleep and circadian rhythm research.',
    keyBenefits: [
      'Selective MT2 receptor targeting',
      'Sleep onset regulation',
      'Circadian rhythm research',
      'Reduced next-day drowsiness',
    ],
    reconstitutionInstructions: [
      'Reconstitute with Bacteriostatic Water',
      'Gently swirl until dissolved',
    ],
    dosingGuidelines: ['Per research protocol'],
    monitoring: ['Track sleep onset latency'],
    note: 'Selective MT2 receptor agonist for circadian rhythm research.',
    faqs: [],
    variants: [
      { label: '10mg × 10 Vials', price: 60, imageUrl: v('MT2.png') },
    ],
    imageUrl: v('MT2.png'),
  },
  {
    id: 'mt1',
    slug: 'mt1',
    name: 'MT1',
    tagline: 'Melatonin Receptor Agonist | Sleep & Circadian Research Peptide',
    category: 'Cognitive',
    overview:
      'MT1 is a selective melatonin receptor agonist used in research targeting MT1 receptors, which are primarily involved in sleep maintenance and circadian phase control.',
    description:
      'Selective MT1 melatonin receptor agonist for sleep maintenance and circadian research.',
    keyBenefits: [
      'Selective MT1 receptor targeting',
      'Sleep maintenance research',
      'Circadian phase regulation',
      'Potent antioxidant properties',
    ],
    reconstitutionInstructions: [
      'Reconstitute with Bacteriostatic Water',
      'Gently swirl until dissolved',
    ],
    dosingGuidelines: ['Per research protocol'],
    monitoring: ['Track sleep quality and duration'],
    note: 'Selective MT1 receptor agonist for sleep maintenance research.',
    faqs: [],
    variants: [
      { label: '10mg × 10 Vials', price: 60, imageUrl: v('MT1.png') },
    ],
    imageUrl: v('MT1.png'),
  },
  {
    id: 'melatonin',
    slug: 'melatonin',
    name: 'Melatonin',
    tagline: 'Sleep & Circadian Peptide | Antioxidant & Cellular Protection',
    category: 'Cognitive',
    overview:
      'Melatonin is a naturally occurring hormone that regulates sleep-wake cycles and acts as a potent antioxidant. Research-grade melatonin peptide for sleep and circadian rhythm studies.',
    description:
      'Melatonin peptide for sleep regulation, circadian rhythm, and antioxidant research.',
    keyBenefits: [
      'Regulates sleep-wake cycles',
      'Potent antioxidant',
      'Supports immune function',
      'Cellular protection research',
    ],
    reconstitutionInstructions: [
      'Reconstitute with Bacteriostatic Water',
      'Gently swirl until dissolved',
    ],
    dosingGuidelines: ['Per research protocol'],
    monitoring: ['Track sleep quality'],
    note: 'High-dose melatonin formulation for antioxidant and cellular protection research.',
    faqs: [],
    variants: [
      { label: '10mg × 10 Vials', price: 80, imageUrl: v('MT10.png') },
    ],
    imageUrl: v('MT10.png'),
  },
  {
    id: 'thymosin-alpha-1',
    slug: 'thymosin-alpha-1',
    name: 'Thymosin Alpha-1',
    tagline: 'Immune Modulating Peptide | T-cell Function & Immune Resilience',
    category: 'Anti-Aging',
    overview:
      'Thymosin Alpha-1 (Tα1) is an immunomodulatory peptide that enhances T-cell function and supports immune resilience.',
    description:
      'Thymosin Alpha-1 peptide for immune modulation, T-cell function, and immune resilience research.',
    keyBenefits: [
      'Enhances T-cell function',
      'Modulates immune response',
      'Supports immune resilience',
      'Research applications for chronic infections and immune dysfunction',
    ],
    reconstitutionInstructions: [
      'Reconstitute with Bacteriostatic Water',
      'Gently swirl until dissolved',
    ],
    dosingGuidelines: ['Per research protocol'],
    monitoring: ['Track immune markers'],
    note: 'Thymosin Alpha-1 is one of the most researched immune peptides.',
    faqs: [],
    variants: [
      { label: '5mg × 10 Vials', price: 100, imageUrl: v('TA5.png') },
      { label: '10mg × 10 Vials', price: 170, imageUrl: v('TA10.png') },
    ],
    imageUrl: v('TA5.png'),
  },

  // ---------- Bioregulators (Vilon-like short peptides) ----------
  {
    id: 'cortagen',
    slug: 'cortagen',
    name: 'Cortagen',
    tagline: 'Bioregulator Peptide | Brain & Cognitive Function Support',
    category: 'Bioregulator',
    overview:
      'Cortagen is a short bioregulator peptide (20mg) developed for brain and cognitive function research, particularly in age-related cognitive decline studies.',
    description:
      'Bioregulator peptide (20mg) for brain function, neuroprotection, and cognitive health research.',
    keyBenefits: [
      'Supports brain and cognitive function',
      'Bioregulator class peptide',
      'Research applications in age-related cognitive decline',
    ],
    reconstitutionInstructions: [
      'Reconstitute with Bacteriostatic Water',
      'Gently swirl until dissolved',
    ],
    dosingGuidelines: ['Per research protocol'],
    monitoring: ['Track cognitive markers'],
    note: 'Cortagen belongs to the class of short bioregulator peptides.',
    faqs: [],
    variants: [
      { label: '20mg × 10 Vials', price: 120, imageUrl: v('COR20.png') },
    ],
    imageUrl: v('COR20.png'),
  },
  {
    id: 'pancragen',
    slug: 'pancragen',
    name: 'Pancragen',
    tagline: 'Pancreatic Bioregulator Peptide | Glucose Metabolism Research',
    category: 'Bioregulator',
    overview:
      'Pancragen is a bioregulator peptide (20mg) targeting pancreatic function, with research applications in glucose metabolism and pancreatic health.',
    description:
      'Pancreatic bioregulator peptide for glucose metabolism and pancreatic health research.',
    keyBenefits: [
      'Targets pancreatic function',
      'Supports glucose metabolism research',
      'Bioregulator class peptide',
    ],
    reconstitutionInstructions: [
      'Reconstitute with Bacteriostatic Water',
      'Gently swirl until dissolved',
    ],
    dosingGuidelines: ['Per research protocol'],
    monitoring: ['Monitor glucose and pancreatic markers'],
    note: 'Pancreatic-targeted bioregulator peptide.',
    faqs: [],
    variants: [
      { label: '20mg × 10 Vials', price: 120, imageUrl: v('PA20.png') },
    ],
    imageUrl: v('PA20.png'),
  },
  {
    id: 'chonluten',
    slug: 'chonluten',
    name: 'Chonluten',
    tagline: 'Lung Bioregulator Peptide | Respiratory & Pulmonary Research',
    category: 'Bioregulator',
    overview:
      'Chonluten is a bioregulator peptide (20mg) targeting lung and respiratory function, with research applications in pulmonary health.',
    description:
      'Lung bioregulator peptide for respiratory and pulmonary health research.',
    keyBenefits: [
      'Targets lung function',
      'Supports respiratory research',
      'Bioregulator class peptide',
    ],
    reconstitutionInstructions: [
      'Reconstitute with Bacteriostatic Water',
      'Gently swirl until dissolved',
    ],
    dosingGuidelines: ['Per research protocol'],
    monitoring: ['Monitor respiratory markers'],
    note: 'Pulmonary-targeted bioregulator peptide.',
    faqs: [],
    variants: [
      { label: '20mg × 10 Vials', price: 120, imageUrl: v('CH20.png') },
    ],
    imageUrl: v('CH20.png'),
  },
  {
    id: 'ovagen',
    slug: 'ovagen',
    name: 'Ovagen',
    tagline: 'Liver Bioregulator Peptide | Hepatic Function & Detox Research',
    category: 'Bioregulator',
    overview:
      'Ovagen is a bioregulator peptide (20mg) targeting liver function, with research applications in hepatic health and detoxification.',
    description:
      'Liver bioregulator peptide for hepatic function, detox, and liver health research.',
    keyBenefits: [
      'Targets liver function',
      'Supports hepatic research',
      'Bioregulator class peptide',
    ],
    reconstitutionInstructions: [
      'Reconstitute with Bacteriostatic Water',
      'Gently swirl until dissolved',
    ],
    dosingGuidelines: ['Per research protocol'],
    monitoring: ['Monitor liver enzymes'],
    note: 'Liver-targeted bioregulator peptide.',
    faqs: [],
    variants: [
      { label: '20mg × 10 Vials', price: 120, imageUrl: v('OV20.png') },
    ],
    imageUrl: v('OV20.png'),
  },

  // ---------- Beauty ----------
  {
    id: 'snap-8',
    slug: 'snap-8',
    name: 'SNAP-8',
    tagline: 'Cosmetic Octapeptide | Topical Wrinkle Reduction',
    category: 'Beauty',
    overview:
      'SNAP-8 is a cosmetic octapeptide that reduces the appearance of wrinkles by inhibiting SNARE complex formation and muscle contraction in facial muscles.',
    description:
      'Cosmetic octapeptide for topical wrinkle reduction and skin rejuvenation.',
    keyBenefits: [
      'Reduces appearance of wrinkles',
      'Topical application',
      'Botox-like mechanism without injections',
      'Skin rejuvenation',
    ],
    reconstitutionInstructions: [
      'For topical use: mix into cosmetic formulations',
      'Reconstitute with sterile water',
    ],
    dosingGuidelines: ['Topical application per cosmetic formulation'],
    monitoring: ['Track skin appearance and wrinkle depth'],
    note: 'SNAP-8 is a popular cosmetic peptide alternative to Botox.',
    faqs: [],
    variants: [
      { label: '10mg × 10 Vials', price: 45, imageUrl: v('NP810.png') },
    ],
    imageUrl: v('NP810.png'),
  },
  {
    id: 'glutathione',
    slug: 'glutathione',
    name: 'Glutathione',
    tagline: 'Master Antioxidant | Skin Brightening & Detoxification',
    category: 'Beauty',
    overview:
      'Glutathione is the body\'s master antioxidant, involved in detoxification, immune function, and skin brightening research applications.',
    description:
      'Glutathione peptide for antioxidant support, skin brightening, and detoxification research.',
    keyBenefits: [
      'Master antioxidant activity',
      'Supports liver detoxification',
      'Skin brightening research applications',
      'Immune system support',
    ],
    reconstitutionInstructions: [
      'Reconstitute with sterile water',
      'Use immediately or refrigerate',
    ],
    dosingGuidelines: ['Per research protocol', 'Subcutaneous or IV'],
    monitoring: ['Track oxidative stress markers'],
    note: 'Glutathione is the body\'s most abundant endogenous antioxidant.',
    faqs: [],
    variants: [
      { label: '600mg × 10 Vials', price: 35, imageUrl: v('GTT600.png') },
    ],
    imageUrl: v('GTT600.png'),
  },
  {
    id: '5-amino-lmq',
    slug: '5-amino-lmq',
    name: '5-Amino-LMQ',
    tagline: 'Cosmetic Tetrapeptide | Skin Conditioning Research',
    category: 'Beauty',
    overview:
      '5-Amino-LMQ is a cosmetic tetrapeptide (5-amino peptide variant) researched for skin conditioning and cosmetic applications.',
    description:
      'Cosmetic tetrapeptide for skin conditioning and anti-aging research.',
    keyBenefits: [
      'Cosmetic peptide for skin care',
      'Tetrapeptide formulation',
      'Skin conditioning research',
    ],
    reconstitutionInstructions: [
      'Reconstitute per cosmetic formulation',
    ],
    dosingGuidelines: ['Per research protocol'],
    monitoring: ['Track skin condition'],
    note: 'Cosmetic-grade tetrapeptide.',
    faqs: [],
    variants: [
      { label: '5mg × 10 Vials', price: 45, imageUrl: v('5AM.png') },
      { label: '10mg × 10 Vials', price: 55, imageUrl: v('10AM.png') },
      { label: '50mg × 10 Vials', price: 85, imageUrl: v('20AM.png') },
    ],
    imageUrl: v('5AM.png'),
  },

  // ---------- Specialty ----------
  {
    id: 'ara-290',
    slug: 'ara-290',
    name: 'ARA 290',
    tagline: 'Erythropoietin-derived Tissue Protective Peptide',
    category: 'Specialty',
    overview:
      'ARA 290 is a non-erythropoietic peptide derived from erythropoietin with tissue-protective and anti-inflammatory properties without affecting hematocrit.',
    description:
      'Tissue-protective peptide derived from EPO with anti-inflammatory and neuropathic pain research applications.',
    keyBenefits: [
      'Tissue-protective without raising hematocrit',
      'Anti-inflammatory effects',
      'Research applications for neuropathic pain',
      'Supports nerve repair',
    ],
    reconstitutionInstructions: [
      'Reconstitute with Bacteriostatic Water',
      'Gently swirl until dissolved',
    ],
    dosingGuidelines: ['Per research protocol'],
    monitoring: ['Track inflammation and pain markers'],
    note: 'Non-erythropoietic — no risk of polycythemia.',
    faqs: [],
    variants: [
      { label: '10mg × 10 Vials', price: 80, imageUrl: v('RA10.png') },
    ],
    imageUrl: v('RA10.png'),
  },
  {
    id: 'll-37',
    slug: 'll-37',
    name: 'LL-37',
    tagline: 'Antimicrobial Peptide | Immune Defense & Skin Health',
    category: 'Specialty',
    overview:
      'LL-37 is the only cathelicidin antimicrobial peptide in humans, with broad-spectrum antimicrobial activity and immune modulatory functions.',
    description:
      'Human cathelicidin antimicrobial peptide for immune defense, skin health, and infection research.',
    keyBenefits: [
      'Broad-spectrum antimicrobial activity',
      'Immune modulatory effects',
      'Supports skin barrier function',
      'Wound healing research',
    ],
    reconstitutionInstructions: [
      'Reconstitute with Bacteriostatic Water',
      'Gently swirl until dissolved',
    ],
    dosingGuidelines: ['Per research protocol'],
    monitoring: ['Track infection and immune markers'],
    note: 'LL-37 is the sole human cathelicidin.',
    faqs: [],
    variants: [
      { label: '5mg × 10 Vials', price: 100, imageUrl: v('375.png') },
      { label: '10mg × 10 Vials', price: 153, imageUrl: v('3710.png') },
    ],
    imageUrl: v('375.png'),
  },
  {
    id: 'aicar',
    slug: 'aicar',
    name: 'AICAR',
    tagline: 'AMPK Activator | Metabolic Research & Endurance',
    category: 'Specialty',
    overview:
      'AICAR (5-Aminoimidazole-4-carboxamide ribonucleotide) is an AMPK activator researched for metabolic regulation, endurance, and cellular energy.',
    description:
      'AMPK-activating research compound for metabolic studies and endurance research.',
    keyBenefits: [
      'Activates AMPK pathway',
      'Mimics exercise effects at cellular level',
      'Supports mitochondrial biogenesis',
      'Metabolic regulation research',
    ],
    reconstitutionInstructions: [
      'Reconstitute with Bacteriostatic Water',
      'Gently swirl until dissolved',
    ],
    dosingGuidelines: ['Per research protocol'],
    monitoring: ['Track metabolic markers'],
    note: 'Often referred to as the "exercise pill" in research contexts.',
    faqs: [],
    variants: [
      { label: '50mg × 10 Vials', price: 70, imageUrl: v('AR50.png') },
    ],
    imageUrl: v('AR50.png'),
  },
  {
    id: 'vip',
    slug: 'vip',
    name: 'VIP',
    tagline: 'Vasoactive Intestinal Peptide | Immune Modulation & Gut Health',
    category: 'Specialty',
    overview:
      'VIP (Vasoactive Intestinal Peptide) is a neuropeptide with broad regulatory functions in the immune, nervous, and digestive systems.',
    description:
      'VIP neuropeptide for immune modulation, gut health, and circadian rhythm research.',
    keyBenefits: [
      'Anti-inflammatory effects',
      'Modulates immune response',
      'Supports gut function',
      'Circadian rhythm research',
    ],
    reconstitutionInstructions: [
      'Reconstitute with Bacteriostatic Water',
      'Gently swirl until dissolved',
    ],
    dosingGuidelines: ['Per research protocol'],
    monitoring: ['Track immune and gut markers'],
    note: 'VIP has receptors throughout the body, supporting diverse research applications.',
    faqs: [],
    variants: [
      { label: '5mg × 10 Vials', price: 95, imageUrl: v('VIP5.png') },
      { label: '10mg × 10 Vials', price: 160, imageUrl: v('VIP10.png') },
    ],
    imageUrl: v('VIP5.png'),
  },
  {
    id: 'botox',
    slug: 'botox',
    name: 'BOTOX',
    tagline: 'Cosmetic & Therapeutic Research Peptide | 100IU',
    category: 'Beauty',
    overview:
      'Botulinum toxin type A (100IU) for cosmetic and therapeutic research applications. Reconstitute per research protocol.',
    description:
      'Botulinum toxin type A research-grade product for cosmetic and therapeutic research.',
    keyBenefits: [
      'Cosmetic wrinkle reduction research',
      'Therapeutic muscle research applications',
      'High-purity research grade',
    ],
    reconstitutionInstructions: [
      'Reconstitute with sterile saline per research protocol',
      'Handle with care',
    ],
    dosingGuidelines: ['Per research protocol'],
    monitoring: ['Per research protocol'],
    note: 'For research use only. Handle as a potent biological agent.',
    faqs: [],
    variants: [
      { label: '100IU × 10 Vials', price: 253, imageUrl: v('BOTOX.png') },
    ],
    imageUrl: v('BOTOX.png'),
  },
  {
    id: 'dulaglutide',
    slug: 'dulaglutide',
    name: 'Dulaglutide',
    tagline: 'GLP-1 Receptor Agonist | Long-acting Diabetes & Weight Management',
    category: 'Fat Loss',
    overview:
      'Dulaglutide is a long-acting GLP-1 receptor agonist used in research for type 2 diabetes and weight management with once-weekly dosing.',
    description:
      'Long-acting GLP-1 agonist for diabetes, weight management, and cardiovascular research.',
    keyBenefits: [
      'Once-weekly dosing',
      'Significant HbA1c reduction',
      'Supports weight loss',
      'Cardiovascular outcomes research',
    ],
    reconstitutionInstructions: [
      'Reconstitute per research protocol',
    ],
    dosingGuidelines: ['Per research protocol'],
    monitoring: ['Track HbA1c and weight'],
    note: 'Long-acting GLP-1 with established clinical profile.',
    faqs: [],
    variants: [
      { label: '5mg × 10 Vials', price: 110, imageUrl: v('Dula-5.png') },
      { label: '10mg × 10 Vials', price: 190, imageUrl: v('Dula-10.png') },
    ],
    imageUrl: v('Dula-5.png'),
  },
  {
    id: 'pramlintide',
    slug: 'pramlintide',
    name: 'Pramlintide',
    tagline: 'Amylin Analogue | Postprandial Glucose & Satiety Research',
    category: 'Fat Loss',
    overview:
      'Pramlintide is a synthetic amylin analogue that complements insulin action by slowing gastric emptying and promoting satiety.',
    description:
      'Amylin analogue for postprandial glucose control and satiety research.',
    keyBenefits: [
      'Slows gastric emptying',
      'Reduces postprandial glucose spikes',
      'Promotes satiety',
      'Complements insulin research',
    ],
    reconstitutionInstructions: [
      'Reconstitute per research protocol',
    ],
    dosingGuidelines: ['Per research protocol'],
    monitoring: ['Track postprandial glucose'],
    note: 'Synthetic amylin analogue used alongside insulin in research.',
    faqs: [],
    variants: [
      { label: '5mg × 10 Vials', price: 130, imageUrl: v('Pra-5.png') },
      { label: '10mg × 10 Vials', price: 240, imageUrl: v('Pra-10.png') },
    ],
    imageUrl: v('Pra-5.png'),
  },
  {
    id: 'pnc27',
    slug: 'pnc27',
    name: 'PNC27',
    tagline: 'Cancer Cell Membrane-disrupting Peptide | Oncology Research',
    category: 'Specialty',
    overview:
      'PNC27 is a peptide that disrupts cancer cell membranes via HDM-2 binding, with research applications in oncology.',
    description:
      'PNC27 peptide that targets HDM-2 in cancer cell membranes for oncology research.',
    keyBenefits: [
      'Selectively disrupts cancer cell membranes',
      'Targets HDM-2',
      'Oncology research applications',
    ],
    reconstitutionInstructions: [
      'Reconstitute per research protocol',
    ],
    dosingGuidelines: ['Per research protocol'],
    monitoring: ['Per oncology research protocol'],
    note: 'For research applications only.',
    faqs: [],
    variants: [
      { label: '5mg × 10 Vials', price: 65, imageUrl: v('PNC5.png') },
      { label: '10mg × 10 Vials', price: 115, imageUrl: v('PNC10.png') },
    ],
    imageUrl: v('PNC5.png'),
  },

  // ---------- Supplies / Accessories ----------
  {
    id: 'bac-water',
    slug: 'bac-water',
    name: 'Bacteriostatic Water',
    tagline: 'BAC Water | Peptide Reconstitution Solvent',
    category: 'Supplies',
    overview:
      'Bacteriostatic Water (BAC Water) is sterile water containing 0.9% benzyl alcohol that inhibits bacterial growth. Used to reconstitute lyophilized peptides.',
    description:
      'Sterile bacteriostatic water for safe peptide reconstitution.',
    keyBenefits: [
      'Sterile water for reconstitution',
      'Contains 0.9% benzyl alcohol as bacteriostatic agent',
      'Multi-dose vial for repeated use',
      'Essential for peptide preparation',
    ],
    reconstitutionInstructions: [
      'Use as diluent for lyophilized peptides',
      'Follow peptide-specific reconstitution ratios',
    ],
    dosingGuidelines: ['Use only as diluent — do not inject directly without peptide'],
    monitoring: ['Discard if cloudy or particulate present'],
    note: 'Essential supply for peptide research applications.',
    faqs: [],
    variants: [
      { label: '3ml × 10 Vials', price: 10, imageUrl: v('BW3.png') },
      { label: '10ml × 10 Vials', price: 15, imageUrl: v('BW10.png') },
    ],
    imageUrl: v('BW3.png'),
  },
  {
    id: 'aa-water',
    slug: 'aa-water',
    name: 'AA Water',
    tagline: 'Acetic Acid Solution | Specialized Peptide Reconstitution',
    category: 'Supplies',
    overview:
      'AA Water is a specialized acetic acid solution used for reconstituting peptides that require a slightly acidic environment (e.g., AOD-9604).',
    description:
      'Acetic acid solution for peptides requiring acidic reconstitution conditions.',
    keyBenefits: [
      'Specialized reconstitution solvent',
      'Prevents gelation of certain peptides',
      'Sterile preparation',
    ],
    reconstitutionInstructions: [
      'Use as diluent for peptides requiring acidic conditions',
    ],
    dosingGuidelines: ['Use only as diluent'],
    monitoring: ['Discard if cloudy'],
    note: 'Designed for peptides that gel in standard BAC water.',
    faqs: [],
    variants: [
      { label: '3ml × 10 Vials', price: 15, imageUrl: v('AW3.png') },
      { label: '10ml × 10 Vials', price: 20, imageUrl: v('AW10.png') },
    ],
    imageUrl: v('AW3.png'),
  },
  {
    id: 'b12',
    slug: 'b12',
    name: 'B12',
    tagline: 'Vitamin B12 Injection | Energy & Lipotropic Support',
    category: 'Supplies',
    overview:
      'Vitamin B12 injection supporting energy metabolism, red blood cell formation, and lipotropic activity.',
    description:
      'Vitamin B12 (1ml) injection for energy, metabolism, and lipotropic support.',
    keyBenefits: [
      'Supports energy metabolism',
      'Red blood cell formation',
      'Lipotropic support',
      'Synergistic with MIC blend and Lipo-C',
    ],
    reconstitutionInstructions: [
      'Ready-to-use',
    ],
    dosingGuidelines: ['Per research or protocol'],
    monitoring: ['Track B12 levels'],
    note: 'Often stacked with MIC blend and Lipo-C injections.',
    faqs: [],
    variants: [
      { label: '1ml × 10 Vials', price: 8, imageUrl: v('B12.png') },
    ],
    imageUrl: v('B12.png'),
  },
  {
    id: 'injection-pen-disposable',
    slug: 'injection-pen-disposable',
    name: 'One-time Injection Pen',
    tagline: 'Disposable Pen | Convenient Peptide Administration',
    category: 'Supplies',
    overview:
      'Disposable one-time use injection pen for convenient and accurate peptide administration.',
    description:
      'Disposable single-use injection pen for accurate peptide dosing.',
    keyBenefits: [
      'Single-use convenience',
      'Accurate dosing',
      'Pre-sterilized',
      'Cost-effective',
    ],
    reconstitutionInstructions: [],
    dosingGuidelines: ['Single-use only'],
    monitoring: [],
    note: 'Disposable injection pen for research applications.',
    faqs: [],
    variants: [
      { label: 'Disposable Pen', price: 6, imageUrl: v('One-time injection pen.png') },
    ],
    imageUrl: v('One-time injection pen.png'),
  },
  {
    id: 'injection-pen-alloy',
    slug: 'injection-pen-alloy',
    name: 'Permanent Alloy Injection Pen',
    tagline: 'Reusable Pen | Durable Peptide Administration',
    category: 'Supplies',
    overview:
      'Reusable permanent injection pen made of alloy material for accurate and convenient peptide dosing.',
    description:
      'Reusable alloy injection pen for accurate peptide dosing with durability.',
    keyBenefits: [
      'Reusable design',
      'Durable alloy construction',
      'Accurate dosing',
      'Eco-friendly alternative',
    ],
    reconstitutionInstructions: [],
    dosingGuidelines: ['Follow pen manufacturer guidelines'],
    monitoring: [],
    note: 'Long-term reusable alternative to disposable pens.',
    faqs: [],
    variants: [
      { label: 'Permanent Alloy Pen', price: 10, imageUrl: v('Permanent injection pen made of alloy material.png') },
    ],
    imageUrl: v('Permanent injection pen made of alloy material.png'),
  },
  {
    id: 'retatrutide-box-set',
    slug: 'retatrutide-box-set',
    name: 'Retatrutide Box Set',
    tagline: 'Premium Branded Box Set for Retatrutide Kits',
    category: 'Supplies',
    overview:
      'Premium branded box set for Retatrutide peptide kits — adds a professional presentation for retail or gifting.',
    description:
      'Premium box set packaging for Retatrutide kits.',
    keyBenefits: [
      'Premium branded packaging',
      'Professional presentation',
      'Bulk-pack friendly',
    ],
    reconstitutionInstructions: [],
    dosingGuidelines: [],
    monitoring: [],
    note: 'Box set packaging accessory for Retatrutide kits.',
    faqs: [],
    variants: [
      { label: 'Retatrutide Box Set', price: 40, imageUrl: v('Retatrutidebox set.png') },
    ],
    imageUrl: v('Retatrutidebox set.png'),
  },
  {
    id: 'glow-ghk-cu-box-set',
    slug: 'glow-ghk-cu-box-set',
    name: 'GLOW + GHK-Cu Box Set',
    tagline: 'Premium Branded Box Set for GLOW + GHK-Cu Kits',
    category: 'Supplies',
    overview:
      'Premium branded box set for GLOW + GHK-Cu peptide kits — professional packaging solution.',
    description:
      'Premium box set packaging for GLOW + GHK-Cu kits.',
    keyBenefits: [
      'Premium branded packaging',
      'Professional presentation',
      'Bulk-pack friendly',
    ],
    reconstitutionInstructions: [],
    dosingGuidelines: [],
    monitoring: [],
    note: 'Box set packaging accessory for GLOW + GHK-Cu kits.',
    faqs: [],
    variants: [
      { label: 'GLOW + GHK-Cu Box Set', price: 40, imageUrl: v('GLOW+GHK-Cu-Box-Set.png') },
    ],
    imageUrl: v('GLOW+GHK-Cu-Box-Set.png'),
  },

  // ---------- Lipo-C / MIC blends (rebuilt from price data) ----------
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
    date: 'June 18, 2026',
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
    date: 'June 18, 2026',
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
    date: 'June 18, 2026',
    excerpt:
      'As global demand for stable, efficient, and high-quality biopharmaceutical products continues to surge, freeze-dried powder production is becoming a cornerstone technology.',
    imageUrl: 'https://huataipeptide.com/wp-content/uploads/2025/08/news3-300x225.jpg',
    content: `June 18, 2026 – As global demand for stable, efficient, and high-quality biopharmaceutical products continues to surge, freeze-dried powder production is becoming a cornerstone technology in the biotechnology and pharmaceutical industries. Experts highlight that this process—also known as lyophilization—offers unmatched advantages in drug stability, storage, and transportation.

Freeze-dried powders are widely applied in vaccines, peptide drugs, antibiotics, and cosmetic formulations. Unlike liquid preparations, freeze-dried products retain their bioactivity for longer periods without refrigeration, making them especially valuable for global health initiatives and emerging markets where cold-chain logistics remain a challenge.

"Freeze-drying is not just a preservation method—it's a platform for innovation," said Dr. Zhang Yu, Head of Production at a leading biotech manufacturer. "Our advanced freeze-dried powder production lines allow us to deliver safer, more stable, and globally accessible medicines."

Recent industry reports forecast strong growth in the freeze-dried pharmaceuticals sector, with market size expected to exceed tens of billions of dollars by 2030. The technology is also expanding into new fields such as nutraceuticals, functional foods, and regenerative medicine, further broadening its industrial relevance.

In response to this trend, several biotech firms are investing heavily in state-of-the-art production facilities. Automated systems, quality monitoring technologies, and sustainable energy practices are being integrated to enhance production efficiency while meeting international regulatory standards.

Analysts note that the growing emphasis on long-term drug stability, combined with global healthcare demands, will keep freeze-dried powder production at the forefront of pharmaceutical innovation. With continuous technological advancements, the field is poised to play a decisive role in shaping the next decade of medicine.`,
  },
  {
    slug: 'revolutionizing-biotechnology',
    title: 'Revolutionizing Biotechnology: Next-Generation Peptide Innovations',
    date: 'June 18, 2026',
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
  crypto: {
    btc: {
      label: 'Bitcoin (BTC)',
      network: 'Bitcoin mainnet',
      address: 'bc1p4tnx7xv97ra5t3jj79029hhat7lftdk7jps3u3ed697fywjqumpqppffex',
      qrImages: [] as string[],
    },
    usdt: {
      label: 'USDT (ERC-20)',
      network: 'Ethereum (ERC-20)',
      address: '0x64bc7f5Bb5640168Bd4d8563fE7987B4b1E6e229',
      qrImages: [],
    },
  },
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
