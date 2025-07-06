"use client";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import {
  InstagramLogoIcon,
  TiktokLogoIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


export default function ContactWithMap() {
  const socialMedia = [
    {
      name: "yusufsjb_",
      icon: TiktokLogoIcon,
      url: "https://www.tiktok.com/@yusufsjb_?lang=en",
    },
    {
      name: "yusufarsjb",
      icon: InstagramLogoIcon,
      url: "https://www.instagram.com/yusufarsjb/",
    },
    {
      name: "628812925308",
      icon: WhatsappLogoIcon,
      url: "https://api.whatsapp.com/send/?phone=628812925308&text&type=phone_number&app_absent=0",
    },
  ];

  return (
    <section className="py-0 bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Map Section */}
        <div className="relative h-96 overflow-hidden">
          {/* Google Maps Embed */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4319.310958483534!2d109.02400377542207!3d-7.705541976325386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6512c8b3702517%3A0x694f0c43e40bfab1!2sJl.%20Madura%2C%20Cigobang%2C%20Gunungsimping%2C%20Kec.%20Cilacap%20Tengah%2C%20Kabupaten%20Cilacap%2C%20Jawa%20Tengah%2053211!5e1!3m2!1sen!2sid!4v1751818285469!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Store Location Map"
          />
        </div>

        {/* Contact Information Section */}
        <div className=" py-16">
          <div className="max-w-4xl mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-2">
                Let's Talk
              </h2>
            </div>

            {/* Contact Details */}
            <div className="grid md:grid-cols-2 gap-12">
              {/* Store Information */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-6">
                  Mullob Store
                </h3>
                <div className="space-y-3 text-gray-600">
                  <p className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 mt-0.5 text-gray-500" />
                    <span>
                      Jl. Raya Mullob No. 123
                      <br />
                      Jakarta Selatan, DKI Jakarta
                      <br />
                      12345
                      <br />
                      Indonesia
                    </span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-gray-500" />
                    <span>+62-881-292-5308</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-gray-500" />
                    <span>yusufarhxzy@gmail.com</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-gray-500" />
                    <span>Open 24 Hours</span>
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-6">
                  Social
                </h3>

                {/* Vertical Social Media List */}
                <div className="space-y-4">
                  {socialMedia.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="flex items-center gap-3 text-gray-600 hover:text-gray-800 transition-colors duration-200 group"
                    >
                      <div className="w-8 h-8 flex items-center justify-center">
                        <social.icon
                          size={24}
                          className="group-hover:scale-110 transition-transform duration-200"
                        />
                      </div>
                      <span className="text-sm font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>

                {/* Follow us text */}
                <div className="mt-6">
                  <p className="text-gray-600 text-sm">
                    Follow us untuk update produk terbaru dan tips hidup sehat!
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-100 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-green-700 font-medium">
                  Kunjungi toko kami atau hubungi untuk konsultasi gratis
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
