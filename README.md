# mw-bundle

![](https://user-images.githubusercontent.com/50838/27757629-93b23ba2-5e21-11e7-8b9c-3a8d69f5b5de.png)
> [Remove unnecessary code use in Next.js #2421](https://github.com/zeit/next.js/issues/2421)

|name|type|base|zero-config|entry|hmr|
|:-|:-|:-:|:-:|:-:|:-:|
|`webpack`|dynamic||❌|`.js`|✔️|
|`rollup`|static||❌|`.js`|❌|
|`parcel`|dynamic||✔️|`.html`|✔️|
|`poi`|dynamic|`webpack`|✔️|`.js`|[`react-hot-loader`](https://github.com/gaearon/react-hot-loader)|
|`microbundle`|static|`rollup`|✔️|`.js`|❌|

#### webpack
- [webpack.js.org](https://webpack.js.org/)
- [🎼webpack 4: released today!!✨](https://medium.com/webpack/webpack-4-released-today-6cdb994702d4)

#### rollup
- [rollupjs.org](https://rollupjs.org/guide/en)
- [react error process is not defined #487](https://github.com/rollup/rollup/issues/487)
- [Inheriting class via a external extended export #231](https://github.com/rollup/rollup-plugin-commonjs/issues/231)


#### parcel
- [parceljs.org](https://parceljs.org/)
- [Proxy #55](https://github.com/parcel-bundler/parcel/issues/55)
- [#middleware](https://parceljs.org/api.html#middleware)
> Middleware can be used to hook into a http server (e.g. express or node http).

#### poi
- [poi.js.org](https://poi.js.org/)

#### microbundle
- [developit/microbundle](https://github.com/developit/microbundle)
- [Build failed when using specific dependencies #53](https://github.com/developit/microbundle/issues/53)
> Hmm - it seems a pity to have to add configuration just because React isn't exporting things properly...
- [Production bundle #115](https://github.com/developit/microbundle/issues/115)
> For browsers u dont need this. Just use process.env.NODE_ENV checks, do not replace them before publishing and let consumers' bundlers do that.
