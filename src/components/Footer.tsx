import Logo from "./ui/Logo";
import Container from "./ui/Container";
import { IconMail, IconPhone, IconPin } from "./ui/icons";
import { toFa } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#services", label: "خدمات" },
  { href: "#pillars", label: "مسیرهای شروع" },
  { href: "#process", label: "فرایند همکاری" },
  { href: "#about", label: "درباره‌ی ما" },
  { href: "#consultation", label: "رزرو مشاوره" },
];

export default function Footer() {
  return (
    <footer className="bg-teal text-warm-white">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* برند */}
          <div className="md:col-span-1">
            <Logo variant="light" />
            <p className="mt-4 max-w-xs text-[0.95rem] leading-8 text-warm-white/70">
              مشاوره‌ی پذیرش هوش مصنوعی. کنار شما می‌مانیم تا AI را ساده و عملی وارد
              کارتان کنید.
            </p>
          </div>

          {/* ناوبری */}
          <nav aria-label="پیوندهای فوتر" className="md:col-span-1">
            <h2 className="mb-4 font-heading text-[0.95rem] font-semibold text-warm-white">
              پیوندها
            </h2>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[0.95rem] text-warm-white/70 transition-colors hover:text-coral"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* تماس */}
          <div className="md:col-span-1">
            <h2 className="mb-4 font-heading text-[0.95rem] font-semibold text-warm-white">
              تماس با ما
            </h2>
            <ul className="space-y-3.5 text-[0.95rem] text-warm-white/80">
              <li>
                <a
                  href="mailto:info@ngalearning.com"
                  className="flex items-center gap-3 transition-colors hover:text-coral"
                  dir="ltr"
                >
                  <IconMail width={20} height={20} className="shrink-0 text-coral" />
                  <span>info@ngalearning.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/61469758275"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition-colors hover:text-coral"
                >
                  <IconPhone width={20} height={20} className="shrink-0 text-coral" />
                  <span>گفت‌وگو در واتس‌اپ</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <IconPin width={20} height={20} className="shrink-0 text-coral" />
                <span>سیدنی، استرالیا</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-warm-white/15 pt-6 text-caption text-warm-white/60 sm:flex-row">
          <p>© {toFa("۱۴۰۴")} NG AI Learning and Automation. همه‌ی حقوق محفوظ است.</p>
          <p>NG AI Learning and Automation — مشاوره‌ی پذیرش هوش مصنوعی</p>
        </div>
      </Container>
    </footer>
  );
}
