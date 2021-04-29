import Page1 from '../pages/page1';
import Page2 from '../pages/page2';

interface IRoute {
  path: string;
  name: string;
  exact: boolean;
  component: any;
  props?: any;
}
const routes: IRoute[] = [
  {
    path: '/',
    name: 'Page 1',
    component: Page1,
    exact: true,
  },
  {
    path: '/page2',
    name: 'Page 2',
    component: Page2,
    exact: true,
  },
];

export default routes;
