import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Slider {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundColor?: string;
}

interface UpdateSliderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpdate: (sliderId: number, sliderData: Partial<Slider>) => Promise<void>; // Updated signature
  slide: Slider | null; // the banner being edited
}

export default function UpdateSliderModal({ isOpen, onClose, onUpdate, slide }: UpdateSliderModalProps) {
  const [formData, setFormData] = useState<Partial<Slider>>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (slide) {
      setFormData({ ...slide });
    }
  }, [slide]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!slide) return;
    
    setLoading(true);
    try {
      await onUpdate(slide.id, formData); // Pass both parameters
      onClose();
    } catch (err) {
      console.error("Failed to update slider", err);
    } finally {
      setLoading(false);
    }
  };

  if (!slide) return null;

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
              <Dialog.Title className="text-lg font-bold">Update Slider Banner</Dialog.Title>
              <div className="mt-4 space-y-4">
                <div>
                  <Label htmlFor="image">Image URL</Label>
                  <Input 
                    name="image" 
                    value={formData.image || ""} 
                    onChange={handleChange} 
                  />
                </div>
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input 
                    name="title" 
                    value={formData.title || ""} 
                    onChange={handleChange} 
                  />
                </div>
                <div>
                  <Label htmlFor="subtitle">Subtitle</Label>
                  <Input 
                    name="subtitle" 
                    value={formData.subtitle || ""} 
                    onChange={handleChange} 
                  />
                </div>
                <div>
                  <Label htmlFor="ctaText">CTA Text</Label>
                  <Input 
                    name="ctaText" 
                    value={formData.ctaText || ""} 
                    onChange={handleChange} 
                  />
                </div>
                <div>
                  <Label htmlFor="ctaLink">CTA Link</Label>
                  <Input 
                    name="ctaLink" 
                    value={formData.ctaLink || ""} 
                    onChange={handleChange} 
                  />
                </div>
                <div>
                  <Label htmlFor="backgroundColor">Background Color</Label>
                  <Input 
                    type="color" 
                    name="backgroundColor" 
                    value={formData.backgroundColor || "#f3f4f6"} 
                    onChange={handleChange} 
                  />
                </div>
              </div>

              <div className="mt-6 flex justify-end gap-2">
                <Button variant="outline" onClick={onClose}>
                  Cancel
                </Button>
                <Button onClick={handleSubmit} disabled={loading}>
                  {loading ? "Updating..." : "Save"}
                </Button>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}