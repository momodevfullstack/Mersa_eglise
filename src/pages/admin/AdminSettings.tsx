export default function AdminSettings() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-stone-900">Paramètres</h1>
        <p className="text-stone-500 mt-1 font-light">Configuration de l'église et préférences du système.</p>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-stone-100 overflow-hidden">
        <div className="p-6 md:p-8 space-y-8">
          
          <div>
            <h2 className="text-lg font-medium text-stone-900 mb-4">Informations Générales</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">Nom de l'église</label>
                <input 
                  type="text" 
                  defaultValue="M.E.R.S.A" 
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:border-stone-900 focus:ring-0 text-sm outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">Email de contact</label>
                <input 
                  type="email" 
                  defaultValue="contact@mersa.ci" 
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:border-stone-900 focus:ring-0 text-sm outline-none transition-colors"
                />
              </div>
            </div>
          </div>

          <hr className="border-stone-100" />

          <div>
            <h2 className="text-lg font-medium text-stone-900 mb-4">Réseaux Sociaux</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">URL Facebook</label>
                <input 
                  type="url" 
                  placeholder="https://facebook.com/..." 
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:border-stone-900 focus:ring-0 text-sm outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">URL YouTube</label>
                <input 
                  type="url" 
                  placeholder="https://youtube.com/..." 
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:border-stone-900 focus:ring-0 text-sm outline-none transition-colors"
                />
              </div>
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            <button className="bg-stone-900 text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-stone-800 transition-all hover:shadow-lg">
              Enregistrer les modifications
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
