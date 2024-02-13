import Track from "./Track";

const TrackList = ({ tracks, onAdd, isRemoval, onRemove }) => {
  return (
    <div className="gap-3 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 py-4">
      {tracks.map((tracks) => (
        <Track
          key={tracks.id}
          tracks={tracks}
          onAdd={onAdd}
          onRemove={onRemove}
          isRemoval={isRemoval}
        />
      ))}
    </div>
  );
};

export default TrackList;
