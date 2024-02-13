import { Icons } from "@/components/Icons";

const NavBar = ({ savePlaylist }) => {
  return (
    <nav className="lg:px-10 lg:py-3 px-4 pt-4 pb-2 lg:border-b border-gray-200 w-full  justify-center items-center inline-flex max-h-[65px] min-h-[65px]">
      <div className="max-w-[1280px] w-full flex justify-between">
        <div className="justify-start items-center gap-4 inline-flex">
          <Icons.logo />
          <h1 className="text-neutral-900 text-lg font-bold leading-snug">
            Jammming
          </h1>
        </div>
        <button
          onClick={savePlaylist}
          className="p-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-xl border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Save To Spotify
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
