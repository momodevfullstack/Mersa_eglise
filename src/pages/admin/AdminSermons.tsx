import { Plus, Search, MoreVertical } from 'lucide-react';

export default function AdminSermons() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-stone-900">Enseignements</h1>
          <p className="text-stone-500 mt-1 font-light">Gérez les prédications et séries d'enseignements.</p>
        </div>
        <button className="flex items-center gap-2 bg-stone-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-stone-800 transition-all hover:shadow-lg">
          <Plus className="w-4 h-4" />
          Ajouter un message
        </button>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-stone-100 overflow-hidden">
        <div className="p-5 border-b border-stone-100 flex justify-between items-center">
          <div className="relative w-full max-w-md">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" />
            <input 
              type="text" 
              placeholder="Rechercher un enseignement..." 
              className="w-full pl-12 pr-4 py-2.5 rounded-xl border border-stone-200 focus:border-stone-900 focus:ring-0 text-sm outline-none bg-stone-50/50 transition-colors"
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-stone-100 text-xs uppercase tracking-widest text-stone-400 bg-stone-50/50">
                <th className="px-6 py-4 font-medium">Titre</th>
                <th className="px-6 py-4 font-medium">Orateur</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Série</th>
                <th className="px-6 py-4 font-medium">Statut</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {[
                { title: 'La Puissance de la Grâce', preacher: 'Pasteur Principal', date: '12 Mai 2024', series: 'Fondements', status: 'Publié' },
                { title: 'Marcher par l\'Esprit', preacher: 'Pasteur Adjoint', date: '05 Mai 2024', series: 'Fondements', status: 'Brouillon' },
                { title: 'L\'Appel de Matthieu 28', preacher: 'Pasteur Principal', date: '28 Avr 2024', series: 'Mission', status: 'Publié' }
              ].map((sermon, i) => (
                <tr key={i} className="hover:bg-stone-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-medium text-stone-900">{sermon.title}</div>
                  </td>
                  <td className="px-6 py-4 text-stone-600 text-sm">{sermon.preacher}</td>
                  <td className="px-6 py-4 text-stone-600 text-sm">{sermon.date}</td>
                  <td className="px-6 py-4">
                    <span className="inline-block px-3 py-1 bg-stone-100 text-stone-600 rounded-full text-xs font-medium">
                      {sermon.series}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                      sermon.status === 'Publié' ? 'bg-green-50 text-green-700 border border-green-200/50' : 'bg-amber-50 text-amber-700 border border-amber-200/50'
                    }`}>
                      {sermon.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-stone-400 hover:text-stone-900 p-2 rounded-lg hover:bg-stone-100 transition-colors">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-stone-100 flex justify-between items-center text-sm text-stone-500 bg-stone-50/50">
          <span>Affichage de 1 à 3 sur 12 enseignements</span>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-stone-200 rounded-lg hover:bg-stone-100 transition-colors disabled:opacity-50">Précédent</button>
            <button className="px-4 py-2 border border-stone-200 rounded-lg hover:bg-stone-100 transition-colors">Suivant</button>
          </div>
        </div>
      </div>
    </div>
  );
}
