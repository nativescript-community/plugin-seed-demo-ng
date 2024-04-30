import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { NativeScriptModule } from '@nativescript/angular';

import { InstallModule } from '../../../demo-snippets/ng/install.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SimpleGridComponent } from '@nativescript-community/template-snippet/ng/simple-grid/simple-grid.component';
import { HorizontalGridComponent } from '@nativescript-community/template-snippet/ng/horizontal-grid/horizontal-grid.component';
import { SimpleWaterfallComponent } from '@nativescript-community/template-snippet/ng/simple-waterfall/simple-waterfall.component';
import { SimpleTemplatesComponent } from '@nativescript-community/template-snippet/ng/simple-templates/simple-templates.component';
import { SwipeMenuComponent } from '@nativescript-community/template-snippet/ng/swipe-menu/swipe-menu.component';

@NgModule({
    bootstrap: [AppComponent],
    imports: [NativeScriptModule, AppRoutingModule, InstallModule],
    declarations: [AppComponent, MenuComponent, SimpleGridComponent, HorizontalGridComponent, SimpleWaterfallComponent, SimpleTemplatesComponent, SwipeMenuComponent],
    providers: [],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
