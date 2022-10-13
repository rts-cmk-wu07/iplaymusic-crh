import { Link } from "react-router-dom";

function SearchResultsAlbums({ albums }: { albums: any }) {
  return (
    <div className="mt-4 text-xs dark:text-white">
      {albums?.items?.map((album: any) => (
        <Link
          to={`/albums/${album.id}`}
          key={album.id}
          className="flex items-center gap-3 py-2 border-b-[1px] border-white"
        >
          <img
            src={
              album.images[2]?.url ||
              album.images[1]?.url ||
              album.images[0]?.url ||
              "https://images.unsplash.com/photo-1586672806791-3a67d24186c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            }
            alt={album.name}
            className="w-10 h-10"
          />
          <div>
            <p className="font-semibold">{album.name}</p>
            <p className="font-extralight">
              {album.artists.map((artist: any) => artist.name).join(", ")}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default SearchResultsAlbums;
