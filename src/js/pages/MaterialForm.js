
export function renderMaterialForm() {
  setTimeout(() => {
    // Attach event listeners after render
    const form = document.getElementById('material-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        // Save to local storage or state
        localStorage.setItem('currentMaterial', JSON.stringify(data));
        window.router.navigate('/analysis');
      });
    }
  }, 0);

  return `
    <div class="max-w-4xl mx-auto space-y-8">
      <div class="flex items-center justify-between">
        <div>
           <h2 class="text-2xl font-bold text-slate-800 tracking-tight">Nouvelle Analyse</h2>
           <p class="text-slate-500">Saisie des paramètres pour l'évaluation de conformité.</p>
        </div>
        <div class="text-sm text-slate-400 font-mono">REF: NEW-2026-X</div>
      </div>

      <form id="material-form" class="space-y-6">
        <!-- Identity -->
        <div class="glass-panel p-6 space-y-6">
          <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div class="p-2 bg-blue-50 rounded-lg text-blue-600">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
               </svg>
            </div>
            <h3 class="text-lg font-semibold text-slate-800">Identification de la Matière</h3>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-2">
              <label class="block text-xs font-bold uppercase text-slate-500 tracking-wider ml-1">Nom Commercial</label>
              <input type="text" name="name" required class="w-full rounded-xl border border-slate-200 bg-white/70 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 shadow-sm p-3.5 text-slate-700 font-medium placeholder:text-slate-400" placeholder="Ex: Carbonate de Calcium">
            </div>
            <div class="space-y-2">
              <label class="block text-xs font-bold uppercase text-slate-500 tracking-wider ml-1">Code Interne</label>
              <input type="text" name="code" class="w-full rounded-xl border border-slate-200 bg-white/70 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 shadow-sm p-3.5 text-slate-700 font-medium placeholder:text-slate-400" placeholder="Ex: MP-2026-001">
            </div>
            <div class="space-y-2">
              <label class="block text-xs font-bold uppercase text-slate-500 tracking-wider ml-1">Fournisseur</label>
              <input type="text" name="supplier" class="w-full rounded-xl border border-slate-200 bg-white/70 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 shadow-sm p-3.5 text-slate-700 font-medium placeholder:text-slate-400" placeholder="Nom du tiers">
            </div>
            <div class="space-y-2">
              <label class="block text-xs font-bold uppercase text-slate-500 tracking-wider ml-1">Origine Géologique</label>
              <div class="relative">
                <select name="origin" class="w-full rounded-xl border border-slate-200 bg-white/70 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 shadow-sm p-3.5 text-slate-700 font-medium appearance-none cursor-pointer">
                  <option value="sedimentary">Sédimentaire</option>
                  <option value="metamorphic">Métamorphique</option>
                  <option value="magmatic">Magmatique</option>
                  <option value="synthetic">Synthétique</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                  <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Usage -->
        <div class="glass-panel p-6 space-y-4">
          <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
             <div class="p-2 bg-purple-50 rounded-lg text-purple-600">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
               </svg>
             </div>
             <h3 class="text-lg font-semibold text-slate-800">Usage & Spécifications</h3>
          </div>
          
          <div>
             <label class="block text-xs font-bold uppercase text-slate-500 tracking-wider mb-2 ml-1">Usage Alimentaire Prévu</label>
             <textarea name="usage" rows="3" class="w-full rounded-xl border border-slate-200 bg-white/70 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 shadow-sm p-3.5 text-slate-700 font-medium placeholder:text-slate-400" placeholder="Détails sur l'incorporation dans le produit fini..."></textarea>
          </div>
        </div>

        <!-- Analysis Data (Simulation) -->
        <div class="rounded-xl border border-blue-200 bg-gradient-to-br from-blue-50/50 to-white/50 p-6 space-y-4">
          <div class="flex items-start justify-between">
            <h3 class="text-lg font-semibold text-slate-800 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              Données Analytiques (Simulation)
            </h3>
            <span class="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-bold uppercase rounded tracking-wide">Mode Démo</span>
          </div>
          
          <div class="text-sm text-slate-600 mb-4 bg-white/60 p-4 rounded-lg border border-white">
            <p>Sélectionnez un scénario pour simuler l'importation des résultats du LIMS (Laboratory Information Management System).</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <label class="relative flex flex-col p-4 bg-white border border-slate-200 rounded-lg cursor-pointer hover:border-emerald-500 hover:ring-1 hover:ring-emerald-500 transition-all group">
                <input type="radio" name="simulation_type" value="compliant" checked class="peer sr-only">
                <div class="flex items-center gap-2 mb-2">
                  <div class="w-4 h-4 rounded-full border border-slate-300 peer-checked:bg-emerald-500 peer-checked:border-emerald-500"></div>
                  <span class="font-bold text-slate-700 group-hover:text-emerald-700">Conforme</span>
                </div>
                <div class="text-xs text-slate-500 pl-6">Valeurs nominales standard.</div>
                <div class="absolute inset-0 border-2 border-emerald-500 rounded-lg opacity-0 peer-checked:opacity-100 pointer-events-none"></div>
              </label>
              
              <label class="relative flex flex-col p-4 bg-white border border-slate-200 rounded-lg cursor-pointer hover:border-amber-500 hover:ring-1 hover:ring-amber-500 transition-all group">
                <input type="radio" name="simulation_type" value="borderline" class="peer sr-only">
                <div class="flex items-center gap-2 mb-2">
                  <div class="w-4 h-4 rounded-full border border-slate-300 peer-checked:bg-amber-500 peer-checked:border-amber-500"></div>
                  <span class="font-bold text-slate-700 group-hover:text-amber-700">Limite</span>
                </div>
                <div class="text-xs text-slate-500 pl-6">Valeurs proches des seuils.</div>
                <div class="absolute inset-0 border-2 border-amber-500 rounded-lg opacity-0 peer-checked:opacity-100 pointer-events-none"></div>
              </label>

              <label class="relative flex flex-col p-4 bg-white border border-slate-200 rounded-lg cursor-pointer hover:border-rose-500 hover:ring-1 hover:ring-rose-500 transition-all group">
                <input type="radio" name="simulation_type" value="non_compliant" class="peer sr-only">
                <div class="flex items-center gap-2 mb-2">
                  <div class="w-4 h-4 rounded-full border border-slate-300 peer-checked:bg-rose-500 peer-checked:border-rose-500"></div>
                  <span class="font-bold text-slate-700 group-hover:text-rose-700">Non Conforme</span>
                </div>
                <div class="text-xs text-slate-500 pl-6">Dépassement critique.</div>
                <div class="absolute inset-0 border-2 border-rose-500 rounded-lg opacity-0 peer-checked:opacity-100 pointer-events-none"></div>
              </label>
          </div>
        </div>

        <div class="flex justify-end gap-3 pt-6">
          <button type="button" onclick="window.history.back()" class="px-6 py-2.5 border border-slate-300 rounded-lg text-slate-700 bg-white hover:bg-slate-50 focus:outline-none font-medium transition-colors">
            Annuler
          </button>
          <button type="submit" class="btn-primary shadow-lg shadow-blue-900/20 px-8 py-2.5 flex items-center gap-2">
            <span>Lancer l'Algorithme</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  `;
}
