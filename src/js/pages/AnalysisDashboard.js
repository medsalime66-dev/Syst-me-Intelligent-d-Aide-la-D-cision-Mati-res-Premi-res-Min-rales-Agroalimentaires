
import { simulateAnalysis, evaluateMaterial } from '../utils/decisionEngine.js';

export function renderAnalysis() {
  // Retrieve context
  const storedData = localStorage.getItem('currentMaterial');
  if (!storedData) {
    return `<div class="text-center p-10 font-medium text-slate-500">Aucune donnée à analyser. <br><button onclick="window.router.navigate('/evaluate')" class="text-blue-600 underline mt-2 hover:text-blue-800">Retourner au formulaire</button></div>`;
  }

  const materialInfo = JSON.parse(storedData);
  const analysisData = simulateAnalysis(materialInfo.simulation_type);
  const decision = evaluateMaterial(analysisData);

  // Status Colors Config
  let statusColor, statusBg, statusBorder, statusIcon;
  if (decision.status === 'ACCEPTABLE') {
    statusColor = 'text-emerald-700';
    statusBg = 'bg-emerald-50/50';
    statusBorder = 'border-emerald-200';
    statusIcon = `<div class="p-3 bg-emerald-100 rounded-full"><svg class="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>`;
  } else if (decision.status === 'CONDITIONAL') {
    statusColor = 'text-amber-700';
    statusBg = 'bg-amber-50/50';
    statusBorder = 'border-amber-200';
    statusIcon = `<div class="p-3 bg-amber-100 rounded-full"><svg class="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg></div>`;
  } else {
    statusColor = 'text-rose-700';
    statusBg = 'bg-rose-50/80';
    statusBorder = 'border-rose-200';
    statusIcon = `<div class="p-3 bg-rose-100 rounded-full"><svg class="w-8 h-8 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>`;
  }

  // Generate Table Rows
  const rows = decision.details.map(d => {
    let rowClass = '';
    let valClass = 'font-medium font-mono';
    let badge = '';

    if (d.severity === 'CRITICAL') {
      rowClass = 'bg-rose-50/50';
      valClass = 'text-rose-700 font-bold';
      badge = `<span class="inline-flex items-center px-2 py-1 rounded text-xs font-bold bg-rose-100 text-rose-800 border border-rose-200">NON-CONFORME</span>`;
    } else if (d.severity === 'WARNING') {
      rowClass = 'bg-amber-50/30';
      valClass = 'text-amber-700 font-semibold';
      badge = `<span class="inline-flex items-center px-2 py-1 rounded text-xs font-bold bg-amber-100 text-amber-800 border border-amber-200">LIMITE</span>`;
    } else {
      badge = `<span class="inline-flex items-center px-2 py-1 rounded text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">CONFORME</span>`;
    }

    return `
      <tr class="${rowClass} hover:bg-slate-50/80 transition border-b border-slate-100 last:border-0">
        <td class="px-6 py-4 text-sm font-semibold text-slate-700">${d.param}</td>
        <td class="px-6 py-4 text-sm ${valClass}">${d.value} <span class="text-xs text-slate-400 font-normal">${d.unit}</span></td>
        <td class="px-6 py-4 text-sm font-mono text-slate-500">${d.limit} <span class="text-xs text-slate-400 font-normal">${d.unit}</span></td>
        <td class="px-6 py-4 text-right">
          ${badge}
        </td>
      </tr>
    `;
  }).join('');

  return `
    <div class="space-y-8 animate-fade-in">
      
      <!-- Header -->
      <div class="flex items-center justify-between">
        <div>
           <button onclick="window.router.navigate('/')" class="text-xs font-bold text-slate-400 uppercase tracking-widest hover:text-slate-600 flex items-center gap-1 mb-2 transition-colors">
             &larr; Retour au Dashboard
           </button>
           <h2 class="text-2xl font-bold text-slate-800 tracking-tight">Rapport d'Analyse <span class="font-mono text-lg font-normal text-slate-400 ml-2">#${materialInfo.code || 'UNKNOWN'}</span></h2>
           <p class="text-slate-500 text-sm mt-1">${materialInfo.name} <span class="mx-2 text-slate-300">|</span> ${materialInfo.supplier}</p>
        </div>
        <button onclick="window.print()" class="btn-primary flex items-center gap-2 shadow-lg shadow-slate-900/10 backdrop-blur-sm bg-slate-800/90 hover:bg-slate-800">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>
          Exporter
        </button>
      </div>

      <!-- Decision Banner -->
      <div class="${statusBg} backdrop-blur-md rounded-2xl p-8 border ${statusBorder} shadow-sm flex flex-col md:flex-row md:items-start gap-6 relative overflow-hidden">
        <div class="relative z-10 flex-shrink-0">
          ${statusIcon}
        </div>
        <div class="relative z-10 flex-1">
          <p class="text-xs font-bold uppercase tracking-widest ${statusColor} opacity-70 mb-1">Décision Finale du Système</p>
          <h3 class="text-3xl font-bold ${statusColor} mb-2">${decision.status}</h3>
          <p class="${statusColor} text-lg leading-relaxed max-w-2xl">${decision.summary}</p>
          
          ${decision.status !== 'ACCEPTABLE' ? `
          <div class="mt-6 bg-white/60 rounded-xl p-4 border border-white/50 shadow-sm">
            <h4 class="font-bold ${statusColor} text-sm mb-2 flex items-center gap-2">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
              Justification Automatisée
            </h4>
            <ul class="space-y-1.5">
              ${decision.rules.map(r => `<li class="text-sm ${statusColor} flex items-start gap-2"><span class="mt-1.5 w-1 h-1 rounded-full bg-current flex-shrink-0"></span>${r}</li>`).join('')}
            </ul>
          </div>
          ` : ''}
        </div>
        <!-- Abstract gradient pattern for sci-fi/expert feel -->
        <div class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white/20 to-transparent rounded-full -mr-16 -mt-16 pointer-events-none"></div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Detailed Analysis Table -->
        <div class="lg:col-span-2 glass-panel overflow-hidden">
          <div class="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
             <h3 class="font-bold text-slate-800">Détails Paramètriques</h3>
             <span class="text-xs font-mono text-slate-400">ISO-17025 COMPLIANT</span>
          </div>
          <div class="overflow-x-auto">
            <table class="min-w-full text-left">
              <thead>
                <tr class="bg-slate-50/50 border-b border-slate-100">
                  <th class="px-6 py-3 text-xs font-bold text-slate-400 uppercase tracking-wider">Paramètre</th>
                  <th class="px-6 py-3 text-xs font-bold text-slate-400 uppercase tracking-wider">Mesuré</th>
                  <th class="px-6 py-3 text-xs font-bold text-slate-400 uppercase tracking-wider">Seuil (Max)</th>
                  <th class="px-6 py-3 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">Statut</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-50">
                ${rows}
              </tbody>
            </table>
          </div>
        </div>

        <!-- AI Recommendations -->
        <div class="glass-panel p-6 h-fit">
           <h3 class="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
              <span class="p-1 bg-blue-100 rounded text-blue-600">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </span>
              Protocole Suggéré
           </h3>
           <div class="space-y-4">
             ${decision.status === 'REJECTED' ? `
               <div class="flex gap-4">
                 <div class="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-sm shrink-0">1</div>
                 <div>
                   <p class="font-bold text-slate-800 text-sm">Blocage Lot</p>
                   <p class="text-xs text-slate-500 mt-0.5">Mise en quarantaine immédiate du lot physique.</p>
                 </div>
               </div>
               <div class="flex gap-4">
                 <div class="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-sm shrink-0">2</div>
                 <div>
                   <p class="font-bold text-slate-800 text-sm">Notification Fournisseur</p>
                   <p class="text-xs text-slate-500 mt-0.5">Générer le rapport de non-conformité.</p>
                 </div>
               </div>
             ` : decision.status === 'CONDITIONAL' ? `
               <div class="flex gap-4">
                 <div class="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-sm shrink-0">1</div>
                 <div>
                   <p class="font-bold text-slate-800 text-sm">Contre-Analyse</p>
                   <p class="text-xs text-slate-500 mt-0.5">Effectuer un second prélèvement.</p>
                 </div>
               </div>
               <div class="flex gap-4">
                 <div class="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-sm shrink-0">2</div>
                 <div>
                   <p class="font-bold text-slate-800 text-sm">Dérogation</p>
                   <p class="text-xs text-slate-500 mt-0.5">Possible pour produits cuits.</p>
                 </div>
               </div>
             ` : `
               <div class="flex gap-4">
                 <div class="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-sm shrink-0">1</div>
                 <div>
                   <p class="font-bold text-slate-800 text-sm">Libération</p>
                   <p class="text-xs text-slate-500 mt-0.5">Lot validé pour production.</p>
                 </div>
               </div>
               <div class="flex gap-4">
                 <div class="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-sm shrink-0">2</div>
                 <div>
                   <p class="font-bold text-slate-800 text-sm">Archivage</p>
                   <p class="text-xs text-slate-500 mt-0.5">Sauvegarde automatique.</p>
                 </div>
               </div>
             `}
           </div>
           
           <div class="mt-8 pt-6 border-t border-slate-100">
             <button class="w-full py-2 border border-slate-200 rounded-lg text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-colors">
               Voir le log complet
             </button>
           </div>
        </div>
      </div>
    </div>
  `;
}
