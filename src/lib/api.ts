import { Product } from ".../../shared/types";
import axiosInstance from "./axios";

export const api = {
  // Product APIs
  async getProducts(params?: {
    category?: string;
    search?: string;
    in_stock?: boolean;
  }): Promise<Product[]> {
    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 100));
      const searchParams = new URLSearchParams();
      searchParams.append("category", params.category);

      // Filter by category
      if (params?.category && params.category !== "all") {
       searchParams.append("category", params.category);
      }

      // Filter by search term
      if (params?.search) {
        searchParams.append("search", params.search);
      }

      // Filter by stock
      if (params?.in_stock) {
       searchParams.append("in_stock", "true");
      }

      const response = await axiosInstance.get(`/products?${searchParams}`);

      const products = Array.isArray(response.data.products) ? response.data.products : [];
      return products.map(transformBackendProductToFrontend);
    } catch (error) {
      console.error("Error fetching products:", error);
      return []; // Return empty array on error
    }
  },

  async getProductById(id: string): Promise<Product | null> {
    try {
      // Simulate API delay
      const response = await axiosInstance.get(`/products/${id}`);
      return response.data.product ? transformBackendProductToFrontend(response.data.product) : null;
    } catch (error: any) {
         if (error.response?.status === 404) {
        return null;
      }
      console.error("Error fetching product:", error);
      return null;
    }
  },

  async getProductsReviews(productId: string): Promise<any> {
    try {
      // Simulate API delay
     const response = await axiosInstance.get(`/products/${productId}/reviews`);
      return response.data || { reviews: [] };
    } catch (error) {
      console.error("Error fetching product reviews:", error);
      return { reviews: [] };
    }
  },

  async getSearchSuggestions(query: string): Promise<any["suggestions"]> {
    if (!query || query.trim().length < 2) {
      return [];
    }

    try {
      // Simulate API delay
       const response = await axiosInstance.get(`/products/search/suggestions?q=${encodeURIComponent(query)}`);
      return response.data.suggestions;

    } catch (error) {
      console.error("Error fetching search suggestions:", error);
      return [];
    }
  },

  async getProductsByCategory(category: string): Promise<Product[]> {
    try {
      // Simulate API delay
      const response = await axiosInstance.get(`/products/category/${category}`);
      const products = Array.isArray(response.data.products) ? response.data.products : [];
      return products.map(transformBackendProductToFrontend);
    } catch (error) {
      console.error("Error fetching products by category:", error);
      return [];
    }
  },
};

// Transform backend product data to frontend format
function transformBackendProductToFrontend(backendProduct: any): Product {
  return {
    id: backendProduct.id,
    name: backendProduct.name,
    title: backendProduct.name,
    description: backendProduct.description,
    specifications: {},
    category: backendProduct.category,
    old_price: parseFloat(backendProduct.mrp) || 0,
    our_price: parseFloat(backendProduct.our_price) || 0,
    mrp: parseFloat(backendProduct.mrp) || 0,
    discount_percentage: backendProduct.discount || 0,
    discount: backendProduct.discount || 0,
    images: backendProduct.images || [],
    in_stock: backendProduct.in_stock,
    average_rating: parseFloat(backendProduct.rating) || 0,
    rating: parseFloat(backendProduct.rating) || 0,
    review_count: 0,
    reviews: [],
    features: [],
    tags: [],
    sizes: backendProduct.size ? [backendProduct.size] : undefined,
    colors: backendProduct.color ? [backendProduct.color] : undefined,
    color: backendProduct.color,
    size: backendProduct.size,
    weight: backendProduct.weight,
    height: backendProduct.height,
    company: backendProduct.company,
    stockQuantity: backendProduct.stock_quantity,
    afterExchangePrice: parseFloat(backendProduct.after_exchange_price) || undefined,
    offers: backendProduct.offers || [],
    coupons: backendProduct.coupons || [],
    faqs: backendProduct.faqs || [],
    verified: false,
    created_at: backendProduct.createdAt,
    updated_at: backendProduct.updatedAt,
  };
}

// Transform frontend product data to backend format
function transformFrontendProductToBackend(
  frontendProduct: Partial<Product>,
): any {
  return {
    name: frontendProduct.name,
    description: frontendProduct.description,
    images: frontendProduct.images,
    mrp: frontendProduct.mrp,
    our_price: frontendProduct.our_price,
    discount: frontendProduct.discount,
    offers: frontendProduct.offers,
    coupons: frontendProduct.coupons,
    company: frontendProduct.company,
    color: frontendProduct.color,
    size: frontendProduct.size,
    weight: frontendProduct.weight,
    height: frontendProduct.height,
    category: frontendProduct.category,
    in_stock: frontendProduct.in_stock,
    stockQuantity: frontendProduct.stockQuantity,
    faqs: frontendProduct.faqs,
  };
}

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
      },
    );
    return response.data;
  },

  async getProductReviews(productId: string) {
    try {
      const response = await axiosInstance.get(
        `/products/${productId}/reviews`,
      );
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
    const response = await axiosInstance.post(`/orders`, orderData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },

  async verifyPayment(paymentData: any) {
    const token = localStorage.getItem("authToken");
    const response = await axiosInstance.post(`/payments/verify`, paymentData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },

  async getOrders() {
    const token = localStorage.getItem("authToken");
    const response = await axiosInstance.get(`/orders`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },

  async getOrderById(orderId: string) {
    const token = localStorage.getItem("authToken");
    const response = await axiosInstance.get(`/orders/${orderId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },
};

export const adminApi = {
  getProducts: () => api.getProducts(),
  getStats: async () => {
    const response = await axiosInstance.get(`/admin/stats`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    });
    return response.data;
  },
  getCustomers: async () => {
    const response = await axiosInstance.get(`/admin/customers`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    });
    return response.data;
  },
  getOrders: async () => {
    const response = await axiosInstance.get(`/admin/orders`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    });
    return response.data;
  },
  createProduct: async (productData: Partial<Product>) => {
    const token = localStorage.getItem("authToken");
    const backendData = transformFrontendProductToBackend(productData);
    const response = await axiosInstance.post("/products", backendData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  },
  updateProduct: async (productId: string, productData: Partial<Product>) => {
    const token = localStorage.getItem("authToken");
    const backendData = transformFrontendProductToBackend(productData);
    const response = await axiosInstance.put(
      `/products/${productId}`,
      backendData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      },
    );
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
      },
    );
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
      },
    );
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
      },
    );
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
    return response.data;
  },

  async getProfile() {
    const token = localStorage.getItem("authToken");
    const response = await axiosInstance.get(`/auth/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },

  async googleAuth(token: string) {
    const response = await axiosInstance.post(`/auth/google`, { token });
    return response.data;
  },
};
