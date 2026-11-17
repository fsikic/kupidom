import Link from "next/link";
import Header from "./components/Header";

const listings = [
  { id: "maksimir", price: "245.000 €", addr: "Maksimirska cesta, Zagreb", meta: "68 m² · 3 SOBE · 2. KAT", badge: "NOVO", pin: { left: "17%", top: "28%" }, selected: true },
  { id: "tresnjevka", price: "178.000 €", addr: "Selska cesta, Trešnjevka", meta: "54 m² · 2 SOBE · 3. KAT", pin: { left: "30%", top: "58%" } },
  { id: "tuskanac", price: "495.000 €", addr: "Tuškanac, Zagreb", meta: "150 m² · KUĆA · 3 ETAŽE", pin: { left: "58%", top: "40%" } },
  { id: "dubrava", price: "92.000 €", addr: "Dubrava, Zagreb", meta: "31 m² · GARSONIJERA · 1. KAT", pin: { left: "74%", top: "66%" } },
  { id: "crnomerec", price: "215.000 €", addr: "Britanski trg, Črnomerec", meta: "61 m² · 2 SOBE · 4. KAT", pin: { left: "48%", top: "20%" } },
  { id: "novi-zagreb", price: "132.000 €", addr: "Novi Zagreb", meta: "58 m² · 2 SOBE · 1. KAT", pin: { left: "84%", top: "30%" } },
];

export default function MapPage() {
  return (
    <div style={{ width: "100%", minHeight: "100vh", display: "flex", flexDirection: "column", background: "#f5f5f4" }}>
      <Header />

      <div style={{ display: "flex", flex: 1, minHeight: 0 }}>
        <aside
          style={{
            width: 400,
            flex: "none",
            borderRight: "1px solid #d6d3d1",
            background: "#fafaf9",
            display: "flex",
            flexDirection: "column",
            maxHeight: "calc(100vh - 63px)",
          }}
        >
          <div style={{ padding: "20px 20px 16px", borderBottom: "1px solid #d6d3d1" }}>
            <label htmlFor="search" style={{ position: "absolute", left: -9999 }}>Pretraži lokaciju</label>
            <div style={{ position: "relative" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#78716c" strokeWidth="2" style={{ position: "absolute", left: 13, top: "50%", transform: "translateY(-50%)" }} aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input id="search" className="search-input" type="text" placeholder="Zagreb, Maksimir..." />
            </div>
            <div style={{ display: "flex", gap: 8, marginTop: 12, flexWrap: "wrap" }}>
              <button className="chip">Cijena ▾</button>
              <button className="chip">Tip nekretnine ▾</button>
              <button className="chip">Sobe ▾</button>
            </div>
          </div>

          <div style={{ padding: "14px 20px 8px", display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
            <span className="mono" style={{ fontSize: 11, color: "#78716c" }}>142 NEKRETNINA</span>
            <span className="mono" style={{ fontSize: 11, color: "#78716c" }}>SORTIRAJ: NOVO ▾</span>
          </div>

          <div className="sidebar-scroll" style={{ flex: 1, overflowY: "auto", padding: "4px 20px 20px", display: "flex", flexDirection: "column", gap: 14 }}>
            {listings.map((l) => (
              <Link key={l.id} href={`/detalji?id=${l.id}`} className={`card${l.selected ? " selected" : ""}`}>
                <div className="photo-placeholder" style={{ height: 140 }}>
                  <span className="mono" style={{ fontSize: 10, color: "#a8a29e" }}>FOTO NEKRETNINE</span>
                </div>
                <div style={{ padding: 14 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <span style={{ fontWeight: 800, fontSize: 17 }}>{l.price}</span>
                    {l.badge && <span className="badge-new mono">{l.badge}</span>}
                  </div>
                  <div style={{ fontSize: 13, color: "#44403c", marginTop: 4 }}>{l.addr}</div>
                  <div className="mono" style={{ fontSize: 11, color: "#78716c", marginTop: 8 }}>{l.meta}</div>
                </div>
              </Link>
            ))}
          </div>
        </aside>

        <main
          style={{
            flex: 1,
            position: "relative",
            overflow: "hidden",
            backgroundImage:
              "linear-gradient(0deg, transparent 95%, #e7e5e4 95%), linear-gradient(90deg, transparent 95%, #e7e5e4 95%)",
            backgroundSize: "64px 64px",
            backgroundColor: "#f0efed",
          }}
        >
          <div style={{ position: "absolute", left: "8%", top: "12%", width: "22%", height: "34%", background: "#e9e7e3", border: "1px solid #dcdad6" }} aria-hidden="true" />
          <div style={{ position: "absolute", left: "38%", top: "48%", width: "26%", height: "30%", background: "#e9e7e3", border: "1px solid #dcdad6" }} aria-hidden="true" />
          <div style={{ position: "absolute", left: "68%", top: "10%", width: "20%", height: "22%", background: "#e9e7e3", border: "1px solid #dcdad6" }} aria-hidden="true" />

          {listings.map((l) => (
            <Link
              key={l.id}
              href={`/detalji?id=${l.id}`}
              className={`pin mono${l.selected ? " selected" : ""}`}
              style={{ left: l.pin.left, top: l.pin.top }}
              aria-label={`${l.addr}, ${l.price}`}
            >
              {l.price}
            </Link>
          ))}

          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "12px 24px", background: "rgba(250,250,249,0.95)", borderTop: "1px solid #d6d3d1", backdropFilter: "blur(6px)" }}>
            <span className="mono" style={{ fontSize: "10.5px", color: "#78716c" }}>
              REZERVACIJA KROZ KUPIDOM NIJE KUPOPRODAJNI UGOVOR — PRIJENOS VLASNIŠTVA IDE ISKLJUČIVO PREKO JAVNOG BILJEŽNIKA I ZEMLJIŠNIH KNJIGA
            </span>
          </div>
        </main>
      </div>
    </div>
  );
}
