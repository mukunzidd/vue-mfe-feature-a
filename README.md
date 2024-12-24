# Vue MFE Feature A - Counter Component

[![Tests](https://img.shields.io/badge/tests-8%20passing-brightgreen.svg)](https://github.com/mukunzidd/vue-mfe-feature-a)

A customizable Counter component for Vue.js micro-frontends. Built with Vue 3 and TypeScript.

> 🔗 Part of the Vue MFE ecosystem. Check out [@mknz/vue-mfe-wrapper](https://github.com/mukunzidd/vue-mfe-wrapper) for the core framework.

## Features

- 🎯 Customizable min/max values
- 🔢 Adjustable step sizes
- 🌓 Light/Dark theme support
- 💾 Value validation
- ⚡️ Performance optimized

## Installation

```bash
# Using npm
npm install @mknz/vue-mfe-feature-a

# Using bun
bun add @mknz/vue-mfe-feature-a
```

## Quick Start

```vue
<script setup>
import { Counter } from '@mknz/vue-mfe-feature-a'
</script>

<template>
  <Counter 
    title="My Counter"
    :initial-count="0"
    :min-value="0"
    :max-value="100"
    :step-sizes="[1, 5, 10]"
    theme="light"
  />
</template>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | `'Counter'` | The title displayed above the counter |
| `initialCount` | `number` | `0` | Starting value for the counter |
| `theme` | `'light' \| 'dark'` | `'light'` | Color theme |
| `minValue` | `number` | `0` | Minimum allowed value |
| `maxValue` | `number` | `100` | Maximum allowed value |
| `stepSizes` | `number[]` | `[1, 5, 10]` | Available step sizes for increment/decrement |

## Methods

The component exposes the following methods:

- `increment()`: Increase count by current step size
- `decrement()`: Decrease count by current step size
- `reset()`: Reset to initial value
- `toggleLimits()`: Show/hide min/max limits

## Events

- `@update:count`: Emitted when count changes
- `@limit-reached`: Emitted when min/max limit is reached

## Example with Event Handling

```vue
<script setup>
import { Counter } from '@mknz/vue-mfe-feature-a'

const handleCountUpdate = (newCount) => {
  console.log('New count:', newCount)
}

const handleLimitReached = () => {
  console.log('Limit reached!')
}
</script>

<template>
  <Counter 
    @update:count="handleCountUpdate"
    @limit-reached="handleLimitReached"
  />
</template>
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT 
