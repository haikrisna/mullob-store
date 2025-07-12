"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import BriketArang from "../src/briket_arang.jpeg";
import Coconut from "../src/coconut.jpeg";
import GulaJawa from "../src/gula_jawa.jpeg";
import Jahe from "../src/jahe.jpg";
import Kelor from "../src/kelor.jpg";
import Kopi from "../src/kopi.jpeg";
import Susu from "../src/milk.jpg";
import Jagung from "../src/jagung.jpg";

const products = [
  {
    id: 1,
    name: "Briket Arang",
    category: "Others",
    price: "Rp 77.000",
    image: BriketArang,
  },
  {
    id: 2,
    name: "Coconut",
    category: "Vegetables and Fruits",
    price: "Rp 45.000",
    image: Coconut,
  },
  {
    id: 3,
    name: "Gula Jawa",
    category: "Vegetables and Fruits",
    price: "Rp 35.000",
    image: GulaJawa,
  },
  {
    id: 5,
    name: "Jahe",
    category: "Spices",
    price: "Rp 25.000",
    image: Jahe,
  },
  {
    id: 6,
    name: "Jagung",
    category: "Grain and Cereals",
    price: "Rp 30.000",
    image: Jagung,
  },
  {
    id: 7,
    name: "Kopi",
    category: "Grain and Cereals",
    price: "Rp 95.000",
    image: Kopi,
  },
  {
    id: 8,
    name: "Santan",
    category: "Vegetables and Fruits",
    price: "Rp 55.000",
    image: Susu,
  },
];

export default function ProductCatalog() {
  return (
    <section className="py-16 text-center">
      <h2 className="text-4xl font-bold font-handwriting mb-8">Our Product</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {products.map((product) => (
          <Card
            key={product.id}
            className="rounded-3xl bg-transparent p-0 overflow-hidden transition-transform duration-300 hover:scale-105 hover:-translate-y-1"
          >
            <CardContent className="p-0">
              {/* Product Image */}
              <div className="aspect-[3/4] w-full border-b border-gray-400 relative overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
              {/* Content bawah */}
              <div className="p-4 text-left">
                <p className="font-semibold">{product.name}</p>
                <p className="text-sm text-muted-foreground">
                  {product.category}
                </p>
                {/* <p className="font-medium mt-2">{product.price}</p> */}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      {/* Footer link */}
      <div className="mt-12 flex flex-col items-end max-w-6xl mx-auto px-4">
        <div className=" flex items-center gap-2">
          {/* <p className="text-muted-foreground px-4">Eksplore produk lainnya</p> */}
          <Button
            variant="outline"
            className="rounded-full  hover:bg-green-200 bg-transparent"
          >
            Lihat selengkapnya →
          </Button>
        </div>
      </div>
    </section>
  );
}
