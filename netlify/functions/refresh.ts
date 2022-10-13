import fetch from "node-fetch";

exports.handler = async (event, context) => {
  const CLIENT_ID = "b27850c09d1a4ebf9e6fe3ebde9e4278";
  const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
  const { refreshToken } = JSON.parse(event.body);
  const URL = `https://accounts.spotify.com/api/token`;

  const params = new URLSearchParams();
  params.append("grant_type", "refresh_token");
  params.append("refresh_token", refreshToken);

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

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
