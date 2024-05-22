import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { DefaultComponent } from './default/default.component';

export const COMPONENTS = [DefaultComponent];
@NgModule({
    schemas: [NO_ERRORS_SCHEMA]
})
export class InstallModule {}

export function installPlugin() { }

export const demos = [
    { name: 'Default', path: 'default', component: DefaultComponent }
];
