
export function renderHistory() {
  const historyData = [
    { id: 1, name: 'Carbonate Calcium', code: 'MP-00165', date: '04/02/2026', status: 'ACCEPTABLE', user: 'EG' },
    { id: 2, name: 'Phosphate Tricalcique', code: 'MP-00212', date: '04/02/2026', status: 'CONDITIONAL', user: 'EG' },
    { id: 3, name: 'Sel Marin Raffiné', code: 'MP-00330', date: '03/02/2026', status: 'ACCEPTABLE', user: 'JD' },
    { id: 4, name: 'Kaolin Industriel', code: 'MP-00411', date: '01/02/2026', status: 'REJECTED', user: 'EG' },
    { id: 5, name: 'Oxyde de Zinc', code: 'MP-00520', date: '30/01/2026', status: 'ACCEPTABLE', user: 'MK' },
  ];

  return `
    <div class="space-y-8 h-full">
      <div class="flex items-center justify-between">
         <h2 class="text-2xl font-bold text-slate-800 tracking-tight">Historique des Évaluations</h2>
         <div class="flex gap-2">
            <button class="px-3 py-1.5 text-xs font-semibold rounded bg-white border border-slate-200 text-slate-600 hover:bg-slate-50">Filter: Tout</button>
            <button class="px-3 py-1.5 text-xs font-semibold rounded bg-white border border-slate-200 text-slate-600 hover:bg-slate-50">Export CSV</button>
         </div>
      </div>
      
      <div class="glass-panel overflow-hidden">
        <div class="overflow-x-auto">
          <table class="min-w-full text-left">
            <thead>
              <tr class="bg-slate-50/50 border-b border-slate-100/80">
                <th class="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Date</th>
                <th class="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Code ID</th>
                <th class="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Matière</th>
                <th class="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Note</th>
                <th class="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Statut</th>
                <th class="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">Action</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100/50">
              ${historyData.map(item => `
                <tr class="group hover:bg-blue-50/30 transition duration-150 ease-in-out cursor-default">
                  <td class="px-6 py-4 text-sm text-slate-600">${item.date}</td>
                  <td class="px-6 py-4 text-sm font-mono text-slate-500 group-hover:text-blue-600 transition-colors">${item.code}</td>
                  <td class="px-6 py-4">
                     <span class="text-sm font-semibold text-slate-800 block">${item.name}</span>
                     <span class="text-xs text-slate-400">Validé par ${item.user}</span>
                  </td>
                  <td class="px-6 py-4">
                     <!-- Fake score sparkline -->
                     <div class="flex items-center gap-1">
                        <div class="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                           <div class="h-full ${item.status === 'REJECTED' ? 'bg-rose-400' : 'bg-emerald-400'}" style="width: ${item.status === 'REJECTED' ? '30%' : '90%'}"></div>
                        </div>
                     </div>
                  </td>
                  <td class="px-6 py-4">
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold border
                      ${item.status === 'ACCEPTABLE' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' :
      item.status === 'CONDITIONAL' ? 'bg-amber-50 text-amber-700 border-amber-100' : 'bg-rose-50 text-rose-700 border-rose-100'}">
                      <span class="w-1.5 h-1.5 rounded-full bg-current mr-1.5"></span>
                      ${item.status}
                    </span>
                  </td>
                  <td class="px-6 py-4 text-right">
                    <button class="text-slate-400 hover:text-blue-600 transition-colors">
                       <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                       </svg>
                    </button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
        <div class="px-6 py-4 border-t border-slate-100 bg-slate-50/30 flex items-center justify-between text-xs text-slate-500">
           <span>Affichage 1-5 sur 42 résultats</span>
           <div class="flex gap-2">
              <button class="hover:text-slate-800 disabled:opacity-50" disabled>&larr; Précédent</button>
              <button class="hover:text-slate-800">Suivant &rarr;</button>
           </div>
        </div>
      </div>
    </div>
  `;
}
