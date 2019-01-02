import { DocComponent } from './docs';
import App from './App';

export const Routes = [{
    path: '',
    component: App,
    routes: [{
        path: '/components',
        component: DocComponent,
    }],
}];
