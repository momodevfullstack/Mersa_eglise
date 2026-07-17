import { Plus, Search, MoreVertical, Calendar } from 'lucide-react';

export default function AdminEvents() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-stone-900">Événements</h1>
          <p className="text-stone-500 mt-1 font-light">Gérez le calendrier et les activités de l'église.</p>
        </div>
        <button className="flex items-center gap-2 bg-stone-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-stone-800 transition-all hover:shadow-lg">
          <Plus className="w-4 h-4" />
          Créer un événement
        </button>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-stone-100 overflow-hidden">
        <div className="p-5 border-b border-stone-100 flex justify-between items-center">
          <div className="relative w-full max-w-md">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" />
            <input 
              type="text" 
              placeholder="Rechercher un événement..." 
              className="w-full pl-12 pr-4 py-2.5 rounded-xl border border-stone-200 focus:border-stone-900 focus:ring-0 text-sm outline-none bg-stone-50/50 transition-colors"
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-stone-100 text-xs uppercase tracking-widest text-stone-400 bg-stone-50/50">
                <th className="px-6 py-4 font-medium">Événement</th>
                <th className="px-6 py-4 font-medium">Catégorie</th>
                <th className="px-6 py-4 font-medium">Date & Heure</th>
                <th className="px-6 py-4 font-medium">Lieu</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {[
                { title: 'Culte de Célébration', category: 'Culte', date: '19 Mai 2024', time: '10:00', location: 'Auditorium Principal' },
                { title: 'Soirée de Prière', category: 'Prière', date: '24 Mai 2024', time: '19:30', location: 'Salle de Prière' },
                { title: 'Rencontre des Jeunes', category: 'Jeunesse', date: '25 Mai 2024', time: '16:00', location: 'Espace Jeunes' }
              ].map((evt, i) => (
                <tr key={i} className="hover:bg-stone-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-medium text-stone-900">{evt.title}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-block px-3 py-1 bg-stone-100 text-stone-600 rounded-full text-xs font-medium">
                      {evt.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-sm text-stone-600">
                      <Calendar className="w-4 h-4 text-stone-400" />
                      <span>{evt.date} à {evt.time}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-stone-600 text-sm">
                    {evt.location}
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
      </div>
    </div>
  );
}
