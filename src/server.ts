import { app } from "./app";

app.get("/:id", async (request, reply) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const params = request["params"] as any;
  return reply.send({ success: params.id || null });
});

const port = 3333;

async function startServer() {
  try {
    await app.listen({ port });
    console.log(`Server is running on port ${port}!`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
}

async function stopServer() {
  await app.close();
}

startServer();

export { startServer, stopServer };
