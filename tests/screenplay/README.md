# Screenplay Pattern - Implementación Custom

## 📁 Estructura

```
screenplay/
├── actors/          # Actores que ejecutan acciones
├── abilities/       # Habilidades de los actores
├── tasks/           # Tareas de alto nivel (agrupan interacciones)
├── interactions/    # Interacciones atómicas con la app
└── specs/           # Tests usando Screenplay
```

## 🎭 Componentes

### Actor
Representa al usuario que interactúa con la app.
```javascript
const user = new Actor('Usuario Móvil').can(UseApp.withDriver());
```

### Abilities
Habilidades que el actor puede usar (ej: UseApp).

### Tasks
Tareas de alto nivel que agrupan múltiples interacciones:
- `NavigateToMorseCode` - Navega a la pantalla de Morse Code
- `SendMorseCode` - Envía un código morse
- `PerformAnimation` - Realiza animaciones y agrega botones
- `CalculateSum` - Calcula suma de dos números
- `OpenTestGesture` - Abre pantalla de gestos

### Interactions
Acciones atómicas:
- `Tap.on(selector)` - Hace clic en un elemento
- `Enter.text(value).into(selector)` - Ingresa texto
- `Wait.for(milliseconds)` - Pausa la ejecución

## 🚀 Uso

```javascript
await user.attemptsTo(
  NavigateToMorseCode.now(),
  SendMorseCode.withText('123'),
  Wait.for(2000)
);
```

## ▶️ Ejecutar Tests

### Android
```bash
# Morse Code
npm run test:android -- --spec=tests/screenplay/specs/android.morse.screenplay.spec.js

# Animaciones
npm run test:android -- --spec=tests/screenplay/specs/android.animation.screenplay.spec.js

# Todos los tests Android
npm run test:android -- --spec=tests/screenplay/specs/android.*.spec.js
```

### iOS
```bash
# Gesture
npm run test:ios -- --spec=tests/screenplay/specs/ios.gesture.screenplay.spec.js

# Suma
npm run test:ios -- --spec=tests/screenplay/specs/ios.a.suma.screenplay.spec.js

# Todos los tests iOS
npm run test:ios -- --spec=tests/screenplay/specs/ios.*.spec.js
```

### Todos los tests Screenplay
```bash
# Android
npm run test:android -- --spec=tests/screenplay/specs/*.spec.js

# iOS
npm run test:ios -- --spec=tests/screenplay/specs/*.spec.js
```

## 🔄 Comparación

**POM:**
```javascript
await ApiDemosPage.tapOS();
await ApiDemosPage.tapMorseCode();
await ApiDemosPage.enterText('123');
await driver.pause(2000);
```

**Screenplay:**
```javascript
await user.attemptsTo(
  NavigateToMorseCode.now(),
  SendMorseCode.withText('123'),
  Wait.for(2000)
);
```

## ✅ Ventajas

- Lenguaje más expresivo y cercano al negocio
- Reutilización de tareas e interacciones
- Separación clara de responsabilidades
- Fácil de extender y mantener
- Tests más legibles y mantenibles

## 📋 Tests Convertidos

### Android
- ✅ `android.morse.screenplay.spec.js` - Morse Code
- ✅ `android.animation.screenplay.spec.js` - Animaciones

### iOS
- ✅ `ios.gesture.screenplay.spec.js` - Test Gesture
- ✅ `ios.suma.screenplay.spec.js` - Suma de números

## 🔧 Extender el Framework

### Crear nueva Task
```javascript
const Tap = require('../interactions/Tap');

class MyNewTask {
  static perform() {
    return new MyNewTask();
  }

  async performAs(actor) {
    await actor.attemptsTo(
      Tap.on('~selector')
    );
  }
}

module.exports = MyNewTask;
```

### Crear nueva Interaction
```javascript
class MyInteraction {
  static do() {
    return new MyInteraction();
  }

  async performAs(actor) {
    // Implementación
  }
}

module.exports = MyInteraction;
```
