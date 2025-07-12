"use client";
import { Container } from "@/components/layout/container";

const Background = () => {
  return (
    <section className="py-16">
      <Container>
        {/* Background Company */}
        <div className="grid items-center gap-10 lg:grid-cols-2 mb-20">
          <div className="flex flex-col items-center p-8 text-center lg:items-start lg:text-left">
            <div className="flex-col items-center">
              <h1 className="text-4xl font-extrabold text-black mb-6">
                Background Company
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                Mullob Store began as a small home-based business with a passion
                for quality local produce. Over time, it has grown into a
                trusted food supplier, providing vegetables, fruits, spices, and
                grains to both local and international markets.
              </p>
            </div>
          </div>

          {/* Video Section - Phone Size */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative bg-black rounded-[2.5rem] p-2 shadow-2xl">
                <div className="bg-black rounded-[2rem] overflow-hidden">
                  {/* Video Container */}
                  <div className="relative w-64 h-[480px] bg-gray-900 rounded-[1.8rem] overflow-hidden">
                    {/* Video Element */}
                    <video
                      className="w-full h-full object-cover rounded-[1.8rem]"
                      autoPlay
                      loop
                      muted
                      playsInline
                      onError={(e) => {
                        console.error("Video failed to load:", e);
                      }}
                    >
                      <source src="/adajagung.mp4" type="video/mp4" />
                      {/* Fallback content if video fails to load */}
                      <div className="w-full h-full bg-gradient-to-br from-red-400 to-pink-500 flex items-center justify-center">
                        <div className="text-center text-white">
                          <p className="text-sm font-medium">Video not found</p>
                          <p className="text-xs opacity-75 mt-1">
                            Check file path
                          </p>
                        </div>
                      </div>
                    </video>
                  </div>
                </div>

                {/* Phone Details */}
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-800 rounded-full"></div>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gray-800 rounded-full"></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-amber-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Vision and Mission */}
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="flex flex-col items-center p-8 text-center lg:items-start lg:text-left">
            <div className="flex-col items-center">
              <h1 className="text-4xl font-extrabold text-black mb-6">
                Vision
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                To become a globally trusted provider of high-quality
                agricultural products from Indonesia, empowering local farmers
                while promoting sustainable and ethical trade practices
                worldwide.
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="flex-col items-center text-center lg:text-left p-8">
              <h1 className="text-4xl font-extrabold text-black mb-6">
                Mission
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission is to supply premium vegetables, fruits, spices, and
                grains to global and local markets by empowering Indonesian
                farmers, ensuring consistent quality, and upholding sustainable
                agricultural practices that benefit communities and the
                environment.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Background;
