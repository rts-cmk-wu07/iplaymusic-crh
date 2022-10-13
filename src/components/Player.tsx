import AudioPlayer from "react-h5-audio-player";
import { IoCloseOutline, IoPauseOutline, IoPlay } from "react-icons/io5";
import { Link } from "react-router-dom";
import { usePlayer } from "../contexts/PlayerContext";
import "../minifiedPlayer.css";
import "../player.css";
import useCurrentRoute from "../hooks/useCurrentPath";
import Header from "./Header";

function Player() {
  const { currentPath } = useCurrentRoute();
  const { player, setPlayer } = usePlayer();

  const isPlayingPath = currentPath === "playing";

  const minifiedPlayerProps = {
    showJumpControls: false,
    customIcons: {
      play: <IoPlay />,
      pause: <IoPauseOutline />,
    },
  };

  const playerProps = {
    customIcons: {
      play: (
        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-gradientL to-gradientR">
          <IoPlay className="text-white " />
        </div>
      ),
      pause: (
        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-gradientL to-gradientR">
          <IoPauseOutline className="text-white " />
        </div>
      ),
    },
  };

  return (
    <>
      {isPlayingPath && <Header showArrow />}
      <div
        className={
          isPlayingPath
            ? `page-wrapper dark:text-white text-additional`
            : `p-3 bg-red-50 dark:bg-additional dark:text-white ${
                !player.href && "absolute opacity-0 pointer-events-none"
              }`
        }
      >
        <Link
          to="/playing"
          className={
            isPlayingPath
              ? "hidden"
              : "block w-8 h-1 mx-auto bg-zinc-300 rounded-sm"
          }
        ></Link>

        <div
          className={
            isPlayingPath
              ? "flex flex-col gap-16 text-center"
              : "flex items-center justify-between"
          }
        >
          <img
            src={player.imageSource ?? ""}
            alt=""
            className={
              isPlayingPath ? "rounded-full w-60 h-60 m-auto" : "hidden"
            }
          />
          <div>
            <p className="text-sm font-semibold">{player.name}</p>
            <p className="text-xs">{player.artists}</p>
          </div>

          <div
            className={
              isPlayingPath ? "" : "flex justify-end gap-2 mt-3 text-3xl"
            }
          >
            <AudioPlayer
              className={isPlayingPath ? "player" : "minifiedPlayer"}
              autoPlay={true}
              src={player.href ?? ""}
              customVolumeControls={[]} // remove volume controls
              customAdditionalControls={[]} // remove additional controls: loop button
              {...(isPlayingPath && { ...playerProps })}
              {...(!isPlayingPath && { ...minifiedPlayerProps })}
            />

            <IoCloseOutline
              className={isPlayingPath ? "hidden" : ""}
              onClick={() => {
                if (!setPlayer) {
                  return;
                }

                setPlayer({
                  name: null,
                  href: null,
                  artists: null,
                  imageSource: null,
                });
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Player;
