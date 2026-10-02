import ResponsiveImage from '@/components/ResponsiveImage';
import { Phone, Check, Sofa, ShieldCheck, Sparkles, Clock } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { PHONE_HREF } from '@/lib/constants';

const features = [
  { icon: Sofa, label: 'Komfort' },
  { icon: ShieldCheck, label: 'Bezpieczeństwo' },
  { icon: Sparkles, label: 'Profesjonalna obsługa' },
  { icon: Clock, label: 'Przejazdy 24/7' },
];

export default function OurCar() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Text + features */}
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-800">Nasz samochód</span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl lg:text-5xl">
              Komfortowa podróż zaczyna się tutaj
            </h2>
            <p className="mt-5 text-lg text-ink-500">
              Zależy nam, aby każda podróż była wygodna, bezpieczna i przyjemna — niezależnie od tego,
              czy jedziesz kilka ulic, czy wybierasz się w dalszą trasę.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4">
              {features.map((f) => (
                <div
                  key={f.label}
                  className="flex items-center gap-3 rounded-xl border border-paper-300 bg-paper-50 px-4 py-3.5 transition-colors hover:border-brand-500/30 hover:bg-brand-50/50"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-brand-800">
                    <f.icon className="h-4 w-4" strokeWidth={2} />
                  </span>
                  <span className="text-sm font-semibold text-ink-800">{f.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 rounded-2xl bg-brand-500 px-7 py-4 text-base font-bold text-ink-950 shadow-xl shadow-brand-500/25 transition-all hover:bg-brand-400 hover:shadow-brand-500/40 hover:scale-[1.02]"
              >
                <Phone className="h-5 w-5" strokeWidth={2.5} />
                ZADZWOŃ TERAZ
              </a>
            </div>
          </Reveal>

          {/* Car image */}
          <Reveal delay={120} className="relative order-2 lg:order-2">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-ink-950/15">
              <ResponsiveImage
                name="car"
                sizes="(min-width: 1024px) 840px, (min-width: 640px) max(calc(100vw - 48px), 840px), max(calc(100vw - 32px), 595px)"
                decoding="async"
                alt="Taxi Kołobrzeg — samochód taxi nad morzem przy latarni w Kołobrzegu"
                className="h-[340px] w-full object-cover sm:h-[480px]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/20 to-transparent" />
            </div>
            {/* Checkmark badge */}
            <div className="absolute -bottom-5 left-3 flex items-center gap-3 rounded-2xl border border-paper-300 bg-white px-4 py-3 shadow-2xl shadow-ink-950/10 sm:left-6 sm:px-5 sm:py-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500 text-ink-950">
                <Check className="h-5 w-5" strokeWidth={2.5} />
              </div>
              <div>
                <p className="text-xs text-ink-500">Sprawdzone auto</p>
                <p className="font-display text-sm font-bold text-ink-900">Gotowe do drogi</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
