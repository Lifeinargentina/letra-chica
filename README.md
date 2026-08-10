# Letra Chica₁ — Astro + Decap CMS

Proyecto editorial estático con Astro y un panel de publicación en `/admin/` mediante Decap CMS.

## 1. Probarlo en tu computadora

Necesitás Node.js instalado.

```bash
npm install
npm run dev
```

Abrí la dirección que muestre Astro, normalmente `http://localhost:4321`.

## 2. Antes de subirlo a GitHub

Abrí `public/admin/config.yml` y reemplazá:

```yml
repo: TU-USUARIO/TU-REPO
```

por tu usuario y repositorio reales, por ejemplo:

```yml
repo: annvv/letra-chica
```

## 3. Publicar artículos

Los artículos viven en:

`src/content/articulos/`

Decap CMS crea archivos Markdown allí. El contenido se valida en `src/content.config.ts`.

Panel editorial:

`https://TU-DOMINIO.com/admin/`

## 4. Autenticación de Decap + GitHub

El backend `github` de Decap necesita autenticación OAuth. La documentación oficial de Decap indica que GitHub requiere un servidor para ese flujo. Podés usar la autenticación de Netlify o configurar un proveedor OAuth externo.

Esta parte no puede quedar preconfigurada sin conocer tu repositorio, dominio y proveedor de deploy.

## 5. Imágenes

Las imágenes subidas desde Decap se guardan en:

`public/img/uploads/`

y se publican como:

`/img/uploads/nombre.jpg`

## 6. Build de producción

```bash
npm run build
```

El sitio generado queda en `dist/`.

## 7. Qué ya está hecho

- Home editorial dinámica.
- Artículos individuales en `/articulos/[slug]/`.
- Archivo cronológico.
- Páginas por categoría.
- Panel Decap CMS.
- Campos de título, bajada, autor, categoría, fecha, imagen, epígrafe, destacados, ubicación en home, tags, SEO y borrador.
- Artículos de ejemplo.
- Diseño responsive.

## 8. Newsletter

El formulario visual está listo, pero todavía no envía emails a ningún proveedor. Para hacerlo funcional hay que conectarlo a un servicio como Buttondown, Mailchimp, Brevo, ConvertKit u otro que elijas.
