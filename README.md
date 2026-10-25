# La Jungla Gastro Bar: propuesta de sitio web

Página de una sola pantalla larga, en español (`index.html`) e inglés (`en/index.html`), para el gastro-bar La Jungla en la Av. Perimetral de Puerto Ayacucho, estado Amazonas. Está pensada para viajeros que llegan al Amazonas y buscan dónde comer, y lleva a reservar o pedir delivery por WhatsApp.

## Verla

Abre `index.html` en el navegador. No necesita servidor.

## Cambiar la carta

Toda la carta, con sus precios en dólares y sus dos idiomas, está en `data/carta.json`. Después de editarla, regenera las dos páginas:

```sh
node build.mjs
```

Un plato con `variantes` muestra el rango de precios y el detalle al tocarlo. Un plato sin `precio` sale como "Consultar" ("Ask" en inglés).

Los textos de la página (títulos, botones, dirección, horario) están en el objeto `T` al principio de `build.mjs`.

## Fotos

Todas salen del Instagram del local (@la__jungla), recortadas de capturas de pantalla sin los íconos ni los textos encima. Las capturas originales están en `referencias/instagram/`.

| Espacio | Archivo | Qué muestra |
| --- | --- | --- |
| `mesa-amigas` | `assets/img/mesa-amigas.jpg` | Tres amigas comiendo en una mesa. Foto grande, retrato 4:5. |
| `pasta-amatriciana` | `assets/img/pasta-amatriciana.jpg` | Pasta amatriciana de cerca. |
| `hamburguesa-brioche` | `assets/img/hamburguesa-brioche.jpg` | Hamburguesa en pan brioche sobre fondo oscuro. |
| `cierre` | `assets/img/barra.jpg` | Una clienta en su mesa, con la barra iluminada detrás. Retrato 4:5. |
| logo | `assets/img/logo-la-jungla.png` | Logo con fondo transparente, recortado de una foto del Instagram. |

Las capturas tienen como mucho 923 px de ancho, así que con las fotos originales (o el logo en vector) la página se vería más nítida. Para cambiar una foto, reemplaza el archivo en `assets/img/` con el mismo nombre.

## Publicar en GitHub Pages

En el repositorio: Settings, luego Pages, luego "Deploy from a branch", rama `main`, carpeta `/ (root)`. La página queda en `https://aaaaaaaaantonio.github.io/jungla/`. Si se usa otro dominio, cambia la constante `SITE` en `build.mjs`.

## Material de referencia

- `referencias/carta.md`: la carta transcrita de las capturas, con las correcciones de ortografía.
- `referencias/datos.md`: dirección, horario, contacto, identidad visual y pendientes.
- `referencias/carta-capturas/`: las capturas originales de la carta.

## Diseño

Hecho con Hallmark (tema Spore, variante nocturna) usando el verde hoja de la carta del local como único color de acento. Las decisiones están en las primeras líneas de `assets/css/site.css` y en `.hallmark/`.
