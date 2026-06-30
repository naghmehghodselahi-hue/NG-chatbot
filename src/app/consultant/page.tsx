import type { Metadata } from "next";
import ChatPanel from "@/components/chat/ChatPanel";

export const metadata: Metadata = {
  title: "گفت‌وگو با نُوا",
  description:
    "از نُوا، دستیار هوشمند NG AI Learning and Automation، درباره‌ی خدمات، دوره‌های آموزشی و فرایند همکاری بپرسید و مسیر ورود هوش مصنوعی به کسب‌وکارتان را روشن کنید.",
};

export const dynamic = "force-dynamic";

export default function ConsultantPage() {
  return <ChatPanel />;
}
