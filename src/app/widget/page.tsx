import type { Metadata } from "next";
import WidgetChat from "@/components/chat/WidgetChat";
import { getWidgetConfig } from "@/lib/rag/widget";

export const metadata: Metadata = {
  title: "نُوا — دستیار هوشمند NG AI Learning and Automation",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

// محتوای داخل iframe ویجت. هدر frame-ancestors از middleware ست می‌شود.
export default async function WidgetPage() {
  const cfg = await getWidgetConfig();
  return <WidgetChat welcomeMessage={cfg.welcome_message} primaryColor={cfg.primary_color} />;
}
