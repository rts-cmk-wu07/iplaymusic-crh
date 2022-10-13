import { useEffect, useState } from "react";
import { useToken } from "../../../contexts/AuthContext";

const usePlaylists = () => {
  const [playlists, setPlaylists] = useState<any>();
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState<boolean>(true);
  const { authTokens } = useToken();

  useEffect(() => {
    if (!authTokens?.accessToken) {
      return;
    }

    fetch(`https://api.spotify.com/v1/me/playlists`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authTokens?.accessToken}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw Error("Could not fetch the data for that resource");
        }
        return response.json();
      })
      .then((data) => {
        setPlaylists(data);
        setIsPending(false);
        setError(null);
      })
      .catch((error) => {
        setIsPending(false);
        setError(error.message);
      });
  }, [authTokens?.accessToken]);

  return { playlists, error, isPending, setPlaylists };
};

export default usePlaylists;
