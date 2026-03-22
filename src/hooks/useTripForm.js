import { useForm } from "react-hook-form";

export const useTripForm = () => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    reset 
  } = useForm({
    defaultValues: {
      countryCode: "+91",
    }
  });

  const onSubmit = async (data) => {
    // Senior Developer Tip: Add a loading state here for real API calls
    console.log("Ready for API Submission:", data);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    alert("Trip request sent! We will contact you soon.");
    reset();
  };

  return { register, handleSubmit, errors, onSubmit };
};