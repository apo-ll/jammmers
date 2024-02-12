


import TrackList from "@/components/TrackList";
import { SearchBar } from "@/components/SearchBar";

const SearchResults = ({ searchResults, onAdd, onSearcher }) => {
  return (
    <div className="lg:px-40 px-4 py-5 justify-center w-full inline-flex">
      <div className="max-w-[960px] w-full">
        <div className="lg:py-4 pt-6 pb-3  inline-flex">
          <h1 className="text-neutral-900 lg:text-4xl text-[32px] leading-10 font-black  lg:leading-[45px] lg:text-left text-center">
            Discover and Manage Your Playlists
          </h1>
        </div>

        <SearchBar onSearch={onSearcher} />
        <TrackList tracks={searchResults} onAdd={onAdd} />
      </div>
    </div>
  );
};

export default SearchResults
