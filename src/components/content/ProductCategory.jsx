"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Container } from "../layout/container"
import Image from "next/image"
import DaryProducts from "../src/dairyproducts.jpg"
import GrainNCereals from "../src/graincereals.jpg"
import OrganicVegetable from "../src/organicvegetable.jpg"
import Rempah from "../src/rempah.jpg";

const categories = [
  {
    title: "Vegetables and Fruits",
    image: OrganicVegetable,
  },
  {
    title: "Spice",
    image: Rempah,
  },
  {
    title: "Grain and Cereals",
    image: GrainNCereals,
  },
]

export default function ProductCategory() {
  return (
    <section className="py-16 text-center">
      <Container>
        <h2 className="text-4xl font-bold font-handwriting mb-2">Agricultural Product Range</h2>
        <p className="text-muted-foreground mb-12">
          We provide a wide variety of fresh, natural food ingredients for processing.
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-4">
          {categories.map((item, index) => (
            <Card
              key={index}
              className="rounded-3xl shadow-md transition-transform duration-300 hover:scale-105 hover:-translate-y-1"
            >
              <CardContent className="flex flex-col items-center justify-center pt-1 pb-2">
                <div className="w-full aspect-[3/4] rounded-2xl bg-gray-200 border overflow-hidden relative">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{item.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
