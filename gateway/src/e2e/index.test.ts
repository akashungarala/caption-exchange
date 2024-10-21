import type { Express } from "express-serve-static-core";
import request from "supertest";
import { createApp } from "../createApp";

describe("/api/users", () => {
	let app: Express;

	beforeAll(async () => {
		app = await createApp();
	});

	it("should return an empty array when getting /api/users", async () => {
		const response = await request(app).get("/api/users");
		expect(response.body).toStrictEqual([]);
	});
});
