import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-[#FDFBF7]">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">
          <div className="lg:col-span-7">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-5xl md:text-7xl lg:text-8xl text-stone-900 leading-[1.1] tracking-tight mb-8"
            >
              Notre Vision.<br />
              <span className="italic text-stone-400">Notre Appel.</span>
            </motion.h1>
          </div>
          <div className="lg:col-span-5 lg:pb-4">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-stone-600 font-light text-xl leading-relaxed"
            >
              La Mission Évangélique pour le Réveil et le Salut des Âmes (M.E.R.S.A) est née d'un fardeau profond pour la transformation des cœurs.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Large Image Break */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto w-full mb-32">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[21/9] rounded-[2rem] overflow-hidden"
        >
          <img 
            src="https://images.unsplash.com/photo-1444065381814-865dc9da92c0?q=80&w=2946&auto=format&fit=crop" 
            alt="Person with hands raised in worship" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* Matthieu 28:19 Highlight */}
      <section className="py-24 bg-stone-900 text-stone-100">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="block text-xs uppercase tracking-[0.3em] text-stone-500 font-medium mb-12">Le Fondement</span>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.3] text-white mb-12">
            "Allez, faites de toutes les nations des disciples, les baptisant au nom du Père, du Fils et du Saint-Esprit."
          </h2>
          <span className="font-serif italic text-xl text-stone-400">— Matthieu 28:19</span>
        </div>
      </section>

      {/* Core Values / Text Layout */}
      <section className="py-32">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32">
            <div>
              <h3 className="font-serif text-3xl text-stone-900 mb-6">Le Réveil</h3>
              <p className="text-stone-600 font-light text-lg leading-relaxed mb-8">
                Nous croyons que l'Église n'est pas appelée à la stagnation, mais à un réveil spirituel constant. Ce réveil commence individuellement, dans l'intimité de la prière, et se propage collectivement.
              </p>
              <p className="text-stone-600 font-light text-lg leading-relaxed">
                Notre mission est d'équiper chaque croyant pour qu'il marche dans la plénitude de l'Esprit, manifestant l'amour de Christ dans son quotidien.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-3xl text-stone-900 mb-6">Le Salut des Âmes</h3>
              <p className="text-stone-600 font-light text-lg leading-relaxed mb-8">
                Le cœur de notre nom, M.E.R.S.A, porte l'urgence du salut. Conformément à l'ordre suprême de Matthieu 28, nous sommes intentionnels dans notre évangélisation.
              </p>
              <p className="text-stone-600 font-light text-lg leading-relaxed">
                Que ce soit à travers nos cultes, nos actions sociales, ou nos missions internationales, notre objectif ultime est de réconcilier les hommes avec Dieu.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
