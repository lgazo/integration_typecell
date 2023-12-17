# Modification to Frame

vite.config.ts
```js
external: [
        "react",
        "react-dom",
        //   ...Object.keys({
        //     ...pkg.dependencies,
        //     // ...pkg.peerDependencies,
        //     ...pkg.devDependencies,
        //   }),
        //   "prettier/parser-postcss",
        //   "prettier/parser-typescript",
        //   "prettier/standalone",
        //   "react/jsx-runtime",
      ],
```

# Making dependencies work

## in Frame

### one time

```bash
npm link
```

### regularly

```bash
npm run watch
```

builds the library continuously.

## in NC TypeCell

### one time

```bash
npm link @typecell-org/frame
```

### regularly

```bash
npm run watch
```

Everytime the `mutagen` copies the build, clean the cache (e.g. CloudFlare).
