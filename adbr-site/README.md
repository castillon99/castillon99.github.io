# AD Bienes Raíces Monterrey — Página Web

Página de presentación profesional de ADBR, publicada en GitHub Pages.

---

## 📁 Estructura de archivos

```
adbr-site/
├── index.html        ← Página principal (no modificar sin asesoría)
├── styles.css        ← Estilos visuales
├── main.js           ← Funciones interactivas
├── asesores.json     ← ✅ AQUÍ editas el directorio de asesores
├── fotos/            ← Carpeta para fotos de asesores
│   ├── asesor1.jpg
│   └── ...
└── README.md         ← Este archivo
```

---

## ✏️ Cómo agregar o modificar un asesor

Edita el archivo `asesores.json`. Cada asesor tiene este formato:

```json
{
  "nombre": "María González",
  "foto": "fotos/maria.jpg",
  "whatsapp": "528112345678",
  "mensaje": "Hola, me contacto desde la página de ADBR."
}
```

**Notas importantes:**
- El número de WhatsApp debe iniciar con `52` (código de México) + 10 dígitos, sin espacios ni guiones
- La foto va en la carpeta `fotos/` con el nombre que pongas aquí
- Puedes cambiar el mensaje de WhatsApp por uno personalizado para cada asesor

---

## 🚀 Publicación en GitHub Pages

1. Sube todos los archivos a tu repositorio `castillon99.github.io`
2. Ve a **Settings → Pages**
3. En "Source", selecciona **Deploy from a branch → main → / (root)**
4. Guarda. En 1-2 minutos la página estará en: `https://castillon99.github.io`

---

## 📋 Fases de construcción

- [x] Fase 1 — Hero, Quiénes Somos, Cómo Trabajamos
- [ ] Fase 2 — Por qué elegirnos, Directorio de Asesores, Formulario de contacto
- [ ] Fase 3 — Testimonios, Footer completo, ajustes visuales
- [ ] Fase 4 — Publicación final y dominio personalizado

---

© 2025 AD Bienes Raíces Monterrey
