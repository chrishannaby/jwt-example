import fetch from "node-fetch";

const proxyUrl = "secret-site-that-needs-jwt-to-access.netlify.app";
const cookie = "nf_jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjI5MjI3NzAyNjU5NiwiYXBwX21ldGFkYXRhIjp7ImF1dGhvcml6YXRpb24iOnsicm9sZXMiOlsiYWRtaW4iXX19fQ.SBIBVT5zeu6JzToowIZvzomx5-BOzFMhWT8NiSg9q1A; Secure; HttpOnly;"

export async function handler(event, context) {
  const response = await fetch(`https://${proxyUrl}${event.path}`, {
    headers: {
      cookie: cookie
    },
  });
  const body = await response.text();
  return {
    statusCode: response.status,
    body,
  };
}
