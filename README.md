**Languages:** [English](README.md) · [Español](README.es.md)

# legacy-web-templates

Historical web templates used as foundations for other projects.

<!-- BEGIN project-context -->

## Historical dates and evidence

**Reference year for this version: 2019.** This uses the most recent source or configuration file with a recoverable historical date; the exact creation date could not be confirmed.

- Most recent datable file: **2019-04-24**, [`botmanager.ui.theme1/package-lock.json`](botmanager.ui.theme1/package-lock.json); preserved modification timestamp.
- Earliest record among the original Git repositories included: **2014-12-14**. This may be an import and does not establish when the code was first written.
- Most recently published dependency among those checked: [@angular/cli 7.3.8](https://www.npmjs.com/package/@angular/cli/v/7.3.8), published on **2019-04-03** (version pinned in the lockfile), in [`botmanager.ui.theme1/package.json`](botmanager.ui.theme1/package.json). Cross-checked against the version in [`botmanager.ui.theme1/package-lock.json`](botmanager.ui.theme1/package-lock.json).
- Additional reference: target `v4.5` in [`corporation/corporation.csproj`](corporation/corporation.csproj); its [stable release was published on 2012-08-15](https://dotnet.microsoft.com/en-us/platform/support/policy/dotnet-framework). This indicates the technology generation; earlier preview releases may have existed.

A dependency's publication places the preserved configuration at or after that version, if the reference is valid. Package updates may be much newer than the project's beginnings. Packages were not restored to verify this.

October 2026 copy timestamps and documents generated during this review were excluded. Recoverable dates do not guarantee that there are no later, undated changes.

Reference years by component (most recent datable file):

| Component | Year |
| --- | --- |
| [`blank`](blank/) | 2018 |
| [`botmanager.ui.theme1`](botmanager.ui.theme1/) | 2019 |
| [`corporation`](corporation/) | 2015 |

## Why this is worth exploring

Comparing SmartAdmin in Angular 5, Coda in Angular 7, and the HTML/PHP template shows several ways to build dashboards and websites of that period. The interest lies in layouts and reusable components, with their original attribution.

Code entry points:

- [`blank/src/app/app.routing.ts`](blank/src/app/app.routing.ts)
- [`botmanager.ui.theme1/src/app/layout`](botmanager.ui.theme1/src/app/layout/)
- [`corporation/php`](corporation/php/)

<!-- END project-context -->

## Contents

| Directory | Function |
| --- | --- |
| [`blank/`](blank/) | SmartAdmin administration interface template based on Angular 5.0.5, Bootstrap 3, and numerous dashboard components. |
| [`botmanager.ui.theme1/`](botmanager.ui.theme1/) | Coda administration dashboard template in Angular 7, with navigation, layouts, forms, tables, charts, maps, and interface examples. |
| [`corporation/`](corporation/) | Corporate website with presentation and project pages, Bootstrap/jQuery resources, and PHP email and newsletter forms. |

Metadata in blank and botmanager.ui.theme1 declares MIT. Existing third-party notices are retained; no blanket license is added to others' material.

## Requirements and setup

Angular 5/7, HTML, CSS, JavaScript, and PHP.

This is a historical copy. Consult each component's project files and README for versions and dependencies. Restore NuGet/npm from the appropriate folder; internal libraries may need rebuilding. Prepare databases and external services using your own accounts.

Main JavaScript packages:

- `blank/package.json`
- `botmanager.ui.theme1/package.json`

## Configuration and security

Original secrets have been removed or replaced with `REPLACE_WITH_YOUR_VALUE`. Search for this marker before running and provide values through local configuration or environment variables. Sessions, private keys, signing certificates, databases, logs, deployment profiles, and binary packages are not published. The `.gitignore` protects these local files.

A fresh history is published: old commits remain only in the original local copy. Example values cannot connect to the original services.

## Validation status

A static review and secret scan were performed before publication. Applications, trading operations, deployments, and tests contacting external services were not run. Building with current tools is not guaranteed. Some projects need historical dependencies and assets that are not included.

## Licenses and provenance

Third-party licenses and attributions present in the code are retained. No blanket license is added to components that lacked one. This import preserves local sources and does not claim to be a current version of the original project.
