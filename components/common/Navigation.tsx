'use client';

export default function Navigation() {
  return (
    <nav className="w-full">
      <div className="flex justify-between items-center py-8 w-full max-w-5xl mx-auto">
        <div className="text-2xl font-bold italic text-white" style={{ fontFamily: 'cursive' }}>
          nathan builds
        </div>

        <div className="flex items-center gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 shadow-[0_18px_45px_-30px_rgba(255,255,255,0.35)]">
            <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-black shadow-inner shadow-black/60">
              <div className="absolute inset-x-2 top-2 h-1.5 rounded-full bg-white/25" />
              <div className="absolute inset-x-1 bottom-2 h-1 rounded-full bg-white/15" />
              <span className="relative h-3 w-3 rounded-full bg-white/90 shadow-sm shadow-black/40" />
              <span className="absolute -right-1 top-1 h-2.5 w-2.5 rounded-full bg-white/85 shadow-[0_0_20px_rgba(255,255,255,0.35)]" />
            </div>
          </div>

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/15 transition duration-300 hover:bg-white/10">
            <div className="space-y-1.5">
              <span className="block h-0.5 w-5 rounded-full bg-white/85" />
              <span className="block h-0.5 w-4 rounded-full bg-white/65" />
              <span className="block h-0.5 w-3 rounded-full bg-white/45" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
