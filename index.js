const http = require("http");
const { add, greet } = require("./utils");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (url.pathname === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    return res.end(greet(url.searchParams.get("name") || undefined));
  }

  if (url.pathname === "/add") {
    const a = Number(url.searchParams.get("a"));
    const b = Number(url.searchParams.get("b"));
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ result: add(a, b) }));
  }

  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Not found");
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
