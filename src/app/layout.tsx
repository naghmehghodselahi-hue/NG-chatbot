import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

// فونت عناوین — استعداد
const estedad = localFont({
  src: [
    { path: "../../public/fonts/Estedad-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/Estedad-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/Estedad-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/Estedad-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-estedad",
  display: "swap",
  preload: true,
});

// فونت بدنه — وزیرمتن
const vazirmatn = localFont({
  src: [
    { path: "../../public/fonts/Vazirmatn-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/Vazirmatn-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/Vazirmatn-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/Vazirmatn-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-vazirmatn",
  display: "swap",
  preload: true,
});

const SITE_URL = "https://ngalearning.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "NG AI Learning and Automation | مشاوره‌ی پذیرش هوش مصنوعی",
    template: "%s | NG AI Learning and Automation",
  },
  description:
    "NG AI Learning and Automation به کسب‌وکارهای کوچک کمک می‌کند هوش مصنوعی را ساده، عملی و بدون پیچیدگی وارد کارشان کنند. رزرو جلسه‌ی مشاوره‌ی رایگان.",
  keywords: [
    "مشاوره هوش مصنوعی",
    "آموزش هوش مصنوعی",
    "AI Agent اختصاصی",
    "اتوماسیون کسب‌وکار",
    "NG AI Learning and Automation",
    "پذیرش هوش مصنوعی",
    "نُوا",
  ],
  authors: [{ name: "ناغمه قدسلاحی" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: SITE_URL,
    siteName: "NG AI Learning and Automation",
    title: "NG AI Learning and Automation | مشاوره‌ی پذیرش هوش مصنوعی",
    description:
      "هوش مصنوعی را ساده و گام‌به‌گام وارد کسب‌وکارتان کنید. NG AI Learning and Automation کنار شماست. رزرو جلسه‌ی مشاوره‌ی رایگان.",
    images: [
      {
        url: "/images/hero-illustration.png",
        width: 1200,
        height: 630,
        alt: "NG AI Learning and Automation — مشاوره‌ی پذیرش هوش مصنوعی",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NG AI Learning and Automation | مشاوره‌ی پذیرش هوش مصنوعی",
    description: "هوش مصنوعی را ساده و گام‌به‌گام وارد کسب‌وکارتان کنید. رزرو جلسه‌ی مشاوره‌ی رایگان.",
    images: ["/images/hero-illustration.png"],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#1C2E3A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={`${estedad.variable} ${vazirmatn.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          پرش به محتوای اصلی
        </a>
        {children}
      </body>
    </html>
  );
}
