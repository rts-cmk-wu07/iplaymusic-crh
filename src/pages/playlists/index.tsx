import Header from "../../components/Header";
import Heading from "../../components/Heading";
import PlaylistCard from "../../features/playlist/components/PlaylistCard";
import usePlaylists from "../../features/playlist/hooks/usePlaylists";

function Playlists() {
  const { playlists } = usePlaylists();

  return (
    <>
      <Header showSearch />

      <div className="page-wrapper">
        <Heading title="Playlists" />
        <div className="grid grid-cols-2 gap-6">
          {playlists &&
            playlists.items.map((playlist: any) => (
              <PlaylistCard
                key={playlist.id}
                id={playlist.id}
                title={playlist.name}
                imageSource={playlist.images[0].url}
                artists={[playlist.owner.display_name]}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default Playlists;
