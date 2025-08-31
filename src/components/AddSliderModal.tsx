import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axiosInstance from "@/lib/axios";

interface AddSliderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (sliderData: any) => void; // Updated to pass the slider data
}

export default function AddSliderModal({ isOpen, onClose, onAdd }: AddSliderModalProps) {
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    subtitle: "",
    ctaText: "",
    ctaLink: "",
    backgroundColor: "#f3f4f6",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("authToken");
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };

      // API call to create slider
      const response = await axiosInstance.post(
        "/create-event-slides",
        formData,
        { headers }
      );

      // Pass the created slider data to the parent component
      onAdd(response.data);
      onClose();
      
      // Reset form
      setFormData({
        image: "",
        title: "",
        subtitle: "",
        ctaText: "",
        ctaLink: "",
        backgroundColor: "#f3f4f6",
      });
      
    } catch (err: any) {
      console.error("Failed to add slider", err);
      alert(`Error creating banner: ${err.response?.data?.message || err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-30" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Dialog.Panel className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
              <Dialog.Title className="text-lg font-bold">Add Slider Banner</Dialog.Title>
              <div className="mt-4 space-y-4">
                <div>
                  <Label htmlFor="image">Image URL</Label>
                  <Input 
                    name="image" 
                    value={formData.image} 
                    onChange={handleChange} 
                    placeholder="https://example.com/banner.jpg"
                  />
                </div>
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input 
                    name="title" 
                    value={formData.title} 
                    onChange={handleChange} 
                    placeholder="Big Sale Event"
                  />
                </div>
                <div>
                  <Label htmlFor="subtitle">Subtitle</Label>
                  <Input 
                    name="subtitle" 
                    value={formData.subtitle} 
                    onChange={handleChange} 
                    placeholder="Up to 70% Off"
                  />
                </div>
                <div>
                  <Label htmlFor="ctaText">CTA Text</Label>
                  <Input 
                    name="ctaText" 
                    value={formData.ctaText} 
                    onChange={handleChange} 
                    placeholder="Shop Now"
                  />
                </div>
                <div>
                  <Label htmlFor="ctaLink">CTA Link</Label>
                  <Input 
                    name="ctaLink" 
                    value={formData.ctaLink} 
                    onChange={handleChange} 
                    placeholder="https://example.com/shop"
                  />
                </div>
                <div>
                  <Label htmlFor="backgroundColor">Background Color</Label>
                  <div className="flex items-center gap-2">
                    <Input 
                      type="color" 
                      name="backgroundColor" 
                      value={formData.backgroundColor} 
                      onChange={handleChange} 
                      className="w-12 h-12 p-1"
                    />
                    <Input 
                      value={formData.backgroundColor} 
                      onChange={handleChange} 
                      className="flex-1"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end gap-2">
                <Button variant="outline" onClick={onClose} disabled={loading}>
                  Cancel
                </Button>
                <Button onClick={handleSubmit} disabled={loading}>
                  {loading ? "Saving..." : "Add"}
                </Button>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}