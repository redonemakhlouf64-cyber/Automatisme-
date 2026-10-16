"use client";

import { useState } from "react";
import {
  Activity,
  BarChart3,
  Bell,
  CalendarDays,
  ChevronDown,
  ChevronRight,
  Clock3,
  FileImage,
  FolderOpen,
  Hash,
  LayoutDashboard,
  Menu,
  MessageCircle,
  MoreHorizontal,
  Plus,
  Search,
  Send,
  Settings,
  Sparkles,
  Users,
  Video,
  WandSparkles,
  X,
} from "lucide-react";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
      <path d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v8h4v-8h3.2l.8-4H13V9c0-.67.33-1 1-1Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.3" cy="6.8" r="1.2" fill="currentColor" />
    </svg>
  );
}

function PinterestIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-3.64 19.31c-.09-1.64-.02-3.61.41-5.17l1.05-4.44s-.27-.55-.27-1.36c0-1.28.74-2.24 1.66-2.24.78 0 1.16.58 1.16 1.28 0 .78-.5 1.95-.76 3.03-.22.91.46 1.65 1.36 1.65 1.63 0 2.73-1.72 2.73-3.75 0-1.55-1.04-2.72-2.94-2.72-2.14 0-3.48 1.6-3.48 3.38 0 .62.18 1.05.47 1.43.13.15.14.21.1.38l-.17.67c-.06.22-.24.3-.44.22-1.23-.5-1.8-1.84-1.8-3.35 0-2.49 2.1-5.47 6.28-5.47 3.36 0 5.57 2.43 5.57 5.04 0 3.45-1.92 6.03-4.75 6.03-.95 0-1.84-.52-2.14-1.11l-.58 2.31c-.35 1.34-1.04 2.68-1.67 3.72A10 10 0 1 0 12 2Z" />
    </svg>
  );
}

const nav = [
  ["Dashboard", LayoutDashboard],
  ["Accounts", Users],
  ["Composer", WandSparkles],
  ["Media Library", FolderOpen],
  ["Calendar", CalendarDays],
  ["Queue", Clock3],
  ["Automation", Sparkles],
  ["Comments", MessageCircle],
  ["Analytics", BarChart3],
];

const platforms = [
  {
    name: "Facebook",
    accounts: 3,
    posts: 128,
    color: "#1877F2",
    icon: FacebookIcon,
  },
  {
    name: "Instagram",
    accounts: 2,
    posts: 94,
    color: "#E1306C",
    icon: InstagramIcon,
  },
  {
    name: "Pinterest",
    accounts: 2,
    posts: 67,
    color: "#E60023",
    icon: PinterestIcon,
  },
];

