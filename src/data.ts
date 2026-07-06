import { Leaf, Droplets, Nut, Sprout, Wind, ShieldCheck } from 'lucide-react';
import { Product } from './types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Pure Black Seed Oil (Kalonji)',
    description: '100% cold-pressed organic black seed oil. Known as the "seed of blessing", it promotes healthy hair growth, soothes scalp conditions, and nourishes the skin with powerful antioxidants.',
    price: 1850,
    image: '/images/black_seed_oil.jpg',
    category: 'Oils',
    rating: 4.9,
    reviews: 128,
    isSale: true,
    ingredients: ['100% Pure Nigella Sativa (Black Seed) Oil'],
    benefits: ['Promotes hair growth', 'Reduces hair fall', 'Soothes dry scalp', 'Nourishes dry skin'],
    howToUse: 'For Hair: Massage into scalp and leave for 2 hours before washing. For Skin: Apply 2-3 drops to clean face before moisturizer.'
  },
  {
    id: '2',
    name: 'Sweet Almond Oil (Badam)',
    description: 'Premium cold-pressed sweet almond oil. Rich in Vitamin E, this lightweight oil deeply moisturizes skin, reduces dark circles, and adds a healthy shine to dull hair.',
    price: 1650,
    image: '/images/sweet_almond_oil.jpg',
    category: 'Oils',
    rating: 4.8,
    reviews: 95,
    isNew: true,
    ingredients: ['100% Pure Prunus Dulcis (Sweet Almond) Oil'],
    benefits: ['Reduces dark circles', 'Improves skin complexion', 'Strengthens hair', 'Treats dandruff'],
    howToUse: 'Massage gently under the eyes before bed. For hair, apply to ends to prevent split ends.'
  },
  {
    id: '3',
    name: 'Neem & Tea Tree Acne Soap',
    description: 'Handcrafted herbal soap formulated specifically for acne-prone skin. Enriched with pure neem extract and tea tree oil to naturally combat breakouts and purify pores.',
    price: 450,
    image: '/images/neem_soap.jpg',
    category: 'Soaps',
    rating: 4.7,
    reviews: 210,
    ingredients: ['Saponified Olive Oil', 'Coconut Oil', 'Neem Extract', 'Tea Tree Essential Oil', 'Aloe Vera'],
    benefits: ['Clears acne', 'Controls excess oil', 'Antibacterial', 'Soothes inflammation'],
    howToUse: 'Lather between hands with water, apply generously to face and body, then rinse off.'
  },
  {
    id: '4',
    name: 'Organic Coconut Oil (Nariyal)',
    description: 'Extra virgin, unrefined coconut oil. A versatile beauty staple that provides intense hydration for dry skin and acts as a deep conditioning mask for damaged hair.',
    price: 1200,
    image: '/images/coconut_oil.jpg',
    category: 'Oils',
    rating: 4.9,
    reviews: 340,
    ingredients: ['100% Extra Virgin Cocos Nucifera (Coconut) Oil'],
    benefits: ['Deep conditioning', 'Makeup remover', 'Body moisturizer', 'Lip balm'],
    howToUse: 'Warm a small amount in hands and apply where needed.'
  },
  {
    id: '5',
    name: 'Rose & Sandalwood Glow Soap',
    description: 'A luxurious bathing bar that combines the cooling properties of sandalwood with the brightening effects of rose. Leaves skin soft, radiant, and beautifully scented.',
    price: 550,
    image: '/images/rose_soap.jpg',
    category: 'Soaps',
    rating: 4.8,
    reviews: 87,
    ingredients: ['Saponified Oils', 'Rose Extract', 'Sandalwood Powder', 'Glycerin'],
    benefits: ['Brightens skin', 'Even skin tone', 'Luxurious scent', 'Gentle cleansing'],
    howToUse: 'Use daily in the shower for a radiant glow.'
  },
  {
    id: '6',
    name: 'Miracle Hair Growth Blend',
    description: 'A potent infusion of 7 natural herbs and oils including Castor, Mustard, and Rosemary. Designed specifically to stimulate hair follicles, reduce hair fall, and promote thicker, stronger hair.',
    price: 2100,
    image: '/images/miracle_oil.jpg',
    category: 'Oils',
    rating: 5.0,
    reviews: 412,
    isSale: true,
    ingredients: ['Castor Oil', 'Mustard Oil', 'Almond Oil', 'Rosemary Essential Oil', 'Amla Extract', 'Brahmi'],
    benefits: ['Stimulates rapid growth', 'Reduces hair fall', 'Thickens hair', 'Prevents premature graying'],
    howToUse: 'Massage gently into scalp and leave overnight. Wash with a mild herbal shampoo.'
  },
  {
    id: '8',
    name: 'Organic Face Wash',
    description: '100% natural organic liquid face wash. Deeply cleanses and refreshes the skin, leaving it healthy and glowing without using harsh chemicals.',
    price: 850,
    image: '/images/organic_face_wash.jpg',
    category: 'Skincare',
    rating: 4.9,
    reviews: 120,
    isNew: true,
    ingredients: ['Aloe Vera Extract', 'Rose Water', 'Tea Tree Essential Oil', 'Vitamin E'],
    benefits: ['Deeply cleanses pores', 'Refreshing and hydrating', 'Promotes healthy glowing skin', '100% Organic & Chemical-free'],
    howToUse: 'Pump a small amount onto wet hands, massage gently onto damp face in circular motions, then rinse thoroughly.'
  }
];

export const ingredients = [
  { name: 'Aloe Vera', desc: 'Hydrates & Soothes', icon: Droplets },
  { name: 'Black Seed', desc: 'Antioxidant Rich', icon: Sprout },
  { name: 'Almond', desc: 'Vitamin E Boost', icon: Nut },
  { name: 'Rosemary', desc: 'Stimulates Growth', icon: Leaf },
  { name: 'Coconut', desc: 'Deep Moisture', icon: Wind },
  { name: 'Neem', desc: 'Purifies Pores', icon: ShieldCheck },
];

export const testimonials = [
  {
    name: 'Aisha K.',
    text: "The Black Seed oil from Bazgha Naturals is pure magic. I've noticed a huge difference in my hair texture within a month. Highly recommended!",
    rating: 5
  },
  {
    name: 'Fatima R.',
    text: 'I struggle with sensitive skin and their Neem Acne Soap is the only thing that works without drying out my face. Absolutely love the organic philosophy.',
    rating: 5
  },
  {
    name: 'Zainab M.',
    text: 'Premium quality packaging and the sweet almond oil smells divine. It absorbs so quickly into the skin. Will definitely order again.',
    rating: 5
  }
];
