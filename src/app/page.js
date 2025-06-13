import Navbar from "@/components/content/Navbar";
import { Hero } from "@/components/content/Hero";
import DescriptionSection from "@/components/content/Description";
import Background from "@/components/content/Background";

export default function Home() {
  return (
    <div className=" justify items-center">
      {/* <Navbar /> */}
      <Navbar />
      <Hero />
      <DescriptionSection />
      <Background />
      {/* Add more components or content here */}
    </div>
  );
}
