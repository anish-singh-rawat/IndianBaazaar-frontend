// API response types for the frontend application

import { Product, User, Order, Review, Notification, SearchSuggestion, DashboardStats, AdminOrder, Customer } from "./types";

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface ProductsResponse extends ApiResponse<Product[]> {
  products: Product[];
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface ProductResponse extends ApiResponse<Product> {
  product: Product;
}

export interface SearchSuggestionsResponse extends ApiResponse<SearchSuggestion[]> {
  suggestions: SearchSuggestion[];
}

export interface ReviewsResponse extends ApiResponse<Review[]> {
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface CreateReviewResponse extends ApiResponse<Review> {}

export interface OrdersResponse extends ApiResponse<Order[]> {
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface OrderResponse extends ApiResponse<Order> {}

export interface CreateOrderResponse extends ApiResponse<{
  order: Order;
  paymentId?: string;
  razorpayOrderId?: string;
}> {}

export interface PaymentVerificationResponse extends ApiResponse<{
  order: Order;
  paymentStatus: 'success' | 'failed';
}> {}

export interface NotificationsResponse extends ApiResponse<Notification[]> {
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface AdminStatsResponse extends ApiResponse<DashboardStats> {}

export interface AdminCustomersResponse extends ApiResponse<Customer[]> {
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface AdminOrdersResponse extends ApiResponse<AdminOrder[]> {
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface AuthResponse extends ApiResponse<{
  user: User;
  token: string;
  refreshToken: string;
  expiresIn: number;
}> {}

export interface ProfileResponse extends ApiResponse<User> {}

export interface UpdateProfileResponse extends ApiResponse<User> {}
