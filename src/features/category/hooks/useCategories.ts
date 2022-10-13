import { useEffect, useState } from "react";
import { useToken } from "../../../contexts/AuthContext";

const useCategories = () => {
  const [categories, setCategories] = useState<any>();
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState<boolean>(true);
  const { authTokens } = useToken();

  useEffect(() => {
    if (!authTokens?.accessToken) {
      return;
    }

    fetch(`https://api.spotify.com/v1/browse/categories`, {
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
        setCategories(data);
        setIsPending(false);
        setError(null);
      })
      .catch((error) => {
        setIsPending(false);
        setError(error.message);
      });
  }, [authTokens?.accessToken]);

  return { categories, error, isPending, setCategories };
};

export default useCategories;
