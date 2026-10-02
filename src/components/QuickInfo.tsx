import { Clock, MapPin, Car, Phone } from 'lucide-react';
import Reveal from '@/components/Reveal';

const tiles = [
  { icon: Clock, title: '24/7', subtitle: 'Dostępni całą dobę' },
  { icon: MapPin, title: 'Kołobrzeg i okolice', subtitle: 'Działamy lokalnie' },
  { icon: Car, title: 'Komfortowe przejazdy', subtitle: 'Wygodna podróż' },
  { icon: Phone, title: 'Szybki kontakt', subtitle: 'Jeden telefon' },
];

export default function QuickInfo() {
  return (
    <section className="relative z-20 -mt-16 sm:-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {tiles.map((tile, i) => (
            <Reveal
              key={tile.title}
              delay={i * 80}
              className="group flex h-full flex-col rounded-2xl border border-paper-300 bg-white p-5 shadow-xl shadow-ink-950/5 transition-all hover:border-brand-500/40 hover:shadow-2xl hover:shadow-brand-500/10 sm:p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10 text-brand-800 transition-colors group-hover:bg-brand-500 group-hover:text-ink-950">
                <tile.icon className="h-5 w-5" strokeWidth={2} />
              </div>
              <p className="mt-4 font-display text-base font-bold text-ink-900 sm:text-lg">{tile.title}</p>
              <p className="mt-0.5 text-sm text-ink-500">{tile.subtitle}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
