"use client";

import { useState } from "react";

const navItems = [
  {
    label: "Destinations", // parent ne pointe nulle part
    items: [
      { label: "My Journey", href: "#journey" },
      { label: "Key Experiences", href: "#experiences" },
      { label: "Where I've Worked", href: "#places" },
    ],
  },
  {
    label: "Hotels",
    items: [
      { label: "Management Philosophy", href: "#hotels" },
     
    ],
  },
  {
    label: "Workspaces",
    items: [
      { label: "Side Projects, Innovation & Digital", href: "#projects" },

    ],
  },
  {
    label: "Explore",
    items: [
      { label: "Who I Am", href: "#who" },
    ],
  },
  {
    label: "Inquiry",
    items: [
      { label: "Contact Me", href: "#contact" },
      { label: "Download my CV", href: "#cv" },
    ],
  },
];


export default function Home() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <main className="bg-white min-h-screen flex flex-col">
      {/* NAVBAR */}
     <header className="sticky top-0 z-50 bg-white">
  <nav className="grid grid-cols-[1fr_auto_1fr] items-center px-12 py-4">
    {/* Left */}
    <div className="flex gap-6 justify-start">
      {navItems.slice(0, 3).map((item) => (
        <div
          key={item.label}
          className="relative"
          onMouseEnter={() => setOpen(item.label)}
          onMouseLeave={() => setOpen(null)}
        >
          <span className="cursor-default">{item.label}</span>
          {open === item.label && (
            <div className="absolute left-0 top-6 bg-black text-white p-4 shadow-lg space-y-2 z-50 min-w-48">
              {item.items.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="block hover:text-rose-400"
                  onClick={() => setOpen(null)}
                >
                  {s.label}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>

    {/* Logo centré */}
    <div className="justify-self-center">
      <div className="bg-black text-white flex items-center justify-center w-28 h-28">
        <span className="font-handwriting text-2xl text-center leading-tight">
          Ruby<br />feat. Martin
        </span>
      </div>
    </div>

    {/* Right */}
    <div className="flex gap-6 justify-end">
      {navItems.slice(3).map((item) => (
        <div
          key={item.label}
          className="relative"
          onMouseEnter={() => setOpen(item.label)}
          onMouseLeave={() => setOpen(null)}
        >
          <span className="cursor-default">{item.label}</span>
          {open === item.label && (
            <div className="absolute right-0 top-6 bg-black text-white p-4 shadow-lg space-y-2 z-50 min-w-48">
              {item.items.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="block hover:text-rose-400"
                  onClick={() => setOpen(null)}
                >
                  {s.label}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  </nav>
</header>

{/* Fun disclaimer */}
<div className="bg-rose-100 text-rose-700 text-center py-2 px-4 text-sm font-medium">
  ⚡ This site was inspired by yours.  
  It will <span className="line-through">self-destruct</span> disappear once you’ve answered me 😅
</div>


      {/* HERO */}
      <section className="mt-16 flex flex-col items-center">
        <h1 className="text-6xl md:text-7xl text-rose-600 font-handwriting text-center mb-6">
  make it{" "}
  <span className="relative inline-block">
    <span className="text-rose-600">your</span>
    <span className="absolute left-0 right-0 top-[65%] h-[2px] bg-rose-600 rotate-[-5deg]"></span>
  </span>{" "}
  our own story
</h1>


        <p className="text-sm md:text-base tracking-[0.3em] uppercase font-semibold text-black text-center">
          START A FRESH CHAPTER
        </p>

        {/* Full-width image */}
<div className="relative w-full h-[90vh] mt-8">
  <img
    src="/my-photo.jpg"
    alt="Martin cycling"
    className="w-full h-full object-cover object-[center_40%]"

  />
</div>



      </section>

      <section
  id="journey"
  className="grid md:grid-cols-2 gap-8 px-12 py-24 items-center scroll-mt-40"
>
  {/* Left title */}
  <div>
    <h2 className="font-handwriting text-5xl text-black whitespace-pre-line leading-snug">
      {"Where has my journey taken me?"}
    </h2>
  </div>

  {/* Right text */}
  <div className="space-y-6 text-gray-700">
  <p>
    From <strong>camp counselor</strong> creating summer experiences 
    to <strong>designing complete stays</strong>, my journey has always 
    been about crafting moments that matter.
  </p>
  <p>
    From <strong>hospitality training</strong> to managing teams, from 
    consulting to building digital projects, my career has been a 
    combination of precision and creativity.
  </p>
  <p>
    I believe in leading by example, fostering teamwork, and turning 
    challenges into opportunities. Each step has been a chance to learn 
    and reinvent myself.
  </p>
  <p className="font-semibold text-black">
  <span className="bg-sky-200 px-2 py-1">
    Passionate about challenges and driven by innovation, Ruby feels like the perfect spot for me.
  </span>
</p>
</div>

</section>

{/* Two portraits, asymmetric & staggered */}
<section className="px-12 py-16">
  <div className="grid md:grid-cols-[0.75fr_1.25fr] gap-10 items-start">
    {/* Left: your portrait (narrower + higher) */}
    <div className="relative mx-auto w-full max-w-[520px] md:h-[72vh] aspect-[3/4] -translate-y-8 md:-translate-y-12">
      <img
        src="/portrait.jpg"
        alt="Martin portrait"
        className="w-full h-full object-cover object-center rounded-sm"
      />
    </div>

    {/* Right: OKKO / ambiance (wider + lower) */}
    <div className="relative mx-auto w-full max-w-[760px] md:h-[72vh] aspect-[3/4] translate-y-6">
      <img
        src="/okko.jpg"
        alt="OKKO rooftop / ambiance"
        className="w-full h-full object-cover object-center rounded-sm"
      />
    </div>
  </div>
</section>


<section id="experiences" className="px-12 py-24 scroll-mt-40">
  {/* Titre centré */}
  <h2 className="font-handwriting text-5xl text-black text-center leading-tight">
    Key Experiences
  </h2>

  <div className="mx-auto max-w-3xl mt-10 space-y-12 text-gray-800">
    {/* OKKO HOTELS */}
    <div>
      <h3 className="text-2xl font-semibold mb-2">OKKO HOTELS</h3>
      <p className="mb-4">
        Opening a hotel from scratch, shaping a rooftop bar with character, and building a team culture that lasts.
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Hotel opening</strong> My first one, incredible moment.</li>
        <li><strong>Rooftop bar creation</strong> — so much fun ! .</li>
        <li><strong>Profitability from year 2</strong>.</li>
        <li><strong>Lowest turnover rate</strong> in the group, best team ever had ! Went to my wedding 😍</li>
        <li><strong>Best guest satisfaction</strong> in the group — every month for 4 years, and i told them a lot 😂</li>
      </ul>
      <p className="mt-4 text-gray-900">
        I had an absolute blast. Why am I not there anymore? I listened to other siren songs.
      </p>
    </div>

    {/* Hôtel Toulon Bord de Mer */}
    <div>
      <h3 className="text-2xl font-semibold mb-2">Hôtel Toulon Bord de Mer</h3>
      <p className="mb-4">
        Operations and transformation across two properties, with people, product and brand moving in sync.
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Operations leadership</strong> across both hotels.</li>
        <li><strong>Full restructuring projects</strong> 🎼Starting from the bottom🎼.</li>
        <li><strong>Brand change</strong> (Loading...).</li>
        <li><strong>Staff training</strong> and culture building.</li>
        <li><strong>Digital tools</strong> designed for daily operations (I Discovered ChatGPT😂).</li>
      </ul>
    </div>
  </div>
</section>

<section className="relative w-full h-[25vh] my-16">
  <img
    src="/transition.jpg"  // mets une image sympa (vue hôtel, mer, ambiance)
    alt="Transition"
    className="w-full h-full object-cover object-center"
  />
  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
    <h2 className="font-handwriting text-5xl text-white text-center">
      Always moving forward
    </h2>
  </div>
</section>


<section id="places" className="px-12 py-24 scroll-mt-40">
  <h2 className="font-handwriting text-5xl text-black text-center leading-tight mb-12">
    Where I've Worked
  </h2>

  <div className="relative flex items-start justify-between max-w-5xl mx-auto">
    {/* Horizontal line */}
    <div className="absolute top-3 left-0 right-0 h-[2px] bg-gray-300"></div>

    {/* Step 1 */}
    <div className="relative flex-1 text-center">
      <div className="w-6 h-6 bg-rose-600 rounded-full mx-auto relative z-10"></div>
      <p className="mt-6 text-gray-700 max-w-xs mx-auto">
        I've had so many enriching experiences...
      </p>
    </div>

    {/* Step 2 */}
    <div className="relative flex-1 text-center">
      <div className="w-6 h-6 bg-rose-600 rounded-full mx-auto relative z-10"></div>
      <p className="mt-6 text-gray-700 max-w-xs mx-auto">
        If you’d like to hear about them...
      </p>
    </div>

    {/* Step 3 */}
    <div className="relative flex-1 text-center">
      <div className="w-6 h-6 bg-rose-600 rounded-full mx-auto relative z-10"></div>
      <p className="mt-6 text-gray-700 max-w-xs mx-auto">
        ...let’s talk it over with a coffee or tea. #hype
      </p>
    </div>
  </div>
</section>

<section id="hotels" className="bg-black text-white px-12 py-24 scroll-mt-40">
  {/* Title */}
  <h2 className="font-handwriting text-5xl text-rose-600 text-center leading-tight mb-16">
    Management Philosophy
  </h2>

  {/* 3 mantras */}
  <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12 text-center">
    {/* Adapt daily */}
    <div>
      <h3 className="font-handwriting text-3xl text-rose-600 mb-4">
        Adapt daily
      </h3>
      <p className="text-white leading-relaxed">
        I don’t believe in rigid theories. 
        Every day brings a new situation, a new challenge, 
        and I adjust accordingly.
      </p>
    </div>

    {/* Care bears spirit */}
    <div>
      <h3 className="font-handwriting text-3xl text-rose-600 mb-4">
        Care bears spirit
      </h3>
      <p className="text-white leading-relaxed">
        What drives me is seeing people happy. 
        Call it dreamy, call it naïve — but I live in a 
        <span className="italic"> “care bears world”</span> and I’m proud of it.
      </p>
    </div>

    {/* Happy team = goals crushed */}
    <div>
      <h3 className="font-handwriting text-3xl text-rose-600 mb-4">
        Happy team = goals crushed
      </h3>
      <p className="text-white leading-relaxed">
        Nothing beats a team that is happy, fulfilled, and motivated. 
        That’s how hotels reach — and surpass — their goals 
        <span className="block mt-2 italic text-gray-400 text-sm">
          (at least I think so… I hope so… otherwise I’ve been doing it wrong from the start 🙃)
        </span>
      </p>
    </div>
  </div>
</section>


<section id="projects" className="bg-white px-12 py-24 scroll-mt-40">
  {/* Title */}
  <h2 className="font-handwriting text-5xl text-rose-600 text-center leading-tight mb-16">
    Side Projects & Innovation
  </h2>
<p className="text-center text-gray-500 text-sm italic mb-12">
    with a little help from ChatGPT, of course
  </p>
  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
    {/* Project 1: Hotel Ops Web App */}
<article className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
  {/* Aperçu rectangulaire */}
  <div className="mb-5 rounded-lg overflow-hidden ring-1 ring-gray-200 aspect-[4/3]">
    <img
      src="/tool-dashboard.jpg"
      alt="Hotel ops tool"
      className="w-full h-full object-cover"
    />
  </div>

  <h3 className="text-xl font-semibold text-center mb-2">Hotel Ops — Web App</h3>
  <p className="text-gray-700 text-sm leading-relaxed mb-4 text-center">
    Lightweight online tool for hotels: shift handovers, day planning, to-dos,
    reminders, and cross-team notes — built to keep operations lean, clear, and fast.
  </p>

  {/* Badges */}
  <div className="flex items-center justify-center gap-2">
    <span className="text-xs bg-black text-white px-3 py-1 rounded-full opacity-80">iOS</span>
    <span className="text-xs bg-green-600 text-white px-3 py-1 rounded-full opacity-80">Android</span>
    <span className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full opacity-80">Web</span>
  </div>
</article>


    {/* Project 2: HTBM preview */}
    <article className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
      {/* Aperçu du site (iframe si autorisé) */}
      <div className="mb-5 rounded-lg overflow-hidden ring-1 ring-gray-200 aspect-[4/3]">
        <iframe
          src="https://sitehtbm.netlify.app/"
          className="w-full h-full"
          title="HTBM preview"
        />
      </div>

      {/* Fallback si l’iframe est bloqué : décommente l'image ci-dessous et commente l'iframe
      <div className="mb-5 rounded-lg overflow-hidden ring-1 ring-gray-200 aspect-[4/3]">
        <img src="/htbm-thumb.jpg" alt="HTBM preview" className="w-full h-full object-cover" />
      </div>
      */}

      <h3 className="text-xl font-semibold text-center mb-2">HTBM — Micro-site</h3>
      <p className="text-gray-700 text-sm leading-relaxed text-center">
        A clean, fast micro-site built for hospitality storytelling and quick actions. 
        Minimal friction, mobile-first, Ruby-friendly vibe.
      </p>
    </article>

    {/* Project 3: In-room Scent Personalization */}
    <article className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
      {/* Image bubble */}
      <div className="w-28 h-28 mx-auto mb-5 rounded-full overflow-hidden ring-1 ring-gray-200">
        <img
          src="/confidential.png"
          alt="Confidential project"
          className="w-full h-full object-contain p-1 bg-white"
        />
      </div>

      <h3 className="text-xl font-semibold text-center mb-2">In-Room Scent Personalization</h3>
      <p className="text-gray-700 text-sm leading-relaxed text-center">
        Guests pick their preferred fragrance blend at check-in; rooms adapt with a 
        discrete multi-scent device. Pilot-ready concept — designed to boost mood and memory. Working hard on it 😁
      </p>
    </article>
  </div>
</section>
{/* ================= Explore / Who I Am ================= */}
<section id="who" className="py-20 bg-white scroll-mt-40">
  {/* Title in the same handwritten style */}
  <h2 className="font-handwriting text-5xl text-rose-600 text-center mb-12">
    Who I Am
  </h2>

  {/* Photo grid */}
  <div className="grid grid-cols-3 gap-4 max-w-6xl mx-auto">
    <div className="relative group">
      <img src="/explore1.jpg" alt="Explore 1" className="w-full h-64 object-cover rounded-lg shadow-md" />
      <p className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition">
        Competitor
      </p>
    </div>
    <div className="relative group">
      <img src="/explore2.jpg" alt="Explore 2" className="w-full h-64 object-cover rounded-lg shadow-md" />
      <p className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition">
        Organized, but stubborn
      </p>
    </div>
    <div className="relative group">
      <img src="/explore3.jpg" alt="Explore 3" className="w-full h-64 object-cover rounded-lg shadow-md" />
      <p className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition">
        Believes innovation can change the world
      </p>
    </div>
    <div className="relative group">
      <img src="/explore4.jpg" alt="Explore 4" className="w-full h-64 object-cover rounded-lg shadow-md" />
      <p className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition">
        Sometimes funny... sometimes not
      </p>
    </div>
    <div className="relative group">
      <img src="/explore5.jpg" alt="Explore 5" className="w-full h-64 object-cover rounded-lg shadow-md" />
      <p className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition">
        Married to the best woman in the world (not under threat, I swear)
      </p>
    </div>
    <div className="relative group">
      <img src="/explore6.jpg" alt="Explore 6" className="w-full h-64 object-cover rounded-lg shadow-md" />
      <p className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition">
        Calm under pressure
      </p>
    </div>
    <div className="relative group">
      <img src="/explore7.jpg" alt="Explore 7" className="w-full h-64 object-cover rounded-lg shadow-md" />
      <p className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition">
        I always think I’m right (dangerous, but useful)
      </p>
    </div>
    <div className="relative group">
      <img src="/explore8.jpg" alt="Explore 8" className="w-full h-64 object-cover rounded-lg shadow-md" />
      <p className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition">
        Loves building projects from scratch
      </p>
    </div>
    <div className="relative group">
      <img src="/explore9.jpg" alt="Explore 9" className="w-full h-64 object-cover rounded-lg shadow-md" />
      <p className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition">
        If there’s a challenge, I’m already on it
      </p>
    </div>
  </div>
  {/* Why it fits Ruby */}
  <div className="max-w-3xl mx-auto mt-12 text-center text-gray-800">
    <h3 className="text-xl font-semibold mb-3">Why this feat with Ruby makes sense</h3>
    <p>
      Ruby blends personality with precision. That’s my lane: hands-on leadership, 
      lean operations, and a team-first mindset — with a taste for building new things. 
      I love turning ideas into working habits, shaping guest experiences with simple, 
      smart tools, and keeping the vibe human. If the mission is to push a hotel forward 
      with creativity and accountability, I’m all in.
    </p>
    <div className="h-6"></div>
    <p className="italic">
  And to be fully honest — I didn’t know Ruby Hotels & Bars before. 
  But your job post made me smile; I loved your approach to recruitment. 
  Then I visited your site and felt the same fresh energy I once knew at OKKO, 
  which sadly faded over the years.  
  So if you’d like to meet me, it would be my absolute pleasure!
</p>
  </div>

  {/* ================= Contact Me ================= */}
<section id="contact" className="bg-black text-white px-6 py-32 mt-16 scroll-mt-40">
  <h2 className="font-handwriting text-5xl text-rose-600 text-center mb-12">
    Contact Me
  </h2>

  <div className="max-w-3xl mx-auto text-center space-y-6">
    {/* Name */}
    <p className="text-2xl font-semibold">Martin Vitté</p>

    {/* Email */}
    <p className="text-lg">
      <a href="mailto:martinvitte@gmail.com" className="hover:text-rose-500 transition">
        martinvitte@gmail.com
      </a>
    </p>

    {/* Phone */}
    <p className="text-lg">
      <a href="tel:+33672644243" className="hover:text-rose-500 transition">
        +33 6 72 64 42 43
      </a>
    </p>

    {/* Location */}
    <p className="text-gray-400 text-sm">
      Toulon, Var — <span className="italic">40 min from Marseille</span>
    </p>
  </div>
</section>
{/* Fake Download CV Button */}
<div className="text-center mt-12">
  <button
    onClick={() => {
      const joke = document.getElementById("cv-joke");
      if (joke) joke.classList.toggle("hidden");
    }}
    className="px-6 py-3 bg-rose-600 text-white font-semibold rounded-lg shadow hover:bg-rose-700 transition"
  >
    Download my CV
  </button>

  {/* Hidden joke, revealed on click */}
  <p
    id="cv-joke"
    className="hidden mt-6 text-gray-400 italic max-w-xl mx-auto"
  >
    Normally here you’d find a “Download my CV” button…  
    but let’s be honest — if you’re still reading this site,  
    the CV would only be a downgrade 😅
  </p>
</div>

</section>


    </main>
  );
}
