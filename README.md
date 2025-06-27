# Cursito - Aplicación Node.js con TypeScript

Una aplicación web construida con Node.js, TypeScript y Express siguiendo una arquitectura limpia y escalable.

## 🚀 Características

- **TypeScript**: Desarrollo con tipado estático para mayor seguridad y productividad
- **Express.js**: Framework web rápido y minimalista
- **Arquitectura Limpia**: Organización del código en capas (domain, infrastructure, presentation)
- **Hot Reload**: Desarrollo con recarga automática usando ts-node-dev
- **Variables de Entorno**: Configuración segura usando dotenv y env-var

## 📁 Estructura del Proyecto

```
├── src/
│   ├── app.ts                 # Punto de entrada de la aplicación
│   ├── config/
│   │   └── envs.ts           # Configuración de variables de entorno
│   ├── domain/               # Lógica de negocio y entidades
│   ├── infrastructure/       # Acceso a datos y servicios externos
│   └── presentation/
│       └── server.ts         # Configuración del servidor Express
├── dist/                     # Archivos compilados (generados automáticamente)
├── package.json
├── tsconfig.json
└── README.md
```

## 🛠️ Instalación

### Requisitos Previos

- Node.js (versión 18 o superior)
- npm o yarn

 **Configurar variables de entorno**
   ```bash
   # Crear archivo .env en la raíz del proyecto
   PORT=3000
   ```

## 🚀 Scripts Disponibles

### Instalar Dependencias
```bash
npm install
```

### Desarrollo
```bash
npm run dev
```
Inicia el servidor en modo desarrollo con hot reload. Los cambios se reflejan automáticamente.

### Construcción
```bash
npm run build
```
Compila el código TypeScript a JavaScript en la carpeta `dist/`.

### Producción
```bash
npm start
```
Construye la aplicación y ejecuta la versión de producción.

## 🧪 Desarrollo

### Configuración Inicial del Proyecto

Si quieres replicar la configuración desde cero:

1. **Inicializar proyecto**
   ```bash
   npm init -y
   ```

2. **Instalar dependencias de desarrollo**
   ```bash
   npm i -D typescript @types/node ts-node-dev rimraf
   ```

3. **Instalar dependencias de producción**
   ```bash
   npm i express @types/express dotenv env-var
   ```

4. **Configurar TypeScript**
   ```bash
   npx tsc --init --outDir dist/ --rootDir src
   ```

## 📝 API Endpoints

Por el momento, la aplicación expone:

- **GET /** - Endpoint básico del servidor

## 🌍 Variables de Entorno

| Variable | Descripción | Valor por Defecto |
|----------|-------------|-------------------|
| `PORT` | Puerto del servidor | `3000` |
