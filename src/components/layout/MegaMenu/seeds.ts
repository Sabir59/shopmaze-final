import { images } from "@/constants/images";

const navigationMenuItems = {
  phones: {
    name: "Phones",
    href: "/phones",
    image: { ...images.megaMenuSmartPhone },
    lists: {
      "latest releases": [
        {
          name: "iPhone 15 Pro",
          href: "/iphone-15-pro",
        },
        {
          name: "Samsung Galaxy S23 Ultra",
          href: "/samsung-galaxy-s23-ultra",
        },
        {
          name: "Google Pixel 7 Pro",
          href: "/google-pixel-7-pro",
        },
        {
          name: "OnePlus 11 Pro",
          href: "/oneplus-11-pro",
        },
        {
          name: "Sony Xperia 5 V",
          href: "/sony-xperia-5-v",
        },
      ],
      "top models": [
        {
          name: "iPhone 14",
          href: "/iphone-14",
        },
        {
          name: "Samsung Galaxy Z Fold 4",
          href: "/samsung-galaxy-z-fold-4",
        },
        {
          name: "Google Pixel 6a",
          href: "/google-pixel-6a",
        },
        {
          name: "Motorola Edge 40 Pro",
          href: "/motorola-edge-40-pro",
        },
        {
          name: "Xiaomi 13 Pro",
          href: "/xiaomi-13-pro",
        },
      ],
      "how to guides": [
        {
          name: "How to Switch from iPhone to Android",
          href: "/how-to-switch-iphone-to-android",
        },
        {
          name: "Maximizing Battery Life on Your Smartphone",
          href: "/maximizing-battery-life-smartphone",
        },
        {
          name: "Choosing the Right Smartphone for Photography",
          href: "/guide-smartphone-photography",
        },
        {
          name: "How to Secure Your Android Phone",
          href: "/how-to-secure-android",
        },
      ],
      accessories: [
        {
          name: "Best Phone Cases for iPhone 15",
          href: "/best-iphone-15-cases",
        },
        {
          name: "Top Wireless Chargers for All Smartphones",
          href: "/top-wireless-chargers",
        },
        {
          name: "Best Screen Protectors for Google Pixel",
          href: "/best-screen-protectors-pixel",
        },
        {
          name: "Best Earbuds for Samsung Phones",
          href: "/best-earbuds-samsung",
        },
      ],
    },
  },
  laptops: {
    name: "Phones",
    href: "/phones",
    image: { ...images.megaMenuSmartPhone },
    lists: {
      "latest releases": [
        {
          name: "iPhone 15 Pro",
          href: "/iphone-15-pro",
        },
        {
          name: "Samsung Galaxy S23 Ultra",
          href: "/samsung-galaxy-s23-ultra",
        },
        {
          name: "Google Pixel 7 Pro",
          href: "/google-pixel-7-pro",
        },
        {
          name: "OnePlus 11 Pro",
          href: "/oneplus-11-pro",
        },
        {
          name: "Sony Xperia 5 V",
          href: "/sony-xperia-5-v",
        },
      ],
      "top models": [
        {
          name: "iPhone 14",
          href: "/iphone-14",
        },
        {
          name: "Samsung Galaxy Z Fold 4",
          href: "/samsung-galaxy-z-fold-4",
        },
        {
          name: "Google Pixel 6a",
          href: "/google-pixel-6a",
        },
        {
          name: "Motorola Edge 40 Pro",
          href: "/motorola-edge-40-pro",
        },
        {
          name: "Xiaomi 13 Pro",
          href: "/xiaomi-13-pro",
        },
      ],
      "how to guides": [
        {
          name: "How to Switch from iPhone to Android",
          href: "/how-to-switch-iphone-to-android",
        },
        {
          name: "Maximizing Battery Life on Your Smartphone",
          href: "/maximizing-battery-life-smartphone",
        },
        {
          name: "Choosing the Right Smartphone for Photography",
          href: "/guide-smartphone-photography",
        },
        {
          name: "How to Secure Your Android Phone",
          href: "/how-to-secure-android",
        },
      ],
      accessories: [
        {
          name: "Best Phone Cases for iPhone 15",
          href: "/best-iphone-15-cases",
        },
        {
          name: "Top Wireless Chargers for All Smartphones",
          href: "/top-wireless-chargers",
        },
        {
          name: "Best Screen Protectors for Google Pixel",
          href: "/best-screen-protectors-pixel",
        },
        {
          name: "Best Earbuds for Samsung Phones",
          href: "/best-earbuds-samsung",
        },
      ],
    },
  },
  "smart watches": {
    name: "Smart Watches",
    href: "/smart-watches",
    image: { ...images.megaMenuSmartWatch },
    lists: {
      "latest releases": [
        {
          name: "Apple Watch Series 9",
          href: "/apple-watch-series-9",
        },
        {
          name: "Samsung Galaxy Watch 6",
          href: "/samsung-galaxy-watch-6",
        },
        {
          name: "Fitbit Charge 6",
          href: "/fitbit-charge-6",
        },
      ],
      "top models": [
        {
          name: "Garmin Fenix 7",
          href: "/garmin-fenix-7",
        },
        {
          name: "Fossil Gen 6",
          href: "/fossil-gen-6",
        },
      ],
      "how to guides": [
        {
          name: "How to Customize Your Smart Watch",
          href: "/customize-smart-watch",
        },
        {
          name: "Setting Up Health Tracking on Your Watch",
          href: "/set-up-health-tracking",
        },
        {
          name: "Smart Watch Buying Guide for 2024",
          href: "/smart-watch-buying-guide-2024",
        },
      ],
      accessories: [
        {
          name: "Best Smart Watch Bands",
          href: "/best-smart-watch-bands",
        },
        {
          name: "Top Wireless Chargers for Smart Watches",
          href: "/top-wireless-chargers-smart-watches",
        },
        {
          name: "Smart Watch Screen Protectors",
          href: "/smart-watch-screen-protectors",
        },
      ],
    },
  },
  cameras: {
    name: "Cameras",
    href: "/cameras",
    image: { ...images.megaMenuCamera },
    lists: {
      "latest releases": [
        {
          name: "Canon EOS R8",
          href: "/canon-eos-r8",
        },
        {
          name: "Nikon Z8",
          href: "/nikon-z8",
        },
        {
          name: "Sony A7 IV",
          href: "/sony-a7-iv",
        },
      ],
      "top models": [
        {
          name: "Fujifilm X-T5",
          href: "/fujifilm-x-t5",
        },
        {
          name: "Panasonic Lumix GH6",
          href: "/panasonic-lumix-gh6",
        },
      ],
      "how to guides": [
        {
          name: "How to Choose the Right Camera for You",
          href: "/choose-right-camera",
        },
        {
          name: "Photography Basics: Understanding Camera Settings",
          href: "/photography-basics",
        },
        {
          name: "Guide to Editing Photos Like a Pro",
          href: "/photo-editing-guide",
        },
      ],
      accessories: [
        {
          name: "Best Tripods for Photographers",
          href: "/best-photography-tripods",
        },
        {
          name: "Top Camera Bags for Every Photographer",
          href: "/top-camera-bags",
        },
        {
          name: "Essential Camera Lenses",
          href: "/essential-camera-lenses",
        },
      ],
    },
  },
  headphones: {
    name: "Headphones",
    href: "/headphones",
    image: { ...images.megaMenuHeadphones },
    lists: {
      "latest releases": [
        {
          name: "Sony WH-1000XM5",
          href: "/sony-wh-1000xm5",
        },
        {
          name: "Apple AirPods Pro 2",
          href: "/apple-airpods-pro-2",
        },
        {
          name: "Bose QuietComfort 45",
          href: "/bose-quietcomfort-45",
        },
      ],
      "top models": [
        {
          name: "Sennheiser Momentum 4",
          href: "/sennheiser-momentum-4",
        },
        {
          name: "Jabra Elite 85h",
          href: "/jabra-elite-85h",
        },
      ],
      "how to guides": [
        {
          name: "How to Choose the Best Headphones",
          href: "/choose-best-headphones",
        },
        {
          name: "Caring for Your Headphones: Tips and Tricks",
          href: "/caring-headphones",
        },
        {
          name: "Wireless vs. Wired Headphones: Which is Right for You?",
          href: "/wireless-vs-wired-headphones",
        },
      ],
      accessories: [
        {
          name: "Best Headphone Cases",
          href: "/best-headphone-cases",
        },
        {
          name: "Top Audio Cables for Headphones",
          href: "/top-audio-cables-headphones",
        },
        {
          name: "Headphone Cleaning Kits",
          href: "/headphone-cleaning-kits",
        },
      ],
    },
  },
  gaming: {
    name: "Gaming",
    href: "/gaming",
    image: { ...images.megaMenuGaming },
    lists: {
      "latest releases": [
        {
          name: "PlayStation 5",
          href: "/playstation-5",
        },
        {
          name: "Xbox Series X",
          href: "/xbox-series-x",
        },
        {
          name: "Nintendo Switch OLED",
          href: "/nintendo-switch-oled",
        },
      ],
      "top models": [
        {
          name: "Razer Blade 15",
          href: "/razer-blade-15",
        },
        {
          name: "Asus ROG Zephyrus G14",
          href: "/asus-rog-zephyrus-g14",
        },
      ],
      "how to guides": [
        {
          name: "How to Build Your Gaming PC",
          href: "/build-gaming-pc",
        },
        {
          name: "Top 10 Tips for Improving Gaming Performance",
          href: "/improve-gaming-performance",
        },
        {
          name: "Guide to Streaming Games Online",
          href: "/streaming-games-guide",
        },
      ],
      accessories: [
        {
          name: "Best Gaming Headsets",
          href: "/best-gaming-headsets",
        },
        {
          name: "Top Gaming Monitors",
          href: "/top-gaming-monitors",
        },
        {
          name: "Essential Gaming Accessories",
          href: "/essential-gaming-accessories",
        },
      ],
    },
  },
};

export { navigationMenuItems };
