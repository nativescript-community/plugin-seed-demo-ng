import { bootstrapApplication, platformNativeScript, provideNativeScriptRouter, runNativeScriptAngularApp } from '@nativescript/angular';

import { installPlugin } from '@nativescript-community/template-snippet/ng/install.module';
import { AppComponent } from './app/app.component';
import { provideZonelessChangeDetection } from '@angular/core';
import { routes } from './app/app.routes';
installPlugin();

runNativeScriptAngularApp({
  appModuleBootstrap: () => {
    
    return bootstrapApplication(AppComponent, {
      providers: [
        provideNativeScriptRouter(routes),
        provideZonelessChangeDetection(),
      ],
    });
  },
});