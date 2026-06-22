// Brand & contact constants — real data, used verbatim across the site.

export const site = {
  name: "Oculus Weddings",
  tagline: "Fine-art wedding photography",
  base: "Bengaluru · available worldwide",
  email: "oculusmediabisinessinfo@gmail.com",
  phone: "+91 96566 16686",
  phoneHref: "tel:+919656616686",
  instagram: "@0culuswedding",
  instagramUrl: "https://www.instagram.com/0culuswedding/",
  copyright: "© 2018 Oculus Weddings · Bengaluru & worldwide",
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
] as const;

export const footerNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;
