import { useState } from 'react';
import { Plus, Search, Edit2, Trash2, X, FolderPlus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function AdminSermons() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSeriesModalOpen, setIsSeriesModalOpen] = useState(false);
  
  const [seriesList, setSeriesList] = useState([
    "Fondements", 
    "Mission", 
    "Vie Victorieuse"
  ]);

  const [newSeriesName, setNewSeriesName] = useState("");

  const handleAddSeries = (e: React.FormEvent) => {
    e.preventDefault();
    if (newSeriesName.trim() && !seriesList.includes(newSeriesName.trim())) {
      setSeriesList([...seriesList, newSeriesName.trim()]);
      setNewSeriesName("");
      setIsSeriesModalOpen(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-stone-900">Enseignements</h1>
          <p className="text-stone-500 mt-1 font-light">Gérez les prédications et séries d'enseignements.</p>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => setIsSeriesModalOpen(true)}
            className="flex items-center gap-2 bg-white border border-stone-200 text-stone-700 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-stone-50 transition-all shadow-sm"
          >
            <FolderPlus className="w-4 h-4" />
            Ajouter une série
          </button>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-stone-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-stone-800 transition-all hover:shadow-lg"
          >
            <Plus className="w-4 h-4" />
            Ajouter un message
          </button>
        </div>
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
        <div className="p-4 border-t border-stone-100 flex justify-between items-center text-sm text-stone-500 bg-stone-50/50">
          <span>Affichage de 1 à 3 sur 12 enseignements</span>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-stone-200 rounded-lg hover:bg-stone-100 transition-colors disabled:opacity-50">Précédent</button>
            <button className="px-4 py-2 border border-stone-200 rounded-lg hover:bg-stone-100 transition-colors">Suivant</button>
          </div>
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
                <h2 className="text-xl font-bold text-stone-900">Ajouter un enseignement</h2>
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
                    <label className="text-sm font-medium text-stone-700">Titre de l'enseignement *</label>
                    <input type="text" className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:border-stone-900 focus:ring-0 text-sm outline-none transition-colors" placeholder="Ex: La Puissance de la Grâce" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-stone-700">Orateur *</label>
                    <input type="text" className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:border-stone-900 focus:ring-0 text-sm outline-none transition-colors" placeholder="Ex: Pasteur Principal" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-stone-700">Date *</label>
                    <input type="date" className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:border-stone-900 focus:ring-0 text-sm outline-none transition-colors" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-stone-700">Heure *</label>
                    <input type="time" className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:border-stone-900 focus:ring-0 text-sm outline-none transition-colors" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-stone-700">Lieu</label>
                    <input type="text" className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:border-stone-900 focus:ring-0 text-sm outline-none transition-colors" placeholder="Ex: Auditorium Principal" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-stone-700">Série</label>
                    <select className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:border-stone-900 focus:ring-0 text-sm outline-none transition-colors bg-white">
                      <option value="">Sélectionner une série...</option>
                      {seriesList.map((series, idx) => (
                        <option key={idx} value={series.toLowerCase().replace(/\s+/g, '-')}>{series}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-stone-700">Lien Vidéo (YouTube, Vimeo...)</label>
                  <input type="url" className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:border-stone-900 focus:ring-0 text-sm outline-none transition-colors" placeholder="https://..." />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-stone-700">Image de couverture (URL)</label>
                  <input type="url" className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:border-stone-900 focus:ring-0 text-sm outline-none transition-colors" placeholder="https://..." />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-stone-700">Description ou Résumé *</label>
                  <textarea rows={4} className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:border-stone-900 focus:ring-0 text-sm outline-none transition-colors resize-none" placeholder="Description de l'enseignement..." required></textarea>
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
                    Enregistrer l'enseignement
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isSeriesModalOpen && (
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
              className="bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden"
            >
              <div className="px-6 py-4 border-b border-stone-100 flex items-center justify-between">
                <h2 className="text-xl font-bold text-stone-900">Ajouter une série</h2>
                <button 
                  onClick={() => setIsSeriesModalOpen(false)}
                  className="p-2 hover:bg-stone-100 rounded-full transition-colors text-stone-400 hover:text-stone-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form className="p-6 space-y-6" onSubmit={handleAddSeries}>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-stone-700">Nom de la série *</label>
                  <input 
                    type="text" 
                    value={newSeriesName}
                    onChange={(e) => setNewSeriesName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:border-stone-900 focus:ring-0 text-sm outline-none transition-colors" 
                    placeholder="Ex: Les fruits de l'Esprit" 
                    required 
                  />
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <button 
                    type="button"
                    onClick={() => setIsSeriesModalOpen(false)}
                    className="px-5 py-2.5 text-sm font-medium text-stone-600 hover:bg-stone-100 rounded-full transition-colors"
                  >
                    Annuler
                  </button>
                  <button 
                    type="submit"
                    className="px-6 py-2.5 text-sm font-medium bg-stone-900 text-white hover:bg-stone-800 rounded-full transition-colors shadow-sm"
                  >
                    Ajouter
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
