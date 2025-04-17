import { Layout } from "@/widgets/Layout";

export const Home = () => {
  return (
    <>
      <Layout>
        <div className="text-center px-6 mt-2">
          <h1 className="text-2xl font-bold">Добро пожаловать на ХираКата!</h1>

          <p className="text-xl my-2 mx-auto max-w-2xl">
            Хотите освоить японский язык? Мы поможем вам разобраться в теории и
            практике написания символов хирагана и катакана
          </p>

          <button className="mt-2 text-white px-4 sm:px-8 py-2 sm:py-3 bg-red-700 hover:bg-red-800 rounded-4xl cursor-pointer">
            Приступить
          </button>
        </div>
      </Layout>
    </>
  );
};
