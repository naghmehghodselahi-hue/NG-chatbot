import Section, { SectionHeading } from "./ui/Section";
import Reveal from "./ui/Reveal";
import { toFa } from "@/lib/utils";

const PILLARS = [
  {
    no: 1,
    title: "AI Opportunity Audit",
    description: "جلسه‌ای متمرکز برای شناسایی این‌که AI دقیقاً کجای کسب‌وکار شما می‌تواند تأثیر واقعی ایجاد کند.",
    height: "h-16",
  },
  {
    no: 2,
    title: "آموزش عملی هوش مصنوعی",
    description: "آموزش فردی یا تیمی برای شروع کار واقعی و مطمئن با AI — نه فقط یک دمو.",
    height: "h-24",
  },
  {
    no: 3,
    title: "ساخت AI Agent اختصاصی",
    description: "ابزارها و اتوماسیون‌های سفارشی، طراحی‌شده برای نیاز خاص کسب‌وکار شما.",
    height: "h-20",
    accent: true,
  },
  {
    no: 4,
    title: "همراهی مستمر هوش مصنوعی",
    description: "پشتیبانی و استراتژی مداوم در مسیر هوش مصنوعی شما، فراتر از یک پروژه‌ی یک‌بار.",
    height: "h-12",
  },
];

export default function Pillars() {
  return (
    <Section id="pillars" surface="teal">
      <SectionHeading
        eyebrow="خدمات NG"
        title="چهار راه برای شروع با هوش مصنوعی"
        description="از شناسایی فرصت تا همراهی مداوم؛ هر کدام از این چهار خدمت را می‌توانید جدا یا در ادامه‌ی هم بردارید."
        className="[&_h2]:text-warm-white [&_p]:text-warm-white/75"
      />

      <ol className="mt-14 grid gap-px overflow-hidden rounded-card bg-warm-white/10 sm:grid-cols-2 lg:grid-cols-4">
        {PILLARS.map((pillar, i) => (
          <Reveal as="li" key={pillar.no} delay={i * 90}>
            <div className="flex h-full flex-col bg-teal p-7 transition-colors duration-300 hover:bg-teal-dark">
              {/* نقش‌مایه‌ی ستون — هم‌خوان با نشانه‌ی لوگو */}
              <div className="flex h-28 items-end gap-1.5" aria-hidden="true">
                <span
                  className={`w-2 rounded-t ${pillar.height} ${
                    pillar.accent ? "bg-coral" : "bg-warm-white/85"
                  }`}
                />
                <span className="w-2 rounded-t bg-warm-white/20" style={{ height: "70%" }} />
                <span className="w-2 rounded-t bg-warm-white/20" style={{ height: "45%" }} />
              </div>

              <p className="mt-6 nums font-heading text-caption font-semibold text-coral">
                خدمت {toFa(pillar.no)}
              </p>
              <h3 className="mt-1 font-heading text-h3 font-bold text-warm-white">
                {pillar.title}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-7 text-warm-white/70">
                {pillar.description}
              </p>
            </div>
          </Reveal>
        ))}
      </ol>

      <Reveal>
        <p className="mt-10 max-w-2xl text-body leading-8 text-warm-white/80">
          NG فقط توصیه نمی‌دهد؛ تا جایی که لازم باشد کنار شما می‌ماند تا این چهار خدمت
          در عمل، به نتیجه‌ی واقعی تبدیل شوند.
        </p>
      </Reveal>
    </Section>
  );
}
