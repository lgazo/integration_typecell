# Mutagen sync

Create a file `.mutagen.env` with a few variables:
```
NC_HOST=<linux host where NC runs>
NC_WWW_DIR=<bind mounted docker volume for `www`, e.g. /home/nextcloud/volumes/www>
LOCAL_DIR=<location of your development dir, e.g. /Users/frodo/nc_dev/integration_typecell>
```

Then run `bash mutagen.bash`.

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
