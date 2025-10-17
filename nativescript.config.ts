import { NativeScriptConfig } from '@nativescript/core';

export default {
    id: 'org.nativescript.demong',
    appPath: 'src',
    appResourcesPath: 'App_Resources',
    android: {
        gradleVersion: '8.10.2',
        v8Flags: '--expose_gc',
        markingMode: 'none'
    }
} as NativeScriptConfig;
