# corporation

Sitio corporativo con páginas de presentación y proyectos, recursos Bootstrap/jQuery y formularios PHP para correo y newsletter.

Documentación basada en los archivos locales revisados el 21 de octubre de 2026.

<!-- BEGIN project-context -->

## Antigüedad y evidencia

**Año de referencia de esta versión: 2015.** Se toma el archivo de código o configuración más reciente con una fecha histórica recuperable; no se ha podido confirmar la fecha exacta de creación.

- Archivo más reciente datable: **2015-02-15**, [`corporation/js/promo.js`](js/promo.js); fecha del commit que modificó el archivo, recuperada del Git local.
- Primer registro del repositorio Git original que contiene este código: **2014-12-14**. Puede corresponder a una importación; no prueba cuándo se escribió por primera vez.
- Referencia adicional: destino `v4.5` en [`corporation/corporation.csproj`](corporation.csproj); su [versión estable se publicó el 2012-08-15](https://dotnet.microsoft.com/en-us/platform/support/policy/dotnet-framework). Es una pista de generación tecnológica; pudieron existir versiones preliminares anteriores.

Se descartaron las marcas de tiempo de la copia de octubre de 2026 y los documentos generados durante esta revisión. Las fechas recuperables no garantizan que no existan cambios posteriores sin datar.

## Por qué merece la pena mirarlo

La combinación de variantes de páginas, estilos y formularios PHP muestra cómo se componía un sitio corporativo con una plantilla clásica. Merece la pena para revisar composición visual y el puente entre un formulario del navegador y su envío desde el servidor.

Puntos de entrada al código:

- [`php`](php/)
- [`js`](js/)
- [`css`](css/)

<!-- END project-context -->

## Estructura y responsabilidades

| Ruta | Responsabilidad |
| --- | --- |
| `index.html` | Página principal. |
| `projects/, css/, js/, images/, fonts/` | Páginas y recursos del sitio. |
| `php/mail.php, php/newsletter.php` | Envío de mensajes con PHPMailer. |
| `corporation.csproj, Web.config` | Contenedor de sitio web para Visual Studio/IIS con destino .NET Framework 4.5. |

## Tecnologías y requisitos

Un servidor web para las páginas estáticas; PHP y SMTP para los formularios. El proyecto de Visual Studio permite alojar el sitio en IIS, con PHP configurado por separado.

Destinos leídos de los proyectos: `v4.5`.

## Preparación y arranque

Servir index.html por HTTP. Para los formularios, configurar el intérprete PHP y un servicio SMTP propio en un entorno de pruebas.

## Configuración e integraciones

Los scripts mail.php y newsletter.php contienen literales de contraseña SMTP. También revisar destinatarios, remitentes y formularios antes de habilitarlos.

## Estado de esta copia

Incluye plantillas y recursos de terceros; no se determinó su permiso de redistribución.

La revisión fue estática: no se restauraron dependencias, no se compiló ni se ejecutaron aplicaciones o pruebas. Los comandos anteriores son instrucciones de preparación, no resultados de validación. Las versiones indicadas son las del código conservado.


## Copia pública

Las credenciales originales se han retirado o sustituido por `REPLACE_WITH_YOUR_VALUE`. Los datos locales, sesiones, certificados privados y perfiles de despliegue se omiten. Configurar servicios y credenciales propios antes de ejecutar. La compilación y el funcionamiento con servicios externos no se han validado.
