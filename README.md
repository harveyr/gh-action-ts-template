A modified version of https://github.com/actions/typescript-action

# Releases

Tentative SOP, to be improved whenever possible:

1. Check out new branch. Keeping releases in these branches limits the amount of
   node_modules thrash in the repo.
```bash
git checkout -b releases/v<NUM>
```

2. Build the project.
```bash
npm run build && git add lib && git commit -m "build"
```

3. Commit node_modules. This is required for the action to be usable by other
   workflows.
```
npm ci --only=production
git add -f node_modules
git commit -m "node_modules"
git push
```

4. Maybe: Use Github UI to create a `v<NUM>` release.