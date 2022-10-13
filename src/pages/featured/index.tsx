import AlbumCard from "../../features/album/components/AlbumCard";
import Header from "../../components/Header";
import Heading from "../../components/Heading";
import Title from "../../components/Title";
import useAlbumNewReleases from "../../features/featured/hooks/useAlbumNewReleases";
import useFeaturedPlaylists from "../../features/featured/hooks/useFeaturedPlaylists";
import PlaylistCard from "../../features/playlist/components/PlaylistCard";

function Featured() {
  const { newReleases } = useAlbumNewReleases();
  const { featuredPlaylists } = useFeaturedPlaylists();

  return (
    <>
      <Header showSignOut showSearch />
      <div className="page-wrapper">
        <Heading title="Featured" />
        <Title title="New Releases" />
        <div className="grid grid-cols-2 gap-6 mb-20">
          {newReleases &&
            newReleases.albums.items.map((album: any) => (
              <AlbumCard
                key={album.id}
                id={album.id}
                title={album.name}
                imageSource={album.images[0].url}
                artists={album.artists.map((artist: any) => artist.name)}
              />
            ))}
        </div>
        <Title title="Featured Playlists" />
        <div className="grid grid-cols-2 gap-6">
          {featuredPlaylists &&
            featuredPlaylists.playlists.items.map((playlist: any) => (
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

export default Featured;
