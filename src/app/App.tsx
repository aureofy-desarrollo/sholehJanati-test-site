import { Header } from "@/app/components/Header";
import { Hero } from "@/app/components/Hero";
import { LinksSection } from "@/app/components/LinksSection";
import Aureofy from "@/imports/Aureofy";

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-900 overflow-x-hidden" style={{
      '--selection-bg': 'var(--brand-lightest)',
      '--selection-text': 'var(--brand-darker)'
    } as React.CSSProperties}>
      {/* Subtle background gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div
          className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full opacity-60 mix-blend-multiply filter blur-[100px]"
          style={{ backgroundColor: 'var(--brand-lightest)' }}
        />
        <div
          className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-60 mix-blend-multiply filter blur-[100px]"
          style={{ backgroundColor: '#FFE4F5' }}
        />
      </div>

      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <LinksSection />
        </main>

        {/* Simple Footer */}
        <footer className="py-4 text-center text-slate-400 text-sm font-light">
          <p>© {new Date().getFullYear()} Sholeh Janati. All Rights Reserved.</p>
        </footer>

        {/* Credits */}
        <div className="py-4 text-center border-t border-slate-200/50">
          <div className="flex items-center justify-center gap-3 text-xs text-slate-400 font-light tracking-wide">
            <span>by</span>
            <a
              href="https://aureofy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-70 inline-flex items-center h-7"
            >
              <div className="w-[117px] h-[28px]" style={{ '--fill-0': '#878787' } as React.CSSProperties}>
                <Aureofy />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}