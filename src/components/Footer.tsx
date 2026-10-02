import { Car, Phone } from 'lucide-react';
import { NAV_LINKS, PHONE_DISPLAY, PHONE_HREF } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink-950 py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:justify-between">
          {/* Brand + phone */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500 text-ink-950">
                <Car className="h-4 w-4" strokeWidth={2.5} />
              </span>
              <span className="font-display text-base font-bold tracking-tight text-white">
                TAXI <span className="text-brand-400">KOŁOBRZEG</span>
              </span>
            </div>
            <a
              href={PHONE_HREF}
              className="mt-4 flex items-center gap-2 text-sm font-semibold text-ink-300 transition-colors hover:text-brand-300"
            >
              <Phone className="h-4 w-4 text-brand-400" />
              {PHONE_DISPLAY}
            </a>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-ink-300 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 sm:flex-row">
          <p className="text-sm text-ink-300">© 2026 Taxi Kołobrzeg</p>
          <p className="text-sm text-ink-300">Dostępni 24/7 · Kołobrzeg i okolice</p>
        </div>
      </div>
    </footer>
  );
}
