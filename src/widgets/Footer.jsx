export const Footer = () => {
  return (
    <footer class="w-full mt-4 p-6 flex flex-col md:flex-row justify-between items-center text-center border-t border-gray-200">
      <div>
        <p className="inline">{`© ${new Date().getFullYear()}`}</p>{" "}
        <strong>ХираКата</strong>
      </div>

      <div className="">
        от &#123; code:{" "}
        <a
          className="hover:underline"
          href="https://t.me/maxelonej"
          target="_blank"
        >
          maxelonej
        </a>
        , ux/ui:{" "}
        <a
          className="hover:underline"
          href="https://t.me/ekarq"
          target="_blank"
        >
          ekarq
        </a>{" "}
        &#125;
      </div>
    </footer>
  );
};
