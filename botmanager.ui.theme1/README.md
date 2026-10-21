# botmanager.ui.theme1

Plantilla Coda de panel administrativo en Angular 7, con navegación, layouts, formularios, tablas, gráficos, mapas y ejemplos de interfaz.

Documentación basada en los archivos locales revisados el 21 de octubre de 2026.

<!-- BEGIN project-context -->

## Antigüedad y evidencia

**Año de referencia de esta versión: 2019.** Se toma el archivo de código o configuración más reciente con una fecha histórica recuperable; no se ha podido confirmar la fecha exacta de creación.

- Archivo más reciente datable: **2019-04-24**, [`botmanager.ui.theme1/package-lock.json`](package-lock.json); fecha de modificación conservada.
- Dependencia fechada más reciente entre las comprobadas: [@angular/cli 7.3.8](https://www.npmjs.com/package/@angular/cli/v/7.3.8), publicada el **2019-04-03** (versión fijada en el lockfile), en [`botmanager.ui.theme1/package.json`](package.json). Fecha contrastada con la versión de [`botmanager.ui.theme1/package-lock.json`](package-lock.json).

La publicación de una dependencia sitúa la configuración conservada a partir de esa versión, si la referencia es válida. Una actualización de paquetes puede ser mucho más reciente que el inicio del proyecto. No se restauraron paquetes para comprobarlo.

## Por qué merece la pena mirarlo

El catálogo de componentes Coda y sus layouts es la parte útil: permite explorar navegación, tablas, mapas y gráficos antes de incorporarlos a una aplicación. También ayuda a entender de dónde procede la base visual del gestor de bots.

Puntos de entrada al código:

- [`src/app/layout`](src/app/layout/)
- [`src/app/pages`](src/app/pages/)
- [`angular.json`](angular.json)

<!-- END project-context -->

## Estructura y responsabilidades

| Ruta | Responsabilidad |
| --- | --- |
| `src/app/layout/` | Layout, menú, barra de navegación y componentes del panel. |
| `src/app/pages/` | Ejemplos de componentes, mapas, tablas, widgets y otras pantallas. |
| `src/app/services/` | Datos y soporte de las demostraciones. |
| `src/environments/` | Configuración de entornos. |
| `angular.json, package.json` | Angular CLI y dependencias del tema. |

## Tecnologías y requisitos

Node/npm compatible con Angular 7.1, Angular CLI de esta copia, TypeScript y RxJS 6.3. Incluye Bootstrap, NgRx, Leaflet y componentes de gráficos.

## Preparación y arranque

Preparar un entorno compatible y usar npm start. npm run build compila; los scripts test, lint y e2e también están declarados. Se revisó el código sin ejecutar esos comandos.

Comandos de preparación, desde esta carpeta, después de revisar la configuración privada:

```text
npm install
npm start
```

## Configuración e integraciones

pages.module.ts contiene una clave Google para los ejemplos de mapas. Revisar entornos y servicios de datos antes de conectar la plantilla a servicios propios.

## Estado de esta copia

Comparte estructura y componentes con la biblioteca projects/coda de BotCreator.UI y botmanager.ui. Esta copia es un tema de demostración; no se encontró aquí la gestión de bots del frontend completo. Conservar licencias de la plantilla y recursos de terceros.

La revisión fue estática: no se restauraron dependencias, no se compiló ni se ejecutaron aplicaciones o pruebas. Los comandos anteriores son instrucciones de preparación, no resultados de validación. Las versiones indicadas son las del código conservado.


## Copia pública

Las credenciales originales se han retirado o sustituido por `REPLACE_WITH_YOUR_VALUE`. Los datos locales, sesiones, certificados privados y perfiles de despliegue se omiten. Configurar servicios y credenciales propios antes de ejecutar. La compilación y el funcionamiento con servicios externos no se han validado.
