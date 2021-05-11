import { platformNativeScriptDynamic } from '@nativescript/angular';

import { AppModule } from './app/app.module';

import { install } from '../../demo-snippets/ng/install.module';
install();

platformNativeScriptDynamic().bootstrapModule(AppModule);
