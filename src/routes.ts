import { DocComponent } from './docs';
import App from './App';
import { MenuDocComponent } from './docs/menu-doc/menu-doc.component';

export const Routes = [{
    path: '',
    component: App,
    routes: [{
        path: '/components',
        component: DocComponent,
    }],
}];

export const ComponentsRoutes = [
    {
        path: '/components/menu',
        component: MenuDocComponent,
    },
];
