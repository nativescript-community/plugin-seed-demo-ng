import { Routes } from '@angular/router';

import { demos } from '../../../demo-snippets/ng/install.module';
import { MenuComponent } from './menu/menu.component';

const demoRoutes = [];

for (const demo of demos) {
    demoRoutes.push({ path: demo.path, component: demo.component });
}

export const routes: Routes = [
  { path: '', redirectTo: '/menu', pathMatch: 'full' }, { path: 'menu', component: MenuComponent },
  ...demoRoutes

];