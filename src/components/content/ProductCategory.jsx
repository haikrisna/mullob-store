"use client";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Container } from "../layout/container";

const categories = [
  { title: "Organic Vegetables" },
  { title: "Dairy Products" },
  { title: "Grain and Cereals" },
];

export default function ProductCategory() {
  return (
    <section className="py-16 text-center">
      <Container>
        <h2 className="text-4xl font-bold font-handwriting mb-2">
          Agricultural Product Range
        </h2>
        <p className="text-muted-foreground mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lorem
          ipsum dolor sit
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-4">
          {categories.map((item, index) => (
            <Card
              key={index}
              className="rounded-3xl shadow-md transition-transform duration-300 hover:scale-105 hover:-translate-y-1"
            >
              <CardContent className="flex flex-col items-center justify-center p-6">
                <div
                  className={cn(
                    "w-full aspect-[3/4] rounded-2xl bg-gray-200 border border-gray-400",
                    "bg-[repeating-linear-gradient(45deg,_#999_0px,_#999_2px,_transparent_2px,_transparent_6px)]",
                    index === 1 &&
                      "bg-[repeating-linear-gradient(45deg,_#999_0px,_#999_2px,_transparent_2px,_transparent_6px),repeating-linear-gradient(-45deg,_#999_0px,_#999_2px,_transparent_2px,_transparent_6px)]"
                  )}
                />
                <p className="mt-4 text-sm text-muted-foreground">
                  {item.title}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
