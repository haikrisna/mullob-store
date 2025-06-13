import Navbar from "@/components/content/Navbar";
import { Hero } from "@/components/content/Hero";
import DescriptionSection from "@/components/content/Description";
import Background from "@/components/content/Background";
import CompanyValues from "@/components/content/CompanyValues";

export default function Home() {
  return (
    <div className=" justify items-center">
      {/* <Navbar /> */}
      <Navbar />
      <Hero />
      <DescriptionSection />
      <Background />
      <CompanyValues/>
      {/* Add more components or content here */}
    </div>
  );
}
