import Header from "../components/Header";

export default function DetaljiPage() {
  return (
    <div style={{ width: "100%", minHeight: "100vh", background: "#f5f5f4" }}>
      <Header backToMap />

      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "32px 28px 60px", display: "flex", gap: 40, alignItems: "flex-start", flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 600px", minWidth: 0 }}>
          <div className="photo-placeholder" style={{ height: 380, border: "1px solid #d6d3d1" }}>
            <span className="mono" style={{ fontSize: 11, color: "#a8a29e" }}>GLAVNA FOTOGRAFIJA NEKRETNINE</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 8, marginTop: 8 }}>
            <div className="thumb" style={{ height: 72 }} />
            <div className="thumb" style={{ height: 72 }} />
            <div className="thumb" style={{ height: 72 }} />
            <div className="thumb" style={{ height: 72 }} />
            <div className="thumb" style={{ height: 72, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span className="mono" style={{ fontSize: 10, color: "#78716c" }}>+8 FOTO</span>
            </div>
          </div>

          <div style={{ marginTop: 32 }}>
            <span className="mono" style={{ fontSize: 11, color: "#9b1c1c", fontWeight: 700 }}>STAN · ZAGREB, MAKSIMIR</span>
            <h1 style={{ fontSize: 30, fontWeight: 800, margin: "6px 0 4px", letterSpacing: "-0.01em" }}>Trosobni stan uz Maksimirski park</h1>
            <div style={{ fontSize: 14, color: "#57534e" }}>Maksimirska cesta 112, Zagreb</div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: "#d6d3d1", marginTop: 24, border: "1px solid #d6d3d1" }}>
            {[
              ["68 m²", "POVRŠINA"],
              ["3", "SOBE"],
              ["2. kat", "KAT / LIFT"],
              ["B", "ENERG. RAZRED"],
            ].map(([value, label]) => (
              <div key={label} style={{ background: "#fff", padding: 14, textAlign: "center" }}>
                <div style={{ fontWeight: 800, fontSize: 18 }}>{value}</div>
                <div className="mono" style={{ fontSize: 10, color: "#78716c", marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 28 }}>
            <h2 className="mono" style={{ fontSize: 12, color: "#78716c", margin: "0 0 10px" }}>OPIS</h2>
            <p style={{ fontSize: "14.5px", lineHeight: 1.7, color: "#292524", margin: 0 }}>
              Svijetli trosobni stan na 2. katu zgrade s liftom, u zelenom dijelu Maksimira. Dvostrano
              orijentiran, dvije terase, parking u garaži uključen u cijenu. [OPIS NEKRETNINE — UNOSI PRODAVATELJ]
            </p>
          </div>
        </div>

        <aside style={{ width: 360, flex: "none", position: "sticky", top: 90 }}>
          <div style={{ border: "1px solid #d6d3d1", background: "#fff", padding: 22 }}>
            <div style={{ fontWeight: 800, fontSize: 28 }}>245.000 €</div>
            <div className="mono" style={{ fontSize: 11, color: "#78716c", marginTop: 2 }}>≈ 3.603 €/m²</div>

            <button className="btn-primary mono" style={{ marginTop: 18, width: "100%" }}>REZERVIRAJ KAPARU — 4.900 €</button>
            <button className="btn-outline mono" style={{ marginTop: 10, width: "100%" }}>KONTAKTIRAJ PRODAVATELJA</button>

            <div style={{ marginTop: 22, paddingTop: 18, borderTop: "1px solid #d6d3d1", display: "flex", flexDirection: "column", gap: 12 }}>
              <div className="step">
                <div className="step-num mono">1</div>
                <div style={{ fontSize: "12.5px", color: "#292524" }}>Rezerviraš kaparu online (2% cijene), nekretnina se skida s mape za ostale.</div>
              </div>
              <div className="step">
                <div className="step-num mono">2</div>
                <div style={{ fontSize: "12.5px", color: "#292524" }}>Javni bilježnik priprema predugovor i ugovor o kupoprodaji.</div>
              </div>
              <div className="step">
                <div className="step-num mono">3</div>
                <div style={{ fontSize: "12.5px", color: "#292524" }}>Potpis, isplata i upis vlasništva u zemljišne knjige.</div>
              </div>
            </div>

            <div style={{ marginTop: 18, paddingTop: 14, borderTop: "1px solid #d6d3d1" }}>
              <span className="mono" style={{ fontSize: 10, color: "#a8a29e" }}>
                REZERVACIJA KAPARE NIJE KUPOPRODAJA NEKRETNINE. KUPIDOM JE POSREDNIK — UGOVOR I PRIJENOS VLASNIŠTVA IDU ISKLJUČIVO PREKO JAVNOG BILJEŽNIKA.
              </span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
