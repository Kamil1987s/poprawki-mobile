import ResponsiveImage from '@/components/ResponsiveImage';
import { Phone } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { PHONE_DISPLAY, PHONE_HREF } from '@/lib/constants';

export default function Kolobrzeg() {
  return (
    <section className="bg-paper-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-ink-950/20">
              <ResponsiveImage
                name="coast"
                sizes="(min-width: 1024px) 854px, (min-width: 640px) max(calc(100vw - 48px), 854px), max(calc(100vw - 32px), 605px)"
                decoding="async"
                alt="Kołobrzeg — widok na wybrzeże nad Bałtykiem"
                className="h-[340px] w-full object-cover sm:h-[480px]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/30 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 right-3 flex items-center gap-3 rounded-2xl border border-paper-300 bg-white px-4 py-3 shadow-2xl shadow-ink-950/10 sm:right-6 sm:px-5 sm:py-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500 text-ink-950">
                <Phone className="h-5 w-5" strokeWidth={2.5} />
              </div>
              <div>
                <p className="text-xs text-ink-500">Zadzwoń teraz</p>
                <a href={PHONE_HREF} className="font-display text-sm font-bold text-ink-900 hover:text-brand-800">
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </Reveal>

          {/* Text */}
          <Reveal delay={120} className="order-1 lg:order-2">
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-800">Kołobrzeg</span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl lg:text-5xl">
              Taxi w Kołobrzegu i okolicach
            </h2>
            <p className="mt-5 text-lg text-ink-500">
              Potrzebujesz szybkiego i wygodnego transportu? Jesteśmy do dyspozycji mieszkańców i
              turystów odwiedzających Kołobrzeg. Taksówka Kołobrzeg na każdą porę — od rana po późny wieczór.
            </p>
            <div className="mt-8">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 rounded-2xl bg-brand-500 px-7 py-4 text-base font-bold text-ink-950 shadow-xl shadow-brand-500/25 transition-all hover:bg-brand-400 hover:shadow-brand-500/40 hover:scale-[1.02]"
              >
                <Phone className="h-5 w-5" strokeWidth={2.5} />
                ZADZWOŃ {PHONE_DISPLAY}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
