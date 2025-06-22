import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const LayoutCard = ({
  image,
  title,
  description,
  subtitle,
  imageAlt = "Card image",
  className = "",
}) => {
  return (
    <Card
      className={`overflow-hidden bg-green-50 border-green-200 ${className}`}
    >
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          {/* Image/Icon Section */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-green-100 border-2 border-green-300 rounded-lg flex items-center justify-center overflow-hidden">
              {image ? (
                <img
                  src={image}
                  alt={imageAlt}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-green-200 rounded-md"></div>
              )}
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 min-w-0">
            <div className="space-y-2">
              {/* Main Title */}
              <div className="h-4 bg-green-300 rounded-full w-3/4"></div>

              {/* Subtitle */}
              <div className="h-3 bg-green-200 rounded-full w-1/2"></div>

              {/* Description */}
              <div className="h-3 bg-green-200 rounded-full w-2/3"></div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Contoh penggunaan dengan konten nyata
const ContentLayoutCard = ({
  image,
  title,
  description,
  subtitle,
  imageAlt = "Card image",
  className = "",
}) => {
  return (
    <Card
      className={`overflow-hidden bg-white border-gray-200 hover:shadow-md transition-shadow ${className}`}
    >
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          {/* Image/Icon Section */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
              {image ? (
                <img
                  src={image}
                  alt={imageAlt}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-8 h-8 bg-blue-500 rounded-md"></div>
              )}
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 min-w-0">
            <div className="space-y-2">
              {/* Main Title */}
              <h3 className="text-lg font-semibold text-gray-900 truncate">
                {title || "Card Title"}
              </h3>

              {/* Subtitle */}
              {subtitle && (
                <p className="text-sm text-gray-600 truncate">{subtitle}</p>
              )}

              {/* Description */}
              {description && (
                <p className="text-sm text-gray-500 leading-relaxed">
                  {description}
                </p>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Demo component
export default function CardDemo() {
  const sampleData = [
    {
      title: "Partner 1",
      subtitle: "Productivity • Updated 2 hours ago",
      description:
        "Streamline your workflow with our comprehensive project management solution.",
    },
    {
      title: "Partner 2",
      subtitle: "Business Intelligence • Updated yesterday",
      description:
        "Get insights from your data with powerful visualization and reporting tools.",
    },
    {
      title: "Partner 3",
      subtitle: "Communication • Updated 3 days ago",
      description: "Manage customer inquiries and support tickets efficiently.",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <div className="space-y-4">
        {/* <h2 className="text-2xl font-bold text-gray-900">Layout Reference</h2>
        <p className="text-gray-600">Placeholder version matching your reference image:</p>
        <LayoutCard /> */}
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Store Partner</h2>
        <p className="text-gray-600">partners who work with us:</p>
        <div className="space-y-4">
          {sampleData.map((item, index) => (
            <ContentLayoutCard
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
