import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { CertificateIcon } from "@phosphor-icons/react/dist/ssr";

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
              <Button>
                Let's Shop
                <ArrowRight className="size-4" />
              </Button>
              <Button variant="outline">
                Certified <CertificateIcon className=" w-4 h-4" />
              </Button>
            </div>
          </div>
          <img
            src="https://mir-s3-cdn-cf.behance.net/projects/max_808/a6bb4659057797.Y3JvcCw0NzksMzc1LDMxNSw1OTE.png"
            alt="placeholder hero"
            className="h-full w-full object-cover"
          />
        </div>
      </Container>
    </section>
  );
};

export { Hero };
