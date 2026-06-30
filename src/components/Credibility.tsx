import Image from "next/image";
import Section, { SectionHeading } from "./ui/Section";
import Reveal from "./ui/Reveal";
import { IconQuote } from "./ui/icons";

const HIGHLIGHTS = [
  { value: "۱ به ۱", label: "همراهی مستقیم با ناغمه" },
  { value: "سیدنی", label: "مستقر در استرالیا" },
  { value: "گام‌به‌گام", label: "بدون اصطلاح فنی پیچیده" },
];

const CASE_STUDY = {
  text: "یک استارتاپ بخش بزرگی از زمان تیمش را صرف کارهای دستی بازاریابی می‌کرد. بخش بزرگی از این فرایند را خودکار کردیم — بدون نیاز به استخدام متخصص جدید — و ساعت‌های قابل‌توجهی در هفته آزاد شد.",
  author: "مطالعه‌ی موردی — یک استارتاپ در حوزه‌ی بازاریابی",
};

export default function Credibility() {
  return (
    <Section id="about" surface="warm-white">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* تصویر بنیان‌گذار */}
        <Reveal className="order-1">
          <div className="overflow-hidden rounded-card shadow-soft-md">
            <Image
              src="/images/naghmeh-profile.png"
              alt="ناغمه قدسلاحی، بنیان‌گذار NG AI Learning and Automation"
              width={860}
              height={859}
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        {/* متن + نکات معرفی */}
        <div className="order-2">
          <SectionHeading
            eyebrow="درباره‌ی NG"
            title="یک مشاور، نه یک شرکت بزرگ و بی‌چهره"
            description="ناغمه قدسلاحی، بنیان‌گذار NG AI Learning and Automation، شخصاً کنار شماست. صداقت پیش از فروش؛ بدون وعده‌ی تضمینی یا فوری، بدون اصطلاح فنی توضیح‌نداده."
          />

          <dl className="mt-10 grid grid-cols-3 gap-4">
            {HIGHLIGHTS.map((item, i) => (
              <Reveal key={item.label} delay={i * 80}>
                <div className="rounded-card border border-sand bg-white px-3 py-5 text-center shadow-soft">
                  <dt className="sr-only">{item.label}</dt>
                  <dd>
                    <span className="nums block font-heading text-[1.75rem] font-bold leading-none text-teal">
                      {item.value}
                    </span>
                    <span className="mt-2 block text-caption text-slate">
                      {item.label}
                    </span>
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>

      {/* مطالعه‌ی موردی */}
      <div className="mt-16 grid gap-5 md:grid-cols-2">
        <Reveal>
          <figure className="flex h-full flex-col rounded-card border border-sand bg-white p-7 shadow-soft">
            <IconQuote width={32} height={32} className="text-coral/70" />
            <blockquote className="mt-4 flex-1 text-body leading-8 text-navy">
              «{CASE_STUDY.text}»
            </blockquote>
            <figcaption className="mt-5 text-caption font-medium text-slate">
              — {CASE_STUDY.author}
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </Section>
  );
}
