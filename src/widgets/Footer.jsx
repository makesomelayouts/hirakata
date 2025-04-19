export const Footer = () => {
  return (
    <footer className="mt-4 p-6 flex flex-col md:flex-row justify-between items-center text-center border-t border-gray-200">
      <div>
        <p className="inline">{`© ${new Date().getFullYear()}`}</p>{" "}
        <strong>HiraKata</strong> от &#123; idea+code:{" "}
        <a
          className="hover:underline"
          href="https://t.me/maxelonej"
          target="_blank"
        >
          maxelonej
        </a>
        , design:{" "}
        <a
          className="hover:underline"
          href="https://t.me/ekarq"
          target="_blank"
        >
          ekarq
        </a>{" "}
        &#125;
      </div>

      <div>
        <p className="inline-block">Исходный код лицензирован под</p>{" "}
        <a
          className="font-bold inline-block"
          href="http://opensource.org/licenses/mit-license.php"
        >
          MIT
        </a>
      </div>
    </footer>
  );
};
