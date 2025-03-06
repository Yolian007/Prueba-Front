# Prueba-Front

## 📱 Aplicación React Native con TypeScript

Esta es una aplicación desarrollada en React Native utilizando TypeScript, con una interfaz de usuario atractiva que muestra contenido dinámico como destinos populares y alojamientos cercanos.

## 🚀 Comenzando

Sigue estas instrucciones para configurar y ejecutar el proyecto en tu máquina local.

### 📋 Requisitos Previos

Asegúrate de tener instalados los siguientes programas:

- **Node.js** (versión >= 14.x)
- **npm** o **Yarn**
- **Expo CLI** (para facilitar el desarrollo)
- **Android Studio** o **Xcode** (para emulador/simulador)

### 🔧 Instalación

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/Yolian007/Prueba-Front.git
   ```

2. **Instalar dependencias:**

   Usando npm:

   ```bash
   npm install
   ```

   O usando Yarn:

   ```bash
   yarn install
   ```

3. **Instalar Expo CLI globalmente (opcional):**

   ```bash
   npm install -g expo-cli
   ```

### ⚡ Ejecutar la Aplicación

Para iniciar la visualización:

```bash
npx react-native run-android
```

El cual te ejecutara la app directamente en el emulador de Android Studio.

Luego puedes:

- Presionar `i` para ejecutar en el simulador de iOS (solo en Mac)
- Presionar `a` para ejecutar en el emulador de Android
- - Presionar `r` para recargar la app
- Escanear el código QR con la app Expo Go en tu dispositivo móvil



### 🗂️ Estructura del Proyecto

```plaintext
src/
├── assets/
│   ├── icons/
│   │   ├── google.png
│   │   ├── search.png
│   │   └── star.png
│   └── images/
│       ├── bvi.jpg
│       ├── Globo.png
│       ├── hotel.jpeg
│       ├── profile.png
│       ├── thailand.jpg
│       └── villa.jpg
├── components/
│   ├── Button.tsx
│   └── Input.tsx
├── navigation/
├── screens/
│   ├── ContentScreen.tsx
│   ├── IntroScreen.tsx
│   └── LoginScreen.tsx
├── styles/
├── App.tsx
└── .eslintrc.js
```


### 💡 Funcionalidades

- **TypeScript** para mayor seguridad en el código
- Interfaz de usuario dinámica y adaptable
- Navegación fluida con React Navigation
- Componentes reutilizables


### 📦 Construir para Producción

```bash
expo build:android
expo build:ios
```

### ⚠️ Solución de Problemas

- Limpia la caché si encuentras errores:
  ```bash
  cd android
  ./gradlew clean
  cd ..
  ```
- Asegúrate de que los emuladores/simuladores estén configurados correctamente puedes consultar YouTube para saber como configurar las variables de entorno y demas.


