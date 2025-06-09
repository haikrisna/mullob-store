import Navbar from "@/components/content/Navbar";
import { Hero } from "@/components/content/Hero";
import DescriptionSection from "@/components/content/Description";

export default function Home() {
  return (
    <div className=" justify items-center">
      {/* <Navbar /> */}
      <Navbar />
      <Hero />
      <DescriptionSection />
      {/* Add more components or content here */}
    </div>
  );
}
