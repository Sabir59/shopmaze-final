import { images } from "@/constants/images";

export const footerData = {
  brand: {
    logo: { ...images.mainLogo },
    description:
      "Leading supplier of premium electronics at unbeatable prices.",
    contactInfo: {
      address: "1234 Electronics Ave, Tech City, TX",
      phone: "+1 234-567-890",
      email: "support@electronics.com",
    },
    subscription: {
      placeholder: "Your Email",
      ctaText: "Subscribe",
    },
  },
  categories: [
    {
      name: "Smartphones",
      href: "/smartphones",
    },
    {
      name: "Laptops",
      href: "/laptops",
    },
    {
      name: "Tablets",
      href: "/tablets",
    },
    {
      name: "Cameras",
      href: "/cameras",
    },
    {
      name: "Headphones",
      href: "/headphones",
    },
    {
      name: "Accessories",
      href: "/accessories",
    },
  ],
  customerService: [
    {
      name: "Help Center",
      href: "/help-center",
    },
    {
      name: "Shipping & Delivery",
      href: "/shipping",
    },
    {
      name: "Returns & Exchanges",
      href: "/returns",
    },
    {
      name: "Track My Order",
      href: "/track-order",
    },
    {
      name: "Payment Options",
      href: "/payment-options",
    },
  ],
  information: [
    {
      name: "About Us",
      href: "/about",
    },
    {
      name: "Privacy Policy",
      href: "/privacy-policy",
    },
    {
      name: "Terms of Service",
      href: "/terms",
    },
    {
      name: "Affiliate Program",
      href: "/affiliate-program",
    },
  ],
  socials: [
    {
      name: "Facebook",
      href: "https://facebook.com",
      icon: "fa-brands:facebook-f",
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: "fa-brands:instagram",
    },
    {
      name: "Twitter",
      href: "https://twitter.com",
      icon: "fa-brands:twitter",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: "fa-brands:linkedin",
    },
    {
      name: "YouTube",
      href: "https://youtube.com",
      icon: "fa-brands:youtube",
    },
  ],
  blog: [
    {
      title: "Top 10 Smartphones of 2024",
      href: "/blog/top-10-smartphones-2024",
    },
    {
      title: "How to Choose the Perfect Laptop for Work and Play",
      href: "/blog/choosing-perfect-laptop",
    },
    {
      title: "Beginner’s Guide to Photography with DSLR Cameras",
      href: "/blog/beginner-guide-dslr",
    },
  ],
};
