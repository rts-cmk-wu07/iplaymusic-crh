import { GrSpotify } from "react-icons/gr";

const params = new URLSearchParams();
params.append("client_id", "b27850c09d1a4ebf9e6fe3ebde9e4278");
params.append("response_type", "code");
params.append(
  "redirect_uri",
  "http://localhost:8888/.netlify/functions/callback"
);
params.append(
  "scope",
  "streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"
);

function Login() {
  return (
    <div className="flex flex-col h-screen p-6 page-wrapper dark:bg-secondary">
      <h1 className="mt-2 text-3xl font-bold mb-80 dark:text-white">Log In</h1>

      <a
        href={`https://accounts.spotify.com/authorize?${params.toString()}`}
        className="flex items-center gap-4 px-8 py-3 mx-auto text-white bg-green-500 rounded-lg w-fit"
      >
        <GrSpotify className="text-4xl " />
        Log in with Spotify
      </a>
    </div>
  );
}

export default Login;
