import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { NativeScriptModule } from '@nativescript/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { COMPONENTS, InstallModule } from './plugin/install.module';

@NgModule({
    bootstrap: [AppComponent],
    imports: [NativeScriptModule, AppRoutingModule, InstallModule],
    declarations: [AppComponent, MenuComponent, ...COMPONENTS],
    providers: [],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
