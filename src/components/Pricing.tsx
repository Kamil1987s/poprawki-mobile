import { Phone, Car, Map, Users, Plane } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { PHONE_HREF } from '@/lib/constants';

const routes = [
  {
    icon: Car,
    title: 'Taxi miejskie',
    description: 'Szybkie przejazdy po Kołobrzegu — z plaż, mola i centrum do dowolnego celu.',
    price: '5,99 zł',
    unit: '/ km',
    note: '10 zł start',
  },
  {
    icon: Map,
    title: 'Kursy poza miasto',
    description: 'Dojazdy poza Kołobrzeg, transfery i dłuższe trasy — z bagażem, zawsze na czas.',
    price: '10–12 zł',
    unit: '/ km',
    note: 'dzień / noc',
  },
  {
    icon: Users,
    title: 'Taxi Bus dla grup',
    description: 'Wycieczki, wesela i transfer grupowy. Bus na 6, 7 lub 8 osób.',
    price: '+10–20 zł',
    unit: 'dopłata',
    note: 'do taksometru',
  },
  {
    icon: Plane,
    title: 'Kursy dalekobieżne',
    description: 'Wyjazdy powyżej 100 km — dalekie trasy w korzystniejszej stawce.',
    price: '50%',
    unit: 'taksometru',
    note: 'powyżej 100 km',
  },
];

const standardPrices = [
  { name: 'Cena startowa', price: '10 zł', highlight: true },
  { name: '1 km w dzień', price: '5,99 zł' },
  { name: '1 km w nocy', price: '6,00 zł' },
  { name: '1 km w dzień poza miastem', price: '10 zł' },
  { name: '1 km w nocy poza miastem', price: '12 zł' },
  { name: 'Dopłata za busa 6/7/8 osób', price: '10–20 zł' },
  { name: 'Dopłata za zwierzaka', price: '10 zł' },
  { name: 'Kursy powyżej 100 km', price: '50% taksometru' },
];

const additionalPrices = [
  { name: 'Odpalanie na kable', detail: 'na terenie miasta · poza miastem według taksometru', price: '50 zł' },
  { name: 'Zakupy', detail: 'na terenie miasta · poza miastem według taksometru', price: '50 zł' },
];

export default function Pricing() {
  return (
    <section id="cennik" className="scroll-mt-20 bg-ink-950 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-400">Cennik</span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Cennik Taxi Kołobrzeg
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-300 sm:text-lg">
            Wygodne przejazdy po Kołobrzegu, okolicach oraz w dalszych trasach.
          </p>
        </Reveal>

        {/* Route cards */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {routes.map((route, index) => (
            <Reveal
              key={route.title}
              delay={index * 80}
              className="group flex h-full flex-col rounded-2xl border border-white/10 bg-ink-900 p-6 transition-all hover:-translate-y-1 hover:border-brand-500/30 hover:bg-ink-850"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400 transition-colors group-hover:bg-brand-500 group-hover:text-ink-950">
                <route.icon className="h-5 w-5" strokeWidth={2} />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-white">{route.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-300">{route.description}</p>
              <div className="mt-5 flex items-baseline gap-1.5 border-t border-white/10 pt-4">
                <span className="font-display text-2xl font-bold text-brand-300">{route.price}</span>
                <span className="text-sm font-medium text-ink-300">{route.unit}</span>
              </div>
              <p className="mt-1 text-xs text-ink-300">{route.note}</p>
            </Reveal>
          ))}
        </div>

        {/* Price table */}
        <Reveal delay={180} className="mt-6 rounded-2xl border border-white/10 bg-ink-900 p-6 sm:p-8 lg:p-10">
          <h3 className="font-display text-xl font-bold text-white sm:text-2xl">Taryfa przejazdów</h3>

          <div className="mt-6 divide-y divide-white/10">
            {standardPrices.map((item) => (
              <div
                key={item.name}
                className={`flex items-center justify-between gap-5 py-4 first:pt-0 last:pb-0 ${
                  item.highlight ? 'rounded-lg bg-brand-500/5 px-4 -mx-4' : ''
                }`}
              >
                <span className="text-sm leading-relaxed text-ink-300 sm:text-base">{item.name}</span>
                <span className="shrink-0 text-right font-display text-lg font-bold text-brand-300 sm:text-xl">
                  {item.price}
                </span>
              </div>
            ))}
          </div>

          {/* Additional prices */}
          <div className="mt-8 border-t border-white/10 pt-8">
            <h4 className="font-display text-lg font-bold text-white">Usługi dodatkowe</h4>
            <div className="mt-5 divide-y divide-white/10">
              {additionalPrices.map((item) => (
                <div key={item.name} className="flex items-center justify-between gap-5 py-4 first:pt-0 last:pb-0">
                  <div>
                    <p className="text-sm font-medium text-ink-200 sm:text-base">{item.name}</p>
                    <p className="mt-1 text-xs text-ink-300">{item.detail}</p>
                  </div>
                  <span className="shrink-0 font-display text-lg font-bold text-brand-300 sm:text-xl">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 border-t border-white/10 pt-7">
            <a
              href={PHONE_HREF}
              className="flex w-full items-center justify-center gap-3 rounded-2xl bg-brand-500 px-8 py-4 text-base font-bold text-ink-950 shadow-xl shadow-brand-500/25 transition-all hover:bg-brand-400 hover:shadow-brand-500/40 hover:scale-[1.01] sm:w-auto sm:py-4 sm:text-lg"
            >
              <Phone className="h-5 w-5" strokeWidth={2.5} />
              ZADZWOŃ I ZAMÓW PRZEJAZD
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
