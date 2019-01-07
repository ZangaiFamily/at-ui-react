import { DocComponent } from './docs';
import App from './App';
import { MenuDocComponent } from './docs/menu-doc/menu-doc.component';
import { ButtonDocComponent } from './docs/button-doc/button-doc.component';
import { DropdownDocComponent } from './docs/dropdown-doc/dropdown-doc.component';

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
        name: '按钮 Button',
        path: '/components/button',
        component: ButtonDocComponent,
    },
    {
        name: '菜单 Menu',
        path: '/components/menu',
        component: MenuDocComponent,
    },
    {
        name: '下拉菜单 DropDown',
        path: '/components/dropdown',
        component: DropdownDocComponent,
    },
];
