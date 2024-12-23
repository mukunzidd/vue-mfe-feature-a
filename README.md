# Vue MFE Feature A

A Vue 3 Counter component for micro-frontend architecture, built with [@mknz/vue-mfe-wrapper](https://www.npmjs.com/package/@mknz/vue-mfe-wrapper).

## Features

- 🎨 Light and Dark themes
- 🔢 Customizable step sizes
- 📊 Min/Max value limits
- 🎯 Visual feedback when near limits
- 🔄 Reset functionality
- 👁️ Show/Hide limits toggle

## Installation

```bash
npm install @mknz/vue-mfe-feature-a
```

## Usage

### With Vue MFE Wrapper

```typescript
// features/index.ts
import { VueMfeFeatureA } from '@mknz/vue-mfe-feature-a'
import '@mknz/vue-mfe-feature-a/style.css'

export { VueMfeFeatureA }
```

```vue
<!-- App.vue -->
<template>
  <FrameworkWrapper :config="config">
    <div v-if="featureLoaded">
      <Counter
        title="My Counter"
        :initial-count="5"
        theme="light"
        :min-value="0"
        :max-value="20"
        :step-sizes="[1, 2, 5]"
      />
    </div>
  </FrameworkWrapper>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { FrameworkWrapper } from '@mknz/vue-mfe-wrapper'
import { VueMfeFeatureA } from './features'

const config = {
  features: [VueMfeFeatureA]
}

const featureLoaded = ref(true)
</script>
```

### Standalone Usage

```vue
<template>
  <Counter
    title="My Counter"
    :initial-count="5"
    theme="light"
    :min-value="0"
    :max-value="20"
    :step-sizes="[1, 2, 5]"
  />
</template>

<script setup lang="ts">
import { Counter } from '@mknz/vue-mfe-feature-a'
import '@mknz/vue-mfe-feature-a/style.css'
</script>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| title | string | 'Counter' | The title displayed above the counter |
| initialCount | number | 0 | The initial value of the counter |
| theme | 'light' \| 'dark' | 'light' | The color theme of the counter |
| minValue | number | 0 | The minimum value the counter can reach |
| maxValue | number | 100 | The maximum value the counter can reach |
| stepSizes | number[] | [1, 5, 10] | Available step sizes for incrementing/decrementing |

## Methods

The Counter component exposes the following methods:

| Method | Description |
|--------|-------------|
| increment() | Increases the counter by the selected step size |
| decrement() | Decreases the counter by the selected step size |
| reset() | Resets the counter to its initial value |
| toggleLimits() | Shows/Hides the min/max value limits |

## License

MIT
