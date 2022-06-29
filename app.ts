import type { VercelRequest as req, VercelResponse as res } from "@vercel/node";
import jsonServer from "json-server";

export default function handler(req: req, res: res) {
  const server = jsonServer.create();
  const router = jsonServer.router("db.json");
  const middlewares = jsonServer.defaults();
  server.use(middlewares);
  server.use(router);
  server.listen(3000, () => console.log("JSON Server berjalan"));
}
