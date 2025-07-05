import { Product } from "@shared/types";
import {
  ProductsResponse,
  ProductResponse,
  SearchSuggestionsResponse,
} from "@shared/api";
import axiosInstance from "./axios";

export const api = {
  // Product APIs
  async getProducts(params?: {
    category?: string;
    search?: string;
    in_stock?: boolean;
  }): Promise<Product[]> {
    const searchParams = new URLSearchParams();

    if (params?.category && params.category !== "all") {
      searchParams.append("category", params.category);
    }
    if (params?.search) {
      searchParams.append("search", params.search);
    }
    if (params?.in_stock) {
      searchParams.append("in_stock", "true");
    }
    const response = await axiosInstance.get(`/products?${searchParams}`);
    if (response.status !== 200) {
      throw new Error("Failed to fetch products");
    }

    const data: ProductsResponse = response.data;
    return data.products;
  },

  async getProductById(id: string): Promise<Product | null> {
    try {
      const response = await axiosInstance.get(`/products/${id}`);
      if (response.status === 404) {
        return null;
      }

      const data: ProductResponse = response.data;
      return data.product;
    } catch (error) {
      console.error("Error fetching product:", error);
      return null;
    }
  },

  async getProductsReviews(productId: string): Promise<any> {
    const response = await axiosInstance.get(`/products/${productId}/reviews`);
    return response.data;
  },

  async getSearchSuggestions(query: string): Promise<SearchSuggestionsResponse["suggestions"]> {
    if (!query || query.trim().length < 2) {
      return [];
    }

    try {
      const response = await axiosInstance.get(`/products/search/suggestions?q=${encodeURIComponent(query)}`);
      
      if (response.status !== 200) {
        throw new Error("Failed to fetch search suggestions");
      }

      const data: SearchSuggestionsResponse = response.data;
      return data.suggestions;
    } catch (error) {
      console.error("Error fetching search suggestions:", error);
      return [];
    }
  },

  async getProductsByCategory(category: string): Promise<Product[]> {
    try {
      const response = await axiosInstance.get(`/products/category/${category}`);
      if (response.status !== 200) {
        throw new Error("Failed to fetch products by category");
      }

      const data: ProductsResponse = response.data;
      return data.products;
    } catch (error) {
      console.error("Error fetching products by category:", error);
      return [];
    }
  },
};

// Legacy exports for backward compatibility
export const productApi = {
  getAll: () => api.getProducts(),
  getById: (id: string) => api.getProductById(id),
  getByCategory: (category: string) => api.getProductsByCategory(category),
  getSearchSuggestions: (query: string) => api.getSearchSuggestions(query),
};

// Review APIs
export const reviewApi = {
  async createReview(productId: string, rating: number, comment: string) {
    const token = localStorage.getItem("authToken");
    const response = await axiosInstance.post(
      `/reviews`,
      { productId, rating, comment },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status !== 200) {
      const error = response.data;
      throw new Error(error.error || "Failed to create review");
    }

    return response.data;
  },

  async getProductReviews(productId: string) {
    try {
      const response = await axiosInstance.get(`/products/${productId}/reviews`);
      return response.data;
    } catch (error) {
      console.error("Error fetching reviews:", error);
      return { reviews: [] };
    }
  },
};

// Order APIs
export const orderApi = {
  async createOrder(orderData: any) {
    const token = localStorage.getItem("authToken");
    const response = await axiosInstance.post(
      `/orders`,
      orderData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status !== 200) {
      const error = response.data;
      throw new Error(error.error || "Failed to create order");
    }

    return response.data;
  },

  async verifyPayment(paymentData: any) {
    const token = localStorage.getItem("authToken");
    const response = await axiosInstance.post(
      `/payments/verify`,
      paymentData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status !== 200) {
      const error = response.data;
      throw new Error(error.error || "Payment verification failed");
    }

    return response.data;
  },

  async getOrders() {
    const token = localStorage.getItem("authToken");
    const response = await axiosInstance.get(`/orders`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status !== 200) {
      throw new Error("Failed to fetch orders");
    }

    return response.data;
  },

  async getOrderById(orderId: string) {
    const token = localStorage.getItem("authToken");
    const response = await axiosInstance.get(`/orders/${orderId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status !== 200) {
      throw new Error("Failed to fetch order");
    }

    return response.data;
  },
};

export const adminApi = {
  // These would be admin-specific API calls
  // For now, using the same product API
  getProducts: () => api.getProducts(),
  getStats: async () => {
    const response = await axiosInstance.get(`/admin/stats`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    });
    if (response.status !== 200) {
      throw new Error("Failed to fetch admin stats");
    }
    return response.data;
  },
  getCustomers: async () => {
    const response = await axiosInstance.get(`/admin/customers`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    });
    if (response.status !== 200) {
      throw new Error("Failed to fetch customers");
    }
    return response.data;
  },
  getOrders: async () => {
    const response = await axiosInstance.get(`/admin/orders`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    });
    if (response.status !== 200) {
      throw new Error("Failed to fetch orders");
    }
    return response.data;
  },
};

// Notification APIs
export const notificationApi = {
  async getNotifications() {
    const token = localStorage.getItem("authToken");
    const response = await axiosInstance.get(`/notifications`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status !== 200) {
      throw new Error("Failed to fetch notifications");
    }

    return response.data;
  },

  async markAsRead(notificationId: string) {
    const token = localStorage.getItem("authToken");
    const response = await axiosInstance.patch(
      `/notifications/${notificationId}/read`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status !== 200) {
      throw new Error("Failed to mark notification as read");
    }

    return response.data;
  },

  async createNotification(notificationData: {
    title: string;
    message: string;
    type: string;
    userId?: string;
  }) {
    const token = localStorage.getItem("authToken");
    const response = await axiosInstance.post(
      `/notifications`,
      notificationData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status !== 200) {
      const error = response.data;
      throw new Error(error.error || "Failed to create notification");
    }

    return response.data;
  },

  async deleteNotification(notificationId: string) {
    const token = localStorage.getItem("authToken");
    const response = await axiosInstance.delete(
      `/notifications/${notificationId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status !== 200) {
      throw new Error("Failed to delete notification");
    }

    return response.data;
  },
};

// Auth APIs
export const authApi = {
  async login(email: string, password: string) {
    const response = await axiosInstance.post(`/auth/login`, {
      email,
      password,
    });

    if (response.status !== 200) {
      const error = response.data;
      throw new Error(error.error || "Login failed");
    }

    return response.data;
  },

  async register(userData: {
    name: string;
    email: string;
    password: string;
    mobileNumber?: string;
    gender?: "male" | "female" | "other";
  }) {
    const response = await axiosInstance.post(`/auth/register`, userData);

    if (response.status !== 200) {
      const error = response.data;
      throw new Error(error.error || "Registration failed");
    }

    return response.data;
  },

  async getProfile() {
    const token = localStorage.getItem("authToken");
    const response = await axiosInstance.get(`/auth/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status !== 200) {
      throw new Error("Failed to fetch profile");
    }

    return response.data;
  },

  async googleAuth(googleData: {
    googleId: string;
    email: string;
    name: string;
  }) {
    const response = await axiosInstance.post(`/auth/google`, googleData);

    if (response.status !== 200) {
      const error = response.data;
      throw new Error(error.error || "Google authentication failed");
    }

    return response.data;
  },
};
