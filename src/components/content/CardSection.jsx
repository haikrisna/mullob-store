"use client"
import { Card, CardContent } from "@/components/ui/card"

const PartnerCard = ({ image, title, subtitle, description, imageAlt = "Partner image", className = "" }) => {
  return (
    <Card
      className={`overflow-hidden bg-white border-gray-200 hover:shadow-md transition-shadow flex-shrink-0 w-80 ${className}`}
    >
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          {/* Image/Icon Section - Made smaller */}
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
              {image ? (
                <img src={image || "/placeholder.svg"} alt={imageAlt} className="w-full h-full object-cover" />
              ) : (
                <div className="w-6 h-6 bg-blue-500 rounded-md"></div>
              )}
            </div>
          </div>
          {/* Content Section */}
          <div className="flex-1 min-w-0">
            <div className="space-y-1">
              {/* Main Title */}
              <h3 className="text-base font-semibold text-gray-900 truncate">{title || "Partner Name"}</h3>
              {/* Subtitle */}
              {subtitle && <p className="text-xs text-gray-600 truncate">{subtitle}</p>}
              {/* Description */}
              {description && <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">{description}</p>}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function StorePartnerSection() {
  const partnersData = [
    {
      title: "Toko Organik Sehat",
      subtitle: "Organic Store • Partner since 2023",
      description: "Menyediakan produk organik berkualitas tinggi untuk kesehatan keluarga Indonesia.",
    },
    {
      title: "Warung Tradisional Nusantara",
      subtitle: "Traditional Store • Partner since 2022",
      description: "Menghadirkan cita rasa tradisional Indonesia dengan bahan-bahan pilihan terbaik.",
    },
    {
      title: "Koperasi Tani Maju",
      subtitle: "Farmer Cooperative • Partner since 2024",
      description: "Mendukung petani lokal dengan distribusi hasil pertanian segar dan berkualitas.",
    },
    {
      title: "Pasar Modern Hijau",
      subtitle: "Green Market • Partner since 2023",
      description: "Marketplace ramah lingkungan yang mengutamakan produk berkelanjutan.",
    },
    {
      title: "Toko Rempah Nusantara",
      subtitle: "Spice Store • Partner since 2022",
      description: "Spesialis rempah-rempah asli Indonesia dengan kualitas ekspor terbaik.",
    },
    {
      title: "Kedai Kopi Lokal",
      subtitle: "Coffee Shop • Partner since 2024",
      description: "Menghadirkan kopi specialty dari berbagai daerah di Indonesia.",
    },
  ]

  const shouldAnimate = partnersData.length > 3

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Store Partner</h2>
          <p className="text-gray-600">Partners who work with us</p>
        </div>

        {shouldAnimate ? (
          // Animated horizontal scroll for more than 3 cards
          <div className="relative overflow-hidden">
            <div className="flex gap-4 animate-scroll">
              {/* Duplicate the array for seamless loop */}
              {[...partnersData, ...partnersData].map((partner, index) => (
                <PartnerCard
                  key={`${partner.title}-${index}`}
                  title={partner.title}
                  subtitle={partner.subtitle}
                  description={partner.description}
                />
              ))}
            </div>
          </div>
        ) : (
          // Static grid for 3 or fewer cards
          <div className="flex justify-center gap-4 flex-wrap">
            {partnersData.slice(0, 3).map((partner, index) => (
              <PartnerCard
                key={index}
                title={partner.title}
                subtitle={partner.subtitle}
                description={partner.description}
              />
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
