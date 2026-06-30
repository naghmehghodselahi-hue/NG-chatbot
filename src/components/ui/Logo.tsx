import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  /** نسخه‌ی روشن برای پس‌زمینه‌ی تیره، نسخه‌ی تیره برای پس‌زمینه‌ی روشن */
  variant?: "dark" | "light";
  className?: string;
};

/**
 * لوگوی واقعی NG AI Learning and Automation (فایل‌های اصلی برند).
 */
export default function Logo({ variant = "dark", className }: LogoProps) {
  const src =
    variant === "light" ? "/images/ng-logo-light.svg" : "/images/ng-logo-dark.svg";

  return (
    <span
      className={cn("inline-flex items-center select-none", className)}
      aria-label="NG AI Learning and Automation"
    >
      <Image src={src} alt="NG AI Learning and Automation" width={120} height={40} priority />
    </span>
  );
}
