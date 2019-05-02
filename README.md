# www.speelpleinwerking.com

## Development

This site is developed using [Hugo](https://gohugo.io/). Read the Hugo docs on how to create layouts et cetera.

### Dynamic data

Data is pulled from a remote API (or example data is used). See the `get-data` folder for instructions.

The dynamic data creates `.md` files in `content/speelplein`. These files should not be checked in.

## Deployment

### Dependencies

* [Hugo](https://gohugo.io/)
* [firebase-tools](https://www.npmjs.com/package/firebase-tools) (`npm install -g firebase-tools`) - don't forget to log in.

### Staging

```
$ firebase use staging
$ rm -rf public # optional
$ hugo
$ firebase deploy
```

### Production

```
$ firebase use default
$ rm -rf public # optional
$ hugo
$ firebase deploy
```

