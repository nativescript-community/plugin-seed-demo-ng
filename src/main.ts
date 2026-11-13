import { bootstrapApplication, platformNativeScript, provideNativeScriptRouter, runNativeScriptAngularApp } from '@nativescript/angular';

import { installPlugin } from '@nativescript-community/template-snippet/ng/install.module';
import { AppComponent } from './app/app.component';
import { provideZonelessChangeDetection } from '@angular/core';
import { IMAGE_CONFIG } from '@angular/common';
import { routes } from './app/app.routes';
installPlugin();

runNativeScriptAngularApp({
    appModuleBootstrap: () =>
        bootstrapApplication(AppComponent, {
            providers: [
                provideNativeScriptRouter(routes),
                provideZonelessChangeDetection(),
                // NativeScript 9 exposes a global PerformanceObserver, which makes Angular start its
                // browser-only image performance checks (they need a DOM document).
                { provide: IMAGE_CONFIG, useValue: { disableImageSizeWarning: true, disableImageLazyLoadWarning: true } }
            ]
        })
});
