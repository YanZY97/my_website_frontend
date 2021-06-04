import { defineConfig } from 'umi';
import routes from './routes';
import theme from './theme';

export default defineConfig({
  links: [{ rel: 'icon', href: '/logo.ico' }],
  proxy: {
    '/api': {
      target: 'http://123.123.123.123:8000',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: routes,
  theme: theme,
  antd: {
    dark: false,
    compact: false,
  },
  dva: {},
  dynamicImport: {},
});
