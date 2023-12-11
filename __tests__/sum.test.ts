test("it should return 2", () => {
  expect(1 + 1).toBe(2);
});

test("it should return the request param provided", async () => {
  const response = await request.get("/1");

  expect(response._body).toStrictEqual({ success: "1" });
});
