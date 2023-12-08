test("it should return 3", () => {
	expect(1 + 2).toBe(3);
});

test("it should return the request param provided", async () => {

	const response = await request.get("/1");
	
	expect(response._body).toStrictEqual({success: "1"});
});