"use client";

import { useState } from "react";

const platforms = [
  { name: "Instagram", color: "#e879a9", mark: "◎", detail: "Photos, reels & stories" },
  { name: "Facebook", color: "#7c9cff", mark: "f", detail: "Pages & scheduled posts" },
  { name: "Pinterest", color: "#fb7185", mark: "p", detail: "Pins & visual discovery" },
];

const nav = [
  ["Overview", "◫"],
  ["Accounts", "◎"],
  ["Content Studio", "✳"],
  ["Scheduler", "◷"],
  ["Media Library", "▧"],
  ["Analytics", "⌁"],
  ["Settings", "⚙"],
];

export default function Home() {
  const [active, setActive] = useState("Overview");
  const [platform, setPlatform] = useState("Instagram");
  const [content, setContent] = useState("");
  const [notice, setNotice] = useState("");

  function createDraft() {
    if (!content.trim()) {
      setNotice("Write some content before saving your draft.");
      return;
    }
    const key = "nyx-drafts";
    try {
      const old = JSON.parse(localStorage.getItem(key) || "[]");
      old.unshift({
        id: Date.now(),
        platform,
        content: content.trim(),
        createdAt: new Date().toISOString(),
      });
      localStorage.setItem(key, JSON.stringify(old));
      setContent("");
      setNotice("Draft saved on this device. Publishing is not connected yet.");
    } catch {
      setNotice("Could not save the draft on this device.");
    }
  }

  return (
    <main className="app-shell">
      <aside className="sidebar">
        <a className="brand" href="#" onClick={() => setActive("Overview")}>
          <img src="/nyx-logo.svg" alt="Nyx logo" />
          <span>nyx<span className="brand-dot">.</span><small>SOCIAL AUTOMATION</small></span>
        </a>

        <div className="workspace-label">WORKSPACE</div>
        <button className="workspace">
          <span className="workspace-icon">N</span>
          <span>My workspace<small>Free workspace</small></span>
          <span className="chevron">⌄</span>
        </button>

        <div className="nav-label">MENU</div>
        <nav className="nav-list">
          {nav.map(([label, icon]) => (
            <button
              key={label}
              className={`nav-item ${active === label ? "active" : ""}`}
              onClick={() => { setActive(label); setNotice(""); }}
            >
              <span className="nav-icon">{icon}</span>
              <span>{label}</span>
              {label === "Scheduler" && <span className="nav-count">0</span>}
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="upgrade-card">
            <div className="upgrade-orb">✦</div>
            <strong>Make more happen</strong>
            <p>Your social workflow, all in one place.</p>
            <span className="upgrade-tag">NYX STUDIO</span>
          </div>
          <div className="profile">
            <div className="avatar">N</div>
            <div><strong>Nyx Workspace</strong><small>Workspace owner</small></div>
            <span className="chevron">•••</span>
          </div>
        </div>
      </aside>

      <section className="main-area">
        <header className="topbar">
          <div className="breadcrumb">Workspace <span>/</span> <strong>{active}</strong></div>
          <div className="top-actions">
            <span className="system-status"><i /> Dashboard preview</span>
            <button className="icon-button" title="Notifications">♧</button>
            <div className="avatar small-avatar">N</div>
          </div>
        </header>

        <div className="page-content">
          <div className="welcome-row">
            <div>
              <div className="eyebrow"><span className="sparkle">✳</span> YOUR SOCIAL COMMAND CENTER</div>
              <h1>{active === "Overview" ? "Good things start here." : active}</h1>
              <p className="subtitle">
                {active === "Overview"
                  ? "Create, organize and plan your social presence with Nyx."
                  : `Manage your ${active.toLowerCase()} workflow in one place.`}
              </p>
            </div>
            <button className="primary-button" onClick={() => setActive("Content Studio")}>
              <span>＋</span> Create a post
            </button>
          </div>

          <section className="hero-banner">
            <div className="hero-copy">
              <div className="hero-label"><span /> INTRODUCING YOUR CREATIVE SPACE</div>
              <h2>One idea.<br /><span>Everywhere it matters.</span></h2>
              <p>Bring your content planning and social workflow together in one calm, focused space.</p>
              <button className="hero-button" onClick={() => setActive("Content Studio")}>
                Open Content Studio <span>↗</span>
              </button>
            </div>
            <div className="hero-art" aria-hidden="true">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="planet"><img src="/nyx-logo.svg" alt="" /></div>
              <div className="float-card float-one">✦ <span>CREATE</span></div>
              <div className="float-card float-two">◷ <span>PLAN</span></div>
              <div className="float-card float-three">↗ <span>GROW</span></div>
            </div>
          </section>

          <div className="section-heading">
            <div><h2>Workspace overview</h2><p>Your activity at a glance</p></div>
            <span className="date-chip">● Live interface preview</span>
          </div>

          <section className="stats-grid">
            <article className="stat-card">
              <div className="stat-top"><span>Connected accounts</span><span className="stat-icon purple">◎</span></div>
              <div className="stat-number">0 <small>accounts</small></div>
              <div className="stat-foot">Connect a platform to get started</div>
            </article>
            <article className="stat-card">
              <div className="stat-top"><span>Content drafts</span><span className="stat-icon cyan">✎</span></div>
              <div className="stat-number">—</div>
              <div className="stat-foot">Your drafts will appear here</div>
            </article>
            <article className="stat-card">
              <div className="stat-top"><span>Scheduled posts</span><span className="stat-icon pink">◷</span></div>
              <div className="stat-number">0 <small>scheduled</small></div>
              <div className="stat-foot">No scheduled posts yet</div>
            </article>
            <article className="stat-card">
              <div className="stat-top"><span>Published posts</span><span className="stat-icon green">↗</span></div>
              <div className="stat-number">0 <small>published</small></div>
              <div className="stat-foot">Publishing API not connected</div>
            </article>
          </section>

          <div className="content-grid">
            <section className="panel platforms-panel">
              <div className="panel-heading">
                <div><h2>Social platforms</h2><p>Choose where your content belongs</p></div>
                <button className="text-button" onClick={() => setActive("Accounts")}>View accounts ↗</button>
              </div>
              <div className="platform-list">
                {platforms.map((p) => (
                  <article className="platform-row" key={p.name}>
                    <div className="platform-mark" style={{ color: p.color, borderColor: `${p.color}35`, background: `${p.color}12` }}>{p.mark}</div>
                    <div className="platform-info"><strong>{p.name}</strong><small>{p.detail}</small></div>
                    <span className="disconnected"><i /> Not connected</span>
                    <button className="connect-button" onClick={() => { setPlatform(p.name); setActive("Accounts"); setNotice(`${p.name} OAuth connection needs API credentials and setup.`); }}>Connect <span>＋</span></button>
                  </article>
                ))}
              </div>
              <div className="integration-note"><span>ⓘ</span> Account connections require official platform OAuth setup.</div>
            </section>

            <section className="panel composer-panel">
              <div className="panel-heading">
                <div><h2>Quick draft</h2><p>Capture your next idea</p></div>
                <span className="draft-icon">✳</span>
              </div>
              <label className="field-label" htmlFor="platform">Publish destination</label>
              <select id="platform" value={platform} onChange={(e) => setPlatform(e.target.value)}>
                {platforms.map(p => <option key={p.name}>{p.name}</option>)}
              </select>
              <label className="field-label" htmlFor="post-content">Post caption</label>
              <textarea id="post-content" value={content} onChange={(e) => setContent(e.target.value)} placeholder="What would you like to share with your audience?" />
              <div className="composer-footer"><span>{content.length} characters</span><button className="primary-button save-button" onClick={createDraft}>Save draft ↗</button></div>
              {notice && <div className="notice" role="status">{notice}</div>}
              <p className="local-note">Drafts are stored in this browser on this device. They are not published.</p>
            </section>
          </div>

          <footer className="footer"><span>✳ NYX SOCIAL</span><span>Plan thoughtfully. Create freely.</span><span>v0.2 · Dashboard preview</span></footer>
        </div>
      </section>
    </main>
  );
}
