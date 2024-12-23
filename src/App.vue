<template>
  <div class="app">
    <h1>Counter Component Demo</h1>
    
    <div class="demo-section">
      <h2>Light Theme</h2>
      <Counter
        title="Basic Counter"
        :initial-count="5"
        theme="light"
        :min-value="0"
        :max-value="20"
        :step-sizes="[1, 2, 5]"
      />
    </div>

    <div class="demo-section">
      <h2>Dark Theme</h2>
      <Counter
        title="Advanced Counter"
        :initial-count="10"
        theme="dark"
        :min-value="0"
        :max-value="50"
        :step-sizes="[5, 10, 15]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Counter from './components/Counter.vue'
</script>

<style>
.app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 2rem;
}

.demo-section {
  margin-bottom: 3rem;
}

.demo-section h2 {
  color: #42b983;
  margin-bottom: 1rem;
}

body {
  background-color: #f5f5f5;
  margin: 0;
  padding: 0;
}
</style>