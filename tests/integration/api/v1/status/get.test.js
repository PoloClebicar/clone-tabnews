test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch(
    "https://laughing-space-garbanzo-7vvr7grj9pv9crqqp-3000.app.github.dev/api/v1/status",
  );
  expect(response.status).toBe(200);
});
