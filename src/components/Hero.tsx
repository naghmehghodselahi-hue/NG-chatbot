import Image from "next/image";
import Container from "./ui/Container";
import Button from "./ui/Button";
import Reveal from "./ui/Reveal";
import { IconCheck } from "./ui/icons";

const HIGHLIGHTS = [
  "آموزش عملی و گام‌به‌گام",
  "مشاوره‌ی اولیه‌ی رایگان",
  "بدون نیاز به دانش فنی قبلی",
];

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-[4.5rem]">
      <Container className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-28">
        {/* متن (راست در RTL) */}
        <div className="order-2 lg:order-1">
          <Reveal>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-sand px-4 py-1.5 text-caption font-medium text-teal">
              <span className="h-1.5 w-1.5 rounded-full bg-coral" aria-hidden="true" />
              مشاوره‌ی پذیرش هوش مصنوعی
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="text-[2.25rem] font-bold leading-[1.25] sm:text-[2.75rem] lg:text-h1">
              هوش مصنوعی را ساده و
              <br />
              عملی وارد کسب‌وکارتان کنید.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-body text-slate">
              نمی‌دانید از کجا با AI شروع کنید؟ NG AI Learning and Automation کنار شما
              می‌ماند تا قدم‌به‌قدم، بدون پیچیدگی و بدون اصطلاح فنی اضافه، جایی که هوش
              مصنوعی واقعاً به کارتان می‌آید را پیدا کنید و عملی‌اش کنید.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button as="a" href="#consultation" variant="primary" size="lg">
                رزرو مشاوره‌ی رایگان
              </Button>
              <Button as="a" href="#services" variant="secondary" size="lg">
                خدمات ما را ببینید
              </Button>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
              {HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-center gap-2 text-[0.95rem] text-navy/80">
                  <IconCheck width={18} height={18} className="text-coral" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* تصویر (چپ در RTL) */}
        <div className="order-1 lg:order-2">
          <Reveal delay={120}>
            <div className="relative">
              <div className="overflow-hidden rounded-card shadow-soft-md">
                <Image
                  src="/images/hero-illustration.png"
                  alt="NG AI Learning and Automation — یادگیری عملی هوش مصنوعی"
                  width={1920}
                  height={1080}
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-full w-full object-cover"
                />
              </div>
              {/* کارت معرفی شناور — لهجه‌ی برند */}
              <div className="absolute -bottom-5 right-5 hidden rounded-card bg-warm-white/95 px-5 py-4 shadow-soft-md backdrop-blur sm:block">
                <p className="nums font-heading text-2xl font-bold text-teal">۱ به ۱</p>
                <p className="text-caption text-slate">همراهیِ مستقیم با ناغمه، بدون واسطه</p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
