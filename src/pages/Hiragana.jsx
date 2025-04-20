import { Header } from "@/widgets/Header";
import { motion, useSpring, useScroll } from "framer-motion";
import fujiyama from "@/assets/Гора Фудзи.png";
import toriiGate from "@/assets/torii-gate.png";
import japaneseFlag from "@/assets/japan.png";
import hiraganaA from "@/assets/audio/hiragana/a-1.mp3";

function Hiragana() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 40,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(179.92deg, #C06BC9 -52.19%, #EBAAC1 61.17%)",
      }}
    >
      <Header />

      <section className="flex flex-col items-center justify-center lg:flex-row gap-[78px]">
        <div className="flex flex-col items-center justify-center">
          <h1 className="mt-[64px] text-center font-header text-5xl">
            Хирагана
          </h1>
          <div className="mt-3.5 bg-[#8C5D91] h-2.5 w-full rounded-full"></div>

          <img
            src={fujiyama}
            alt="Гора Фудзи"
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

      <section className="flex mt-[90px] flex-col items-center justify-between max-w-[1100px] mx-auto lg:flex-row">
        <p className="font-body text-2xl font-bold text-left pl-[26px] pr-[19px] py-[52px] bg-[#8C5D91] rounded-[45px] max-w-[543px]">
          Возникла в Японии как упрощение и адаптация китайских иероглифов
          (кандзи) для обозначения звуков и грамматических элементов японского
          языка
        </p>
        <img
          src={toriiGate}
          alt="Ворота Тории"
          className="lg:mr-32 lg:mt-0 mt-20"
        />
      </section>

      <section className="flex flex-col items-center justify-between lg:flex-row max-w-[1200px] mx-auto mt-32">
        <div className="flex flex-col items-center justify-center px-8 ml-32">
          <img src={japaneseFlag} alt="Флаг Японии" className="select-none" />
          <p className="font-jp text-[64px]">にほんご</p>
        </div>

        <p className="font-body font-bold text-right pt-[43px] pr-[28px] pl-[14px] pb-[37px] bg-[#8C5D91] mr-10 rounded-[45px] max-w-[543px] text-2xl">
          Используется для обозначения родных для японцев слов, грамматических
          элементов, окончаний глаголов. Применяется в повседневных письменных
          текстах: романы, газеты личная переписка, в детских книгах и
          материалах, для учащихся начального уровня
        </p>
      </section>

      <section className="flex flex-col items-center justify-center max-w-[1072px] mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-center font-header text-5xl">Алфавит</h1>
          <div className="mt-3.5 bg-[#8C5D91] h-2.5 w-full rounded-full"></div>
        </div>
      </section>
    </motion.div>
  );
}

export default Hiragana;
