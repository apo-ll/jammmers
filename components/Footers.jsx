import { Icons } from "@/components/Icons";

const Footers = () => {
  return (
    <footer className="border-t border-gray-200">
      <div className="mx-auto max-w-screen-xl ">
        <div className="container flex flex-col items-center justify-between gap-4 py-5 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Icons.logo />
            <p className="text-center text-sm leading-loose md:text-left">
              Built by{" "}
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4"
              >
                apo-ll
              </a>
              . The source code is available on{" "}
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4"
              >
                GitHub
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footers;
