export type Product = {
  id: string;
  title: string;
  price: number;
  image: string;
  rating: number;
  category: string;
  description: string;
  badges?: string[];
}

const products: Product[] = [
  {
    id: 'p1',
    title: 'Pro Power Rack 2.0',
    price: 499.99,
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop',
    rating: 4.8,
    category: 'Strength',
    description: 'Heavy-duty rack with J-cups, safety bars, and multi-grip pull-up. Perfect for garage gyms.',
    badges: ['Bestseller','Free Shipping']
  },
  {
    id: 'p2',
    title: 'Adjustable Dumbbells (2x25kg)',
    price: 349.00,
    image: 'https://images.unsplash.com/photo-1517963628607-235ccdd5476d?q=80&w=1200&auto=format&fit=crop',
    rating: 4.7,
    category: 'Strength',
    description: 'Dial-a-weight dumbbells from 2.5–25kg with anti-slip knurling.',
    badges: ['New']
  },
  {
    id: 'p3',
    title: 'Air Assault Bike X',
    price: 699.00,
    image: 'https://images.unsplash.com/photo-1571731956672-ac43f7f1f1b9?q=80&w=1200&auto=format&fit=crop',
    rating: 4.6,
    category: 'Cardio',
    description: 'Fan bike for HIIT with Bluetooth metrics and ergonomic saddle.'
  },
  {
    id: 'p4',
    title: 'Olympic Barbell 20kg',
    price: 259.00,
    image: 'https://images.unsplash.com/photo-1599050751792-dfbd67a5ebf7?q=80&w=1200&auto=format&fit=crop',
    rating: 4.9,
    category: 'Strength',
    description: '190k PSI tensile strength, needle bearings, and black zinc finish.',
    badges: ['Pro Pick']
  },
  {
    id: 'p5',
    title: 'Premium Kettlebell 24kg',
    price: 89.00,
    image: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=1200&auto=format&fit=crop',
    rating: 4.5,
    category: 'Conditioning',
    description: 'Cast iron, texture powder coat for secure grip.'
  },
  {
    id: 'p6',
    title: 'Yoga Mat Grip+',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1604341173791-e53c1f1b8923?q=80&w=1200&auto=format&fit=crop',
    rating: 4.3,
    category: 'Mobility',
    description: '6mm TPE mat with alignment markers and strap.'
  }
]

export default products
