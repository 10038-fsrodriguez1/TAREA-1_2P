import './my-button.js';
import './my-input.js';
import './app-root.js';
import router from './router.js';

router.setRoutes([
  { path: '/', component: 'app-root' },
]);

router.listen();
