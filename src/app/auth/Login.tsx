import React, { useState } from "react";
import logo from "../../assets/logo.png"
import bg from "../../assets/Loginbg.png"
type Props = {
  onLogin?: (domain: string, email: string, password: string) => void;
  bgSrc?: string;
  sealSrc?: string;
};

const Login: React.FC<Props> = ({
  onLogin,
  bgSrc = bg,
  sealSrc = logo,
}) => {
  const [domain, setDomain] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin?.(domain.trim(), email.trim(), password);
  };

  return (
    <>
      {/* MOBILE VIEW (<640px) */}
      <div
        className="relative min-h-dvh bg-cover bg-center sm:hidden"
        style={{ backgroundImage: `url(${bgSrc})` }}
      >
        <div className="absolute inset-0 bg-white/20" />

        {/* Layout: header (safe-area), centered main, footer */}
        <div className="relative z-10 flex min-h-dvh flex-col">
          {/* Safe-area header height (no spacer needed for centering) */}
          <div className="h-[max(16px,env(safe-area-inset-top))]" />

          {/* CENTERED CONTENT */}
          <main className="flex grow items-center">
            <div className="mx-auto w-[min(94vw,400px)]">
              <h1 className="text-[clamp(32px,8.5vw,44px)] leading-[clamp(36px,9.5vw,48px)] font-semibold tracking-tight text-black">
                Log in
              </h1>

              <form
                onSubmit={submit}
                className="mt-2 space-y-3"
                aria-label="Login form"
              >
                <label className="block">
                  <span className="sr-only">Domain</span>
                  <input
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    placeholder="Domain Pointed to......"
                    className="h-12 w-full rounded-[3px] border border-black bg-white/90 px-3 text-base text-black placeholder-black/60 outline-none"
                    autoComplete="off"
                  />
                </label>

                <label className="block">
                  <span className="sr-only">Email</span>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="shriram@auriga.com"
                    className="h-12 w-full rounded-[3px] border border-black bg-white/90 px-3 text-base text-black placeholder-black/60 outline-none"
                    type="email"
                    autoComplete="email"
                  />
                </label>

                <label className="block">
                  <span className="sr-only">Password</span>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="h-12 w-full rounded-[3px] border border-black bg-white/90 px-3 text-base text-black placeholder-black/60 outline-none"
                    type="password"
                    autoComplete="current-password"
                  />
                </label>

                <button
                  type="submit"
                  className="mt-3 h-[52px] w-full rounded-md bg-black text-center text-[14px] font-extrabold tracking-[0.11em] text-white"
                >
                  LOGIN
                </button>
              </form>
            </div>
          </main>

          {/* Bottom lockup (still pinned near bottom, with safe-area) */}
          <footer className="mt-auto flex items-center justify-center pb-[max(24px,env(safe-area-inset-bottom))]">
            <img
              src={sealSrc}
              alt="AURIGA Seal"
              className="h-32 w-32 select-none object-contain"
              draggable={false}
            />
            <div className="ml-3 text-[clamp(16px,5vw,20px)] font-semibold text-black">
              <span className="font-normal">by </span>
              <span className="font-extrabold tracking-tight">AURIGA</span>
            </div>
          </footer>
        </div>
      </div>

      {/* Tablet/Desktop guard (≥640px) */}
      <div className="hidden min-h-dvh items-center justify-center bg-neutral-50 sm:flex">
        <div className="mx-6 w-full max-w-md rounded-xl border border-neutral-200 bg-white p-6 text-center shadow-sm">
          <h2 className="text-xl font-semibold text-neutral-900">Mobile only</h2>
          <p className="mt-2 text-sm text-neutral-600">
            This web app is optimized for phones. Please open it on a mobile
            device or resize the window below 640px width.
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
