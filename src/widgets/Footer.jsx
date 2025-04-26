import { TransitionLink } from "@/shared/TransitionLink";

export const Footer = ({ page }) => {
  return (
    <footer
      className={`w-full px-6 rounded-t-[75px]`}
      style={{
        background:
          page === "home"
            ? ""
            : "linear-gradient(0deg, rgba(140, 93, 145, 0.77) 0%, rgba(140, 93, 145, 0.3) 100.01%)",
      }}
    >
      <div
        className={`${
          page === "home"
            ? "max-w-[989px] lg:py-12"
            : "max-w-[1127px] lg:py-[79px]"
        } max-lg:px-10 max-lg:py-6 mx-auto font-body flex flex-col md:flex-row justify-between items-center text-center font-bold text-2xl`}
      >
        <div>
          <p className="inline">{`© ${new Date().getFullYear()}: `}</p>
          <TransitionLink to="/" className="hover:underline inline">
            ХираКата
          </TransitionLink>
        </div>

        <div>
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
          &#125;;
        </div>
      </div>
    </footer>
  );
};
