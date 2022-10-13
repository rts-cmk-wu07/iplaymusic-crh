import AlbumCard from "../../features/album/components/AlbumCard";
import Header from "../../components/Header";
import Heading from "../../components/Heading";
import useSavedAlbums from "../../features/album/hooks/useSavedAlbums";

function Albums() {
  const { savedAlbums } = useSavedAlbums();

  return (
    <>
      <Header showSearch />

      <div className="page-wrapper">
        <Heading title="Albums" />
        <div className="grid grid-cols-2 gap-6">
          {savedAlbums &&
            savedAlbums.items.map((album: any) => (
              <AlbumCard
                key={album.album.id}
                id={album.album.id}
                title={album.album.name}
                imageSource={album.album.images[0].url}
                artists={album.album.artists.map((artist: any) => artist.name)}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default Albums;
