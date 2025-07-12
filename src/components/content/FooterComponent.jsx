"use client"

const Footer2 = ({
  logo = {
    src: "https://mir-s3-cdn-cf.behance.net/projects/max_808/a6bb4659057797.Y3JvcCw0NzksMzc1LDMxNSw1OTE.png",
    alt: "Mullob Logo",
    title: "Mullob.com",
    url: "https://mir-s3-cdn-cf.behance.net/projects/max_808/a6bb4659057797.Y3JvcCw0NzksMzc1LDMxNSw1OTE.png",
  },
  tagline = "Product made easy.",
  menuItems = [
    {
      title: "Product",
      links: [
        { text: "Overview", url: "#" },
        { text: "Pricing", url: "#" },
        { text: "Marketplace", url: "#" },
        { text: "Features", url: "#" },
        { text: "Integrations", url: "#" },
        { text: "Pricing", url: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "About", url: "#" },
        { text: "Team", url: "#" },
        { text: "Blog", url: "#" },
        { text: "Careers", url: "#" },
        { text: "Contact", url: "#" },
        { text: "Privacy", url: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { text: "Help", url: "#" },
        { text: "Sales", url: "#" },
        { text: "Advertise", url: "#" },
      ],
    },
    {
      title: "Social",
      links: [
        { text: "Twitter", url: "#" },
        { text: "Instagram", url: "#" },
        { text: "LinkedIn", url: "#" },
      ],
    },
  ],
  copyright = "© 2025 Mullob.com. All rights reserved.",
  bottomLinks = [
    { text: "Terms and Conditions", url: "#" },
    { text: "Privacy Policy", url: "#" },
  ],
}) => {
  return (
    <section className="py-32 text-foreground bg-amber-200">
      <div className="container mx-auto px-4">
        <footer>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-6">
            {/* Logo Section */}
            <div className="col-span-1 lg:col-span-2 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="flex flex-col items-center lg:items-start gap-2">
                <a href={logo.url}>
                  <img src={logo.src || "/placeholder.svg"} alt={logo.alt} title={logo.title} className="h-10" />
                </a>
                <p className="text-xl font-semibold">{logo.title}</p>
              </div>
              <p className="mt-4 font-bold">{tagline}</p>
            </div>

            {/* Menu Sections */}
            {menuItems.map((section, idx) => (
              <div
                key={idx}
                className="col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left w-full"
              >
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="space-y-2 text-muted-foreground w-full flex flex-col items-center lg:items-start">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx} className="w-full text-center lg:text-left">
                      <a href={link.url} className="hover:text-primary font-medium transition-colors inline-block">
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="mt-24 flex flex-col items-center justify-between gap-4 border-t pt-8 text-sm text-muted-foreground md:flex-row">
            <p className="text-center md:text-left">{copyright}</p>
            <ul className="flex gap-4 flex-wrap justify-center">
              {bottomLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.url} className="underline hover:text-primary transition-colors">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </section>
  )
}

export { Footer2 }
