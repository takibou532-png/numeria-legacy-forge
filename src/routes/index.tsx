import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/numeria-logo.png.asset.json";
import { ColumnMark, CrescentStar, BookMark, Diamond, GoldRule } from "@/components/numeria/Marks";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "نوميريا أكاديمي | من إرث نوميديا إلى مستقبل التعليم" },
      {
        name: "description",
        content:
          "منصة تعليمية جزائرية متكاملة: دروس مباشرة، تمارين ذكية، ومتابعة دقيقة لنتائج التلميذ من المتوسط إلى البكالوريا.",
      },
      { property: "og:title", content: "نوميريا أكاديمي | من إرث نوميديا إلى مستقبل التعليم" },
      {
        property: "og:description",
        content:
          "منصة تعليمية جزائرية متكاملة: دروس مباشرة، تمارين ذكية، ومتابعة دقيقة لنتائج التلميذ.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/* ---------------------------------------------------------------- shell */

function Nav() {
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#story", label: "الحكاية" },
    { href: "#platform", label: "المنصة" },
    { href: "#subjects", label: "المواد" },
    { href: "#teachers", label: "الأساتذة" },
    { href: "#pricing", label: "الاشتراك" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "border-b border-gold/20 bg-green-deep/95 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-sm bg-ivory/95 ring-1 ring-gold/40">
            <img src={logo.url} alt="شعار نوميريا أكاديمي" className="size-9 object-contain" />
          </span>
          <span className="leading-tight">
            <span className="nm-display block text-lg text-ivory">نوميريا أكاديمي</span>
            <span className="nm-latin block text-[9px] text-gold">NUMERIA ACADEMY</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-sm text-ivory/80 transition-colors hover:text-gold"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#pricing"
            className="hidden rounded-sm border border-gold/50 px-5 py-2.5 text-sm text-gold transition-colors hover:bg-gold hover:text-green-deep sm:inline-block"
          >
            تسجيل الدخول
          </a>
          <a
            href="#pricing"
            className="rounded-sm bg-gold px-5 py-2.5 text-sm font-semibold text-green-deep shadow-[0_10px_30px_-12px_rgba(0,0,0,.6)] transition-transform hover:-translate-y-0.5"
          >
            ابدأ مجاناً
          </a>
        </div>
      </nav>
    </header>
  );
}

/* ----------------------------------------------------------------- hero */

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-green-deep pt-32 pb-24 sm:pb-32">
      {/* Numidian mosaic + light */}
      <div className="nm-pattern pointer-events-none absolute inset-0 opacity-[0.10]" />
      <div className="pointer-events-none absolute -top-40 start-1/4 size-[36rem] rounded-full bg-gold/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 end-0 size-[28rem] rounded-full bg-algeria-red/10 blur-[120px]" />
      <ColumnMark className="pointer-events-none absolute -bottom-6 start-6 h-64 text-gold/10" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.05fr_.95fr]">
        <div className="nm-rise text-center lg:text-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs text-gold">
            <Diamond className="size-2" />
            منصة تعليمية جزائرية · من المتوسط إلى البكالوريا
          </span>

          <h1 className="nm-display mt-7 text-4xl leading-[1.25] text-ivory sm:text-6xl lg:text-[4.2rem]">
            من إرث <span className="nm-gold-text">نوميديا</span>
            <br />
            إلى مستقبل التعليم
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-9 text-ivory/70 sm:text-lg lg:mx-0">
            عمود نوميدي يحمل المعرفة، وكتاب مفتوح لا يُغلق. نوميريا أكاديمي تجمع الدروس المباشرة،
            التمارين الذكية، والمتابعة الدقيقة في منصة واحدة صُنعت للتلميذ الجزائري.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <a
              href="#pricing"
              className="rounded-sm bg-gold px-8 py-4 text-sm font-bold text-green-deep shadow-[0_18px_40px_-18px_rgba(196,152,79,.9)] transition-transform hover:-translate-y-0.5"
            >
              جرّب 7 أيام مجاناً
            </a>
            <a
              href="#platform"
              className="rounded-sm border border-ivory/25 px-8 py-4 text-sm text-ivory transition-colors hover:border-gold hover:text-gold"
            >
              شاهد المنصة
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-ivory/10 pt-8">
            {[
              ["12400+", "تلميذ نشط"],
              ["320+", "درس مسجّل"],
              ["94%", "نسبة نجاح"],
            ].map(([v, k]) => (
              <div key={k} className="text-center lg:text-start">
                <dt className="nm-display text-2xl text-gold sm:text-3xl">{v}</dt>
                <dd className="mt-1 text-xs text-ivory/55">{k}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Logo shrine */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="nm-float relative rounded-sm bg-ivory p-10 shadow-[0_50px_100px_-40px_rgba(0,0,0,.8)] ring-1 ring-gold/30">
            <div className="absolute inset-3 border border-gold/25" />
            <img
              src={logo.url}
              alt="شعار نوميريا أكاديمي: عمود نوميدي وكتاب مفتوح وهلال ونجمة"
              className="relative mx-auto w-full object-contain"
            />
          </div>
          <CrescentStar className="absolute -top-6 -start-6 size-16 text-algeria-red/70" />
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- story */

const STORY = [
  {
    icon: ColumnMark,
    era: "الإرث",
    title: "نوميديا",
    text: "العمود النوميدي: أساس ثابت، مملكة ماسينيسا التي جعلت من العلم سلطة.",
  },
  {
    icon: BookMark,
    era: "الهوية",
    title: "الجزائر",
    text: "الهلال والنجمة والأحمر: هوية لا تُستعار، لغة عربية أولاً وتعليم يشبهنا.",
  },
  {
    icon: CrescentStar,
    era: "المستقبل",
    title: "التكنولوجيا",
    text: "منصة رقمية دقيقة: تحليل الأداء، مسارات شخصية، وحصص مباشرة عالية الجودة.",
  },
];

function Story() {
  return (
    <section id="story" className="relative bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center">
          <span className="nm-latin text-[10px] text-gold-deep">THE STORY</span>
          <h2 className="nm-display mt-3 text-3xl text-green-deep sm:text-5xl">
            كل عنصر في الشعار له معنى
          </h2>
          <GoldRule className="mt-6" />
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {STORY.map(({ icon: Icon, era, title, text }, i) => (
            <article
              key={title}
              className="group relative overflow-hidden border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_30px_60px_-40px_rgba(11,58,37,.6)]"
            >
              <span className="nm-latin absolute end-5 top-5 text-[10px] text-gold-deep/50">
                0{i + 1}
              </span>
              <Icon className="h-14 w-auto text-green-deep transition-colors group-hover:text-gold-deep" />
              <p className="mt-6 text-xs tracking-widest text-gold-deep">{era}</p>
              <h3 className="nm-display mt-1 text-2xl text-green-deep">{title}</h3>
              <p className="mt-3 text-sm leading-8 text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- platform */

function ProductMockup() {
  return (
    <div className="relative overflow-hidden rounded-md border border-gold/25 bg-green-deep/95 shadow-[0_60px_120px_-50px_rgba(0,0,0,.9)]">
      {/* window bar */}
      <div className="flex items-center gap-2 border-b border-ivory/10 bg-black/20 px-4 py-3">
        <span className="size-2.5 rounded-full bg-algeria-red/70" />
        <span className="size-2.5 rounded-full bg-gold/70" />
        <span className="size-2.5 rounded-full bg-ivory/30" />
        <span className="mx-auto rounded-sm bg-ivory/10 px-4 py-1 text-[10px] text-ivory/50">
          app.numeria.dz / لوحة التلميذ
        </span>
      </div>

      <div className="grid gap-4 p-5 sm:grid-cols-[1fr_.75fr]">
        {/* progress card */}
        <div className="rounded-sm border border-ivory/10 bg-ivory/[0.04] p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-ivory">تقدّمك هذا الأسبوع</p>
            <span className="rounded-full bg-gold/15 px-3 py-1 text-[10px] text-gold">+18%</span>
          </div>
          <div className="mt-5 flex h-32 items-end gap-2">
            {[38, 52, 46, 68, 74, 61, 88].map((h, i) => (
              <div key={i} className="flex-1">
                <div
                  className="rounded-t-sm bg-gradient-to-t from-gold/30 to-gold"
                  style={{ height: `${h}%` }}
                />
              </div>
            ))}
          </div>
          <div className="mt-3 flex justify-between text-[10px] text-ivory/40">
            {["سبت", "أحد", "إثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة"].map((d) => (
              <span key={d}>{d}</span>
            ))}
          </div>
        </div>

        {/* next live session */}
        <div className="rounded-sm border border-gold/25 bg-gold/[0.07] p-5">
          <p className="text-[10px] tracking-widest text-gold">الحصة القادمة · مباشر</p>
          <h4 className="nm-display mt-2 text-xl text-ivory">الدوال العددية — 3 ثانوي</h4>
          <p className="mt-1 text-xs text-ivory/60">الأستاذ ياسين ب. · 18:30</p>
          <div className="mt-5 space-y-3">
            {["تمارين محلولة (12)", "ملخص PDF", "اختبار قصير"].map((t) => (
              <div key={t} className="flex items-center gap-2 text-xs text-ivory/70">
                <Diamond className="size-2 text-gold" />
                {t}
              </div>
            ))}
          </div>
          <button className="mt-6 w-full rounded-sm bg-gold py-2.5 text-xs font-bold text-green-deep">
            الدخول إلى القاعة
          </button>
        </div>

        {/* subjects row */}
        <div className="sm:col-span-2 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            ["الرياضيات", 86],
            ["الفيزياء", 72],
            ["العلوم", 64],
            ["اللغة العربية", 91],
          ].map(([name, val]) => (
            <div key={name as string} className="rounded-sm border border-ivory/10 bg-ivory/[0.03] p-4">
              <p className="text-xs text-ivory/70">{name}</p>
              <p className="nm-display mt-1 text-2xl text-gold">{val}%</p>
              <div className="mt-2 h-1 rounded-full bg-ivory/10">
                <div className="h-1 rounded-full bg-gold" style={{ width: `${val}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const FEATURES = [
  ["حصص مباشرة", "قاعات افتراضية بجودة عالية مع تسجيل متاح دائماً بعد الحصة."],
  ["تمارين ذكية", "تمارين تتكيّف مع مستواك وتركّز على نقاط ضعفك تلقائياً."],
  ["متابعة الولي", "تقرير أسبوعي واضح يصل الولي: الحضور، النتائج، والانتظام."],
  ["بنك المواضيع", "مواضيع البكالوريا محلولة خطوة بخطوة من 2008 إلى اليوم."],
];

function Platform() {
  return (
    <section id="platform" className="relative overflow-hidden bg-green-deep py-24 sm:py-32">
      <div className="nm-pattern pointer-events-none absolute inset-0 opacity-[0.07]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[.95fr_1.05fr]">
          <div>
            <span className="nm-latin text-[10px] text-gold">THE PRODUCT</span>
            <h2 className="nm-display mt-3 text-3xl text-ivory sm:text-5xl">
              منصة حقيقية، وليست وعداً
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-9 text-ivory/65 sm:text-base">
              كل ما يحتاجه التلميذ في مكان واحد: الحصة، التمرين، التصحيح، والنتيجة. وكل ما يحتاجه
              الولي: الوضوح.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {FEATURES.map(([t, d]) => (
                <div key={t} className="border-s-2 border-gold/50 ps-4">
                  <h3 className="nm-display text-lg text-ivory">{t}</h3>
                  <p className="mt-1.5 text-xs leading-7 text-ivory/55">{d}</p>
                </div>
              ))}
            </div>
          </div>

          <ProductMockup />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- subjects */

const SUBJECTS = [
  ["الرياضيات", "من الدوال إلى الاحتمالات", "١٢٤ درساً"],
  ["الفيزياء", "الميكانيك، الكهرباء، الكيمياء", "٩٨ درساً"],
  ["علوم الطبيعة", "الوراثة والمناعة والتغذية", "٨٦ درساً"],
  ["اللغة العربية", "النص الأدبي والبلاغة", "٧٢ درساً"],
  ["اللغات الأجنبية", "الإنجليزية والفرنسية", "٦٤ درساً"],
  ["العلوم الإسلامية", "الفقه والعقيدة", "٤٠ درساً"],
];

function Subjects() {
  return (
    <section id="subjects" className="bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="nm-latin text-[10px] text-gold-deep">SUBJECTS</span>
            <h2 className="nm-display mt-3 text-3xl text-green-deep sm:text-5xl">
              المواد والشعب
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-8 text-muted-foreground">
            برنامج مطابق للمنهاج الجزائري الرسمي، يُحدَّث مع كل تعديل وزاري.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {SUBJECTS.map(([name, desc, count]) => (
            <article
              key={name}
              className="group relative bg-card p-8 transition-colors hover:bg-green-deep"
            >
              <BookMark className="h-7 w-auto text-gold-deep transition-colors group-hover:text-gold" />
              <h3 className="nm-display mt-5 text-2xl text-green-deep transition-colors group-hover:text-ivory">
                {name}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground transition-colors group-hover:text-ivory/60">
                {desc}
              </p>
              <p className="mt-6 text-xs tracking-widest text-gold-deep transition-colors group-hover:text-gold">
                {count}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- teachers */

const TEACHERS = [
  ["الأستاذ ياسين بلقاسم", "الرياضيات", "١٤ سنة خبرة · ثانوية قسنطينة"],
  ["الأستاذة أمينة حمدي", "العلوم الطبيعية", "١١ سنة خبرة · ثانوية وهران"],
  ["الأستاذ كريم مزيان", "الفيزياء", "٩ سنوات خبرة · ثانوية الجزائر الوسطى"],
];

function Teachers() {
  return (
    <section id="teachers" className="relative overflow-hidden bg-sand py-24 sm:py-32">
      <ColumnMark className="pointer-events-none absolute -bottom-10 end-8 h-72 text-green-deep/5" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center">
          <span className="nm-latin text-[10px] text-gold-deep">FACULTY</span>
          <h2 className="nm-display mt-3 text-3xl text-green-deep sm:text-5xl">
            أساتذة من الميدان
          </h2>
          <GoldRule className="mt-6" />
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TEACHERS.map(([name, subject, meta]) => (
            <article key={name} className="border border-gold/25 bg-card p-8 text-center">
              <div className="mx-auto grid size-16 place-items-center rounded-full bg-green-deep">
                <span className="nm-display text-xl text-gold">{String(name).split(" ")[1]?.[0]}</span>
              </div>
              <h3 className="nm-display mt-5 text-xl text-green-deep">{name}</h3>
              <p className="mt-1 text-xs tracking-widest text-gold-deep">{subject}</p>
              <p className="mt-3 text-xs leading-7 text-muted-foreground">{meta}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------- testimonials */

const QUOTES = [
  ["انتقلت من 8 إلى 15 في الرياضيات خلال فصل واحد. طريقة الشرح مختلفة تماماً.", "سارة ب. · 3 ثانوي"],
  ["أخيراً أعرف ما يدرسه ابني وأين يتعثّر، دون أن أسأله كل يوم.", "عبد الحق م. · ولي تلميذ"],
  ["الحصص المسجّلة أنقذتني في المراجعة الأخيرة قبل البكالوريا.", "أنيس ت. · ناجح 2025"],
];

function Testimonials() {
  return (
    <section className="bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <h2 className="nm-display text-center text-3xl text-green-deep sm:text-5xl">
          نتائج يرويها أصحابها
        </h2>
        <GoldRule className="mt-6" />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {QUOTES.map(([q, a]) => (
            <figure key={a} className="relative border-t-2 border-gold bg-card p-8">
              <blockquote className="text-sm leading-9 text-green-deep">«{q}»</blockquote>
              <figcaption className="mt-6 text-xs tracking-widest text-gold-deep">{a}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- pricing */

const PLANS = [
  {
    name: "المكتشف",
    price: "0",
    period: "دج / شهر",
    perks: ["درسان مجاناً كل أسبوع", "بنك تمارين محدود", "تقرير شهري"],
    featured: false,
  },
  {
    name: "الأكاديمي",
    price: "2 900",
    period: "دج / شهر",
    perks: ["كل الحصص المباشرة", "التمارين الذكية كاملة", "بنك مواضيع البكالوريا", "متابعة الولي أسبوعياً"],
    featured: true,
  },
  {
    name: "النخبة",
    price: "4 900",
    period: "دج / شهر",
    perks: ["كل مزايا الأكاديمي", "حصص دعم فردية", "تصحيح مخصص للفروض", "مرافقة حتى البكالوريا"],
    featured: false,
  },
];

function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden bg-green-deep py-24 sm:py-32">
      <div className="nm-pattern pointer-events-none absolute inset-0 opacity-[0.07]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center">
          <span className="nm-latin text-[10px] text-gold">PLANS</span>
          <h2 className="nm-display mt-3 text-3xl text-ivory sm:text-5xl">اختر مسارك</h2>
          <GoldRule className="mt-6" />
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PLANS.map((p) => (
            <article
              key={p.name}
              className={`relative flex flex-col border p-8 ${
                p.featured
                  ? "border-gold bg-ivory text-green-deep shadow-[0_40px_90px_-40px_rgba(0,0,0,.8)] lg:-mt-6 lg:mb-6"
                  : "border-ivory/15 bg-ivory/[0.04] text-ivory"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 start-8 bg-gold px-3 py-1 text-[10px] font-bold text-green-deep">
                  الأكثر اختياراً
                </span>
              )}
              <h3 className="nm-display text-2xl">{p.name}</h3>
              <p className="mt-5 flex items-baseline gap-2">
                <span className="nm-display text-4xl">{p.price}</span>
                <span className={`text-xs ${p.featured ? "text-muted-foreground" : "text-ivory/50"}`}>
                  {p.period}
                </span>
              </p>
              <ul className="mt-7 flex-1 space-y-3">
                {p.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2 text-sm leading-7">
                    <Diamond className="mt-2 size-2 shrink-0 text-gold" />
                    <span className={p.featured ? "" : "text-ivory/70"}>{perk}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#top"
                className={`mt-8 rounded-sm py-3 text-center text-sm font-bold transition-transform hover:-translate-y-0.5 ${
                  p.featured
                    ? "bg-green-deep text-ivory"
                    : "border border-gold/50 text-gold hover:bg-gold hover:text-green-deep"
                }`}
              >
                ابدأ الآن
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- footer */

function Footer() {
  return (
    <footer className="bg-ivory">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <img src={logo.url} alt="شعار نوميريا أكاديمي" className="h-28 w-auto object-contain" />
            <p className="mt-4 max-w-xs text-sm leading-8 text-muted-foreground">
              نوميريا أكاديمي — منصة تعليمية جزائرية تستلهم إرث نوميديا وتبني مستقبل التعليم الرقمي.
            </p>
          </div>
          <div>
            <h4 className="nm-display text-lg text-green-deep">المنصة</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {["المواد", "الأساتذة", "الاشتراك", "الأسئلة الشائعة"].map((l) => (
                <li key={l}>
                  <a href="#top" className="transition-colors hover:text-gold-deep">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="nm-display text-lg text-green-deep">تواصل معنا</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>الجزائر العاصمة، الجزائر</li>
              <li>contact@numeria.dz</li>
              <li dir="ltr" className="text-end">+213 (0) 000 00 00 00</li>
            </ul>
          </div>
        </div>

        <GoldRule className="mt-14" />
        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} نوميريا أكاديمي. كل الحقوق محفوظة.</p>
          <p className="nm-latin text-[10px] text-gold-deep">
            FROM THE LEGACY OF NUMIDIA TO THE FUTURE OF EDUCATION
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ----------------------------------------------------------------- page */

function Index() {
  return (
    <div className="min-h-screen bg-ivory">
      <Nav />
      <main>
        <Hero />
        <Story />
        <Platform />
        <Subjects />
        <Teachers />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
