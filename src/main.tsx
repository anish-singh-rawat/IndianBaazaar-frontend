import "./global.css";

import { Toaster } from "../src/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "../src/components/ui/sonner";
import { TooltipProvider } from "../src/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { NotificationProvider } from "@/contexts/NotificationContext";
import ProtectedRoute from "../src/components/ProtectedRoute";
import Index from "./pages/Index";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Admin from "./pages/Admin";
import Account from "./pages/Account";
import Notifications from "./pages/Notifications";
import CustomerCare from "./pages/CustomerCare";
import ApiTest from "./pages/ApiTest";
import NotFound from "./pages/NotFound";
import LearnMore from "./pages/LearnMore";
import AboutUs from "./pages/AboutUs";
import Electronics from "./pages/Electronics";
import Fashion from "./pages/Fashion";
import OrderNow from "./pages/OrderNow";
import Books from "./pages/Books";
import Groceries from "./pages/Groceries";
import Kitchen from "./pages/Kitchen";
import Kids from "./pages/Kids";

const queryClient = new QueryClient();

const App = () => (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <NotificationProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route
                path="/admin"
                element={
                  <ProtectedRoute requireAdmin>
                    <Admin />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/account"
                element={
                  <ProtectedRoute>
                    <Account />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/notifications"
                element={
                  <ProtectedRoute>
                    <Notifications />
                  </ProtectedRoute>
                }
              />
              <Route path="/customer-care" element={<CustomerCare />} />
              <Route path="/api-test" element={<ApiTest />} />
              <Route path="/learn-more" element={<LearnMore />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/electronics" element={<Electronics />} />
              <Route path="/fashion" element={<Fashion />} />
              <Route path="/order-now" element={<OrderNow />} />
              <Route path="/books" element={<Books />} />
              <Route path="/groceries" element={<Groceries />} />
              <Route path="/kitchen" element={<Kitchen />} />
              <Route path="/kids" element={<Kids />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </TooltipProvider>
        </NotificationProvider>
      </AuthProvider>
    </QueryClientProvider>
  </BrowserRouter>
);

createRoot(document.getElementById("root")!).render(<App />);
