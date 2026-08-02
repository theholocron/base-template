import { defineConfig } from "@theholocron/cli";

export default defineConfig({
	description: "<description>",
	homepage: "<homepage>",
	repo: {},
	workflows: ["lint", "review", "stale", "greetings", "bookkeeping-pr"],
	providers: { source: "github" },
	agent: "claude",
});
