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

| Espacio | Archivo | Qué va ahí |
| --- | --- | --- |
| `plato-costillas`, `plato-pescado`, `plato-ensalada-cesar`, `plato-rollitos` | `assets/img/*.jpg` | Fotos de platos, recortadas de las capturas de la carta. Retrato alto (1:2). |
| `cierre` | foto provisional de Wikimedia Commons | La barra de La Jungla de noche, con las botellas iluminadas. Retrato 4:5. |

Para cambiar una foto, reemplaza el archivo en `assets/img/` con el mismo nombre, o cambia la ruta en `build.mjs` y vuelve a correr `node build.mjs`. La foto provisional de la barra lleva su crédito en el pie de página; al cambiarla por una propia, borra ese crédito en `build.mjs`.

## Publicar en GitHub Pages

En el repositorio: Settings, luego Pages, luego "Deploy from a branch", rama `main`, carpeta `/ (root)`. La página queda en `https://aaaaaaaaantonio.github.io/jungla/`. Si se usa otro dominio, cambia la constante `SITE` en `build.mjs`.

## Material de referencia

- `referencias/carta.md`: la carta transcrita de las capturas, con las correcciones de ortografía.
- `referencias/datos.md`: dirección, horario, contacto, identidad visual y pendientes.
- `referencias/carta-capturas/`: las capturas originales de la carta.

## Diseño

Hecho con Hallmark (tema Spore, variante nocturna) usando el verde hoja de la carta del local como único color de acento. Las decisiones están en las primeras líneas de `assets/css/site.css` y en `.hallmark/`.
