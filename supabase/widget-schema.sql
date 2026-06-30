-- ───────────────────────────────────────────────────────────────
-- NG AI Learning and Automation — اسکیمای ویجت قابل‌جاسازی (Nova)
-- در SQL Editor همان پروژه‌ی Supabase اجرا کنید.
-- ───────────────────────────────────────────────────────────────

create table if not exists public.widget_config (
  id              uuid primary key default gen_random_uuid(),
  enabled         boolean not null default true,
  primary_color   text not null default '#1C8C8C',
  position        text not null default 'left',     -- left | right
  welcome_message text not null default 'سلام! من نُوا، دستیار هوشمند NG AI Learning and Automation هستم. چطور می‌توانم درباره‌ی خدمات و دوره‌های هوش مصنوعی کمکتان کنم؟',
  launcher_text   text not null default 'گفت‌وگو با نُوا',
  allowed_domains text[] not null default '{}',     -- خالی ⇒ همه‌ی دامنه‌ها مجاز
  updated_at      timestamptz not null default now()
);

alter table public.widget_config enable row level security;

-- یک ردیف پیش‌فرض (فقط اگر خالی باشد)
insert into public.widget_config (enabled)
select true
where not exists (select 1 from public.widget_config);
