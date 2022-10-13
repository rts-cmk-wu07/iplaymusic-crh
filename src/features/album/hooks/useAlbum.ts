import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useToken } from "../../../contexts/AuthContext";

const useAlbum = () => {
  const [album, setAlbum] = useState<any>();
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState<boolean>(true);
  const { authTokens } = useToken();
  const { id } = useParams();

  useEffect(() => {
    if (!authTokens?.accessToken) {
      return;
    }

    fetch(`https://api.spotify.com/v1/albums/${id}`, {
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
        setAlbum(data);
        setIsPending(false);
        setError(null);
      })
      .catch((error) => {
        setIsPending(false);
        setError(error.message);
      });
  }, [authTokens?.accessToken, id]);

  return { album, error, isPending, setAlbum };
};

export default useAlbum;
