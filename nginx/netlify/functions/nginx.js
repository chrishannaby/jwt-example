import fetch from "node-fetch";

const proxyUrl = "stunning-gingersnap-124357.netlify.app";
const jwt = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
    .eyJhcHBfbWV0YWRhdGEiOnsiYXV0aG9yaXphdGlvbiI6eyJyb2xlcyI6WyJuZ2lueCJdfX19
    .Pvt6cYY6QMDb18ab2cuyHC9BH9EzyHm0PgvgIsa1P9c`;

export async function handler(event, context) {
  console.log(event);
  const response = await fetch(`https://${proxyUrl}${event.path}`, {
    headers: new Headers({
      Authorization: `jwt ${jwt}`,
    }),
  });
  return response;
}
