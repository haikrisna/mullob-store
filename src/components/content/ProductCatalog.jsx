"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const products = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  name: "Product",
  category: "Organic Vegetables",
  price: "Rp 77.000",
}));

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
              {/* Top garis pattern */}
              <div
                className={cn(
                  "aspect-[3/4] w-full border-b border-gray-400",
                  "bg-[repeating-linear-gradient(45deg,_#999_0px,_#999_2px,_transparent_2px,_transparent_6px)]"
                )}
              />
              {/* Content bawah */}
              <div className="p-4 text-left">
                <p className="font-semibold">{product.name}</p>
                <p className="text-sm text-muted-foreground">
                  {product.category}
                </p>
                <p className="font-medium mt-2">{product.price}</p>
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
            className="rounded-full  hover:bg-green-200"
          >
            Lihat selengkapnya →
          </Button>
        </div>
      </div>
    </section>
  );
}
