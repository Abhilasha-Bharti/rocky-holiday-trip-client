import { useState } from "react";
import { Button } from "@/components/ui/button";

const CallbackModal = ({ place, onClose }) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      ...form,
      place: place.name,
    });

    alert("Callback requested!");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      
      <div className="bg-white rounded-xl p-6 w-[90%] md:w-[400px]">
        
        <h2 className="text-xl font-bold mb-2">
          Request Callback
        </h2>

        <p className="text-sm text-gray-500 mb-4">
          For {place.name}
        </p>

        <form onSubmit={handleSubmit}>
          
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-2 mb-3 rounded"
            required
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border p-2 mb-4 rounded"
            required
            onChange={(e) =>
              setForm({ ...form, phone: e.target.value })
            }
          />

          <div className="flex gap-2">
            <Button type="submit" className="w-full">
              Submit
            </Button>

            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="w-full"
            >
              Cancel
            </Button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default CallbackModal;