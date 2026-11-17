import Link from "next/link";

export default function Header({ backToMap = false }: { backToMap?: boolean }) {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 24,
        padding: "14px 28px",
        borderBottom: "1px solid #d6d3d1",
        background: "rgba(245,245,244,0.92)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 14, minWidth: 0 }}>
        <div
          style={{
            width: 34,
            height: 34,
            flex: "none",
            background: "#1e1b4b",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 800,
            fontSize: 16,
          }}
        >
          K
        </div>
        {backToMap ? (
          <Link href="/" className="mono" style={{ fontSize: 12, color: "#44403c", display: "flex", alignItems: "center", gap: 6 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            NATRAG NA MAPU
          </Link>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
            <span style={{ fontWeight: 800, fontSize: 17, letterSpacing: "-0.01em" }}>KUPOVLAST</span>
            <span className="mono" style={{ fontSize: 10, color: "#78716c" }}>
              KUPI NEKRETNINU DIREKTNO
            </span>
          </div>
        )}
      </div>
      <nav style={{ display: "flex", alignItems: "center", gap: 28 }} aria-label="Glavna navigacija">
        <a className="nav-link mono" href="#">KAKO RADI</a>
        <a className="nav-link mono" href="#">ZA PRODAVATELJE</a>
        {!backToMap && <a className="nav-link mono" href="#">MOJE REZERVACIJE</a>}
      </nav>
      <div style={{ display: "flex", alignItems: "center", gap: 10, flex: "none" }}>
        <Link
          href="/pomoc"
          aria-label="Pomoć — kako Kupovlast radi"
          title="Pomoć"
          style={{
            width: 30,
            height: 30,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #d6d3d1",
            background: "#fff",
            fontWeight: 700,
            fontSize: 13,
            color: "#1e1b4b",
          }}
        >
          ?
        </Link>
        <button className="btn-outline mono">PRIJAVA</button>
        {!backToMap && <button className="btn-primary mono">OBJAVI NEKRETNINU</button>}
      </div>
    </header>
  );
}
