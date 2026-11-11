const WHATSAPP_URL =
  "https://wa.me/5548998599989?text=Ol%C3%A1%2C%20Micael%20e%20Vanusa!%20Vim%20pelo%20site%20e%20gostaria%20de%20conversar%20sobre%20um%20ensaio."

/**
 * Botão flutuante de direcionamento rápido para o WhatsApp do estúdio.
 */
export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar pelo WhatsApp com Micael e Vanusa"
      title="Conversar no WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-3 focus:outline-none sm:bottom-7 sm:right-7"
    >
      <span className="pointer-events-none hidden translate-x-2 rounded-full border border-white/15 bg-black/90 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-white opacity-0 shadow-xl backdrop-blur-md transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 sm:inline-flex">
        Fale no WhatsApp
      </span>

      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)] ring-1 ring-white/25 transition-all duration-300 group-hover:scale-105 group-hover:bg-[#1EBE5D] group-hover:shadow-[0_14px_34px_rgba(37,211,102,0.38)] group-active:scale-95">
        <svg
          viewBox="0 0 32 32"
          fill="currentColor"
          aria-hidden="true"
          className="h-7 w-7"
        >
          <path d="M16.004 2.667C8.64 2.667 2.667 8.64 2.667 16.004c0 2.353.615 4.651 1.784 6.677L2.56 29.59l7.075-1.856a13.28 13.28 0 0 0 6.369 1.615h.006c7.36 0 13.333-5.973 13.333-13.338 0-3.562-1.387-6.912-3.904-9.431a13.255 13.255 0 0 0-9.435-3.913Zm0 24.426h-.005a11.04 11.04 0 0 1-5.635-1.544l-.404-.24-4.198 1.101 1.121-4.093-.263-.419a11.036 11.036 0 0 1-1.694-5.893c0-6.112 4.972-11.084 11.083-11.084 2.961 0 5.744 1.153 7.837 3.249a11.01 11.01 0 0 1 3.243 7.84c-.001 6.112-4.973 11.083-11.085 11.083Zm6.08-8.301c-.333-.167-1.973-.973-2.279-1.084-.305-.111-.528-.167-.75.167-.222.333-.861 1.084-1.055 1.307-.194.222-.389.25-.722.083-.333-.167-1.407-.519-2.681-1.655-.991-.884-1.66-1.976-1.855-2.309-.194-.333-.021-.513.146-.68.15-.149.333-.389.5-.583.167-.194.222-.333.333-.556.111-.222.056-.417-.028-.583-.083-.167-.75-1.807-1.028-2.474-.27-.65-.545-.562-.75-.572-.194-.01-.417-.012-.639-.012s-.583.083-.889.417c-.305.333-1.167 1.14-1.167 2.78 0 1.639 1.195 3.224 1.361 3.446.167.222 2.352 3.591 5.698 5.035.796.344 1.417.549 1.901.703.799.254 1.526.218 2.101.132.641-.096 1.973-.806 2.251-1.585.278-.778.278-1.446.194-1.585-.083-.139-.305-.222-.638-.389Z" />
        </svg>
      </span>
    </a>
  )
}

