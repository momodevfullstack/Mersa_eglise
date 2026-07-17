import { useState } from 'react';
import { Plus, Search, Calendar, X, Edit2, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function AdminEvents() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-stone-900">Événements</h1>
          <p className="text-stone-500 mt-1 font-light">Gérez le calendrier et les activités de l'église.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-stone-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-stone-800 transition-all hover:shadow-lg"
        >
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
                    <div className="flex items-center justify-end gap-2">
                      <button className="text-stone-400 hover:text-blue-600 p-2 rounded-lg hover:bg-blue-50 transition-colors" title="Modifier">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button className="text-stone-400 hover:text-red-600 p-2 rounded-lg hover:bg-red-50 transition-colors" title="Supprimer">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-stone-900/50 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              <div className="sticky top-0 bg-white px-6 py-4 border-b border-stone-100 flex items-center justify-between z-10">
                <h2 className="text-xl font-bold text-stone-900">Créer un événement</h2>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-stone-100 rounded-full transition-colors text-stone-400 hover:text-stone-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form className="p-6 space-y-6" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-stone-700">Titre de l'événement *</label>
                    <input type="text" className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:border-stone-900 focus:ring-0 text-sm outline-none transition-colors" placeholder="Ex: Soirée de Louange" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-stone-700">Catégorie *</label>
                    <select className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:border-stone-900 focus:ring-0 text-sm outline-none transition-colors bg-white" required>
                      <option value="">Sélectionner une catégorie...</option>
                      <option value="culte">Culte</option>
                      <option value="priere">Prière</option>
                      <option value="jeunesse">Jeunesse</option>
                      <option value="special">Événement Spécial</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-stone-700">Date *</label>
                    <input type="date" className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:border-stone-900 focus:ring-0 text-sm outline-none transition-colors" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-stone-700">Heure *</label>
                    <input type="time" className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:border-stone-900 focus:ring-0 text-sm outline-none transition-colors" required />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-medium text-stone-700">Lieu *</label>
                    <input type="text" className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:border-stone-900 focus:ring-0 text-sm outline-none transition-colors" placeholder="Ex: Auditorium Principal" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-stone-700">Image de couverture (URL)</label>
                  <input type="url" className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:border-stone-900 focus:ring-0 text-sm outline-none transition-colors" placeholder="https://..." />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-stone-700">Description *</label>
                  <textarea rows={4} className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:border-stone-900 focus:ring-0 text-sm outline-none transition-colors resize-none" placeholder="Détails de l'événement..." required></textarea>
                </div>

                <div className="pt-6 border-t border-stone-100 flex justify-end gap-3">
                  <button 
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-5 py-2.5 text-sm font-medium text-stone-600 hover:bg-stone-100 rounded-full transition-colors"
                  >
                    Annuler
                  </button>
                  <button 
                    type="submit"
                    className="px-6 py-2.5 text-sm font-medium bg-stone-900 text-white hover:bg-stone-800 rounded-full transition-colors shadow-sm"
                  >
                    Créer l'événement
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
