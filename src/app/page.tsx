import Script from "next/script";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Pillars from "@/components/Pillars";
import Process from "@/components/Process";
import Credibility from "@/components/Credibility";
import ConsultationForm from "@/components/ConsultationForm";
import Footer from "@/components/Footer";

// داده‌ی ساختاریافته برای SEO (سازمان مشاوره)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "NG AI Learning and Automation",
  alternateName: "NG AI Learning and Automation — AI Adoption Consulting",
  description:
    "مشاوره‌ی پذیرش هوش مصنوعی برای کسب‌وکارهای کوچک؛ از آموزش عملی تا ساخت AI Agent اختصاصی.",
  url: "https://ngalearning.com",
  email: "info@ngalearning.com",
  areaServed: "AU",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sydney",
    addressCountry: "AU",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <Pillars />
        <Process />
        <Credibility />
        <ConsultationForm />
      </main>
      <Footer />
      {/* ویجت چت نُوا روی خود سایت */}
      <Script src="/widget.js" strategy="afterInteractive" />
    </>
  );
}
