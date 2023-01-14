import fetch from "node-fetch";

const proxyUrl = "stunning-gingersnap-124357.netlify.app";
const jwt =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjIxNDc0ODM2NDcsImFwcF9tZXRhZGF0YSI6eyJhdXRob3JpemF0aW9uIjp7InJvbGVzIjpbImFkbWluIl19fX0.QrtxkldV2FmLi1jVC7mE93LSZ2muz2YKQdixQsYp9fo";

export async function handler(event, context) {
  const response = await fetch(`https://${proxyUrl}${event.path}`, {
    headers: {
      "X-NF-User-Token": jwt,
    },
  });
  const body = await response.text();
  return {
    statusCode: response.status,
    body,
  };
}
