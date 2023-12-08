import Fastify from "fastify";

const app = Fastify({
	logger: true
});

app.get("/:id", async (request, reply) => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const params = request["params"] as any;
	return reply.send({success: params.id || null});
});

const port = 3333;

const start = async () => {
	try {
		await app.listen({ port });
		console.log(`Server is running on port ${port}!`);
	} catch (err) {
		app.log.error(err);
		process.exit(1);
	}
};

start();

export {app, start};