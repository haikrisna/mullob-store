import Navbar from "@/components/content/Navbar";
import { Hero } from "@/components/content/Hero";
import DescriptionSection from "@/components/content/Description";
import Background from "@/components/content/Background";
import CompanyValues from "@/components/content/CompanyValues";
import ProductCategory from "@/components/content/ProductCategory";
import ProductCatalog from "@/components/content/ProductCatalog";
import CompanyStats from "@/components/content/CompanyStats";
import CardDemo from "@/components/content/CardSection";
import CircularStats from "@/components/content/NewCompanyStats";
import { Footer2 } from "@/components/content/FooterComponent";
import ContactWithMap from "@/components/content/Contact";

export default function Home() {
  return (
    <div className=" justify items-center">
      {/* <Navbar /> */}
      <Navbar />
      <Hero />
      <DescriptionSection />
      <Background />
      <CompanyValues />
      <ProductCategory />
      <ProductCatalog />
      <CircularStats />
      <CompanyStats />
      <CardDemo />
      <ContactWithMap />
      <Footer2 />
      {/* Add more components or content here */}
    </div>
  );
}
