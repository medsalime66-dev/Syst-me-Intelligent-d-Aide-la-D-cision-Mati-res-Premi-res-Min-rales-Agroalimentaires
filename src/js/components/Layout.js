
export function renderLayout(content) {
  return `
    <div class="min-h-screen flex flex-col font-sans text-slate-900 bg-slate-50/50">
      <!-- Glass Header -->
      <header class="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/20 shadow-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-16">
            <div class="flex items-center gap-8">
              <!-- Logo / Brand -->
              <div class="flex items-center gap-3 cursor-pointer group" onclick="window.router.navigate('/')">
                <div class="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-white shadow-lg shadow-slate-500/20 group-hover:bg-slate-700 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div>
                  <h1 class="text-lg font-bold text-slate-800 tracking-tight leading-none">AgroSIAD</h1>
                  <p class="text-[0.65rem] uppercase text-slate-500 font-bold tracking-widest mt-1">Plateforme Expert Qualité</p>
                </div>
              </div>
              
              <!-- Navigation -->
              <nav class="hidden md:flex space-x-1" aria-label="Global">
                <a href="/" data-link class="px-3 py-2 text-sm font-medium rounded-md transition-all text-slate-600 hover:text-slate-900 hover:bg-slate-100/50">
                  Tableau de bord
                </a>
                <a href="/evaluate" data-link class="px-3 py-2 text-sm font-medium rounded-md transition-all text-slate-600 hover:text-slate-900 hover:bg-slate-100/50">
                  Nouvelle Analyse
                </a>
                <a href="/history" data-link class="px-3 py-2 text-sm font-medium rounded-md transition-all text-slate-600 hover:text-slate-900 hover:bg-slate-100/50">
                  Historique
                </a>
              </nav>
            </div>

            <!-- Profile -->
            <div class="flex items-center gap-4">
              <div class="flex items-center gap-3 pl-4 border-l border-slate-200">
                <div class="text-right hidden sm:block">
                  <p class="text-sm font-semibold text-slate-700">Expert Géomine</p>
                  <p class="text-xs text-slate-400">Administration</p>
                </div>
                <div class="h-9 w-9 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-bold border border-white shadow-inner">
                  EG
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <!-- Main Content -->
      <main class="flex-1 py-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          ${content}
        </div>
      </main>

      <!-- Footer -->
      <footer class="mt-auto border-t border-slate-200/60 bg-white/40 backdrop-blur-sm">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center">
             <p class="text-xs text-slate-400 font-mono">
              SYSTEME_EXPERT_V1.2.4 | SECURE
            </p>
            <p class="text-center text-sm text-slate-500">
              &copy; 2026 AgroSIAD - Industrie Agroalimentaire
            </p>
          </div>
        </div>
      </footer>
    </div>
  `;
}
