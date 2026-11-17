import Header from "../components/Header";

const steps = [
  { title: "Pretraži na mapi", text: "Filtriraj po cijeni, tipu i broju soba, i gledaj nekretnine kao pinove s cijenama na mapi." },
  { title: "Otvori detalje", text: "Klikni na pin ili karticu za fotografije, specifikacije i opis nekretnine." },
  { title: "Rezerviraj kaparu online", text: "Plati kaparu (obično 2% cijene) kroz Kupidom. Nekretnina se odmah skida s mape za ostale zainteresirane." },
  { title: "Javni bilježnik", text: "Bilježnik priprema predugovor i ugovor o kupoprodaji — isto kao u klasičnoj kupnji nekretnine." },
  { title: "Potpis i upis vlasništva", text: "Nakon potpisa i isplate, vlasništvo se upisuje u zemljišne knjige. Kupidom je posrednik, ne stranka u ugovoru." },
];

export default function PomocPage() {
  return (
    <div style={{ width: "100%", minHeight: "100vh", background: "#f5f5f4" }}>
      <Header backToMap />
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "48px 28px 80px" }}>
        <span className="mono" style={{ fontSize: 11, color: "#9b1c1c", fontWeight: 700 }}>POMOĆ</span>
        <h1 style={{ fontSize: 28, fontWeight: 800, margin: "6px 0 10px", letterSpacing: "-0.01em" }}>Kako Kupidom radi</h1>
        <p style={{ fontSize: "14.5px", lineHeight: 1.7, color: "#44403c", marginTop: 0 }}>
          Kupidom je tržište nekretnina na mapi gdje prodavatelji objavljuju nekretnine direktno, a kupci ih
          pretražuju i rezerviraju bez agencijske provizije. Rezervacija kapare nije kupoprodaja — stvarni ugovor
          i prijenos vlasništva idu isključivo preko javnog bilježnika i zemljišnih knjiga, kao i kod svake druge
          kupnje nekretnine u Hrvatskoj.
        </p>

        <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 20 }}>
          {steps.map((s, i) => (
            <div key={s.title} className="step">
              <div className="step-num mono" style={{ width: 24, height: 24, fontSize: 12 }}>{i + 1}</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 15 }}>{s.title}</div>
                <div style={{ fontSize: "13.5px", color: "#57534e", marginTop: 2, lineHeight: 1.5 }}>{s.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
