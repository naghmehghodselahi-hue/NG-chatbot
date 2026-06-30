import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // پالت برند NG (برند گاید)
        teal: "#1C8C8C", // تیل — اصلی
        "teal-dark": "#15706F", // برای hover دکمه‌ها
        coral: "#E8664E", // مرجانی — اکشن/CTA
        "coral-dark": "#D1543D",
        "warm-white": "#FAFAF8", // سفید گرم — پس‌زمینه‌ی اصلی
        sand: "#F5ECE0", // شنی — پس‌زمینه‌ی گرم/سطوح ثانویه
        navy: "#1C2E3A", // سرمه‌ای — عنوان/متن اصلی
        slate: "#5A6470", // متن فرعی
      },
      fontFamily: {
        heading: ["var(--font-estedad)", "system-ui", "sans-serif"],
        body: ["var(--font-vazirmatn)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // مقیاس تایپ برند
        h1: ["3rem", { lineHeight: "1.2", fontWeight: "700" }], // 48px
        h2: ["2rem", { lineHeight: "1.3", fontWeight: "700" }], // 32px
        h3: ["1.5rem", { lineHeight: "1.4", fontWeight: "600" }], // 24px
        body: ["1.0625rem", { lineHeight: "1.8" }], // 17px
        caption: ["0.875rem", { lineHeight: "1.6" }], // 14px
      },
      borderRadius: {
        card: "12px",
        btn: "8px",
      },
      boxShadow: {
        // سایه‌های بسیار ملایم — بدون جلوه‌ی براق
        soft: "0 1px 2px rgba(28, 46, 58, 0.04), 0 8px 24px rgba(28, 46, 58, 0.05)",
        "soft-md": "0 2px 4px rgba(28, 46, 58, 0.05), 0 12px 32px rgba(28, 46, 58, 0.07)",
      },
      maxWidth: {
        content: "72rem", // 1152px — عرض ثابت دسکتاپ
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
