import type { Feature } from '@mknz/vue-mfe-wrapper'
import Counter from './components/Counter.vue'
import type { CounterProps, CounterMethods } from './types'

// Export the Counter component type
export type VueMfeFeatureAType = Feature & {
  components: {
    Counter: typeof Counter
  }
}

export const VueMfeFeatureA: VueMfeFeatureAType = {
  name: 'counter',
  components: {
    Counter
  }
}

export { Counter }
export type { CounterProps, CounterMethods }
