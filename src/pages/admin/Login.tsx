import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation de connexion pour le frontend
    navigate('/admin');
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center"
        >
           <div className="flex flex-col items-center group cursor-pointer" onClick={() => navigate('/')}>
              <span className="font-serif font-bold text-4xl tracking-tight text-stone-900">
                M.E.R.S.A
              </span>
              <span className="text-xs uppercase tracking-widest text-stone-500 font-medium mt-2">
                Espace Membre
              </span>
            </div>
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mt-10 text-center text-2xl font-serif leading-9 tracking-tight text-stone-900"
        >
          Connectez-vous à votre compte
        </motion.h2>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]"
      >
        <div className="bg-white px-6 py-12 shadow-2xl shadow-stone-200/50 rounded-3xl sm:px-12 border border-stone-100">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-stone-900">
                Adresse email
              </label>
              <div className="mt-2 relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-stone-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-xl border-0 py-3 pl-12 text-stone-900 shadow-sm ring-1 ring-inset ring-stone-200 placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-stone-900 sm:text-sm sm:leading-6 bg-stone-50/50"
                  placeholder="admin@mersa.ci"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-stone-900">
                Mot de passe
              </label>
              <div className="mt-2 relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-stone-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-xl border-0 py-3 pl-12 text-stone-900 shadow-sm ring-1 ring-inset ring-stone-200 placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-stone-900 sm:text-sm sm:leading-6 bg-stone-50/50"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-stone-300 text-stone-900 focus:ring-stone-900"
                />
                <label htmlFor="remember-me" className="ml-3 block text-sm leading-6 text-stone-600">
                  Se souvenir de moi
                </label>
              </div>

              <div className="text-sm leading-6">
                <a href="#" className="font-medium text-stone-900 hover:text-stone-600 transition-colors">
                  Mot de passe oublié ?
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="flex w-full justify-center rounded-xl bg-stone-900 px-3 py-3.5 text-sm font-medium text-white shadow-sm hover:bg-stone-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900 transition-all hover:shadow-lg"
              >
                Se connecter
              </button>
            </div>
          </form>
        </div>
        
        <p className="text-center text-sm text-stone-500 mt-8">
          Retour au <a href="/" className="text-stone-900 font-medium hover:underline">portail public</a>
        </p>
      </motion.div>
    </div>
  );
}
