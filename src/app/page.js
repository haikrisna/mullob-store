import Navbar from "@/components/content/Navbar";
import { Hero } from "@/components/content/Hero";
import DescriptionSection from "@/components/content/Description";
import Background from "@/components/content/Background";
import CompanyValues from "@/components/content/CompanyValues";
import ProductCategory from "@/components/content/ProductCategory";

export default function Home() {
  return (
    <div className=" justify items-center">
      {/* <Navbar /> */}
      <Navbar />
      <Hero />
      <DescriptionSection />
      <Background />
      <CompanyValues/>
      <ProductCategory/>
      {/* Add more components or content here */}
    </div>
  );
}
