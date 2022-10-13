import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useToken } from "../../../contexts/AuthContext";

const useGetCategorysPlaylists = () => {
  const [playlists, setPlaylists] = useState<any>();
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState<boolean>(true);
  const { authTokens } = useToken();
  const { id } = useParams();

  useEffect(() => {
    if (!authTokens?.accessToken) {
      return;
    }

    fetch(`https://api.spotify.com/v1/browse/categories/${id}/playlists`, {
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
  }, [authTokens?.accessToken, id]);

  return { playlists, error, isPending, setPlaylists };
};

export default useGetCategorysPlaylists;
