import { useEffect, useState } from "react";

export default function RomanticLanding() {
  const [hearts, setHearts] = useState([]);
  const [floatingTexts, setFloatingTexts] = useState([]);

  // Story slideshow
  const story = [
    { text: "Hey ❤️", img: "/images/photo_1.jpg" },
    { text: "I have something to tell you...", img: "/images/photo_2.jpg" },
    { text: "You make my days brighter 🌸", img: "/images/photo_3.jpg" },
    { text: "And my nights happier 🌙", img: "/images/photo_4.jpg" },
    { text: "I just want to say...", img: "/images/photo_5.jpg" },
    { text: "I love you 💕", img: "/images/photo_6.jpg" },
  ];
  const [step, setStep] = useState(0);
  const nextStep = () => {
    if (step < story.length - 1) setStep(step + 1);
  };

  // Generate floating hearts
  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prev) => {
        const newHeart = {
          id: Date.now(),
          x: Math.random() * window.innerWidth,
          size: Math.random() * 24 + 16,
        };
        const updated = [...prev, newHeart];
        // keep only last 40 hearts
        return updated.slice(-40);
      });
    }, 800);
    return () => clearInterval(interval);
  }, []);

  // Floating "I ❤️ You" texts
  useEffect(() => {
    const interval = setInterval(() => {
      setFloatingTexts((prev) => {
        const newText = {
          id: Date.now(),
          x: Math.random() * window.innerWidth,
          text: ["I ❤️ You", "Forever", "My Love"][
            Math.floor(Math.random() * 3)
          ],
        };
        const updated = [...prev, newText];
        return updated.slice(-10); // max 10 texts
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-x-hidden bg-gradient-to-br from-pink-200 via-purple-300 to-pink-300">
      {/* Stars (static, twinkle with CSS) */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 70 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-twinkle"
            style={{
              width: Math.random() * 2 + 1,
              height: Math.random() * 2 + 1,
              left: Math.random() * window.innerWidth,
              top: Math.random() * window.innerHeight,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Hearts */}
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-float text-pink-500"
          style={{
            left: heart.x,
            fontSize: heart.size,
            animationDuration: `${Math.random() * 5 + 4}s`,
          }}
        >
          ❤️
        </div>
      ))}

      {/* Floating texts */}
      {floatingTexts.map((textItem) => (
        <div
          key={textItem.id}
          className="absolute text-purple-700 font-bold text-xl animate-float"
          style={{
            left: textItem.x,
            animationDuration: `${Math.random() * 6 + 4}s`,
          }}
        >
          {textItem.text}
        </div>
      ))}

      {/* STORY SLIDESHOW */}
      {/* STORY SLIDESHOW */}
<section className="relative flex flex-col items-center justify-center h-screen text-center px-4">
  <div className="max-w-lg w-full p-6 bg-white rounded-2xl shadow-xl flex flex-col items-center justify-center">
    <img
      src={story[step].img}
      alt="cute"
      className="w-48 h-48 object-contain mb-6 mx-auto rounded-xl shadow-md"
    />
    <h1 className="text-2xl font-bold text-pink-600 mb-4 text-center">
      {story[step].text}
    </h1>

    {step < story.length - 1 ? (
      <button
        onClick={nextStep}
        className="mt-6 px-6 py-3 bg-pink-500 text-white rounded-full shadow-lg hover:bg-pink-600 transition"
      >
        Next 💌
      </button>
    ) : (
      <p className="mt-6 text-lg font-semibold text-pink-700 animate-bounce text-center">
        💖 The End 💖
      </p>
    )}
  </div>
</section>


      {/* OUR STORY SECTION */}
      <section className="flex flex-col items-center justify-center py-24 px-6 bg-gradient-to-br from-pink-100 via-purple-200 to-pink-200">
        <h2 className="text-4xl md:text-5xl font-bold text-pink-600 mb-12">
          Our Story
        </h2>
        <div className="flex flex-col md:flex-row gap-10 max-w-5xl">
          {[
            { title: "First Meeting", desc: "The moment our paths crossed." },
            { title: "First Date", desc: "A night full of laughter and joy." },
            { title: "First I Love You", desc: "Our hearts connected forever." },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white/30 backdrop-blur-lg rounded-2xl p-6 shadow-lg flex-1 text-center"
            >
              <h3 className="text-2xl font-bold text-pink-600 mb-2">
                {item.title}
              </h3>
              <p className="text-purple-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LOVE MESSAGES */}
      <section className="flex flex-col items-center justify-center py-24 px-6 bg-gradient-to-br from-purple-100 via-pink-100 to-purple-200">
        <h2 className="text-4xl md:text-5xl font-bold text-pink-600 mb-12">
          Love Notes
        </h2>
        {[
          "You make every day brighter.",
          "Forever in my heart.",
          "I love you more than words can say.",
        ].map((quote, idx) => (
          <p
            key={idx}
            className="text-xl md:text-2xl text-purple-700 mb-6 max-w-2xl text-center"
          >
            {quote} 💖
          </p>
        ))}
      </section>

      {/* FOREVER SECTION */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-4 bg-gradient-to-br from-pink-300 via-purple-300 to-pink-200">
        <h2 className="text-5xl md:text-6xl font-extrabold text-pink-600 mb-6 drop-shadow-lg">
          Forever and Always
        </h2>
        <p className="text-2xl md:text-3xl text-purple-700 max-w-xl">
          Emilisa ❤️ Mahdi
        </p>

        <button
          className="mt-8 px-6 py-3 bg-pink-600 text-white rounded-full shadow-lg hover:bg-pink-700 transition"
          onClick={() => {
            const burst = Array.from({ length: 10 }).map(() => ({
              id: Date.now() + Math.random(),
              x: Math.random() * window.innerWidth,
              size: Math.random() * 25 + 15,
            }));
            setHearts((prev) => [...prev, ...burst].slice(-40));
            alert("💖 Emilisa, Mahdi loves you forever! 💖");
          }}
        >
          Click Me 💘
        </button>
      </section>
    </div>
  );
}

/* CSS animations (add to globals.css or index.css) */
