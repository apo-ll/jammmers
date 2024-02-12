
import {Icons}  from "@/components/Icons";
import { useState, useCallback } from "react";

 const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState('')

  const handleTermChange = useCallback((event) => {
    setTerm(event.target.value)
  }, [])

  const search = useCallback(() => {
    onSearch(term)
  }, [onSearch, term])

  return (
    <div className="py-3">
      <div className="flex items-center">
        <div class="relative w-full">
          <input
            type="text"
            onChange={handleTermChange}
            className="bg-slate-200  text-gray-900  lg:rounded-xl rounded-3xl placeholder:text-indigo-800 placeholder:text-base placeholder:font-normal placeholder:leading-normal focus:outline-none focus:ring focus:border-blue-500 block w-full px-4 py-3 "
            placeholder="Search for a song, album, or artist"
          />
        </div>
        <button
          onClick={search}
          className="p-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-xl border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <Icons.search />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;