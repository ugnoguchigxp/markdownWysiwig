# Release Checklist

Follow these steps to publish `@markdown-wysiwyg/editor` to npm.

## 1. Pre-release Checks

- [ ] **Update Metadata**: Ensure `package.json` has the correct:
    - `author`
    - `repository`
    - `description`
    - `keywords`
    - `license`
- [ ] **Version Bump**: Update the `version` in `package.json` (e.g., `0.1.0` -> `0.1.1`).
- [ ] **Changelog**: Update `CHANGELOG.md` (if it exists) with the new changes.
- [ ] **Clean Install**: Run `rm -rf node_modules pnpm-lock.yaml && pnpm install` to ensure a clean state.

## 2. Verification

- [ ] **Lint**: Run `pnpm lint` to ensure no linting errors.
- [ ] **Test**: Run `pnpm test` to ensure all tests pass.
- [ ] **Build**: Run `pnpm build` to verify the build process.
- [ ] **Example App**:
    - Go to `example` directory: `cd example`
    - Install dependencies: `pnpm install`
    - Build example: `pnpm build`
    - (Optional) Run example: `pnpm dev` and check manually.

## 3. Publication

- [ ] **Login**: Run `npm login` (if not already logged in).
- [ ] **Dry Run**: Run `npm publish --dry-run` to see what will be published.
    - Verify the file list matches expectations (should include `dist`, `README.md`, `LICENSE`).
- [ ] **Publish**: Run `npm publish --access public` (use `--access public` for scoped packages).

## 4. Post-release

- [ ] **Tag**: Create a git tag for the release: `git tag v0.1.0`
- [ ] **Push**: Push tags: `git push --tags`
