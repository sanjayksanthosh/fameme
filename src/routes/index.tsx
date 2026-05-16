import { createFileRoute } from "@tanstack/react-router";
import appMockup from "@/assets/fame-app-mockup.png";

export const Route = createFileRoute("/")({
  component: Index,
});

const features = [
  {
    code: "01 // CORE",
    title: "Viral Boost",
    desc: "Our proprietary engine forces your content into 10k feeds in 60 seconds. No warm-up required.",
    hover: "hover:bg-primary",
  },
  {
    code: "02 // DATA",
    title: "Fame Meter",
    desc: "Real-time social capital tracking. Watch your market value fluctuate with every like and share.",
    hover: "hover:bg-secondary hover:text-black",
  },
  {
    code: "03 // CASH",
    title: "Creator ATM",
    desc: "Direct-to-bank monetization. Cash out your engagement points instantly. Clout is the new currency.",
    hover: "hover:bg-white hover:text-black",
  },
  {
    code: "04 // RADAR",
    title: "Trend Radar",
    desc: "Predict the next wave before it breaks. Know what's going viral 48 hours ahead of everyone else.",
    hover: "hover:bg-accent",
  },
  {
    code: "05 // MATCH",
    title: "Collab Match",
    desc: "Auto-pair with creators of equal or higher Fame Scores to multiply your reach instantly.",
    hover: "hover:bg-secondary hover:text-black",
  },
  {
    code: "06 // INSIGHT",
    title: "Ego Analytics",
    desc: "Deep-dive sentiment analysis. Who loves you? Who's hating? Who's buying? See the truth.",
    hover: "hover:bg-white hover:text-black",
  },
];

