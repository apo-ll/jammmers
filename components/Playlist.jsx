

import TrackList from "@/components/TrackList";
import { useCallback } from "react";

const Playlist = ({ onRemove, playlistTracks, onNameChange }) => {
  const handleNameChange = useCallback(
    (event) => {
      onNameChange(event.target.value);
    },
    [onNameChange]
  );

  return (
    <div className="lg:px-40 justify-center w-full inline-flex mb-10">
      <div className="max-w-[960px] w-full">
        <div className="p-4">
          <h1 className="text-neutral-900 text-[22px] font-bold font-['Be Vietnam Pro'] leading-7">
            Manage Your Playlist
          </h1>

          <div className=" py-3 space-y-2">
            <input
              type="text"
              id="simple-search"
              className="bg-slate-200 lg:w-[480px]  text-gray-900  lg:rounded-xl rounded-xl placeholder:text-indigo-800 placeholder:text-base placeholder:font-normal font-['Be Vietnam Pro'] placeholder:leading-normal focus:outline-none focus:ring focus:border-blue-500 block w-full p-4 "
              placeholder="Enter playlist name"
              onChange={handleNameChange}
            />
          </div>

          <TrackList
            tracks={playlistTracks}
            isRemoval={true}
            onRemove={onRemove}
          />
        </div>
      </div>
    </div>
  );
};

export default Playlist;
