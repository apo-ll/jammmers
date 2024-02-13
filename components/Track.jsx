"use client";
import Image from "next/image";
import { Icons } from "@/components/Icons";
import { useCallback } from "react";

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
        <button
          onClick={() => {
            removeTrack();
          }}
          className="p-1 bg-slate-200 rounded-lg"
        >
          <Icons.remove />
        </button>
      );
    }
    return (
      <button
        onClick={() => {
          addTrack();
        }}
        className="p-1 bg-slate-200 rounded-lg"
      >
        <Icons.add />
      </button>
    );
  };

  return (
    <div className="space-y-3 items-center">
      <Image
        width={223}
        height={223}
        src={tracks.coverImage}
        alt={`Album image of ${tracks.artist}`}
        className="rounded-xl"
      />
      <div className="pb-3 ">
        <div className="flex justify-between  px-2">
          <div>
            <h2 className="self-stretch text-neutral-900 text-base font-medium leading-normal">
              {tracks.name}
            </h2>
            <h3 className="self-stretch text-indigo-800 text-sm font-normal leading-[21px]">
              {tracks.artist}
            </h3>
          </div>
          <button className="mr-3 p-1 bg-slate-200 rounded-lg">
            {renderAction()}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Track;
