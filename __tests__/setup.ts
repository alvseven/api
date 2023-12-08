import supertest from "supertest";

import { app, start } from "../src/server";

const request = supertest(app.server);

beforeAll(async () => {
	await start();
});

afterAll(async () => {
	app.close();
});

global.request = request; 