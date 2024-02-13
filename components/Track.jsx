import Image from "next/image";
import { Icons } from "@/components/Icons";
import { useCallback } from "react";
import { toast } from 'sonner'


const Track = ({ tracks, onAdd, onRemove, isRemoval }) => {
  const addTrack = useCallback(
    (event) => {
      onAdd(tracks);
    },
    [onAdd, tracks]
  );

  const removeTrack = useCallback(
    (event) => {
      onRemove(tracks);
    },
    [onRemove, tracks]
  );

  const renderAction = () => {
    if (isRemoval) {
      return (
        <button className="p-1 h-full"   onClick={() => {removeTrack(); toast.success(`${tracks.name} by ${tracks.artist} has been removed from playlist`)}}>
          <Icons.delete />
        </button>
      )
    }
    return (
      <button className="p-1 h-full"  onClick={() => {addTrack(); toast.success(`${tracks.name} by ${tracks.artist} has been added to playlist`)}} >
        
        <Icons.add/>
      </button>
    )
  }

  return (
    <div className="space-y-3 bg-slate-200 lg:w-[223px]  rounded-xl items-center">
      <Image
        width={223}
        height={223}
        src={tracks.coverImage}
        alt={`Album image of ${tracks.artist}`}
        className="rounded-xl"
      />
      <div className="pb-3 items-center">
        <div className="flex justify-between  px-2">
          <div>
            <h2 className="self-stretch text-neutral-900 text-base font-medium leading-normal">
              {tracks.name}
            </h2>
            <h3 className="self-stretch text-indigo-800 text-sm font-normal leading-[21px]">
              {tracks.artist}
            </h3>
          </div>
          <div className="  bg-white  rounded-lg">
            {renderAction()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Track;


// className="p-1 bg-slate-200 rounded-lg"