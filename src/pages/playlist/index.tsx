import Header from "../../components/Header";
import Title from "../../components/Title";
import Track from "../../components/Track";
import usePlaylist from "../../features/playlist/hooks/usePlaylist";

function Playlist() {
  const { playlist } = usePlaylist();

  return (
    <>
      <Header title={playlist?.name} showArrow showSearch />

      <div className="p-0 page-wrapper">
        <img
          src={playlist?.images[0].url}
          alt={playlist?.name}
          className="col-span-full row-span-full"
        />

        <div className="p-6">
          <Title title="All Songs" />

          <div className="flex flex-col gap-3">
            {playlist &&
              playlist.tracks.items.map((track: any, i: number) => (
                <Track
                  key={i}
                  name={track.track.name}
                  trackURL={track.track.preview_url}
                  artists={track.track.artists.map(
                    (artist: any) => artist.name
                  )}
                  duration={track.track.duration_ms}
                  imageSource={
                    playlist.images[1]?.url ||
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

export default Playlist;
