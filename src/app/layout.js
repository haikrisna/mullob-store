// app/layout.js
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Mullob Store | Produk Pertanian Terbaik & Pengiriman Internasional",
  description:
    "Mullob Store menghadirkan produk pertanian segar langsung dari kebun ke meja Anda, dengan komitmen pada kualitas, keberlanjutan, dan layanan pengiriman ke luar negeri.",
  keywords:
    "Mullob Store, produk pertanian, pertanian organik, sayur segar, toko hasil bumi, petani lokal, pertanian berkelanjutan, ekspor hasil bumi, international agriculture store, fresh farm products",
  authors: [{ name: "Mullob Store", url: "https://mullob-store.vercel.app/" }],
  creator: "Mullob Store",
  publisher: "Mullob Store",
  metadataBase: new URL("https://mullob-store.vercel.app/"),
  alternates: {
    canonical: "https://mullob-store.vercel.app/",
    languages: {
      "id-ID": "https://mullob-store.vercel.app/",
      "en-US": "https://mullob-store.vercel.app/en",
    },
  },
  openGraph: {
    title: "Mullob Store | Fresh Farm Products & Sustainable Agriculture",
    description:
      "From farm to your table — high-quality, sustainable agricultural products with international shipping.",
    url: "https://mullob-store.vercel.app",
    siteName: "Mullob Store",
    type: "website",
    locale: "id_ID", // atau "en_US" jika default-nya bahasa Inggris
    images: [
      {
        url: "https://mullob-store.vercel.app/og-image.jpg", // Ganti dengan gambar promosi OG
        width: 1200,
        height: 630,
        alt: "Mullob Store - Produk Pertanian Segar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mullob Store | Produk Pertanian Segar & Berkelanjutan",
    description:
      "Temukan hasil pertanian segar langsung dari kebun, siap dikirim ke seluruh dunia.",
    images: ["https://mullob-store.vercel.app/og-image.jpg"],
    site: "@mullobstore", // Ganti jika punya akun Twitter
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      {" "}
      {/* Ganti ke "en" jika default bahasa Inggris */}
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
