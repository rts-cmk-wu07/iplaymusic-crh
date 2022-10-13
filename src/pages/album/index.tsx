import Header from "../../components/Header";
import Title from "../../components/Title";
import Track from "../../components/Track";
import useAlbum from "../../features/album/hooks/useAlbum";

function Album() {
  const { album } = useAlbum();

  return (
    <>
      <Header
        title={`${album?.name} - ${album?.artists
          .map((artist: any) => artist.name)
          .join(", ")} ${
          album?.total_tracks > 1 ? `- ${album?.total_tracks} songs` : ""
        }`}
        showArrow
        showSearch
      />

      <div className="p-0 page-wrapper">
        <img
          src={album?.images[0].url}
          alt={album?.name}
          className="col-span-full row-span-full"
        />

        <div className="p-6">
          <Title title="All Songs" />
          <div className="flex flex-col gap-3">
            {album &&
              album.tracks.items.map((track: any) => (
                <Track
                  key={track.id}
                  name={track.name}
                  trackURL={track.preview_url}
                  artists={track.artists.map((artist: any) => artist.name)}
                  duration={track.duration_ms}
                  imageSource={
                    album.images[1]?.url ||
                    "https://images.unsplash.com/photo-1586672806791-3a67d24186c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  }
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Album;
