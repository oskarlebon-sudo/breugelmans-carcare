import { motion } from "motion/react";
import { 
  ShieldCheck, 
  Sparkles, 
  Droplets, 
  Briefcase, 
  ArrowRight, 
  CheckCircle2, 
  MapPin, 
  Clock, 
  Star
} from "lucide-react";
import { Navbar, Section, ServiceCard, Footer } from "./components/Layout";

export default function App() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />

      {/* 1. HOMEPAGE - HERO */}
      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://ddqhrvesrqlfjjtciwsr.supabase.co/storage/v1/object/public/breugelmans/images/images/SaveClip.App_631623902_2794719844221447_3356646582915714032_n.jpg" 
            alt="Breugelmans Carcare Hero" 
            className="w-full h-full object-cover opacity-40 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#050505]" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <span className="small-caps mb-6 block text-gold">Premium Mobile Detailing België</span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl mb-8 leading-[0.9]">
              Uw wagen in showroomstaat, <br className="hidden md:block" />
              <span className="italic">zonder uw planning aan te passen.</span>
            </h1>
            <p className="text-base md:text-xl opacity-70 mb-12 max-w-2xl mx-auto font-light">
              Breugelmans Carcare brengt professionele esthetische perfectie en lakbescherming rechtstreeks naar uw oprit of kantoor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-20 w-full max-w-md mx-auto sm:max-w-none">
              <a href="#contact" className="premium-button-gold w-full sm:w-auto flex items-center justify-center gap-2 group">
                Boek uw detailing <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#diensten" className="premium-button w-full sm:w-auto flex items-center justify-center">
                Ontdek onze services
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 opacity-30">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest whitespace-nowrap">
                <ShieldCheck className="w-4 h-4" /> Lakbescherming
              </div>
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest whitespace-nowrap">
                <Sparkles className="w-4 h-4" /> Showroom Finish
              </div>
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest whitespace-nowrap">
                <MapPin className="w-4 h-4" /> Aan Huis
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRUST ELEMENTS - SCROLLING MARQUEE */}
      <section className="py-12 border-y border-white/5 bg-white/[0.02] overflow-hidden">
        <div className="relative flex whitespace-nowrap">
          <motion.div 
            className="flex gap-12 md:gap-24 items-center px-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 30, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {[
              "BMW", "Mercedes-Benz", "Porsche", "Audi", "Tesla", 
              "Ferrari", "Lamborghini", "Rolls-Royce", "Bentley", 
              "Aston Martin", "Land Rover", "Maserati", "Jaguar"
            ].map((brand, i) => (
              <span key={i} className="font-serif text-xl italic opacity-30 grayscale hover:opacity-100 transition-opacity cursor-default">
                {brand}
              </span>
            ))}
            {/* Duplicate for seamless loop */}
            {[
              "BMW", "Mercedes-Benz", "Porsche", "Audi", "Tesla", 
              "Ferrari", "Lamborghini", "Rolls-Royce", "Bentley", 
              "Aston Martin", "Land Rover", "Maserati", "Jaguar"
            ].map((brand, i) => (
              <span key={`dup-${i}`} className="font-serif text-xl italic opacity-30 grayscale hover:opacity-100 transition-opacity cursor-default">
                {brand}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 2. DIENSTENPAGINA */}
      <Section id="diensten">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="small-caps text-gold">Onze Expertise</span>
            <h2 className="text-4xl md:text-6xl mt-4">Esthetische perfectie op locatie</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard 
              icon={Sparkles}
              title="Exterieur Detailing"
              description="Een grondige reiniging die verder gaat dan de oppervlakte. Wij verwijderen contaminatie en herstellen de diepe glans van uw lak."
            />
            <ServiceCard 
              icon={ShieldCheck}
              title="Lakbescherming"
              description="Hoogwaardige sealants en coatings die uw investering beschermen tegen de elementen en dagelijks gebruik."
            />
            <ServiceCard 
              icon={Droplets}
              title="Interieur Dieptereiniging"
              description="Stoomreiniging en lederbehandeling die uw interieur niet alleen schoon maakt, maar ook de fabrieksnieuwe geur en touch herstelt."
            />
            <ServiceCard 
              icon={Briefcase}
              title="Fleet Services"
              description="Op maat gemaakte onderhoudsplannen voor bedrijven die begrijpen dat hun wagenpark hun visitekaartje is."
            />
          </div>
        </div>
      </Section>

      {/* BEFORE/AFTER STORYTELLING & PORTFOLIO */}
      <Section id="portfolio" className="bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <span className="small-caps text-gold">Het Resultaat</span>
            <h2 className="text-4xl md:text-5xl mt-4 mb-8">Van dagelijks gebruik naar showroomstaat</h2>
            <p className="opacity-60 mb-12 leading-relaxed">
              Uw wagen wordt dagelijks blootgesteld aan remstof, zure regen en UV-straling. Zonder de juiste behandeling verliest de lak zijn diepte en het interieur zijn luxe uitstraling. Breugelmans Carcare stopt dit proces en keert het om naar een onberispelijk resultaat.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left mb-20">
              {[
                "Herstel van diepe lakglans",
                "Langdurige bescherming tegen de elementen",
                "Hygiënisch en fris interieur",
                "Waardebehoud van uw investering"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm opacity-80">
                  <CheckCircle2 className="w-5 h-5 text-gold" /> {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[
              "https://ddqhrvesrqlfjjtciwsr.supabase.co/storage/v1/object/public/breugelmans/images/images/SaveClip.App_496856616_17847249744468575_8736037934096861960_n.jpg",
              "https://ddqhrvesrqlfjjtciwsr.supabase.co/storage/v1/object/public/breugelmans/images/images/SaveClip.App_532560834_17859058593468575_6965547898209928524_n.jpg",
              "https://ddqhrvesrqlfjjtciwsr.supabase.co/storage/v1/object/public/breugelmans/images/images/SaveClip.App_566830099_1550839109406300_4559775969004803151_n.jpg",
              "https://ddqhrvesrqlfjjtciwsr.supabase.co/storage/v1/object/public/breugelmans/images/images/SaveClip.App_635054982_18299585089263038_6378457720769051147_n.jpg",
              "https://ddqhrvesrqlfjjtciwsr.supabase.co/storage/v1/object/public/breugelmans/images/images/SaveClip.App_631623902_2794719844221447_3356646582915714032_n.jpg",
              "https://ddqhrvesrqlfjjtciwsr.supabase.co/storage/v1/object/public/breugelmans/images/images/SaveClip.App_643486735_17880955155468575_576881347945017579_n.jpg"
            ].map((src, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="aspect-square overflow-hidden rounded-sm border border-white/5 bg-white/[0.02]"
              >
                <img 
                  src={src} 
                  alt={`Portfolio ${i + 1}`} 
                  className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* 3. ZAKELIJKE PAGINA (FLEET) */}
      <Section id="fleet" className="relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="small-caps text-gold">Voor Ondernemers</span>
            <h2 className="text-4xl md:text-6xl mt-4">Uw wagenpark als visitekaartje</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col gap-6">
              <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center text-gold font-serif">01</div>
              <h3 className="text-2xl">Minimale Downtime</h3>
              <p className="text-sm opacity-60 leading-relaxed">Wij werken op uw locatie terwijl uw medewerkers productief blijven. Geen logistieke kopzorgen of verloren uren.</p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center text-gold font-serif">02</div>
              <h3 className="text-2xl">Waardebehoud</h3>
              <p className="text-sm opacity-60 leading-relaxed">Regelmatig professioneel onderhoud verhoogt de restwaarde van uw vloot en vermindert kosten bij het einde van de leasing.</p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center text-gold font-serif">03</div>
              <h3 className="text-2xl">Representativiteit</h3>
              <p className="text-sm opacity-60 leading-relaxed">Een onberispelijke wagen straalt professionaliteit en oog voor detail uit naar uw klanten en partners.</p>
            </div>
          </div>

          <div className="mt-20 glass-panel p-8 md:p-16 text-center">
            <h3 className="text-2xl md:text-3xl mb-6">Maatwerk voor uw bedrijf</h3>
            <p className="text-sm md:text-base opacity-60 mb-8 max-w-2xl mx-auto leading-relaxed">
              Van eenmalige dieptereiniging tot periodieke onderhoudscontracten voor uw volledige vloot. Wij bieden oplossingen die passen bij uw bedrijfsstructuur.
            </p>
            <a href="#contact" className="premium-button-gold w-full sm:w-auto">Vraag een zakelijk voorstel aan</a>
          </div>
        </div>
      </Section>

      {/* 4. OVER ONS */}
      <Section id="over-ons" className="bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center lg:items-start">
            <div className="w-full lg:w-1/3">
               <div className="relative max-w-[320px] mx-auto lg:mx-0">
                  <div className="aspect-[3/4] overflow-hidden rounded-sm border border-white/10">
                    <img 
                      src="https://ddqhrvesrqlfjjtciwsr.supabase.co/storage/v1/object/public/breugelmans/images/images/rhune.jpg" 
                      alt="Rhune Breugelmans" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-zinc-900 border border-gold/20 p-6 shadow-2xl hidden md:block backdrop-blur-sm">
                    <div className="flex gap-1.5 mb-3">
                      {[1,2,3,4,5].map(s => <Star key={s} className="w-3.5 h-3.5 text-gold fill-gold" />)}
                    </div>
                    <p className="text-xs italic text-white font-medium tracking-wide">"Passie voor perfectie."</p>
                  </div>
               </div>
            </div>
            <div className="w-full lg:w-2/3">
              <span className="small-caps text-gold">Het Verhaal</span>
              <h2 className="text-4xl md:text-5xl mt-4 mb-8">Rhune Breugelmans</h2>
              <div className="space-y-6 text-white/80 leading-relaxed font-light text-sm md:text-base">
                <p>
                  Wat begon als een passie voor de esthetiek van wagens, groeide uit tot Breugelmans Carcare. Voor mij is detailing geen werk, maar een ambacht. Het gaat om die laatste 1% die het verschil maakt tussen een schone auto en een wagen in showroomstaat.
                </p>
                <p>
                  In een wereld waar tijd het kostbaarste bezit is, bied ik een service die luxe combineert met ultiem gemak. Geen wachtrijen bij de carwash, geen halfslachtig werk. Alleen pure focus op uw voertuig, op de locatie die u het beste uitkomt.
                </p>
                <p>
                  Mijn belofte aan u is simpel: vakmanschap zonder compromissen, met oog voor elk detail en respect voor uw eigendom.
                </p>
              </div>
              <div className="mt-12 pt-8 border-t border-white/10 flex items-center gap-6">
                <div className="flex flex-col">
                  <span className="font-serif text-xl tracking-tighter">Rhune Breugelmans</span>
                  <span className="small-caps -mt-1 text-[8px]">Founder & Detailer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 5. CONTACTPAGINA */}
      <Section id="contact">
        <div className="max-w-3xl mx-auto text-center">
          <span className="small-caps text-gold">Contact</span>
          <h2 className="text-4xl md:text-6xl mt-4 mb-8">Klaar voor de showroomstaat?</h2>
          <p className="opacity-60 mb-12">
            Neem contact op voor een vrijblijvende offerte of om direct een afspraak in te plannen. Wij zijn actief in heel België en komen naar u toe.
          </p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="flex flex-col gap-2">
              <label className="small-caps opacity-100 text-[9px]">Naam</label>
              <input type="text" className="bg-white/5 border border-white/10 p-4 focus:border-gold outline-none transition-colors" placeholder="Uw volledige naam" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="small-caps opacity-100 text-[9px]">E-mail</label>
              <input type="email" className="bg-white/5 border border-white/10 p-4 focus:border-gold outline-none transition-colors" placeholder="uw@email.com" />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="small-caps opacity-100 text-[9px]">Type Wagen & Locatie</label>
              <input type="text" className="bg-white/5 border border-white/10 p-4 focus:border-gold outline-none transition-colors" placeholder="Bijv. Porsche 911 - Antwerpen" />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="small-caps opacity-100 text-[9px]">Bericht</label>
              <textarea rows={4} className="bg-white/5 border border-white/10 p-4 focus:border-gold outline-none transition-colors" placeholder="Welke service heeft uw voorkeur?"></textarea>
            </div>
            <button type="submit" className="md:col-span-2 premium-button-gold w-full">
              Verstuur aanvraag
            </button>
          </form>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 opacity-60">
            <div className="flex flex-col items-center gap-2">
              <Clock className="w-5 h-5 text-gold" />
              <span className="text-xs uppercase tracking-widest">Flexibele uren</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MapPin className="w-5 h-5 text-gold" />
              <span className="text-xs uppercase tracking-widest">Heel België</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-gold" />
              <span className="text-xs uppercase tracking-widest">Verzekerd vakmanschap</span>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