export default function Home() {
  const [active, setActive] = useState("Dashboard");
  const [composer, setComposer] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="min-h-screen bg-[#06070a] text-white">
      <div className="flex min-h-screen">

        {/* SIDEBAR */}
        <aside
          className={`fixed inset-y-0 left-0 z-50 w-[260px] border-r border-white/[.07] bg-[#090b10] transition-transform lg:static lg:translate-x-0 ${
            mobileMenu ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex h-[76px] items-center gap-3 border-b border-white/[.07] px-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-pink-500 shadow-lg shadow-violet-500/20">
              <Sparkles size={20} />
            </div>
            <div>
              <div className="font-semibold tracking-tight">NYX</div>
              <div className="text-[10px] uppercase tracking-[.18em] text-white/30">
                Social Automation
              </div>
            </div>
          </div>

          <div className="p-4">
            <button
              onClick={() => setComposer(true)}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 py-3 text-sm font-semibold shadow-lg shadow-violet-600/10 transition hover:brightness-110"
            >
              <Plus size={17} />
              Create Post
            </button>
          </div>

          <nav className="space-y-1 px-3">
            <div className="px-3 pb-2 text-[10px] font-bold uppercase tracking-[.2em] text-white/20">
              Workspace
            </div>

            {nav.map(([label, Icon]) => (
              <button
                key={label as string}
                onClick={() => {
                  setActive(label as string);
                  setMobileMenu(false);
                }}
                className={`group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] transition ${
                  active === label
                    ? "bg-white/[.08] text-white"
                    : "text-white/40 hover:bg-white/[.04] hover:text-white"
                }`}
              >
                <Icon size={17} />
                <span>{label as string}</span>

                {label === "Queue" && (
                  <span className="ml-auto rounded-md bg-violet-500/15 px-2 py-0.5 text-[10px] text-violet-300">
                    12
                  </span>
                )}
              </button>
            ))}
          </nav>

          <div className="absolute bottom-0 w-full border-t border-white/[.07] p-3">
            <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-white/40 hover:bg-white/[.04] hover:text-white">
              <Settings size={17} />
              Settings
            </button>
          </div>
        </aside>

        {mobileMenu && (
          <div
            onClick={() => setMobileMenu(false)}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          />
        )}

        {/* MAIN */}
        <main className="min-w-0 flex-1">

          {/* HEADER */}
          <header className="sticky top-0 z-30 flex h-[76px] items-center justify-between border-b border-white/[.07] bg-[#06070a]/90 px-4 backdrop-blur-xl sm:px-7">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setMobileMenu(true)}
                className="rounded-lg p-2 text-white/50 hover:bg-white/[.06] lg:hidden"
              >
                <Menu size={20} />
              </button>

              <div>
                <div className="text-[10px] uppercase tracking-[.18em] text-white/25">
                  Workspace
                </div>
                <h1 className="text-lg font-semibold">{active}</h1>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button className="hidden rounded-xl border border-white/[.08] bg-white/[.03] p-2.5 text-white/40 hover:text-white sm:block">
                <Search size={17} />
              </button>

              <button className="rounded-xl border border-white/[.08] bg-white/[.03] p-2.5 text-white/40 hover:text-white">
                <Bell size={17} />
              </button>

              <div className="ml-1 hidden h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-xs font-bold sm:flex">
                N
              </div>
            </div>
          </header>

          <div className="mx-auto max-w-[1500px] p-4 sm:p-7">

            {/* HERO */}
            <section className="relative overflow-hidden rounded-3xl border border-white/[.08] bg-gradient-to-br from-[#151022] via-[#0d0d14] to-[#090a0e] p-6 sm:p-9">
              <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-violet-600/15 blur-[90px]" />
              <div className="absolute -bottom-28 left-1/3 h-72 w-72 rounded-full bg-fuchsia-600/10 blur-[100px]" />

              <div className="relative max-w-3xl">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1.5 text-[11px] font-medium text-violet-300">
                  <Activity size={13} />
                  Automation Engine Online
                </div>

                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Your social media.
                  <br />
                  <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-pink-300 bg-clip-text text-transparent">
                    One intelligent workspace.
                  </span>
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-6 text-white/40">
                  Create content, manage accounts, schedule publications and
                  automate your workflow across Facebook, Instagram and
                  Pinterest.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <button
                    onClick={() => setComposer(true)}
                    className="flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
                  >
                    <WandSparkles size={16} />
                    Create with AI
                  </button>

                  <button className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[.04] px-5 py-3 text-sm text-white/70 hover:bg-white/[.07]">
                    <CalendarDays size={16} />
                    View Calendar
                  </button>
                </div>
              </div>
            </section>

            {/* PLATFORM CARDS */}
            <section className="mt-8">
              <div className="mb-4 flex items-end justify-between">
                <div>
                  <h2 className="text-base font-semibold">Connected Platforms</h2>
                  <p className="mt-1 text-xs text-white/30">
                    Manage your publishing infrastructure
                  </p>
                </div>

                <button
                  onClick={() => setActive("Accounts")}
                  className="text-xs text-violet-400 hover:text-violet-300"
                >
                  Manage accounts →
                </button>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {platforms.map((p) => {
                  const Icon = p.icon;

                  return (
                    <button
                      key={p.name}
                      onClick={() => setActive("Accounts")}
                      className="group text-left rounded-2xl border border-white/[.07] bg-[#0b0d12] p-5 transition hover:-translate-y-0.5 hover:border-white/[.15] hover:bg-[#0e1016]"
                    >
                      <div className="flex items-center justify-between">
                        <div
                          className="flex h-12 w-12 items-center justify-center rounded-2xl"
                          style={{
                            color: p.color,
                            background: `${p.color}15`,
                          }}
                        >
                          <Icon />
                        </div>

                        <MoreHorizontal
                          size={18}
                          className="text-white/20 group-hover:text-white/50"
                        />
                      </div>

                      <div className="mt-6 flex items-end justify-between">
                        <div>
                          <div className="font-semibold">{p.name}</div>
                          <div className="mt-1 text-xs text-white/30">
                            {p.accounts} connected accounts
                          </div>
                        </div>

                        <div className="text-right">
                          <div className="text-2xl font-bold">{p.posts}</div>
                          <div className="text-[10px] text-white/25">
                            scheduled
                          </div>
                        </div>
                      </div>

                      <div className="mt-5 h-1 overflow-hidden rounded-full bg-white/[.04]">
                        <div
                          className="h-full w-[68%] rounded-full"
                          style={{ background: p.color }}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>

            {/* STATS */}
            <section className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {[
                ["Scheduled Posts", "289", "+18 this week"],
                ["Published", "1,284", "+12.4%"],
                ["Media Files", "642", "86 videos"],
                ["Automation Rules", "24", "7 active"],
              ].map(([name, value, detail]) => (
                <div
                  key={name}
                  className="rounded-2xl border border-white/[.07] bg-[#0b0d12] p-5"
                >
                  <div className="text-xs text-white/30">{name}</div>
                  <div className="mt-2 text-2xl font-bold">{value}</div>
                  <div className="mt-2 text-[11px] text-emerald-400">
                    {detail}
                  </div>
                </div>
              ))}
            </section>

            {/* LOWER GRID */}
            <section className="mt-5 grid gap-5 xl:grid-cols-[1.4fr_.8fr]">

              <div className="overflow-hidden rounded-2xl border border-white/[.07] bg-[#0b0d12]">
                <div className="flex items-center justify-between border-b border-white/[.07] p-5">
                  <div>
                    <h2 className="font-semibold">Upcoming Schedule</h2>
                    <p className="mt-1 text-xs text-white/30">
                      Your next publishing jobs
                    </p>
                  </div>

                  <button
                    onClick={() => setActive("Calendar")}
                    className="flex items-center gap-1 text-xs text-violet-400"
                  >
                    Calendar <ChevronRight size={13} />
                  </button>
                </div>

                {[
                  ["19:00", "Summer Campaign", "Facebook + Instagram", "#1877F2"],
                  ["20:30", "Product Collection", "Pinterest", "#E60023"],
                  ["22:00", "Night Campaign", "Instagram", "#E1306C"],
                ].map(([time, title, platforms, color]) => (
                  <div
                    key={time}
                    className="flex items-center gap-4 border-b border-white/[.05] p-5 last:border-0"
                  >
                    <div className="w-12 text-sm font-bold">{time}</div>

                    <div
                      className="h-10 w-1 rounded-full"
                      style={{ background: color }}
                    />

                    <div className="min-w-0 flex-1">
                      <div className="truncate text-sm font-medium">
                        {title}
                      </div>
                      <div className="mt-1 text-xs text-white/30">
                        {platforms}
                      </div>
                    </div>

                    <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-[10px] text-emerald-400">
                      Scheduled
                    </span>
                  </div>
                ))}
              </div>

              {/* GEMINI */}
              <div className="relative overflow-hidden rounded-2xl border border-violet-400/15 bg-gradient-to-br from-violet-600/10 via-[#0b0d12] to-fuchsia-600/[.04] p-6">
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-500/15 blur-3xl" />

                <div className="relative">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
                      <Sparkles size={20} />
                    </div>

                    <div>
                      <div className="font-semibold">Gemini Agent</div>
                      <div className="mt-0.5 text-[10px] text-emerald-400">
                        ● Ready
                      </div>
                    </div>
                  </div>

                  <div className="mt-7 text-sm leading-6 text-white/45">
                    Describe what you want to publish and let the AI prepare
                    captions, hashtags and scheduling.
                  </div>

                  <div className="mt-5 rounded-xl border border-white/[.07] bg-black/20 p-4">
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-white/25">
                      <Hash size={12} />
                      Example
                    </div>

                    <div className="mt-2 text-sm leading-5 text-white/65">
                      Schedule my new videos tomorrow at 19:00 across my
                      connected platforms.
                    </div>
                  </div>

                  <button
                    onClick={() => setComposer(true)}
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 py-3 text-sm font-semibold transition hover:brightness-110"
                  >
                    <Sparkles size={16} />
                    Open AI Workspace
                  </button>
                </div>
              </div>
            </section>

            {/* QUICK ACTIONS */}
            <section className="grid gap-4 pb-8 sm:grid-cols-3">
              {[
                [FileImage, "Upload Media", "Add images and videos"],
                [MessageCircle, "Manage Comments", "Review your conversations"],
                [BarChart3, "View Analytics", "Track your performance"],
              ].map(([Icon, title, description]) => (
                <button
                  key={title as string}
                  className="group flex items-center gap-4 rounded-2xl border border-white/[.07] bg-[#0b0d12] p-5 text-left transition hover:border-white/[.14] hover:bg-[#0e1016]"
                >
                  <div className="rounded-xl bg-white/[.05] p-3 text-white/50 group-hover:text-white">
                    <Icon size={19} />
                  </div>
                  <div>
                    <div className="text-sm font-medium">{title as string}</div>
                    <div className="mt-1 text-xs text-white/25">
                      {description as string}
                    </div>
                  </div>
                </button>
              ))}
            </section>
          </div>
        </main>
      </div>

      {/* COMPOSER MODAL */}
      {composer && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4 backdrop-blur-md">
          <div className="max-h-[90vh] w-full max-w-5xl overflow-auto rounded-3xl border border-white/[.1] bg-[#0b0d12] shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/[.07] p-5">
              <div>
                <div className="flex items-center gap-2 font-semibold">
                  <WandSparkles size={18} className="text-violet-400" />
                  Create Post
                </div>
                <div className="mt-1 text-xs text-white/30">
                  Create once, publish everywhere
                </div>
              </div>

              <button
                onClick={() => setComposer(false)}
                className="rounded-xl p-2 text-white/40 hover:bg-white/[.06] hover:text-white"
              >
                <X size={19} />
              </button>
            </div>

            <div className="grid gap-6 p-5 lg:grid-cols-[1fr_360px]">
              <div className="space-y-5">
                <div>
                  <label className="mb-2 block text-xs text-white/40">
                    Caption
                  </label>
                  <textarea
                    placeholder="Write your caption..."
                    className="h-32 w-full resize-none rounded-2xl border border-white/[.08] bg-black/20 p-4 text-sm outline-none transition placeholder:text-white/20 focus:border-violet-500/50"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs text-white/40">
                    Media
                  </label>
                  <button className="flex h-28 w-full flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-white/10 bg-white/[.02] text-white/30 hover:border-violet-500/40 hover:text-white/60">
                    <Plus size={22} />
                    <span className="text-xs">
                      Upload images or videos
                    </span>
                  </button>
                </div>

                <div>
                  <label className="mb-2 block text-xs text-white/40">
                    Platforms
                  </label>

                  <div className="grid gap-2 sm:grid-cols-3">
                    {platforms.map((p) => (
                      <button
                        key={p.name}
                        className="flex items-center gap-3 rounded-xl border border-white/[.08] bg-white/[.02] p-3 text-left hover:border-white/[.15]"
                      >
                        <span style={{ color: p.color }}>
                          <p.icon />
                        </span>
                        <span className="text-xs">{p.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <button className="rounded-xl border border-white/[.08] bg-white/[.03] p-3 text-left">
                    <div className="text-[10px] text-white/25">
                      PUBLISH TIME
                    </div>
                    <div className="mt-1 text-sm">Tomorrow · 19:00</div>
                  </button>

                  <button className="rounded-xl border border-white/[.08] bg-white/[.03] p-3 text-left">
                    <div className="text-[10px] text-white/25">
                      FIRST COMMENT
                    </div>
                    <div className="mt-1 text-sm text-white/40">
                      Add a comment...
                    </div>
                  </button>
                </div>
              </div>

              <div className="rounded-2xl border border-white/[.07] bg-black/20 p-5">
                <div className="mb-4 text-xs font-medium text-white/40">
                  AI ASSISTANT
                </div>

                <div className="rounded-xl bg-violet-500/[.07] p-4">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <Sparkles size={15} className="text-violet-400" />
                    Gemini
                  </div>

                  <p className="mt-3 text-xs leading-5 text-white/35">
                    Generate captions, hashtags and platform-specific
                    variations from your idea.
                  </p>

                  <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-violet-600 py-2.5 text-xs font-semibold hover:bg-violet-500">
                    <Sparkles size={14} />
                    Generate Content
                  </button>
                </div>

                <div className="mt-5 rounded-xl border border-white/[.06] p-4">
                  <div className="text-[10px] text-white/25">PREVIEW</div>

                  <div className="mt-4 flex aspect-square items-center justify-center rounded-xl bg-gradient-to-br from-[#191b25] to-[#0e1015]">
                    <div className="text-center text-white/20">
                      <FileImage className="mx-auto" size={30} />
                      <div className="mt-2 text-xs">Media preview</div>
                    </div>
                  </div>
                </div>

                <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3 text-sm font-semibold text-black hover:bg-white/90">
                  <Send size={15} />
                  Schedule Post
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