const marqueeWords = [
  "GO VIRAL",
  "★",
  "BE SEEN",
  "★",
  "GET PAID",
  "★",
  "STAY MAIN",
  "★",
  "RULE THE FEED",
  "★",
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-secondary">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-background border-b-4 border-black px-6 py-4 flex justify-between items-center">
        <span className="font-display text-3xl md:text-4xl tracking-tighter uppercase">
          Fame<span className="iridescent-text">Me</span>
        </span>
        <div className="flex gap-4 md:gap-8 items-center font-bold uppercase text-xs md:text-sm tracking-widest">
          <a href="#features" className="hidden md:inline hover:text-primary transition-colors">
            Features
          </a>
          <a href="#challenges" className="hidden md:inline hover:text-primary transition-colors">
            Challenges
          </a>
          <a href="#leaderboard" className="hidden md:inline hover:text-primary transition-colors">
            Scoreboard
          </a>
          <button className="bg-primary text-primary-foreground px-4 md:px-6 py-2 brutal-border sticker-shadow active:translate-x-1 active:translate-y-1 active:shadow-none transition-all cursor-pointer">
            Join Waitlist
          </button>
        </div>
      </nav>

      {/* Iridescent marquee */}
      <div className="iridescent-bg border-b-4 border-black overflow-hidden py-3">
        <div
          className="flex gap-12 whitespace-nowrap font-display text-2xl uppercase text-black"
          style={{ animation: "marquee 30s linear infinite", width: "max-content" }}
        >
          {[...marqueeWords, ...marqueeWords, ...marqueeWords, ...marqueeWords].map((w, i) => (
            <span key={i}>{w}</span>
          ))}
        </div>
      </div>

      {/* Hero */}
      <header className="relative pt-16 md:pt-20 pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 lg:col-span-7">
            <div className="inline-block brutal-border bg-secondary px-3 py-1 font-mono text-xs uppercase mb-6 -rotate-1">
              ⚡ Beta wave 003 — now boarding
            </div>
            <h1 className="font-display text-[clamp(4rem,14vw,11rem)] leading-[0.85] uppercase mb-8 text-balance">
              Don't Just <br />
              <span className="iridescent-text">Post.</span> <br />
              Go Main.
            </h1>
            <p className="text-xl md:text-2xl font-bold max-w-[28ch] mb-10 leading-tight">
              The first social algorithm engineered for pure virality.
              Your 15 minutes starts now.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#"
                className="flex items-center gap-3 bg-black text-white px-6 py-4 brutal-border sticker-shadow hover:-translate-y-1 transition-transform cursor-pointer"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-8" aria-hidden>
                  <path d="M17.05 12.04c-.03-3.02 2.47-4.47 2.58-4.54-1.41-2.06-3.6-2.34-4.38-2.37-1.86-.19-3.64 1.1-4.59 1.1-.96 0-2.41-1.07-3.97-1.04-2.04.03-3.93 1.19-4.98 3.01-2.13 3.69-.54 9.13 1.52 12.13 1.01 1.46 2.21 3.1 3.78 3.05 1.52-.06 2.09-.98 3.92-.98 1.83 0 2.35.98 3.95.95 1.63-.03 2.66-1.49 3.66-2.96 1.15-1.69 1.62-3.34 1.65-3.43-.04-.02-3.16-1.21-3.19-4.81zM14.02 3.34c.84-1.02 1.41-2.43 1.25-3.84-1.21.05-2.67.81-3.54 1.82-.78.9-1.46 2.34-1.28 3.72 1.35.11 2.73-.69 3.57-1.7z" />
                </svg>
                <div className="text-left leading-tight">
                  <p className="font-mono text-[10px] uppercase opacity-70">Download on</p>
                  <p className="font-display text-xl uppercase">App Store</p>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 iridescent-bg text-black px-6 py-4 brutal-border sticker-shadow hover:-translate-y-1 transition-transform cursor-pointer"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-8" aria-hidden>
                  <path d="M3.6 1.4c-.4.4-.6 1-.6 1.7v17.8c0 .7.2 1.3.6 1.7l10.1-10.6L3.6 1.4zm11.5 12L5.5 23.1c.3.1.6.1.9.1.4 0 .8-.1 1.2-.3l11.2-6.4-3.7-3.1zm6.5-3.7L17.9 7l-3.9 4.1 3.9 4.1 3.7-2.1c1.2-.7 1.2-2.5 0-3.4zM7.6.8c-.7-.4-1.5-.4-2.1-.1L15 11l3.9-4.1L7.6.8z" />
                </svg>
                <div className="text-left leading-tight">
                  <p className="font-mono text-[10px] uppercase opacity-70">Get it on</p>
                  <p className="font-display text-xl uppercase">Google Play</p>
                </div>
              </a>
            </div>
            <button className="bg-black text-white px-6 py-3 text-sm font-display uppercase brutal-border sticker-shadow hover:-translate-y-1 transition-transform cursor-pointer">
              Or claim your @handle →
            </button>
          </div>

          <div className="col-span-12 lg:col-span-5 relative flex justify-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 z-10 iridescent-bg brutal-border px-3 py-1 font-mono text-xs uppercase font-bold -rotate-6 sticker-shadow">
                LIVE — 2.4M ONLINE
              </div>
              <div className="absolute -bottom-6 -right-6 z-10 bg-white brutal-border px-4 py-2 rotate-6 sticker-shadow">
                <p className="font-mono text-[10px] uppercase">Fame Score</p>
                <p className="font-display text-3xl iridescent-text leading-none">98.4</p>
              </div>
              <img
                src={appMockup}
                alt="FameMe mobile app showing live Fame Score and creator feed"
                width={768}
                height={1024}
                className="w-full max-w-sm h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </header>




      {/* Stats strip */}
      <section className="bg-black text-white border-y-4 border-black">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x-4 divide-white">
          {[
            { n: "2.4M", l: "Beta creators" },
            { n: "60s", l: "To first viral push" },
            { n: "$84M", l: "Paid to creators" },
            { n: "00.1%", l: "Approval rate" },
          ].map((s) => (
            <div key={s.l} className="p-6 md:p-10">
              <div className="font-display text-4xl md:text-6xl uppercase iridescent-text">
                {s.n}
              </div>
              <div className="font-mono text-xs uppercase mt-2 text-white/60">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-black text-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 border-b-4 border-white pb-8 gap-4">
            <h2 className="font-display text-5xl md:text-7xl uppercase">The Fame Kit</h2>
            <p className="font-mono text-primary">[SYSTEM_READY]</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 -m-1">
            {features.map((f) => (
              <div
                key={f.title}
                className={`p-10 border-4 border-white bg-black transition-colors group ${f.hover}`}
              >
                <p className="font-mono text-sm mb-4">{f.code}</p>
                <h3 className="font-display text-4xl uppercase mb-4">{f.title}</h3>
                <p className="font-bold opacity-80 mb-6">{f.desc}</p>
                <div className="w-12 h-1 bg-white group-hover:bg-black transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-24 px-6 bg-white border-t-4 border-black">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 border-b-4 border-black pb-6">
            <p className="font-mono text-xs uppercase mb-2">[ONBOARDING // 3 STEPS]</p>
            <h2 className="font-display text-5xl md:text-7xl uppercase">How The App Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                n: "01",
                t: "Download & Claim",
                d: "Grab FameMe from the App Store or Google Play and lock in your @handle before someone else does.",
                bg: "bg-secondary text-black",
              },
              {
                n: "02",
                t: "Post Anything",
                d: "Upload one clip. The Viral Boost engine force-feeds it into 10,000 feeds in under 60 seconds.",
                bg: "bg-primary text-white",
              },
              {
                n: "03",
                t: "Watch It Climb",
                d: "Your Fame Score updates in real time. Hit challenges, climb the scoreboard, cash out weekly.",
                bg: "iridescent-bg text-black",
              },
            ].map((s) => (
              <div key={s.n} className={`brutal-border sticker-shadow p-8 ${s.bg}`}>
                <p className="font-display text-7xl leading-none mb-4">{s.n}</p>
                <h3 className="font-display text-3xl uppercase mb-3">{s.t}</h3>
                <p className="font-bold">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Challenges */}
      <section id="challenges" className="py-24 px-6 bg-white border-t-4 border-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 border-b-4 border-black pb-6 gap-4">
            <div>
              <p className="font-mono text-xs uppercase mb-2">[RESETS IN 04:23:11]</p>
              <h2 className="font-display text-5xl md:text-7xl uppercase">Daily Challenges</h2>
            </div>
            <p className="font-bold max-w-md">
              Complete drops every 24h to multiply your Fame Score. Miss a day, lose your streak.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { tag: "EASY", title: "Post a 7s Lip-sync", reward: "+250 FS", bg: "bg-secondary text-black" },
              { tag: "MEDIUM", title: "Hit 1K Views in 1H", reward: "+1,200 FS", bg: "bg-primary text-white" },
              { tag: "HARD", title: "Collab w/ a Verified Star", reward: "+5,000 FS", bg: "iridescent-bg text-black" },
            ].map((c) => (
              <div key={c.title} className={`brutal-border sticker-shadow p-8 ${c.bg}`}>
                <p className="font-mono text-xs uppercase mb-4">{c.tag} // 24H</p>
                <h3 className="font-display text-3xl uppercase mb-6 leading-none">{c.title}</h3>
                <div className="flex justify-between items-end border-t-4 border-black pt-4">
                  <span className="font-display text-2xl uppercase">{c.reward}</span>
                  <span className="font-mono text-xs uppercase">[ACCEPT →]</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leaderboard */}
      <section id="leaderboard" className="py-24 px-6 bg-black text-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 border-b-4 border-white pb-6 gap-4">
            <h2 className="font-display text-5xl md:text-7xl uppercase">Global Scoreboard</h2>
            <p className="font-mono text-secondary text-sm">[LIVE — UPDATES EVERY 60s]</p>
          </div>
          <div className="brutal-border border-white bg-black">
            <div className="grid grid-cols-12 gap-2 px-6 py-4 border-b-4 border-white font-mono text-xs uppercase opacity-60">
              <span className="col-span-2">Rank</span>
              <span className="col-span-5">Creator</span>
              <span className="col-span-3 text-right">Streak</span>
              <span className="col-span-2 text-right">Fame</span>
            </div>
            {[
              { r: "01", n: "@zephyr.x", s: "184d", f: "99.7", crown: true },
              { r: "02", n: "@luna.bleue", s: "97d", f: "98.2" },
              { r: "03", n: "@kairo___", s: "62d", f: "96.5" },
              { r: "04", n: "@nova.rain", s: "48d", f: "94.1" },
              { r: "05", n: "@vex.online", s: "31d", f: "92.8" },
              { r: "06", n: "@miladrift", s: "22d", f: "90.3" },
              { r: "—", n: "you", s: "0d", f: "00.0", you: true },
            ].map((row) => (
              <div
                key={row.r + row.n}
                className={`grid grid-cols-12 gap-2 px-6 py-5 border-b-4 border-white/20 items-center ${
                  row.you ? "iridescent-bg text-black" : row.crown ? "bg-white text-black" : ""
                }`}
              >
                <span className="col-span-2 font-display text-2xl">{row.r}</span>
                <span className="col-span-5 font-bold uppercase truncate">
                  {row.crown && "👑 "}
                  {row.n}
                </span>
                <span className="col-span-3 text-right font-mono text-sm">{row.s}</span>
                <span className="col-span-2 text-right font-display text-xl">{row.f}</span>
              </div>
            ))}
          </div>
          <p className="font-mono text-xs uppercase mt-6 opacity-60 text-center">
            Top 100 every Sunday cash out a slice of the $1M weekly Fame Pool.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section id="stars" className="py-32 px-6 iridescent-bg">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="inline-block brutal-border bg-white px-4 py-1 font-mono text-sm uppercase mb-12 -rotate-1 sticker-shadow">
            Verified success stories
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
            <div className="brutal-border bg-white p-10 text-left sticker-shadow">
              <p className="text-2xl md:text-3xl font-bold mb-8 italic">
                "I went from zero followers to a billboard in Times Square in three weeks.
                FameMe isn't an app, it's a cheat code."
              </p>
              <div className="flex items-center gap-4">
                <div className="size-16 brutal-border iridescent-bg" />
                <div>
                  <p className="font-display text-2xl uppercase leading-none">Zephyr X</p>
                  <p className="font-mono text-xs text-primary mt-1">Fame Score: 99.1</p>
                </div>
              </div>
            </div>
            <div className="brutal-border bg-black text-white p-10 text-left sticker-shadow md:mt-12">
              <p className="text-2xl md:text-3xl font-bold mb-8 italic">
                "The Collab Matchmaker paired me with my biggest inspiration. Now we share
                an audience of 5 million."
              </p>
              <div className="flex items-center gap-4">
                <div className="size-16 brutal-border iridescent-bg" />
                <div>
                  <p className="font-display text-2xl uppercase leading-none">Luna Bleue</p>
                  <p className="font-mono text-xs text-secondary mt-1">Fame Score: 94.8</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <footer className="bg-white border-t-8 border-black pt-24 md:pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-display text-[clamp(3.5rem,9vw,7rem)] leading-none uppercase mb-10">
              Stop <br />
              <span className="bg-primary text-white px-4">Watching.</span> <br />
              Start <br />
              <span className="iridescent-bg text-black px-4">Winning.</span>
            </h2>
            <form
              className="max-w-xl mx-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex brutal-border sticker-shadow overflow-hidden">
                <input
                  type="text"
                  placeholder="ENTER YOUR @HANDLE"
                  className="flex-1 px-6 py-5 font-bold uppercase outline-none bg-white text-black placeholder:text-black/40 min-w-0"
                />
                <button
                  type="submit"
                  className="bg-primary text-white px-6 md:px-8 font-display text-xl md:text-2xl uppercase border-l-4 border-black hover:bg-black transition-colors cursor-pointer"
                >
                  Access
                </button>
              </div>
              <p className="mt-6 font-mono text-xs md:text-sm">
                Limited slots in Beta wave 003. Claim your status today.
              </p>
            </form>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center border-t-4 border-black pt-12 gap-8">
            <p className="font-display text-2xl md:text-3xl uppercase">
              Fame<span className="iridescent-text">Me</span> © 2026
            </p>
            <div className="flex flex-wrap justify-center gap-6 md:gap-12 font-bold uppercase text-xs md:text-sm underline underline-offset-4 decoration-4 decoration-primary">
              <a href="#">Terms of Clout</a>
              <a href="#">Privacy Protocol</a>
              <a href="#">The Manifesto</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
