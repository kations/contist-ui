export const imports = {
  'src/docs/home.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-docs-home" */ 'src/docs/home.mdx'),
  'src/docs/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-docs-index" */ 'src/docs/index.mdx'),
  'src/docs/primitives/absolute.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-docs-primitives-absolute" */ 'src/docs/primitives/absolute.mdx'),
  'src/docs/primitives/box.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-docs-primitives-box" */ 'src/docs/primitives/box.mdx'),
  'src/docs/primitives/flex.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-docs-primitives-flex" */ 'src/docs/primitives/flex.mdx'),
  'src/docs/primitives/grid.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-docs-primitives-grid" */ 'src/docs/primitives/grid.mdx'),
}
