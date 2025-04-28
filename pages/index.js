"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.15 } },
      }}
      className="flex flex-col scroll-smooth"
    >
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover"
          src="/video/beach.mp4"
        ></video>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white bg-black/40">
          <h1 className="text-5xl font-bold mb-6">Открой лето в Лужниках</h1>
          <button className="text-lg px-8 py-4 bg-white text-black rounded-xl hover:scale-110 transition-transform">
            Узнать больше
          </button>
        </div>
      </section>

      {/* О Пляже */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        {["pool", "lounge"].map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center hover:scale-105 transition-transform"
          >
            <img
              src={`/images/${img}.jpg`}
              alt={img}
              className="rounded-2xl mb-4"
            />
            <p className="text-center text-xl">
              {img === "pool"
                ? "50-метровый бассейн на открытом воздухе"
                : "Шезлонги, бары, летняя атмосфера"}
            </p>
          </motion.div>
        ))}
      </section>

      {/* Атмосфера */}
      <section className="p-8 overflow-x-auto whitespace-nowrap">
        <div className="inline-flex space-x-4">
          {["relax", "swim", "enjoy"].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="min-w-[300px] hover:scale-105 transition-transform"
            >
              <img
                src={`/images/${item}.jpg`}
                alt={item}
                className="rounded-2xl mb-2"
              />
              <p className="text-center capitalize text-lg">
                {item === "relax"
                  ? "Расслабься"
                  : item === "swim"
                  ? "Плавай"
                  : "Наслаждайся летом"}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Что есть на пляже */}
      <section className="grid grid-cols-2 md:grid-cols-3 gap-6 p-8">
        {[
          "Бассейн",
          "Детская зона",
          "Школа плавания",
          "Бары и кафе",
          "Шезлонги",
          "Спортивные тренировки",
        ].map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition"
          >
            <div className="text-4xl mb-2">🏖️</div>
            <p>{feature}</p>
          </motion.div>
        ))}
      </section>

      {/* Как добраться */}
      <section className="p-8">
        <div className="rounded-2xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.5959879102797!2d37.55395651592815!3d55.71658698054465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab398efcb118b%3A0x42937e2b2fc90d92!2z0JvQtdC90YLRgCDQoNC10YHQv9GD0LTQsNGPINGD0LsuLCAxLzEsINCc0L7RgdGC0YDQsNC00LAgMTE5MTI1!5e0!3m2!1sru!2sru!4v1685721732675!5m2!1sru!2sru"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            className="rounded-2xl"
          ></iframe>
        </div>
        <div className="text-center mt-4 text-lg">
          <p>5 минут от метро "Спортивная"</p>
          <p>Парковка на территории</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-col items-center p-8 text-gray-600">
        <div className="flex space-x-4 mb-4">
          <a href="#" className="hover:underline">
            Instagram
          </a>
          <a href="#" className="hover:underline">
            VK
          </a>
          <a href="#" className="hover:underline">
            Telegram
          </a>
        </div>
        <p>Часы работы: 08:00 - 22:00</p>
        <a href="#" className="underline mt-2">
          Правила посещения
        </a>
        <div className="mt-4">
          <button className="px-6 py-3 bg-black text-white rounded-xl hover:scale-110 transition">
            Забронировать визит
          </button>
        </div>
      </footer>
    </motion.div>
  );
}