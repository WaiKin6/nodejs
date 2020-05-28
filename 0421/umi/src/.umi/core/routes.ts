import { ApplyPluginsType } from 'C:/Users/xxxxx/Desktop/MyUmiJs/node_modules/@umijs/runtime';
import { plugin } from './plugin';

const routes = [
  {
    "exact": true,
    "path": "/",
    "component": require('@/pages/index').default
  },
  {
    "exact": true,
    "path": "/home",
    "component": require('@/pages/home').default
  },
  {
    "exact": true,
    "path": "/about",
    "component": require('@/pages/about').default
  }
];

// allow user to extend routes
plugin.applyPlugins({
  key: 'patchRoutes',
  type: ApplyPluginsType.event,
  args: { routes },
});

export { routes };
