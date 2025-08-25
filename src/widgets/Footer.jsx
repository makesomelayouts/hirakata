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
        } max-lg:px-10 max-lg:py-6 mx-auto font-body flex flex-col min-[853px]:flex-row justify-between items-center text-center font-bold text-2xl`}
      >
        <div className="max-[567px]:whitespace-nowrap">
          <p className="inline">{`© ${new Date().getFullYear()}: `}</p>
          <TransitionLink to="/" className="hover:underline inline">
            ХираКата
          </TransitionLink>
        </div>

        {/* Десктопная версия */}
        <div className="max-[567px]:hidden">
          от&nbsp;&#123; code:&nbsp;
          <a
            className="hover:underline"
            href="https://t.me/makesomelayouts"
            target="_blank"
          >
            makesomelayouts
          </a>
          , ux/ui:&nbsp;
          <a
            className="hover:underline"
            href="https://t.me/ekarq"
            target="_blank"
          >
            ekarq
          </a>
          &nbsp;&#125;;
        </div>

        {/* Мобильная версия */}
        <div className="min-[567px]:hidden max-[340px]:hidden text-left mt-4">
          <div>от&nbsp;&#123;</div>
          <div className="ml-4">
            code:&nbsp;
            <a
              className="hover:underline"
              href="https://t.me/makesomelayouts"
              target="_blank"
            >
              makesomelayouts,
            </a>
          </div>
          <div className="ml-4">
            ux/ui:&nbsp;
            <a
              className="hover:underline"
              href="https://t.me/ekarq"
              target="_blank"
            >
              ekarq
            </a>
          </div>
          <div>&#125;;</div>
        </div>
      </div>
    </footer>
  );
};
