import { ArrowRight, Play, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Cinematic Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-28 pb-12 max-w-[1400px] mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full h-[80vh] min-h-[600px] rounded-[2rem] overflow-hidden shadow-2xl shadow-stone-200"
        >
          <img 
            src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2946&auto=format&fit=crop" 
            alt="Worship" 
            className="absolute inset-0 w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-stone-900/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent" />
          
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 lg:p-24">
            <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-3xl">
              <motion.h1 variants={fadeUp} className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-[1.05] tracking-tight">
                Trouvez la paix.<br />
                <span className="italic font-light text-stone-300">Grandissez ensemble.</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-lg md:text-xl text-stone-300 max-w-xl mb-10 font-light leading-relaxed">
                Une communauté fondée sur l'amour, l'espérance et la vérité. Venez célébrer la vie avec nous, tel que vous êtes.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
                <Link to="/events" className="px-8 py-4 rounded-full bg-white text-stone-900 font-medium hover:bg-stone-100 transition-colors flex items-center justify-center gap-2">
                  Planifier une visite <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/sermons" className="px-8 py-4 rounded-full bg-stone-900/50 backdrop-blur-md border border-white/20 text-white font-medium hover:bg-stone-900/70 transition-colors flex items-center justify-center gap-2">
                  <Play className="h-4 w-4" fill="currentColor" /> Regarder le Culte
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Editorial Intro */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center"
          >
            <div className="md:col-span-5">
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-stone-900 leading-tight">
                Notre foi se vit <br/><span className="italic text-stone-500">au quotidien.</span>
              </h2>
            </div>
            <div className="md:col-span-7 md:pl-12 border-l border-stone-300/50">
              <p className="text-lg md:text-xl text-stone-600 font-light leading-relaxed mb-8">
                La Mission Évangélique pour le Réveil et le Salut des Âmes (M.E.R.S.A) n'est pas qu'un bâtiment, c'est une famille vibrante. Nous croyons en une foi authentique qui transforme nos vies, nos familles et notre ville. Peu importe votre histoire, il y a une place pour vous ici.
              </p>
              <Link to="/about" className="group flex items-center gap-2 text-stone-900 font-medium pb-1 border-b border-stone-900 w-fit hover:text-stone-500 hover:border-stone-500 transition-colors">
                Découvrir notre vision
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Asymmetrical Feature Grid */}
      <section className="py-12 pb-32">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            
            {/* Block 1: Sermons */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-8 shadow-xl shadow-stone-200/50">
                <img src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=2070&auto=format&fit=crop" alt="Bible study" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-[0.16,1,0.3,1]" />
                <div className="absolute inset-0 bg-stone-900/10 transition-colors group-hover:bg-transparent" />
              </div>
              <h3 className="font-serif text-3xl text-stone-900 mb-3 group-hover:text-stone-500 transition-colors">Enseignements</h3>
              <p className="text-stone-600 font-light text-lg mb-6 leading-relaxed max-w-lg">Plongez dans les Écritures pour nourrir votre esprit et trouver des réponses concrètes pour votre vie.</p>
              <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-stone-900 group-hover:text-stone-500 transition-colors">
                Voir la bibliothèque <ArrowRight className="h-4 w-4" />
              </span>
            </motion.div>

            {/* Block 2: Events (offset vertically) */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group cursor-pointer md:mt-32"
            >
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-8 shadow-xl shadow-stone-200/50">
                <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop" alt="Community gathering" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-[0.16,1,0.3,1]" />
                <div className="absolute inset-0 bg-stone-900/10 transition-colors group-hover:bg-transparent" />
              </div>
              <h3 className="font-serif text-3xl text-stone-900 mb-3 group-hover:text-stone-500 transition-colors">Vie d'Église</h3>
              <p className="text-stone-600 font-light text-lg mb-6 leading-relaxed max-w-lg">Rejoignez un groupe de maison, participez à nos événements et tissez des liens authentiques.</p>
              <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-stone-900 group-hover:text-stone-500 transition-colors">
                Voir l'agenda <ArrowRight className="h-4 w-4" />
              </span>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Social Feed Section */}
      <section className="py-24 bg-white border-t border-stone-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8"
          >
            <div className="max-w-2xl">
              <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-stone-500 mb-4">
                <Instagram className="w-4 h-4" /> En direct de l'église
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-stone-900 leading-tight">
                Rejoignez le <span className="italic text-stone-500">mouvement.</span>
              </h2>
            </div>
            <a 
              href="#" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-stone-50 text-stone-900 border border-stone-200 hover:bg-stone-100 transition-colors text-sm font-medium whitespace-nowrap"
            >
              Suivre @mersa.church <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                id: 1,
                img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop",
                type: "video"
              },
              {
                id: 2,
                img: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?q=80&w=2070&auto=format&fit=crop",
                type: "image"
              },
              {
                id: 3,
                img: "https://images.unsplash.com/photo-1510511233900-1982d92bd853?q=80&w=2070&auto=format&fit=crop",
                type: "image"
              },
              {
                id: 4,
                img: "https://images.unsplash.com/photo-1447014421976-7fec21d26d86?q=80&w=2070&auto=format&fit=crop",
                type: "video"
              }
            ].map((post, i) => (
              <motion.a
                key={post.id}
                href="#"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative aspect-square rounded-3xl overflow-hidden bg-stone-100 block"
              >
                <img 
                  src={post.img} 
                  alt={`Post ${post.id}`} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-colors duration-300" />
                
                {/* Icon overlays */}
                <div className="absolute top-4 right-4">
                  {post.type === 'video' ? (
                    <div className="w-8 h-8 rounded-full bg-stone-900/50 backdrop-blur-md flex items-center justify-center text-white">
                      <Play className="w-3.5 h-3.5 ml-0.5" fill="currentColor" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-stone-900/50 backdrop-blur-md flex items-center justify-center text-white">
                      <Instagram className="w-4 h-4" />
                    </div>
                  )}
                </div>

                {/* Hover overlay text */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-white">
                    <p className="text-sm font-medium truncate">Voir sur Instagram</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
