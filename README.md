# legacy-web-templates

Plantillas web históricas usadas como base de otros proyectos.

<!-- BEGIN project-context -->

## Antigüedad y evidencia

**Año de referencia de esta versión: 2019.** Se toma el archivo de código o configuración más reciente con una fecha histórica recuperable; no se ha podido confirmar la fecha exacta de creación.

- Archivo más reciente datable: **2019-04-24**, [`botmanager.ui.theme1/package-lock.json`](botmanager.ui.theme1/package-lock.json); fecha de modificación conservada.
- Primer registro entre los repositorios Git originales incluidos: **2014-12-14**. Puede corresponder a una importación; no prueba cuándo se escribió por primera vez.
- Dependencia fechada más reciente entre las comprobadas: [@angular/cli 7.3.8](https://www.npmjs.com/package/@angular/cli/v/7.3.8), publicada el **2019-04-03** (versión fijada en el lockfile), en [`botmanager.ui.theme1/package.json`](botmanager.ui.theme1/package.json). Fecha contrastada con la versión de [`botmanager.ui.theme1/package-lock.json`](botmanager.ui.theme1/package-lock.json).
- Referencia adicional: destino `v4.5` en [`corporation/corporation.csproj`](corporation/corporation.csproj); su [versión estable se publicó el 2012-08-15](https://dotnet.microsoft.com/en-us/platform/support/policy/dotnet-framework). Es una pista de generación tecnológica; pudieron existir versiones preliminares anteriores.

La publicación de una dependencia sitúa la configuración conservada a partir de esa versión, si la referencia es válida. Una actualización de paquetes puede ser mucho más reciente que el inicio del proyecto. No se restauraron paquetes para comprobarlo.

Se descartaron las marcas de tiempo de la copia de octubre de 2026 y los documentos generados durante esta revisión. Las fechas recuperables no garantizan que no existan cambios posteriores sin datar.

Años de referencia por componente (archivo más reciente datable):

| Componente | Año |
| --- | --- |
| [`blank`](blank/) | 2018 |
| [`botmanager.ui.theme1`](botmanager.ui.theme1/) | 2019 |
| [`corporation`](corporation/) | 2015 |

## Por qué merece la pena mirarlo

Comparar SmartAdmin en Angular 5, Coda en Angular 7 y la plantilla HTML/PHP permite estudiar varias formas de construir paneles y sitios de la época. El interés está en layouts y componentes reutilizables, con sus atribuciones originales.

Puntos de entrada al código:

- [`blank/src/app/app.routing.ts`](blank/src/app/app.routing.ts)
- [`botmanager.ui.theme1/src/app/layout`](botmanager.ui.theme1/src/app/layout/)
- [`corporation/php`](corporation/php/)

<!-- END project-context -->

## Contenido

| Directorio | Función |
| --- | --- |
| [`blank/`](blank/) | Plantilla de interfaz administrativa SmartAdmin basada en Angular 5.0.5, Bootstrap 3 y numerosos componentes de panel de administración. |
| [`botmanager.ui.theme1/`](botmanager.ui.theme1/) | Plantilla Coda de panel administrativo en Angular 7, con navegación, layouts, formularios, tablas, gráficos, mapas y ejemplos de interfaz. |
| [`corporation/`](corporation/) | Sitio corporativo con páginas de presentación y proyectos, recursos Bootstrap/jQuery y formularios PHP para correo y newsletter. |

Los metadatos de blank y botmanager.ui.theme1 declaran MIT. Se conservan los avisos existentes de terceros; no se añade una licencia global sobre materiales ajenos.

## Requisitos y preparación

Angular 5/7, HTML, CSS, JavaScript y PHP.

Esta es una copia histórica. Consultar los archivos de proyecto y los README de cada componente para sus versiones y dependencias. Restaurar NuGet/npm desde la carpeta correspondiente; las bibliotecas internas pueden necesitar reconstrucción. Preparar las bases de datos y los servicios externos con cuentas propias.

Paquetes JavaScript principales:

- `blank/package.json`
- `botmanager.ui.theme1/package.json`

## Configuración y seguridad

Los secretos originales se han eliminado o sustituido por `REPLACE_WITH_YOUR_VALUE`. Buscar este marcador antes de ejecutar y aportar los valores mediante configuración local o variables de entorno. Las sesiones, claves privadas, certificados de firma, bases de datos, registros, perfiles de despliegue y paquetes binarios no se publican. El `.gitignore` protege estos archivos locales.

Se publica un historial nuevo: los commits antiguos permanecen únicamente en la copia local original. Los valores de ejemplo no permiten conectarse a los servicios originales.

## Estado de validación

Se realizó una revisión estática y un escaneo de secretos antes de publicar. No se ejecutaron aplicaciones, operaciones de trading, despliegues ni pruebas que contacten servicios externos. No se garantiza la compilación con herramientas actuales. Algunos proyectos necesitan dependencias históricas y activos que no están incluidos.

## Licencias y procedencia

Se conservan las licencias y atribuciones de terceros presentes en el código. No se añade una licencia global a los componentes que no la tenían. Esta importación conserva fuentes locales y no afirma ser una versión actual del proyecto original.
