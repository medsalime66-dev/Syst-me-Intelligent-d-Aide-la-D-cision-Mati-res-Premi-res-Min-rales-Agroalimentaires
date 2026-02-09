
export function renderHome() {
  return `
    <div class="space-y-10 animate-fade-in relative">
      <!-- Decor: Floating Molecules -->
      <div class="absolute -top-20 -left-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse-glow pointer-events-none z-0"></div>
      <div class="absolute top-40 -right-20 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse-glow pointer-events-none z-0" style="animation-delay: 1s;"></div>

      <!-- Welcome Section -->
      <div class="glass-panel p-10 relative overflow-hidden group z-10 border-t border-white/80">
        <!-- Interactive Background Mesh -->
        <div class="absolute inset-0 sci-grid opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>
        <div class="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity duration-700 transform rotate-12 scale-150">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="w-64 h-64 fill-slate-800 font-mono">
              <path fill="#1E293B" d="M42.7,-62.9C50.9,-52.8,49.6,-34.4,49.6,-19.1C49.6,-3.8,50.9,8.4,46.3,19.3C41.7,30.2,31.2,39.9,19.1,45.8C7,51.7,-6.7,53.8,-21.1,50.5C-35.5,47.2,-50.6,38.5,-59.5,25.4C-68.4,12.3,-71.1,-5.2,-64.5,-19.3C-57.9,-33.4,-42,-44.1,-28.3,-51.5C-14.6,-58.9,-3.1,-63.1,12.2,-64.8C27.5,-66.5,42.7,-62.9,42.7,-62.9Z" transform="translate(100 100)" />
            </svg>
        </div>

        <div class="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div class="space-y-4">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold bg-slate-900/5 border border-slate-900/10 text-slate-600 backdrop-blur-md">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              SYSTEM_READY // EXPERT_MODE
            </div>
            
            <h2 class="text-4xl md:text-5xl font-bold text-slate-800 tracking-tight leading-tight">
              AgroSIAD <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500 font-light">Intelligence</span>
            </h2>
            <p class="text-slate-600 max-w-lg text-lg leading-relaxed border-l-2 border-slate-300 pl-4">
              Plateforme d'aide à la décision pour la conformité minérale. 
              <br><span class="text-sm text-slate-400 mt-1 block">Algorithmes de détection actifs.</span>
            </p>
            
            <div class="pt-4 flex gap-4">
              <button onclick="window.router.navigate('/evaluate')" class="btn-primary flex items-center gap-3 px-6 py-3 text-sm shadow-xl shadow-blue-900/10 group">
                <div class="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transition-transform group-hover:rotate-90 duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                </div>
                <span>Nouvelle Analyse</span>
              </button>
              <button onclick="window.router.navigate('/history')" class="group px-6 py-3 bg-white/40 hover:bg-white/80 text-slate-700 border border-white/60 rounded-xl transition-all font-medium backdrop-blur-md flex items-center gap-2">
                <span>Archives</span>
                <svg class="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </button>
            </div>
          </div>

          <!-- Animated Abstract Graphic -->
          <div class="hidden lg:block relative w-64 h-64">
             <div class="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-2xl animate-pulse-glow"></div>
             <div class="absolute inset-4 border border-slate-300/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
             <div class="absolute inset-8 border border-dashed border-slate-400/40 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
             <div class="absolute inset-0 flex items-center justify-center">
                <div class="glass-card p-4 rounded-2xl border border-white/80 shadow-2xl backdrop-blur-xl animate-float">
                   <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                   </svg>
                </div>
             </div>
          </div>
        </div>
      </div>

      <!-- Live KPI Grid with Hover Effects -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        <!-- Metric 1 -->
        <div class="glass-card p-6 border-t-4 border-t-emerald-500/50 hover:border-t-emerald-500 transition-colors animate-slide-up" style="animation-delay: 0.1s">
          <div class="flex justify-between items-start mb-4">
             <div class="p-2 bg-emerald-500/10 rounded-lg text-emerald-600">
               <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
             </div>
             <span class="text-xs font-mono text-emerald-600 bg-emerald-50 px-2 py-1 rounded">+12%</span>
          </div>
          <p class="tech-label">Conformité (7j)</p>
          <p class="text-4xl font-bold text-slate-800 tracking-tight mt-1">98.2<span class="text-lg text-slate-400 font-normal">%</span></p>
          
          <!-- Abstract Mini Chart -->
          <div class="flex gap-1 mt-4 h-1.5 opacity-50">
             <div class="flex-1 bg-emerald-500 rounded-full"></div>
             <div class="flex-1 bg-emerald-500 rounded-full"></div>
             <div class="flex-1 bg-emerald-500 rounded-full"></div>
             <div class="flex-1 bg-emerald-500/30 rounded-full"></div>
          </div>
        </div>
        
        <!-- Metric 2 -->
        <div class="glass-card p-6 border-t-4 border-t-amber-500/50 hover:border-t-amber-500 transition-colors animate-slide-up" style="animation-delay: 0.2s">
           <div class="flex justify-between items-start mb-4">
             <div class="p-2 bg-amber-500/10 rounded-lg text-amber-600">
               <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
             </div>
             <span class="text-xs font-mono text-amber-600 bg-amber-50 px-2 py-1 rounded">3 PENDING</span>
          </div>
          <p class="tech-label">À Valider</p>
          <p class="text-4xl font-bold text-slate-800 tracking-tight mt-1">03</p>
          
           <div class="flex gap-1 mt-4 h-1.5 opacity-50">
             <div class="flex-1 bg-amber-500 rounded-full"></div>
             <div class="bg-slate-200 w-full rounded-full flex-grow"></div>
          </div>
        </div>

        <!-- Metric 3 -->
        <div class="glass-card p-6 border-t-4 border-t-rose-500/50 hover:border-t-rose-500 transition-colors animate-slide-up" style="animation-delay: 0.3s">
           <div class="flex justify-between items-start mb-4">
             <div class="p-2 bg-rose-500/10 rounded-lg text-rose-600">
               <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/></svg>
             </div>
             <span class="text-xs font-mono text-rose-600 bg-rose-50 px-2 py-1 rounded">ALERT</span>
          </div>
          <p class="tech-label">Rejets Critiques</p>
          <p class="text-4xl font-bold text-slate-800 tracking-tight mt-1">01</p>
          
           <div class="flex gap-1 mt-4 h-1.5 opacity-50">
             <div class="w-1/4 bg-rose-500 rounded-full animate-pulse"></div>
             <div class="bg-slate-200 w-full rounded-full flex-grow"></div>
          </div>
        </div>
      </div>
      
      <!-- Bottom Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 animate-slide-up" style="animation-delay: 0.4s">
         <div class="glass-panel p-6">
            <h3 class="text-sm font-bold text-slate-800 mb-6 flex items-center gap-2 uppercase tracking-wider">
               <span class="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
               Flux d'Ingestion
            </h3>
            <div class="space-y-3">
               <!-- List Item 1 -->
               <div class="group flex items-center justify-between p-3 bg-white/40 hover:bg-white/90 rounded-xl transition-all cursor-pointer border border-transparent hover:border-blue-200 hover:shadow-md">
                  <div class="flex items-center gap-4">
                     <div class="w-10 h-10 rounded-lg bg-emerald-100/50 text-emerald-600 flex items-center justify-center font-bold text-xs border border-emerald-200">
                        Ca
                     </div>
                     <div>
                        <p class="text-sm font-bold text-slate-700 group-hover:text-blue-700 transition-colors">Carbonate de Calcium</p>
                        <p class="text-[10px] uppercase tracking-wide text-slate-400">Lot #445-B • Validé</p>
                     </div>
                  </div>
                  <svg class="w-5 h-5 text-slate-300 group-hover:text-blue-500 transition-colors opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
               </div>
               
               <!-- List Item 2 -->
               <div class="group flex items-center justify-between p-3 bg-white/40 hover:bg-white/90 rounded-xl transition-all cursor-pointer border border-transparent hover:border-blue-200 hover:shadow-md">
                   <div class="flex items-center gap-4">
                     <div class="w-10 h-10 rounded-lg bg-amber-100/50 text-amber-600 flex items-center justify-center font-bold text-xs border border-amber-200">
                        Po
                     </div>
                     <div>
                        <p class="text-sm font-bold text-slate-700 group-hover:text-blue-700 transition-colors">Phosphate Type B</p>
                        <p class="text-[10px] uppercase tracking-wide text-slate-400">Lot #884-A • En cours</p>
                     </div>
                  </div>
                   <svg class="w-5 h-5 text-slate-300 group-hover:text-blue-500 transition-colors opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
               </div>
            </div>
         </div>
         
         <div class="glass-panel p-8 flex flex-col justify-center items-center text-center relative overflow-hidden">
             <!-- Abstract background decoration -->
             <div class="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-50"></div>
             
             <div class="relative z-10 w-20 h-20 bg-white shadow-xl rounded-2xl flex items-center justify-center mb-6 text-blue-600 ring-4 ring-blue-50/50 transform rotate-45 hover:rotate-0 transition-transform duration-700 group">
               <svg class="h-10 w-10 transform -rotate-45 group-hover:rotate-0 transition-transform duration-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
             </div>
             
             <div class="relative z-10">
               <h3 class="text-lg font-bold text-slate-800 mb-2">Base Réglementaire</h3>
               <p class="text-slate-500 text-sm mb-6 max-w-xs mx-auto">Mise à jour automatique des seuils UE/FDA pour les métaux lourds.</p>
               <button class="px-5 py-2 rounded-lg bg-slate-800 text-white text-xs font-bold uppercase tracking-wider hover:bg-slate-900 transition-colors shadow-lg shadow-slate-500/20">Accéder à la Doc</button>
             </div>
         </div>
      </div>
    </div>
  `;
}
