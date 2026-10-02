import ResponsiveImage from '@/components/ResponsiveImage';
import { Users, PawPrint, Plane, Car, ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { PHONE_HREF } from '@/lib/constants';

const services = [
  {
    icon: Car,
    title: 'Przewóz osób',
    desc: 'Komfortowe przejazdy po Kołobrzegu i okolicach.',
    alt: 'Przewóz osób — taxi w Kołobrzegu',
    image: 'people' as const,
  },
  {
    icon: PawPrint,
    title: 'Przewóz zwierząt',
    desc: 'Bezpieczny transport Twojego pupila.',
    alt: 'Przewóz zwierząt — taxi Kołobrzeg',
    image: 'pets' as const,
  },
  {
    icon: Users,
    title: 'Transport dla grup',
    desc: 'Przejazdy dla rodzin, grup znajomych i większej liczby pasażerów.',
    alt: 'Transport dla grup — taxi bus w Kołobrzegu',
    image: 'groups' as const,
  },
  {
    icon: Plane,
    title: 'Transfery lotniskowe',
    desc: 'Bezpieczny i wygodny transfer na lotnisko oraz odbiór z lotniska.',
    alt: 'Transfer lotniskowy — taxi Kołobrzeg',
    image: 'airport' as const,
  },
];

export default function Services() {
  return (
    <section id="uslugi" className="scroll-mt-20 bg-paper-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-800">Usługi</span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl lg:text-5xl">
            Nasze usługi
          </h2>
          <p className="mt-4 text-lg text-ink-500">
            Z nami dotrzesz tam, gdzie potrzebujesz — wygodnie i bezpiecznie.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {services.map((service, i) => (
            <Reveal
              key={service.title}
              delay={i * 100}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-paper-300 bg-white shadow-lg shadow-ink-950/5 transition-all hover:shadow-2xl hover:shadow-ink-950/10 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden sm:h-48">
                <ResponsiveImage
                  name={service.image}
                  sizes="(min-width: 1280px) 282px, (min-width: 1024px) calc((100vw - 136px) / 4), (min-width: 640px) calc((100vw - 68px) / 2), calc(100vw - 32px)"
                  decoding="async"
                  alt={service.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 to-transparent" />
                <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500 text-ink-950 shadow-lg">
                  <service.icon className="h-5 w-5" strokeWidth={2} />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="font-display text-lg font-bold text-ink-900">{service.title}</h3>
                <p className="mt-2 flex-1 text-sm text-ink-500">{service.desc}</p>
                <a
                  href={PHONE_HREF}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-800 transition-colors hover:text-brand-900"
                >
                  Zadzwoń
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
