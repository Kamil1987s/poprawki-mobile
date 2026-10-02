import ResponsiveImage from '@/components/ResponsiveImage';
import { Phone, ArrowDown, Clock, MapPin } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_HREF } from '@/lib/constants';

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <ResponsiveImage
          name="hero"
                sizes="max(100vw, 150svh)"
                decoding="async"
                pictureClassName="block h-full w-full"
          alt="Taxi Kołobrzeg — samochód taxi na ulicach Kołobrzegu"
          className="h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        {/* Left gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/90 via-ink-950/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/40 via-transparent to-ink-950/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-24 pb-20 sm:px-6 sm:pt-28 sm:pb-24 lg:px-8 lg:pt-32">
        <div className="max-w-2xl">
          <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-300 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-400" />
            </span>
            Dostępni 24/7
          </span>

          <h1
            className="animate-fade-up mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
            style={{ animationDelay: '0.1s' }}
          >
            Taxi <span className="text-brand-400">Kołobrzeg</span>
          </h1>

          <p
            className="animate-fade-up mt-3 text-lg font-medium text-white/90 sm:text-2xl"
            style={{ animationDelay: '0.2s' }}
          >
            Szybko. Bezpiecznie. Zawsze na czas.
          </p>

          <p
            className="animate-fade-up mt-3 max-w-lg text-sm text-ink-200 sm:text-lg"
            style={{ animationDelay: '0.3s' }}
          >
            Profesjonalny przewóz osób, zwierząt i grup. Taxi w Kołobrzegu i okolicach — dostępni 24/7.
          </p>

          {/* CTAs */}
          <div
            className="animate-fade-up mt-7 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: '0.4s' }}
          >
            <a
              href={PHONE_HREF}
              className="group flex items-center justify-center gap-3 rounded-2xl bg-brand-500 px-6 py-3.5 text-base font-bold text-ink-950 shadow-xl shadow-brand-500/30 transition-all hover:bg-brand-400 hover:shadow-brand-500/50 hover:scale-[1.02] animate-pulse-ring sm:px-8 sm:py-4 sm:text-lg"
            >
              <Phone className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.5} />
              ZADZWOŃ TERAZ
            </a>
            <a
              href="#uslugi"
              className="flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/30 sm:px-8 sm:py-4 sm:text-lg"
            >
              Poznaj nasze usługi
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>

          {/* Quick info */}
          <div
            className="animate-fade-up mt-7 flex flex-col gap-2.5 text-sm sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-3"
            style={{ animationDelay: '0.5s' }}
          >
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 font-bold text-white transition-colors hover:text-brand-300"
            >
              <Phone className="h-4 w-4 text-brand-400" />
              {PHONE_DISPLAY}
            </a>
            <span className="hidden h-4 w-px bg-white/20 sm:block" />
            <span className="flex items-center gap-2 text-ink-200">
              <Clock className="h-4 w-4 text-brand-400" />
              Dostępni 24/7
            </span>
            <span className="hidden h-4 w-px bg-white/20 sm:block" />
            <span className="flex items-center gap-2 text-ink-200">
              <MapPin className="h-4 w-4 text-brand-400" />
              Kołobrzeg i okolice
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:block">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/20 p-1.5">
          <div className="h-2 w-1 animate-bounce rounded-full bg-white/50" />
        </div>
      </div>
    </section>
  );
}
