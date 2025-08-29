import { Link } from "react-router-dom";
import regesterimage from "../../assets/regester.jpg";

const BACKGROUND_URL = regesterimage;

export default function AuthPage() {
  return (
    <div className="relative mx-auto h-[100dvh] w-full max-w-[430px] overflow-hidden bg-white text-[#101010]">
      {/* Top 70% — full-bleed image */}
      <section className="relative h-[80%]">
        <img
          src={BACKGROUND_URL}
          alt="Hero"
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />
        {/* optional soft gradient to match mock */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/10" />
      </section>

      {/* Bottom 30% — background image with readable overlay + buttons */}
      <section className="relative h-[20%]">
        <img
          src={BACKGROUND_URL}
          alt="Background"
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />
        <div className="absolute inset-0 bg-white/85" />

        <div className="relative h-full px-5 pt-6 pb-[max(16px,env(safe-area-inset-bottom))]">
          {/* drag handle (optional) */}
          <div className="mx-auto mb-4 h-1.5 w-14 rounded-full bg-neutral-800/80" />

          <div className="flex items-center gap-3">
            <Link to="/login" className="flex-1">
              <button className="h-12 w-full rounded-2xl border border-neutral-900/80 bg-white text-neutral-900 shadow-sm active:scale-[.98]">
                <span className="text-[13px] font-semibold tracking-wide">LOG IN</span>
              </button>
            </Link>

            <Link to="/register" className="flex-1">
              <button className="h-12 w-full rounded-2xl bg-neutral-900 text-white shadow-[0_8px_24px_rgba(0,0,0,0.25)] active:scale-[.98]">
                <span className="text-[13px] font-semibold tracking-wide">REGISTER</span>
              </button>
            </Link>
          </div>

          <div className="mt-4 text-center">
            <button className="mx-auto block text-[12px] font-medium text-neutral-800 underline underline-offset-4">
              Explore Sample Family Tree Here
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
