export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'Oils' | 'Soaps' | 'Skincare';
  rating: number;
  reviews: number;
  isNew?: boolean;
  isSale?: boolean;
  ingredients?: string[];
  benefits?: string[];
  howToUse?: string;
}

export interface CartItem extends Product {
  quantity: number;
}
