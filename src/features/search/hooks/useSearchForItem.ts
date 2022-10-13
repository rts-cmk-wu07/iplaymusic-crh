import { useEffect, useState } from "react";
import { useToken } from "../../../contexts/AuthContext";

const useSearchForItem = (query: string | null) => {
  const [searchResults, setSearchResults] = useState<any>();
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState<boolean>(true);
  const { authTokens } = useToken();

  useEffect(() => {
    if (!authTokens?.accessToken) {
      return;
    }

    if (!query) {
      setSearchResults(null);
      return;
    }

    fetch(
      `https://api.spotify.com/v1/search?type=album,artist,track&q=${query}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${authTokens?.accessToken}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw Error("Could not fetch the data for that resource");
        }
        return response.json();
      })
      .then((data) => {
        setSearchResults(data);
        setIsPending(false);
        setError(null);
      })
      .catch((error) => {
        setIsPending(false);
        setError(error.message);
      });
  }, [authTokens?.accessToken, query]);

  return { searchResults, error, isPending, setSearchResults };
};

export default useSearchForItem;
