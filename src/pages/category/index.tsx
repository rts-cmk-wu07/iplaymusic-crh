import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Heading from "../../components/Heading";
import RoundedImage from "../../components/RoundedImage";
import useGetCategorysPlaylists from "../../features/category/hooks/useGetCategorysPlaylists";

function Category() {
  const { playlists } = useGetCategorysPlaylists();

  return (
    <>
      <Header showArrow showSearch />

      <div className="page-wrapper">
        <Heading title="Playlists" />
        <div className="grid grid-cols-2 gap-6">
          {playlists &&
            playlists.playlists.items.map((playlist: any) => (
              <Link
                to={`/playlists/${playlist.id}`}
                className="grid grid-cols-1 grid-rows-1 drop-shadow-md"
                key={playlist.id}
              >
                <RoundedImage
                  className="col-span-full row-span-full"
                  imageSource={playlist.images[0].url}
                  alt={playlist.name}
                />
              </Link>
            ))}
        </div>
      </div>
    </>
  );
}

export default Category;
