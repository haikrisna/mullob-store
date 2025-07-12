"use client";
import Image from "next/image";
import OwnerPhoto from "../src/ucup2.jpg";

const OwnerSection = ({
  owner = {
    name: "Yusuf Anugerah Sijabat",
    title: "Founder & CEO",
    photo: { OwnerPhoto },
    quote: `We are committed to delivering the best products and services to each customer.
                                                        Your trust is our highest priority. What began as a humble home-based effort has grown
                                                        into a mission to connect Indonesia’s rich agricultural resources with the world.
                                                        Thank you for supporting Mullob Store.`,
    signature: "Mullob Store",
    experience: "Serving wholeheartedly",
  },
}) => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Owner
            </h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto rounded-full"></div>
          </div>

          {/* Owner Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-100 rounded-full translate-y-12 -translate-x-12 opacity-50"></div>

            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                {/* Photo Section */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    {/* Main Photo Circle */}
                    <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-amber-200 to-amber-300 p-2 shadow-xl">
                      <div className="w-full h-full rounded-full bg-gray-200 border-4 border-white shadow-inner overflow-hidden">
                        <Image
                          src={OwnerPhoto}
                          alt={owner.name}
                          width={224}
                          height={224}
                          className="object-cover rounded-full"
                        />
                      </div>
                    </div>

                    {/* Decorative Ring */}
                    <div className="absolute -inset-4 rounded-full border-2 border-amber-200 opacity-30"></div>

                    {/* Trust Badge */}
                    <div className="absolute -bottom-2 -right-2 bg-green-500 text-white p-3 rounded-full shadow-lg">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 text-center lg:text-left">
                  {/* Quote */}
                  <div className="mb-8">
                    <svg
                      className="w-12 h-12 text-amber-400 mx-auto lg:mx-0 mb-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                    </svg>
                    <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed italic">
                      "{owner.quote}"
                    </blockquote>
                  </div>

                  {/* Owner Info */}
                  <div className="mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      {owner.name}
                    </h3>
                    <p className="text-amber-600 font-semibold text-lg mb-4">
                      {owner.title}
                    </p>

                    {/* Signature */}
                    <div className="mb-6">
                      <div
                        className="text-2xl font-signature text-amber-700 mb-2"
                        style={{ fontFamily: "cursive" }}
                      >
                        {owner.signature}
                      </div>
                      <div className="w-32 h-0.5 bg-amber-400 mx-auto lg:mx-0"></div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
                      <div className="text-2xl font-bold text-amber-700 mb-1">
                        {owner.experience}
                      </div>
                      <div className="text-sm text-gray-600">Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Trusted</h4>
              <p className="text-gray-600 text-sm">
                Commitment to quality and customer satisfaction
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Experienced</h4>
              <p className="text-gray-600 text-sm">
                Years of dedicated service
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-amber-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Caring</h4>
              <p className="text-gray-600 text-sm">
                Prioritizing your needs and satisfaction
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { OwnerSection };
