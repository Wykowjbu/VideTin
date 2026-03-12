# Bug Report: Task T03 (Auth Logic)

- **Issue:** Build failed due to `Module not found: Can't resolve '@/lib/auth'`.
- **Details:** The alias `@` is not working or not configured, and `tsconfig.json` is missing in the project root.
- **Impact:** Cannot build the project.
- **Suggestion:**
    1. Check `tsconfig.json` to ensure `baseUrl` and `paths` are configured for `@/`.
    2. Ensure `tsconfig.json` exists in `SOURCE/vibetin/`.
