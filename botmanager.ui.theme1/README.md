**Languages:** [English](README.md) · [Español](README.es.md)

# botmanager.ui.theme1

Coda administration dashboard template in Angular 7, with navigation, layouts, forms, tables, charts, maps, and interface examples.

Documentation based on local files reviewed on 21 October 2026.

<!-- BEGIN project-context -->

## Historical dates and evidence

**Reference year for this version: 2019.** This uses the most recent source or configuration file with a recoverable historical date; the exact creation date could not be confirmed.

- Most recent datable file: **2019-04-24**, [`botmanager.ui.theme1/package-lock.json`](package-lock.json); preserved modification timestamp.
- Most recently published dependency among those checked: [@angular/cli 7.3.8](https://www.npmjs.com/package/@angular/cli/v/7.3.8), published on **2019-04-03** (version pinned in the lockfile), in [`botmanager.ui.theme1/package.json`](package.json). Cross-checked against the version in [`botmanager.ui.theme1/package-lock.json`](package-lock.json).

A dependency's publication places the preserved configuration at or after that version, if the reference is valid. Package updates may be much newer than the project's beginnings. Packages were not restored to verify this.

## Why this is worth exploring

The useful part is Coda's component catalogue and layouts: you can explore navigation, tables, maps, and charts before integrating them into an application. It also shows the origins of the bot manager's visual foundation.

Code entry points:

- [`src/app/layout`](src/app/layout/)
- [`src/app/pages`](src/app/pages/)
- [`angular.json`](angular.json)

<!-- END project-context -->

## Structure and responsibilities

| Path | Responsibility |
| --- | --- |
| `src/app/layout/` | Layout, menu, navigation bar, and dashboard components. |
| `src/app/pages/` | Component examples, maps, tables, widgets, and other screens. |
| `src/app/services/` | Demonstration data and supporting code. |
| `src/environments/` | Environment configuration. |
| `angular.json, package.json` | Angular CLI and theme dependencies. |

## Technologies and requirements

Node/npm compatible with Angular 7.1, this copy's Angular CLI, TypeScript, and RxJS 6.3. Includes Bootstrap, NgRx, Leaflet, and chart components.

## Setup and startup

Prepare a compatible environment and use npm start. npm run build compiles the application; test, lint, and e2e scripts are also declared. The code was reviewed without running those commands.

Setup commands, run from this folder after reviewing private configuration:

```text
npm install
npm start
```

## Configuration and integrations

pages.module.ts contains a Google key for map examples. Review environments and data services before connecting the template to your own services.

## Status of this copy

Shares structure and components with the projects/coda library in BotCreator.UI and botmanager.ui. This copy is a demonstration theme; the full frontend's bot management was not found here. Preserve template and third-party resource licenses.

The review was static: dependencies were not restored, and applications and tests were neither built nor run. The commands above are setup instructions, not validation results. Listed versions describe the preserved code.


## Public copy

Original credentials have been removed or replaced with `REPLACE_WITH_YOUR_VALUE`. Local data, sessions, private certificates, and deployment profiles are omitted. Configure your own services and credentials before running. Building and operation with external services have not been validated.
