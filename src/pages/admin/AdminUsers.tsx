import { Plus, Search, MoreVertical } from 'lucide-react';

export default function AdminUsers() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-stone-900">Utilisateurs</h1>
          <p className="text-stone-500 mt-1 font-light">Gérez les accès et rôles de l'équipe d'administration.</p>
        </div>
        <button className="flex items-center gap-2 bg-stone-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-stone-800 transition-all hover:shadow-lg">
          <Plus className="w-4 h-4" />
          Inviter un membre
        </button>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-stone-100 overflow-hidden">
        <div className="p-5 border-b border-stone-100 flex justify-between items-center">
          <div className="relative w-full max-w-md">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" />
            <input 
              type="text" 
              placeholder="Rechercher un utilisateur..." 
              className="w-full pl-12 pr-4 py-2.5 rounded-xl border border-stone-200 focus:border-stone-900 focus:ring-0 text-sm outline-none bg-stone-50/50 transition-colors"
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-stone-100 text-xs uppercase tracking-widest text-stone-400 bg-stone-50/50">
                <th className="px-6 py-4 font-medium">Nom & Email</th>
                <th className="px-6 py-4 font-medium">Rôle</th>
                <th className="px-6 py-4 font-medium">Dernière connexion</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {[
                { name: 'Admin Principal', email: 'admin@mersa.ci', role: 'ADMIN', lastLogin: 'Il y a 2 heures' },
                { name: 'Équipe Com', email: 'com@mersa.ci', role: 'COMM_TEAM', lastLogin: 'Hier' },
                { name: 'Pasteur Assistant', email: 'pasteur@mersa.ci', role: 'PASTEUR', lastLogin: 'Il y a 3 jours' }
              ].map((user, i) => (
                <tr key={i} className="hover:bg-stone-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-stone-200 flex items-center justify-center text-stone-600 font-bold text-sm">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-medium text-stone-900">{user.name}</div>
                        <div className="text-stone-500 text-sm">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 border border-blue-200/50 rounded-full text-xs font-medium">
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-stone-600 text-sm">
                    {user.lastLogin}
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
