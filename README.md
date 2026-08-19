# `@theholocron/base-template`

<!-- holocron:description -->

A modern template with pre-configured tools, best practices, and CI/CD setup for rapid application development.

<!-- /holocron:description -->

<!-- holocron:template-only -->

## Getting Started

Use the [Holocron CLI](https://github.com/theholocron/holocron) to scaffold a new repo. It clones the template, renames all placeholder references, and runs `holocron setup` in one step:

```bash
npx @theholocron/cli new base my-library \
  --description "My library description" \
  --homepage "https://my-library.example.com" \
  --agent claude
```

This will:

1. Create `theholocron/my-library` from this template on GitHub
2. Replace all `monorepo-react-template` references with `my-library` throughout the repo
3. Run `pnpm install`
4. Run `holocron setup` to configure branch protection, labels, workflows, and repo settings

<!-- /holocron:template-only -->
