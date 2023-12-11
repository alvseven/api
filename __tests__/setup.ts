import supertest from "supertest";

import { startServer, stopServer } from "../src/server";
import { app } from "../src/app";

const request = supertest(app.server);

beforeAll(async () => {
  await startServer();
});

afterAll(async () => {
  await stopServer();
});

global.request = request;
