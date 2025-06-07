import { z } from "zod";

export const featuredCars = [
    {
        id: 1,
        make: "Toyota",
        model: "Camry",
        year: 2023,
        price: 28999,
        images: ["/1.png"],
        transmission: "Automatic",
        fuelType: "Gasoline",
        bodyType: "Sedan",
        km: 15000,
        color: "White",
        wishlisted: false,
    },
    {
        id: 5,
        make: "BMW",
        model: "X5",
        year: 2021,
        price: 55999,
        images: ["/4.png"],
        transmission: "Automatic",
        fuelType: "Gasoline",
        bodyType: "SUV",
        km: 15000,
        color: "Black",
        wishlisted: true
    },
    {
        id: 3,
        make: "Tesla",
        model: "Model 3",
        year: 2022,
        price: 42999,
        images: ["/3.jpg"],
        transmission: "Automatic",
        fuelType: "Electric",
        bodyType: "Sedan",
        km: 8000,
        color: "Red",
        wishlisted: false,
    },
    // {
    //     id: 2,
    //     make: "Honda",
    //     model: "Civic",
    //     year: 2023,
    //     price: 26499,
    //     images: ["/2.png"],
    //     transmission: "Manual",
    //     fuelType: "Gasoline",
    //     bodyType: "Sedan",
    //     km: 12000,
    //     color: "Blue",
    //     wishlisted: true,
    // },


];

export const carMakes = [
    { id: 1, name: "Hyundai", image: "/make/hyundai.webp" },
    { id: 2, name: "Honda", image: "/make/honda.webp" },
    { id: 3, name: "BMW", image: "/make/bmw.webp" },
    { id: 4, name: "Tata", image: "/make/tata.webp" },
    { id: 5, name: "Mahindra", image: "/make/mahindra.webp" },
    { id: 6, name: "Ford", image: "/make/ford.webp" },
];

export const bodyTypes = [
    { id: 1, name: "SUV", image: "/body/suv.webp" },
    { id: 2, name: "Sedan", image: "/body/sedan.webp" },
    { id: 3, name: "Hatchback", image: "/body/hatchback.webp" },
    { id: 4, name: "Convertible", image: "/body/convertible.webp" },
];

export const faqItems = [
    {
        question: "How does the test drive booking work?",
        answer:
            "Simply find a car you're interested in, click the 'Test Drive' button, and select an available time slot. Our system will confirm your booking and provide all necessary details.",
    },
    {
        question: "Can I search for cars using an image?",
        answer:
            "Yes! Our AI-powered image search lets you upload a photo of a car you like, and we'll find similar models in our inventory.",
    },
    {
        question: "Are all cars certified and verified?",
        answer:
            "All cars listed on our platform undergo a verification process. We are a trusted dealerships and verified private seller.",
    },
    {
        question: "What happens after I book a test drive?",
        answer:
            "After booking, you'll receive a confirmation email with all the details. We will also contact you to confirm and provide any additional information.",
    },
];
  

export const fuelTypes = ["Petrol", "Diesel", "Electric", "Hybrid", "Plug-in Hybrid"];
export const transmissions = ["Automatic", "Manual", "Semi-Automatic"];
export const bodyTypesArray = [
    "SUV",
    "Sedan",
    "Hatchback",
    "Convertible",
    "Coupe",
    "Wagon",
    "Pickup",
];
export const carStatuses = ["AVAILABLE", "UNAVAILABLE", "SOLD"];



// Define form schema with Zod
export const carFormSchema = z.object({
  make: z.string().min(1, "Maker is required"),
  model: z.string().min(1, "Model is required"),
  year: z.string().refine((val) => {
    const year = parseInt(val);
    return !isNaN(year) && year >= 1900 && year <= new Date().getFullYear() + 1;
  }, "Valid year required"),
  price: z.string().min(1, "Price is required"),
  km: z.string().min(1, "km is required"),
  color: z.string().min(1, "Color is required"),
  fuelType: z.string().min(1, "Fuel type is required"),
  transmission: z.string().min(1, "Transmission is required"),
  bodyType: z.string().min(1, "Body type is required"),
  seats: z.string().optional(),
  description: z.string().min(10, "Description must be at least 10 characters"),
  status: z.enum(["AVAILABLE", "UNAVAILABLE", "SOLD"]),
  featured: z.boolean().default(false),
  // Images are handled separately
});