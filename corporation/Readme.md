**Languages:** [English](Readme.md) · [Español](README.es.md)

# corporation

Corporate website with presentation and project pages, Bootstrap/jQuery resources, and PHP email and newsletter forms.

Documentation based on local files reviewed on 21 October 2026.

<!-- BEGIN project-context -->

## Historical dates and evidence

**Reference year for this version: 2015.** This uses the most recent source or configuration file with a recoverable historical date; the exact creation date could not be confirmed.

- Most recent datable file: **2015-02-15**, [`corporation/js/promo.js`](js/promo.js); date of the commit modifying the file, recovered from local Git history.
- First record in the original Git repository containing this code: **2014-12-14**. This may be an import and does not establish when the code was first written.
- Additional reference: target `v4.5` in [`corporation/corporation.csproj`](corporation.csproj); its [stable release was published on 2012-08-15](https://dotnet.microsoft.com/en-us/platform/support/policy/dotnet-framework). This indicates the technology generation; earlier preview releases may have existed.

October 2026 copy timestamps and documents generated during this review were excluded. Recoverable dates do not guarantee that there are no later, undated changes.

## Why this is worth exploring

The combination of page variants, styles, and PHP forms shows how corporate sites were assembled using classic templates. It is worth exploring the visual composition and the connection between a browser form and server-side delivery.

Code entry points:

- [`php`](php/)
- [`js`](js/)
- [`css`](css/)

<!-- END project-context -->

## Structure and responsibilities

| Path | Responsibility |
| --- | --- |
| `index.html` | Home page. |
| `projects/, css/, js/, images/, fonts/` | Website pages and resources. |
| `php/mail.php, php/newsletter.php` | Message delivery using PHPMailer. |
| `corporation.csproj, Web.config` | Visual Studio/IIS website container targeting .NET Framework 4.5. |

## Technologies and requirements

A web server for static pages; PHP and SMTP for forms. The Visual Studio project can host the site in IIS, with PHP configured separately.

Targets read from project files: `v4.5`.

## Setup and startup

Serve index.html over HTTP. For forms, configure a PHP interpreter and your own SMTP service in a test environment.

## Configuration and integrations

mail.php and newsletter.php contain literal SMTP passwords. Also review recipients, senders, and forms before enabling them.

## Status of this copy

Includes third-party templates and resources; redistribution permissions were not established.

The review was static: dependencies were not restored, and applications and tests were neither built nor run. The commands above are setup instructions, not validation results. Listed versions describe the preserved code.


## Public copy

Original credentials have been removed or replaced with `REPLACE_WITH_YOUR_VALUE`. Local data, sessions, private certificates, and deployment profiles are omitted. Configure your own services and credentials before running. Building and operation with external services have not been validated.
