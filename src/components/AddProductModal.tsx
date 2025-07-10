import { useState } from "react";
import { X, Upload, Plus, Trash2, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "../../shared/types";
import axios from "axios";

interface AddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (product: Omit<Product, "id" | "reviews" | "rating">) => void;
}

export default function AddProductModal({
  isOpen,
  onClose,
  onSave,
}: AddProductModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    images: [] as string[],
    mrp: "",
    our_price: "",
    discount: "",
    rating: "4.0",
    afterExchangePrice: "",
    offers: [""],
    coupons: [""],
    company: "",
    color: "",
    size: "",
    weight: "",
    height: "",
    category: "clothes" as Product["category"],
    in_stock: true,
    stockQuantity: "",
    faqs: [{ question: "", answer: "" }],
  });
  const [uploadingImages, setUploadingImages] = useState<boolean[]>([]);
  const [uploadErrors, setUploadErrors] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Transform to match backend API expectations
    const productData = {
      name: formData.name,
      description: formData.description,
      images: formData.images.filter((img) => img && img.trim() !== ""),
      mrp: parseFloat(formData.mrp) || 0,
      our_price: parseFloat(formData.our_price) || 0,
      discount: parseFloat(formData.discount) || 0,
      offers: formData.offers.filter((offer) => offer.trim() !== ""),
      coupons: formData.coupons.filter((coupon) => coupon.trim() !== ""),
      company: formData.company,
      color: formData.color,
      size: formData.size,
      weight: formData.weight,
      height: formData.height,
      category: formData.category,
      in_stock: formData.in_stock,
      stockQuantity: parseInt(formData.stockQuantity) || 0,
      faqs: formData.faqs
        .filter((faq) => faq.question.trim() !== "" && faq.answer.trim() !== "")
        .map((faq, index) => ({
          id: (index + 1).toString(),
          question: faq.question,
          answer: faq.answer,
        })),
    };

    onSave(productData as any);
    onClose();

    // Reset form
    setFormData({
      name: "",
      description: "",
      images: [],
      mrp: "",
      our_price: "",
      discount: "",
      rating: "4.0",
      afterExchangePrice: "",
      offers: [""],
      coupons: [""],
      company: "",
      color: "",
      size: "",
      weight: "",
      height: "",
      category: "clothes",
      in_stock: true,
      stockQuantity: "",
      faqs: [{ question: "", answer: "" }],
    });
    setUploadingImages([]);
    setUploadErrors([]);
  };

  const uploadImage = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/file/upload-image",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      return response.data.imageUrl;
    } catch (error) {
      console.error("Error uploading image:", error);
      throw new Error("Failed to upload image");
    }
  };

  const handleFileUpload = async (files: FileList | null, index?: number) => {
    if (!files || files.length === 0) return;

    const newUploadingState = [...uploadingImages];
    const newErrorsState = [...uploadErrors];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const uploadIndex = index !== undefined ? index : formData.images.length;

      // Validate file type
      if (!file.type.startsWith("image/")) {
        newErrorsState[uploadIndex] = "Please select an image file";
        continue;
      }

      // Validate file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        newErrorsState[uploadIndex] = "Image size must be less than 5MB";
        continue;
      }

      newUploadingState[uploadIndex] = true;
      newErrorsState[uploadIndex] = "";
      setUploadingImages(newUploadingState);
      setUploadErrors(newErrorsState);

      try {
        const imageUrl = await uploadImage(file);

        setFormData((prev) => {
          const newImages = [...prev.images];
          if (index !== undefined) {
            newImages[index] = imageUrl;
          } else {
            newImages.push(imageUrl);
          }
          return { ...prev, images: newImages };
        });

        newUploadingState[uploadIndex] = false;
        setUploadingImages([...newUploadingState]);
      } catch (error) {
        newUploadingState[uploadIndex] = false;
        newErrorsState[uploadIndex] = "Failed to upload image";
        setUploadingImages([...newUploadingState]);
        setUploadErrors([...newErrorsState]);
      }
    }
  };

  const removeImage = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
    setUploadingImages((prev) => prev.filter((_, i) => i !== index));
    setUploadErrors((prev) => prev.filter((_, i) => i !== index));
  };

  const addOfferField = () => {
    setFormData((prev) => ({
      ...prev,
      offers: [...prev.offers, ""],
    }));
  };

  const removeOfferField = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      offers: prev.offers.filter((_, i) => i !== index),
    }));
  };

  const updateOffer = (index: number, value: string) => {
    setFormData((prev) => ({
      ...prev,
      offers: prev.offers.map((offer, i) => (i === index ? value : offer)),
    }));
  };

  const addCouponField = () => {
    setFormData((prev) => ({
      ...prev,
      coupons: [...prev.coupons, ""],
    }));
  };

  const removeCouponField = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      coupons: prev.coupons.filter((_, i) => i !== index),
    }));
  };

  const updateCoupon = (index: number, value: string) => {
    setFormData((prev) => ({
      ...prev,
      coupons: prev.coupons.map((coupon, i) => (i === index ? value : coupon)),
    }));
  };

  const addFaqField = () => {
    setFormData((prev) => ({
      ...prev,
      faqs: [...prev.faqs, { question: "", answer: "" }],
    }));
  };

  const removeFaqField = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      faqs: prev.faqs.filter((_, i) => i !== index),
    }));
  };

  const updateFaq = (
    index: number,
    field: "question" | "answer",
    value: string,
  ) => {
    setFormData((prev) => ({
      ...prev,
      faqs: prev.faqs.map((faq, i) =>
        i === index ? { ...faq, [field]: value } : faq,
      ),
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Add New Product</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-8">
          {/* Basic Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Basic Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      company: e.target.value,
                    }))
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description *
              </label>
              <textarea
                required
                rows={4}
                value={formData.description}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category *
              </label>
              <select
                required
                value={formData.category}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    category: e.target.value as Product["category"],
                  }))
                }
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="clothes">Clothes</option>
                <option value="beauty">Beauty</option>
                <option value="mice">Mice</option>
                <option value="electronics">Electronics</option>
                <option value="books">Books</option>
                <option value="groceries">Groceries</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* Product Images */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">
                Product Images
              </h3>
              <label className="cursor-pointer">
                <Button type="button" variant="outline" size="sm" asChild>
                  <span>
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Images
                  </span>
                </Button>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={(e) => handleFileUpload(e.target.files)}
                  className="hidden"
                />
              </label>
            </div>

            {/* Uploaded Images Preview */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {formData.images.map((imageUrl, index) => (
                <div key={index} className="relative group">
                  <div className="aspect-square border-2 border-dashed border-gray-300 rounded-lg overflow-hidden bg-gray-50">
                    {uploadingImages[index] ? (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                      </div>
                    ) : (
                      <img
                        src={imageUrl}
                        alt={`Product image ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>

                  {/* Remove button */}
                  <Button
                    type="button"
                    variant="destructive"
                    size="sm"
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => removeImage(index)}
                  >
                    <X className="h-3 w-3" />
                  </Button>

                  {/* Error message */}
                  {uploadErrors[index] && (
                    <p className="text-xs text-red-500 mt-1">
                      {uploadErrors[index]}
                    </p>
                  )}

                  {/* Replace button */}
                  <label className="absolute bottom-2 left-2 cursor-pointer">
                    <Button
                      type="button"
                      variant="secondary"
                      size="sm"
                      className="opacity-0 group-hover:opacity-100 transition-opacity h-6 text-xs"
                      asChild
                    >
                      <span>Replace</span>
                    </Button>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileUpload(e.target.files, index)}
                      className="hidden"
                    />
                  </label>
                </div>
              ))}

              {/* Add more images placeholder */}
              {formData.images.length < 10 && (
                <label className="cursor-pointer">
                  <div className="aspect-square border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors">
                    <ImageIcon className="h-8 w-8 text-gray-400 mb-2" />
                    <span className="text-sm text-gray-600">Add Image</span>
                    <span className="text-xs text-gray-400">Max 5MB</span>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileUpload(e.target.files)}
                    className="hidden"
                  />
                </label>
              )}
            </div>

            {formData.images.length === 0 && (
              <div className="text-center py-8 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
                <ImageIcon className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                <h4 className="text-lg font-medium text-gray-600 mb-2">
                  No Images Uploaded
                </h4>
                <p className="text-gray-500 mb-4">
                  Upload at least one product image to continue
                </p>
                <label className="cursor-pointer">
                  <Button type="button" variant="outline" asChild>
                    <span>
                      <Upload className="h-4 w-4 mr-2" />
                      Choose Files
                    </span>
                  </Button>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={(e) => handleFileUpload(e.target.files)}
                    className="hidden"
                  />
                </label>
              </div>
            )}
          </div>

          {/* Pricing */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Pricing</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  MRP (₹) *
                </label>
                <input
                  type="number"
                  required
                  min="0"
                  step="0.01"
                  value={formData.mrp}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, mrp: e.target.value }))
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Our Price (₹) *
                </label>
                <input
                  type="number"
                  required
                  min="0"
                  step="0.01"
                  value={formData.our_price}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      our_price: e.target.value,
                    }))
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  After-exchange Price (₹)
                </label>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={formData.afterExchangePrice}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      afterExchangePrice: e.target.value,
                    }))
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Product Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Color
                </label>
                <input
                  type="text"
                  value={formData.color}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, color: e.target.value }))
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Size
                </label>
                <input
                  type="text"
                  value={formData.size}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, size: e.target.value }))
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Weight
                </label>
                <input
                  type="text"
                  value={formData.weight}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, weight: e.target.value }))
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Height
                </label>
                <input
                  type="text"
                  value={formData.height}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, height: e.target.value }))
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Stock Quantity *
                </label>
                <input
                  type="number"
                  required
                  min="0"
                  value={formData.stockQuantity}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      stockQuantity: e.target.value,
                    }))
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.in_stock}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      in_stock: e.target.checked,
                    }))
                  }
                  className="mr-2"
                />
                In Stock
              </label>
            </div>
          </div>

          {/* Offers */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">
                Available Offers
              </h3>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={addOfferField}
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Offer
              </Button>
            </div>

            <div className="space-y-3">
              {formData.offers.map((offer, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    placeholder={`Offer ${index + 1}`}
                    value={offer}
                    onChange={(e) => updateOffer(index, e.target.value)}
                    className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {formData.offers.length > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => removeOfferField(index)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Coupons */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Coupons</h3>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={addCouponField}
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Coupon
              </Button>
            </div>

            <div className="space-y-3">
              {formData.coupons.map((coupon, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    placeholder={`Coupon code ${index + 1}`}
                    value={coupon}
                    onChange={(e) => updateCoupon(index, e.target.value)}
                    className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {formData.coupons.length > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => removeCouponField(index)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* FAQs */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">FAQs</h3>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={addFaqField}
              >
                <Plus className="h-4 w-4 mr-2" />
                Add FAQ
              </Button>
            </div>

            <div className="space-y-4">
              {formData.faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-4"
                >
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-medium">FAQ {index + 1}</h4>
                    {formData.faqs.length > 1 && (
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => removeFaqField(index)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="Question"
                      value={faq.question}
                      onChange={(e) =>
                        updateFaq(index, "question", e.target.value)
                      }
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <textarea
                      rows={3}
                      placeholder="Answer"
                      value={faq.answer}
                      onChange={(e) =>
                        updateFaq(index, "answer", e.target.value)
                      }
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-4 pt-6 border-t">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button type="submit" className="flex-1">
              Add Product
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
