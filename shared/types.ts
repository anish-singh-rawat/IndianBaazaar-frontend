// Shared types for the frontend application

export interface Product {
  id: string;
  name: string;
  title: string;
  description: string;
  specifications: Record<string, string>;
  category: string;
  old_price: number;
  our_price: number;
  mrp: number;
  discount_percentage: number;
  discount: number;
  images: string[];
  in_stock: boolean;
  average_rating: number;
  rating: number;
  review_count: number;
  reviews?: Review[];
  features: string[];
  tags: string[];
  sizes?: string[];
  colors?: string[];
  color?: string;
  size?: string;
  weight?: string;
  height?: string;
  company?: string;
  stockQuantity?: number;
  afterExchangePrice?: number;
  offers?: string[];
  coupons?: string[];
  faqs?: {
    id?: string;
    question: string;
    answer: string;
  }[];
  verified?: boolean;
  created_at: string;
  updated_at: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
  mobileNumber?: string;
  gender?: 'male' | 'female' | 'other';
  dateOfBirth?: string;
  profilePicture?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  postalCode?: string;
  preferences?: Record<string, any>;
  createdAt: string;
  updatedAt: string;
}

export interface AuthResponse {
  user: User;
  token: string;
  refreshToken: string;
  expiresIn: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
}

export interface CartItem {
  productId: string;
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}

export interface Order {
  id: string;
  userId: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  amount: number;
  currency: string;
  items: OrderItem[];
  shippingAddress: ShippingAddress;
  paymentMethod: string;
  paymentStatus: 'pending' | 'completed' | 'failed';
  createdAt: string;
  updatedAt: string;
}

export interface OrderItem {
  productId: string;
  quantity: number;
  price: number;
  selectedSize?: string;
  selectedColor?: string;
}

export interface ShippingAddress {
  name: string;
  street: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
  phone: string;
}

export interface CreateOrderRequest {
  amount: number;
  currency: string;
  items: {
    productId: string;
    quantity: number;
    price: number;
    selectedSize?: string;
    selectedColor?: string;
  }[];
  shippingAddress: {
    name: string;
    street: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    phone: string;
  };
}

export interface Review {
  id: string;
  productId: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  verified?: boolean;
  date: string;
  createdAt: string;
  updatedAt: string;
}

export interface Notification {
  id: string;
  userId: string;
  type: 'order_update' | 'promotion' | 'system' | 'reminder';
  title: string;
  message: string;
  isRead: boolean;
  data?: Record<string, any>;
  createdAt: string;
  updatedAt: string;
}

export interface SearchSuggestion {
  id: string;
  text: string;
  name: string;
  type: 'product' | 'category' | 'brand';
  category?: string;
  productId?: string;
  image?: string;
  price?: number;
}

export interface Location {
  address: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
  landmark?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface DashboardStats {
  totalProducts: number;
  totalOrders: number;
  totalCustomers: number;
  totalRevenue: number;
  recentOrders: Order[];
}

export interface AdminOrder extends Order {
  user: User;
  items: (OrderItem & {
    product: Product;
  })[];
}

export interface Customer extends User {
  totalOrders: number;
  totalSpent: number;
  lastOrderDate?: string;
}
