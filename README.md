# VelCode — sitio oficial

Landing estática de VelCode. Solo usa HTML5, CSS3 y JavaScript. No hay dependencias, compilación ni backend.

## Abrir y publicar

Abrí `index.html` en un navegador. También podés usar cualquier servidor estático. Para Vercel, importá esta carpeta como proyecto estático, dejá vacío el comando de build y elegí `.` como directorio de salida. El archivo principal debe permanecer en la raíz.

## Cambiar contenido

- **Datos generales, WhatsApp y redes:** `js/config.js`. El número se aplica a todos los enlaces con la clase `wa-link`. El mensaje de cada servicio se cambia en el atributo `data-wa-message` del enlace en `index.html`.
- **Clientes:** guardá sus logos PNG, SVG, JPG o WebP en `assets/images/clients/` y añadí objetos a `clients` en `js/clients.js`. `website` es opcional. Con el arreglo vacío aparece el estado inicial. Si un logo no carga, se muestra el nombre del cliente.
- **Portafolio:** guardá capturas optimizadas en `assets/images/showcase/` y agregá proyectos reales en `js/portfolio.js`. La sección está oculta mientras el arreglo esté vacío.
- **Logotipo oficial:** guardá la versión optimizada en `assets/images/branding/`. El archivo de identidad aún no está incorporado en este paquete; el encabezado y el pie muestran el nombre en texto editable. Cuando dispongas del logo final, reemplazá los bloques `.brand` del HTML por una imagen con un `alt` apropiado. Actualizá también `assets/icons/favicon.svg` con el isotipo oficial.
- **Colores y estilos:** `css/styles.css` contiene variables de color y el diseño base; `css/responsive.css` adapta los tamaños y `css/animations.css` controla el movimiento.

## Antes de publicar con dominio

Agregá la URL oficial a `js/config.js` para documentarla. En `index.html`, añadí `<link rel="canonical" href="https://...">`, `og:url`, y si tenés una imagen social oficial, `og:image` y `twitter:image`. Agregá la URL a los datos JSON-LD. Creá `sitemap.xml` con la URL definitiva y registralo en `robots.txt`. No se incluye un dominio ficticio ni enlaces sociales sin confirmar.

## Notas

Las ventanas de la portada y las ilustraciones de los servicios son composiciones CSS conceptuales; no representan estadísticas reales ni proyectos publicados. Se respeta `prefers-reduced-motion`. Los enlaces externos abren otra pestaña con `rel="noopener noreferrer"`.
