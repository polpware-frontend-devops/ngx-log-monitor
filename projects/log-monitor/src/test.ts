// This file is required by karma.conf.js and loads recursively all the .spec and framework files

// NOTE: 'core-js/es7/reflect' used to be imported here. That path exists only in
// core-js 2; this package declares core-js ^3.4.7, which removed it, so the import
// had been unresolvable since that upgrade and karma failed to load. Angular 19
// needs no core-js reflect polyfill — zone.js and the TS decorator metadata cover
// it — so the import is dropped rather than repointed.
import 'zone.js';
import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(), {
    teardown: { destroyAfterEach: false }
}
);
