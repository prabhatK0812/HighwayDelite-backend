import { connectDB } from "./config/db";
import { Experience } from "./models/experienceModel";
import dotenv from "dotenv";

dotenv.config();

const seedData = [
  {
    
    title: "Kayaking",
    description: "Curated small-group experience. Certified guide.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    location: "Udupi",
    price: 999,
  },

  {
    
    title: "Camping Night",
    description:
      "Spend the night under the stars with bonfire, BBQ, and live music beside the river.",
    image:
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80",
    location: "Rishikesh",
    price: 1199,
  },
  {
    
    title: "Mountain Trekking",
    description:
      "Explore scenic Himalayan trails with experienced local guides and packed breakfast.",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
    location: "Manali",
    price: 1499,
  },
  {
    
    title: "Desert Safari",
    description:
      "Ride across golden dunes in a jeep and enjoy Rajasthani folk dance and dinner.",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
    location: "Jaisalmer",
    price: 1999,
  },
  {
    
    title: "Nandi Hills Sunrise",
    description: "Enjoy the breathtaking sunrise with tea and snacks.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    location: "Bangalore",
    price: 899,
  },
  {
    
    title: "Jungle Safari",
    description:
      "Go deep into the forest with trained guides to spot tigers and elephants.",
    image:
      "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?auto=format&fit=crop&w=800&q=80",
    location: "Bandipur",
    price: 1299,
  },
  {
    
    title: "Cycling Trail",
    description:
      "Ride through lush valleys and coffee plantations with professional cyclists.",
    image:
      "https://images.unsplash.com/photo-1525104885119-8806dd94ad58?auto=format&fit=crop&w=800&q=80",
    location: "Ooty",
    price: 699,
  },
  {
    
    title: "Boating Experience",
    description:
      "Enjoy a calm boat ride across the lake and witness mesmerizing sunsets.",
    image:
      "https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=800&q=80", // ✅ fixed
    location: "Udaipur",
    price: 799,
  },
  {
   
    
    title: "Coffee Plantation Walk",
    description:
      "Learn how coffee is grown and roasted in lush green plantations.",
    image:
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=80",
    location: "Coorg",
    price: 899,
  },
  {
    
    title: "Beach Camping",
    description:
      "Relax by the waves and enjoy seafood BBQ under the moonlit sky.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    location: "Goa",
    price: 1399,
  },
  {
  
    
    title: "Paragliding Adventure",
    description:
      "Fly high over the mountains with certified paragliders for a lifetime experience.",
    image:
      "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?auto=format&fit=crop&w=800&q=80",
    location: "Bir Billing",
    price: 1899,
  },
    {
  
    title: "Hot Air Balloon Ride",
    description:
      "Get a bird’s-eye view of the city and sunrise in a colorful hot air balloon.",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
    location: "Jaipur",
    price: 2499,
  },
];

const seed = async () => {
  await connectDB();
  await Experience.deleteMany();
  await Experience.insertMany(seedData);
  console.log("✅ 12 experiences inserted successfully!");
  process.exit();
};

seed();

