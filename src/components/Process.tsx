import Section, { SectionHeading } from "./ui/Section";
import Reveal from "./ui/Reveal";
import Button from "./ui/Button";
import { IconForm, IconCall, IconMeeting, IconRoadmap } from "./ui/icons";
import { toFa } from "@/lib/utils";

const STEPS = [
  {
    no: 1,
    icon: IconForm,
    title: "رزرو جلسه‌ی رایگان",
    description: "یک جلسه‌ی مشاوره‌ی رایگان ۲۰ دقیقه‌ای رزرو می‌کنید، بدون هیچ تعهدی.",
  },
  {
    no: 2,
    icon: IconCall,
    title: "جلسه‌ی آشنایی",
    description: "با ناغمه درباره‌ی وضعیت و نیاز واقعی‌تان نسبت به AI صحبت می‌کنید.",
  },
  {
    no: 3,
    icon: IconMeeting,
    title: "پیشنهاد مسیر",
    description: "مشخص می‌شود کدام خدمت بهترین نقطه‌ی شروع برای شماست.",
  },
  {
    no: 4,
    icon: IconRoadmap,
    title: "اجرا",
    description: "همکاری شروع می‌شود، با تمرکز بر این‌که نتیجه واقعاً در کار روزمره استفاده شود.",
  },
];

export default function Process() {
  return (
    <Section id="process" surface="sand">
      <SectionHeading
        eyebrow="فرایند همکاری"
        title="از جلسه‌ی رایگان تا اجرا، مسیری روشن"
        description="می‌دانید در هر قدم چه اتفاقی می‌افتد. بدون ابهام، بدون تعهد سنگین در ابتدا."
      />

      <ol className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step, i) => {
          const Icon = step.icon;
          const isLast = i === STEPS.length - 1;
          return (
            <Reveal as="li" key={step.no} delay={i * 90} className="relative">
              {/* خط رابط تایم‌لاین (دسکتاپ) */}
              {!isLast && (
                <span
                  className="absolute right-[calc(-50%+1.75rem)] top-7 hidden h-px w-full bg-teal/15 lg:block"
                  aria-hidden="true"
                />
              )}
              <div className="relative flex flex-col">
                <span className="relative z-10 inline-flex h-14 w-14 items-center justify-center rounded-full bg-teal text-warm-white shadow-soft">
                  <Icon width={26} height={26} />
                </span>
                <span className="nums mt-5 font-heading text-caption font-semibold text-coral">
                  مرحله‌ی {toFa(step.no)}
                </span>
                <h3 className="mt-1 font-heading text-h3 font-semibold text-teal">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-[0.95rem] leading-7 text-slate">
                  {step.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </ol>

      <Reveal className="mt-14 flex justify-center">
        <Button as="a" href="#consultation" variant="primary" size="lg">
          رزرو جلسه‌ی مشاوره‌ی رایگان
        </Button>
      </Reveal>
    </Section>
  );
}
