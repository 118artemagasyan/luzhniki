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
      <h1 className="text-5xl font-bold p-10 text-center">Пляж Лужники</h1>
      <p className="text-xl text-center">Добро пожаловать!</p>
    </motion.div>
  );
}