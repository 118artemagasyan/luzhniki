export default function LuzhnikiBeach() {
  return (
    <div className="flex items-center justify-center h-screen text-3xl font-bold">
      import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function LuzhnikiBeach() {
  return (
    <motion.div initial="hidden" animate="show" variants={{
      hidden: {},
      show: { transition: { staggerChildren: 0.15 } },
    }} className="flex flex-col scroll-smooth">

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <motion.video initial={{ scale: 1.4, x: -50 }} animate={{ scale: 1, x: 0 }} transition={{ duration: 2 }}
          autoPlay loop muted className="absolute w-full h-full object-cover" src="/video/beach.mp4"></motion.video>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white bg-black/30">
          <motion.h1 initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
            className="text-5xl font-bold mb-6">Открой лето в Лужниках</motion.h1>
          <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
            <Button className="text-lg px-8 py-4 hover:scale-110 transition-transform duration-500">Узнать больше</Button>
          </motion.div>
        </div>
      </section>

      {/* О Пляже */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        {"pool lounge".split(" ").map((img, idx) => (
          <motion.div key={idx} variants={{
            hidden: { opacity: 0, y: 80, rotate: -5 },
            show: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.8 } },
          }} className="flex flex-col items-center hover:scale-105 hover:rotate-1 transition-all duration-500">
            <img src={`/images/${img}.jpg`} alt={img} className="rounded-2xl mb-4" />
            <p>{img === "pool" ? "50-м бассейн на открытом воздухе" : "Шезлонги, бары, летняя атмосфера"}</p>
          </motion.div>
        ))}
      </section>

      {/* Атмосфера */}
      <section className="p-8 overflow-x-auto whitespace-nowrap animate-pulse">
        <motion.div initial={{ x: 0 }} animate={{ x: -50 }} transition={{ repeat: Infinity, repeatType: "mirror", duration: 10 }}
          className="inline-flex space-x-4">
          {['relax', 'swim', 'enjoy'].map((item, idx) => (
            <motion.div key={idx} variants={{
              hidden: { opacity: 0, scale: 0.8 },
              show: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
            }} className="min-w-[300px] hover:scale-105 transition-transform duration-500">
              <img src={`/images/${item}.jpg`} alt={item} className="rounded-2xl mb-2" />
              <p className="text-center capitalize">{item === "relax" ? "Расслабься" : item === "swim" ? "Плавай" : "Наслаждайся летом"}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Что есть на пляже */}
      <section className="grid grid-cols-2 md:grid-cols-3 gap-6 p-8">
        {["Бассейн", "Детская зона", "Школа плавания", "Бары и кафе", "Шезлонги", "Спортивные тренировки"].map((feature, idx) => (
          <motion.div key={idx} variants={{
            hidden: { opacity: 0, scale: 0.7, rotate: -3 },
            show: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.8 } },
          }}>
            <Card className="flex flex-col items-center p-4 hover:scale-105 hover:rotate-1 hover:shadow-2xl hover:brightness-110 transition-all duration-500">
              <CardContent className="text-center">
                <div className="text-4xl mb-2">🏖️</div>
                <p>{feature}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      {/* Как добраться */}
      <section className="p-8">
        <motion.div variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { duration: 1.2 } },
        }} className="rounded-2xl overflow-hidden">
          <iframe src="https://www.google.com/maps/embed?" width="100%" height="400" loading="lazy" className="rounded-2xl"></iframe>
        </motion.div>
        <div className="text-center mt-4">
          <p>5 минут от метро \"Спортивная\"</p>
          <p>Парковка на территории</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-col items-center p-8 text-gray-600">
        <motion.div variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { duration: 1 } },
        }} className="flex space-x-4 mb-4">
          <a href="#" className="hover:underline">Instagram</a>
          <a href="#" className="hover:underline">VK</a>
          <a href="#" className="hover:underline">Telegram</a>
        </motion.div>
        <p>Часы работы: 08:00 - 22:00</p>
        <a href="#" className="underline mt-2">Правила посещения</a>
        <motion.div variants={{
          hidden: { opacity: 0, y: 50 },
          show: { opacity: 1, y: 0, transition: { duration: 1 } },
        }} className="mt-4">
          <Button className="hover:scale-110 transition-transform duration-500">Забронировать визит</Button>
        </motion.div>
      </footer>

    </motion.div>
  );
}
    </div>
  );
}