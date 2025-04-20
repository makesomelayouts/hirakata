import { Header } from "@/widgets/Header";
import { motion, useSpring, useScroll } from "framer-motion";
import fujiyama from "@/assets/Гора Фудзи.png";
import hiraganaA from "@/assets/audio/hiragana/a-1.mp3";

function Hiragana() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 40,
    restDelta: 0.001,
  });

  return (
    <motion.div className="min-h-screen bg-[url(@/assets/hiragana-bg.jpg)] bg-cover bg-center">
      <Header />

      <motion.div
        id="scroll-indicator"
        style={{
          scaleX,
          position: "fixed",
          top: 90,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          backgroundColor: "#7C5185",
        }}
      />

      <main className="max-w-10/12 mx-auto flex flex-col justify-between items-center">
        <section className="flex flex-col items-center justify-center lg:flex-row gap-10">
          <div className="flex flex-col items-center justify-center">
            <h1 className="mt-[64px] text-center font-header text-5xl">
              Хирагана
            </h1>
            <div className="mt-3.5 bg-[#8C5D91] h-2.5 w-full rounded-full"></div>

            <img
              src={fujiyama}
              alt="hiragana"
              className="mt-[30px] select-none"
            />
          </div>

          <div className="flex flex-col max-w-lg items-center justify-center bg-[#8C5D91] px-6 py-5 rounded-[45px] mt-6">
            <p className="text-center font-body text-2xl font-bold text-right">
              — японская слоговая азбука, одна из составляющих японской
              письменности наряду с катаканой, иероглифами, арабскими цифрами и
              ромадзи (латинским алфавитом)
            </p>

            <div
              className="relative mt-3 w-[467px] h-[260px] bg-[#7C5185] hover:bg-[#5B3569] transition duration-400 ease-in-out w-full rounded-4xl cursor-pointer"
              onClick={() => {
                const audio = new Audio(hiraganaA);
                audio.volume = 0.3; // Установите громкость на 50%
                audio.play();
              }}
            >
              <h1 className="absolute top-[-30%] left-[22%] text-[260px] font-jp select-none">
                あ
              </h1>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center justify-center lg:flex-row gap-10"></section>
      </main>
    </motion.div>
  );
}

export default Hiragana;
