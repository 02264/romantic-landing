import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function RomanticLanding() {
  const [hearts, setHearts] = useState([]);
  const [floatingTexts, setFloatingTexts] = useState([]);
  const [stars, setStars] = useState([]);

  // Generate random hearts over time
  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prev) => [
        ...prev,
        {
          id: Date.now(),
          x: Math.random() * window.innerWidth,
          size: Math.random() * 30 + 20,
          duration: Math.random() * 5 + 5,
          rotate: Math.random() * 360,
        },
      ]);
    }, 400);
    return () => clearInterval(interval);
  }, []);

  // Generate stars in background
  useEffect(() => {
    for (let i = 0; i < 80; i++) {
      setStars((prev) => [
        ...prev,
        {
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 2 + 1,
          twinkle: Math.random() * 2 + 1,
        },
      ]);
    }
  }, []);

  // Generate floating "I ❤️ You" texts
  useEffect(() => {
    const interval = setInterval(() => {
      setFloatingTexts((prev) => [
        ...prev,
        {
          id: Date.now(),
          x: Math.random() * window.innerWidth,
          text: ["I ❤️ You", "Forever", "My Love"][Math.floor(Math.random() * 3)],
          duration: Math.random() * 4 + 4,
        },
      ]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-x-hidden bg-gradient-to-br from-pink-200 via-purple-300 to-pink-300">
      {/* Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          initial={{ opacity: 0.2 }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: star.twinkle, repeat: Infinity }}
          className="absolute bg-white rounded-full"
          style={{
            width: star.size,
            height: star.size,
            left: star.x,
            top: star.y,
          }}
        />
      ))}

      {/* Floating Hearts */}
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: 0, opacity: 1, rotate: 0 }}
          animate={{ y: -window.innerHeight - 50, opacity: 0, rotate: heart.rotate }}
          transition={{ duration: heart.duration, ease: "easeOut" }}
          className="absolute text-pink-500"
          style={{
            left: heart.x,
            fontSize: heart.size,
          }}
        >
          ❤️
        </motion.div>
      ))}

      {/* Floating texts */}
      {floatingTexts.map((textItem) => (
        <motion.div
          key={textItem.id}
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: -window.innerHeight / 1.5, opacity: 0 }}
          transition={{ duration: textItem.duration, ease: "easeOut" }}
          className="absolute text-purple-700 font-bold text-xl"
          style={{
            left: textItem.x,
          }}
        >
          {textItem.text}
        </motion.div>
      ))}

      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center h-screen text-center px-4">
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-6xl md:text-7xl font-extrabold text-pink-600 drop-shadow-lg mb-4"
        >
          Mahdi ❤️ Emilisa
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 2 }}
          className="text-2xl md:text-3xl text-purple-700 max-w-xl"
        >
          Every moment with you is magical. You light up my world, and my heart beats for you. 💖
        </motion.p>
      </section>

      {/* OUR STORY SECTION */}
      <section className="flex flex-col items-center justify-center py-24 px-6 bg-gradient-to-br from-pink-100 via-purple-200 to-pink-200">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold text-pink-600 mb-12"
        >
          Our Story
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-10 max-w-5xl">
          {[
            { title: "First Meeting", desc: "The moment our paths crossed." },
            { title: "First Date", desc: "A night full of laughter and joy." },
            { title: "First I Love You", desc: "Our hearts connected forever." },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: idx * 0.5 }}
              className="bg-white/30 backdrop-blur-lg rounded-2xl p-6 shadow-lg flex-1 text-center"
            >
              <h3 className="text-2xl font-bold text-pink-600 mb-2">{item.title}</h3>
              <p className="text-purple-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* LOVE MESSAGES SECTION */}
      <section className="flex flex-col items-center justify-center py-24 px-6 bg-gradient-to-br from-purple-100 via-pink-100 to-purple-200">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold text-pink-600 mb-12"
        >
          Love Notes
        </motion.h2>
        {[
          "You make every day brighter.",
          "Forever in my heart.",
          "I love you more than words can say.",
        ].map((quote, idx) => (
          <motion.p
            key={idx}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: idx * 0.5 }}
            className="text-xl md:text-2xl text-purple-700 mb-6 max-w-2xl text-center"
          >
            {quote} 💖
          </motion.p>
        ))}
      </section>

      {/* CLOSING / FOREVER SECTION */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-4 bg-gradient-to-br from-pink-300 via-purple-300 to-pink-200">
        <motion.h2
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2 }}
          className="text-5xl md:text-6xl font-extrabold text-pink-600 mb-6 drop-shadow-lg"
        >
          Forever and Always
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="text-2xl md:text-3xl text-purple-700 max-w-xl"
        >
          Emilisa ❤️ Mahdi
        </motion.p>
      </section>

      {/* Click to spawn hearts */}
      <div
        className="absolute inset-0 cursor-pointer"
        onClick={(e) => {
          const newHeart = {
            id: Date.now(),
            x: e.clientX,
            size: Math.random() * 30 + 20,
            duration: Math.random() * 3 + 3,
            rotate: Math.random() * 360,
          };
          setHearts((prev) => [...prev, newHeart]);
        }}
      />
    </div>
  );
}
