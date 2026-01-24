# qa-automation-mobile-js
Proyecto de Automatización Mobile - Appium 2 - WebdriverIO

## 📋 Requisitos Previos

- Node.js (v16+)
- Appium 2.x
- Android Studio (para emulador Android)
- Xcode (para simulador iOS - solo macOS)

## 🚀 Instalación

```bash
# Instalar dependencias
npm install

# Instalar Appium 2 globalmente (si no está instalado)
npm install -g appium

# Instalar drivers de Appium
appium driver install uiautomator2
appium driver install xcuitest
```

## 📱 Configuración de Apps

1. Descargar las apps de prueba:
   - **Android**: [ApiDemos-debug.apk](https://github.com/appium/appium/raw/master/packages/appium/sample-code/apps/ApiDemos-debug.apk)
   - **iOS**: [TestApp.app.zip](https://github.com/appium/ios-test-app/releases)

2. Colocar las apps en la carpeta `apps/`:
   ```
   apps/
   ├── ApiDemos-debug.apk
   └── TestApp.app
   ```

## ⚙️ Configuración de Dispositivos

### Android
- Iniciar emulador desde Android Studio o:
  ```bash
  emulator -avd <nombre_avd>
  ```

### iOS
- Ajustar `platformVersion` en `config/wdio.ios.conf.js` según tu versión de Xcode
- El simulador se iniciará automáticamente

## 🏃 Ejecución de Tests

### 1. Iniciar Appium Server
```bash
appium
```

### 2. Ejecutar Tests

```bash
# Tests en Android
npm run test:android

# Tests en iOS
npm run test:ios
```

## 📁 Estructura del Proyecto

```
qa-automation-mobile-js/
├── config/
│   ├── wdio.conf.js           # Configuración base
│   ├── wdio.android.conf.js   # Config Android
│   └── wdio.ios.conf.js       # Config iOS
├── tests/
│   ├── specs/                 # Test cases
│   │   ├── smoke.launch.spec.js
│   │   └── smoke.navigation.spec.js
│   └── pageobjects/           # Page Objects
│       └── MainScreen.page.js
├── apps/                      # Apps de prueba
├── package.json
└── README.md
```

## 🧪 Tests Incluidos

1. **smoke.launch.spec.js**: Valida que la app se lanza y muestra la pantalla principal
2. **smoke.navigation.spec.js**: Valida navegación básica entre pantallas

## 📝 Notas Técnicas

- **Selectores**: Se usa Accessibility ID (~) como estrategia principal
- **Timeouts**: Configurados para 10s por defecto, ajustables en wdio.conf.js
- **Screenshots**: Se capturan automáticamente en caso de fallo
- **Appium 2**: Usa capabilities con prefijo `appium:` (W3C compliant)

## 🔧 Troubleshooting

- **Error de conexión**: Verificar que Appium esté corriendo en puerto 4723
- **App no encontrada**: Verificar rutas en `apps/` y permisos
- **iOS no inicia**: Verificar platformVersion y que Xcode esté instalado
- **Android no inicia**: Verificar que el emulador esté corriendo

## 🚀 CI/CD Ready

El proyecto está preparado para integrarse con GitHub Actions. Configuración pendiente según necesidades del equipo.

## 📚 Recursos

- [Appium 2 Docs](https://appium.io/docs/en/2.0/)
- [WebdriverIO Docs](https://webdriver.io/)
- [Appium Inspector](https://github.com/appium/appium-inspector)
