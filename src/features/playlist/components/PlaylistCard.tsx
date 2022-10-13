import { Link } from "react-router-dom";
import RoundedImage from "../../../components/RoundedImage";

function PlaylistCard({
  id,
  title,
  imageSource,
  artists,
}: {
  id: string;
  title: string;
  imageSource: string;
  artists: Array<any>;
}) {
  return (
    <Link
      to={`/playlists/${id}`}
      className="grid items-end grid-cols-1 grid-rows-1 overflow-hidden rounded-md drop-shadow-md"
    >
      <RoundedImage
        className="col-span-full row-span-full"
        imageSource={imageSource}
        alt={title}
      />
      <div className="p-2 text-white col-span-full row-span-full h-fit bg-black/60">
        <h1 className="text-xs font-bold ">{title}</h1>
        <p className="text-[0.7rem] font-light">{artists.join(", ")}</p>
      </div>
    </Link>
  );
}

export default PlaylistCard;
