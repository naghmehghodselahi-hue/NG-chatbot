import Section, { SectionHeading } from "./ui/Section";
import Reveal from "./ui/Reveal";
import {
  IconStrategy,
  IconModel,
  IconStructure,
  IconSales,
} from "./ui/icons";

const SERVICES = [
  {
    icon: IconStrategy,
    title: "نمی‌دانم AI کجای کارم کمک می‌کند",
    description:
      "اطلاعات زیاد و پراکنده درباره‌ی هوش مصنوعی شنیده‌اید اما مسیر روشنی ندارید؛ با هم اولویت‌ها را روشن می‌کنیم.",
  },
  {
    icon: IconModel,
    title: "می‌خواهم با اعتماد به‌نفس از AI استفاده کنم",
    description:
      "بدون زبان فنی پیچیده، با مثال‌های واقعیِ مرتبط با کار خودتان یاد می‌گیرید — نه فقط یک دمو.",
  },
  {
    icon: IconStructure,
    title: "زمان زیادی صرف کارهای تکراری می‌شود",
    description:
      "ابزارها و اتوماسیون‌های عمومی نیاز خاص شما را پوشش نمی‌دهند؛ یک ابزار اختصاصی برایتان می‌سازیم.",
  },
  {
    icon: IconSales,
    title: "بعد از پروژه‌ی اول، سؤال جدید پیش می‌آید",
    description:
      "نیاز AI با رشد کسب‌وکار تغییر می‌کند؛ یک نفر قابل‌اعتماد برای مشورت مداوم کنار شماست.",
  },
];

export default function Services() {
  return (
    <Section id="services" surface="warm-white">
      <SectionHeading
        eyebrow="برای چه کسانی"
        title="جایی که گیر کرده‌اید، دقیقاً همان‌جا کنارتان هستیم"
        description="این‌ها نمونه‌ی دغدغه‌هایی هستند که اغلب صاحبان کسب‌وکار و افراد حرفه‌ای با آن‌ها پیش ما می‌آیند."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, i) => {
          const Icon = service.icon;
          return (
            <Reveal key={service.title} delay={i * 70}>
              <article className="group flex h-full flex-col rounded-card border border-sand bg-white p-7 shadow-soft transition-shadow duration-300 hover:shadow-soft-md">
                <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sand text-teal transition-colors duration-300 group-hover:bg-teal group-hover:text-warm-white">
                  <Icon width={24} height={24} />
                </span>
                <h3 className="font-heading text-h3 font-semibold text-teal">
                  {service.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-7 text-slate">
                  {service.description}
                </p>
              </article>
            </Reveal>
          );
        })}

        {/* کارت دعوت به اقدام — پنجمین خانه‌ی گرید */}
        <Reveal delay={SERVICES.length * 70}>
          <a
            href="#consultation"
            className="flex h-full flex-col justify-between rounded-card bg-teal p-7 text-warm-white shadow-soft transition-colors duration-300 hover:bg-teal-dark"
          >
            <h3 className="font-heading text-h3 font-semibold text-warm-white">
              مطمئن نیستید از کجا شروع کنید؟
            </h3>
            <p className="mt-3 text-[0.95rem] leading-7 text-warm-white/80">
              در جلسه‌ی مشاوره‌ی رایگان، وضعیت شما را می‌شنویم و قدم بعدی را روشن می‌کنیم.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-coral">
              رزرو مشاوره‌ی رایگان
              <span aria-hidden="true">←</span>
            </span>
          </a>
        </Reveal>
      </div>
    </Section>
  );
}
