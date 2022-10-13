import fetch from "node-fetch";

exports.handler = async (event, context) => {
  const CODE = event.queryStringParameters.code;
  const REDIRECT_URI = "http://localhost:8888/.netlify/functions/callback";
  const GRANT_TYPE = "authorization_code";
  const CLIENT_ID = "b27850c09d1a4ebf9e6fe3ebde9e4278";
  const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

  const URL = `https://accounts.spotify.com/api/token`;

  const params = new URLSearchParams();
  params.append("code", CODE);
  params.append("redirect_uri", REDIRECT_URI);
  params.append("grant_type", GRANT_TYPE);

  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(CLIENT_ID + ":" + CLIENT_SECRET).toString("base64"),
    },
    body: params,
  });

  const data = (await response.json()) as {
    access_token: string;
    refresh_token: string;
    expires_in: number;
  };

  const redirectParams = new URLSearchParams();
  redirectParams.append("access_token", data.access_token);
  redirectParams.append("refresh_token", data.refresh_token);
  redirectParams.append("expires_in", data.expires_in?.toString());

  return {
    statusCode: 302,
    headers: {
      Location: `http://localhost:8888/featured?${redirectParams.toString()}`,
    },
    body: JSON.stringify({}),
  };
};
