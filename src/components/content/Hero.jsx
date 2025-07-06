import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { CertificateIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import LogoMullob from "../src/mullob_logo.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <Container>
        <div className="grid items-center gap-8 bg-muted-2 lg:grid-cols-2">
          <div className="flex flex-col items-center p-16 text-center lg:items-start lg:text-left">
            <p>New Release</p>
            <h1 className="my-6 text-4xl font-bold text-pretty lg:text-6xl">
              Welcome to Mullob Store
            </h1>
            <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              doloremque mollitia fugiat omnis! Porro facilis quo animi
              consequatur. Explicabo.
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <Link href="https://api.whatsapp.com/send/?phone=628812925308&text&type=phone_number&app_absent=0">
                <Button>
                  Let's Shop
                  <ArrowRight className="size-4" />
                </Button>
              </Link>
              <Button variant="outline">
                Certified <CertificateIcon className=" w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="relative aspect-square w-full overflow-hidden rounded-lg lg:aspect-[4/3]">
            <Image
              src={LogoMullob}
              alt="Mullob Store Logo"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export { Hero };
