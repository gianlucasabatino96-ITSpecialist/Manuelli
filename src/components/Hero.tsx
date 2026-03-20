export function Hero() {
  return (
    <section
      aria-label="Sezione hero — Alessio Manuelli Candidato Sindaco"
      className="relative flex min-h-screen items-end bg-cover bg-[position:60%_35%] pb-[130px] md:items-end md:bg-[position:50%_5%] md:pb-[160px]"
      style={{ backgroundImage: "url('/assets/images/alessio-hero.jpg')" }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(12,99,147,0.88)_0%,rgba(12,99,147,0.60)_45%,rgba(12,99,147,0.10)_70%,rgba(12,99,147,0.00)_100%)] md:bg-[linear-gradient(to_right,rgba(12,99,147,0.80)_0%,rgba(12,99,147,0.50)_22%,rgba(12,99,147,0.10)_45%,rgba(12,99,147,0.00)_65%)]" />

      <div className="pointer-events-auto relative z-10 w-full px-7 pb-12 pt-32 md:px-24 md:pb-24 md:pt-0">
        <div className="max-w-[260px] animate-fadeInUp md:max-w-[520px]">
          <div className="mb-[0.6rem] inline-block rounded-full border border-white/[0.45] px-[0.4rem] py-[0.4rem] text-[0.6rem] font-semibold tracking-[0.06em] text-white md:mb-4 md:px-4 md:py-[0.3rem] md:text-[0.72rem] md:tracking-[0.08em]">
            Lista Civica · Santa Marinella · Santa Severa
          </div>

          <h1 className="mb-[0.5rem] text-[2.6rem] font-bold leading-[1.05] text-white md:text-[3.8rem]">
            Alessio Manuelli
          </h1>

          <h2 className="mb-[0.75rem] text-[0.82rem] font-normal uppercase tracking-[0.18em] text-azzurro-chiaro md:mb-6 md:text-[1rem]">
            Candidato Sindaco
          </h2>

          <div className="mt-[0.25rem] text-[1.5rem] font-bold text-verde [text-shadow:2px_2px_4px_rgba(0,0,0,0.3)] md:mt-0 md:text-[1.8rem] md:mb-10">
            #PrendiamociCura
          </div>
        </div>
      </div>
    </section>
  )
}

