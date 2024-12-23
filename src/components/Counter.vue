<template>
  <div class="counter" :class="theme">
    <h2>{{ title }}</h2>
    
    <div class="counter-display">
      <span class="count" :class="{ 'warning': isNearLimit }">{{ count }}</span>
      <div class="limits" v-if="showLimits">
        <span>Min: {{ minValue }}</span>
        <span>Max: {{ maxValue }}</span>
      </div>
    </div>

    <div class="counter-controls">
      <button 
        @click="decrement" 
        class="counter-button"
        :disabled="count <= minValue"
      >-</button>
      
      <div class="step-control">
        <select v-model="currentStep">
          <option v-for="step in stepSizes" :key="step" :value="step">
            Step: {{ step }}
          </option>
        </select>
      </div>

      <button 
        @click="increment" 
        class="counter-button"
        :disabled="count >= maxValue"
      >+</button>
    </div>

    <div class="counter-actions">
      <button @click="reset" class="action-button">Reset</button>
      <button @click="toggleLimits" class="action-button">
        {{ showLimits ? 'Hide' : 'Show' }} Limits
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Props {
  title?: string
  initialCount?: number
  theme?: 'light' | 'dark'
  minValue?: number
  maxValue?: number
  stepSizes?: number[]
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Counter',
  initialCount: 0,
  theme: 'light',
  minValue: 0,
  maxValue: 100,
  stepSizes: () => [1, 5, 10]
})

const count = ref(props.initialCount)
const currentStep = ref(props.stepSizes[0])
const showLimits = ref(false)

const isNearLimit = computed(() => {
  const threshold = Math.min(10, (props.maxValue - props.minValue) * 0.1)
  return (
    count.value <= props.minValue + threshold ||
    count.value >= props.maxValue - threshold
  )
})

function increment() {
  const newValue = count.value + currentStep.value
  count.value = Math.min(newValue, props.maxValue)
}

function decrement() {
  const newValue = count.value - currentStep.value
  count.value = Math.max(newValue, props.minValue)
}

function reset() {
  count.value = props.initialCount
}

function toggleLimits() {
  showLimits.value = !showLimits.value
}

// Expose methods for external use
defineExpose({
  increment,
  decrement,
  reset,
  toggleLimits
})
</script>

<style scoped>
.counter {
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  max-width: 400px;
  margin: 0 auto;
}

.counter.light {
  background-color: #f8f9fa;
  color: #2c3e50;
}

.counter.dark {
  background-color: #2c3e50;
  color: #f8f9fa;
}

.counter-display {
  margin: 2rem 0;
}

.count {
  font-size: 3rem;
  font-weight: bold;
  transition: color 0.3s;
}

.count.warning {
  color: #e74c3c;
}

.limits {
  margin-top: 0.5rem;
  font-size: 0.9rem;
  opacity: 0.8;
}

.limits span {
  margin: 0 0.5rem;
}

.counter-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.counter-button {
  width: 40px;
  height: 40px;
  font-size: 1.5rem;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s;
}

.light .counter-button {
  background-color: #42b983;
  color: white;
}

.dark .counter-button {
  background-color: #42b983;
  color: white;
}

.counter-button:hover:not(:disabled) {
  transform: scale(1.1);
}

.counter-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.step-control select {
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  background-color: white;
  font-size: 1rem;
}

.counter-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.action-button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 0.9rem;
}

.light .action-button {
  background-color: #35495e;
  color: white;
}

.dark .action-button {
  background-color: #42b983;
  color: white;
}

.action-button:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}
</style>
