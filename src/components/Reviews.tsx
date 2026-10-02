import { Star, ExternalLink } from 'lucide-react';
import Reveal from '@/components/Reveal';

const GOOGLE_REVIEWS_URL =
  'https://www.google.com/maps/place/Taxi+Kołobrzeg/@54.1818765,15.5686163,15z/data=!4m15!1m8!3m7!1s0x470015a7bf0f8a2b:0xdb241662ec731282!2sTaxi+Kołobrzeg!8m2!3d54.1820931!4d15.5686354!10e5!16s%2Fg%2F11fhqp0j17!3m5!1s0x470015a7bf0f8a2b:0xdb241662ec731282!8m2!3d54.1820931!4d15.5686354!16s%2Fg%2F11fhqp0j17';

function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1Z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84Z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84C6.71 7.3 9.14 5.38 12 5.38Z"
      />
    </svg>
  );
}

export default function Reviews() {
  return (
    <section id="opinie" className="scroll-mt-20 bg-paper-100 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-800">Opinie</span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl lg:text-5xl">
            Opinie klientów
          </h2>
          <p className="mt-4 text-lg text-ink-500">
            Sprawdź, co mówią o nas klienci.
          </p>
        </Reveal>

        <Reveal delay={150} className="mx-auto mt-12 max-w-lg">
          <div className="flex flex-col items-center rounded-2xl border border-paper-300 bg-white px-6 py-10 text-center shadow-xl shadow-ink-950/5 sm:px-10 sm:py-12">
            {/* Google logo */}
            <GoogleG className="h-9 w-9" />

            {/* Company name */}
            <h3 className="mt-5 font-display text-xl font-bold text-ink-900 sm:text-2xl">
              Taxi Kołobrzeg
            </h3>

            {/* Stars */}
            <div className="mt-4 flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-7 w-7 fill-brand-500 text-brand-500" strokeWidth={0} />
              ))}
            </div>

            {/* Rating + count */}
            <div className="mt-5 flex items-baseline gap-2">
              <span className="font-display text-4xl font-bold text-ink-900 sm:text-5xl">4,9</span>
              <span className="text-xl font-medium text-ink-500">/ 5</span>
            </div>
            <p className="mt-2 text-base font-medium text-ink-500 sm:text-lg">
              546 opinii
            </p>

            <p className="mt-1 text-sm text-ink-500">Opinie w Google</p>

            {/* CTA */}
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-ink-950 px-8 py-4 text-base font-bold text-white shadow-lg shadow-ink-950/20 transition-all hover:bg-ink-900 hover:shadow-xl hover:scale-[1.01] sm:w-auto"
            >
              ZOBACZ OPINIE W GOOGLE
              <ExternalLink className="h-4 w-4" strokeWidth={2.5} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
