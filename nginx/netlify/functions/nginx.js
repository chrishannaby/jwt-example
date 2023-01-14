import fetch from "node-fetch";

const proxyUrl = "secret-site-that-needs-jwt-to-access.netlify.app";
const cookie = "nf_jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjIxNDc0ODM2NDcsImFwcF9tZXRhZGF0YSI6eyJhdXRob3JpemF0aW9uIjp7InJvbGVzIjpbImFkbWluIl19fX0.QrtxkldV2FmLi1jVC7mE93LSZ2muz2YKQdixQsYp9fo; Secure; HttpOnly;"

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
