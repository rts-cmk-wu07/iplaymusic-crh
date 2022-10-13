import React, { createContext, useContext, useEffect, useState } from "react";
import { useQuery } from "../hooks/useQuery";

interface AuthTokens {
  accessToken: string | null;
  refreshToken: string | null;
  expiresIn: number | null;
}

const AuthContext = createContext<{
  authTokens: AuthTokens;
  setAuthTokens: React.Dispatch<React.SetStateAction<AuthTokens>> | null;
}>({
  authTokens: { accessToken: null, refreshToken: null, expiresIn: null },
  setAuthTokens: null,
});

export const useToken = () => {
  return useContext(AuthContext);
};

export const TokenProvider = ({ children }: { children: React.ReactNode }) => {
  const query = useQuery();
  const [authTokens, setAuthTokens] = useState<AuthTokens>({
    accessToken: null,
    refreshToken: null,
    expiresIn: null,
  });

  useEffect(() => {
    const accessToken = query.get("access_token");
    const refreshToken = query.get("refresh_token");
    const expiresIn = query.get("expires_in");
    if (accessToken && refreshToken && expiresIn) {
      setAuthTokens({
        accessToken,
        refreshToken,
        expiresIn: parseInt(expiresIn),
      });
      window.history.pushState({}, "", "/featured");
    }
  }, [query]);

  useEffect(() => {
    if (!authTokens.refreshToken || !authTokens.expiresIn) {
      return;
    }

    const interval = setInterval(() => {
      fetch("http://localhost:8888/.netlify/functions/refresh", {
        method: "POST",
        body: JSON.stringify({
          refreshToken: authTokens.refreshToken,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setAuthTokens({
            ...authTokens,
            accessToken: data.access_token,
            expiresIn: data.expires_in,
          });
        });
    }, (authTokens.expiresIn - 60) * 1000);

    return () => clearInterval(interval);
  }, [authTokens, authTokens.refreshToken, authTokens.expiresIn]);

  return (
    <AuthContext.Provider
      value={{
        authTokens,
        setAuthTokens,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
