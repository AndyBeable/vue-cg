<template>
  <div class="counter__container">
    <div class="counter__item">
      {{ displayDays }}
      <div class="label">days</div>
    </div>
    <div class="counter__item">
      {{ displayHours }}
      <div class="label">Hours</div>
    </div>
    <div class="counter__item">
      {{ displayMinutes }}
      <div class="label">Minutes</div>
    </div>
    <div class="counter__item">
      {{ displaySeconds }}
      <div class="label">Seconds</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      displayDays: 0,
      displayHours: 0,
      displayMinutes: 0,
      displaySeconds: 0,
    };
  },
};
</script>

<style scoped>
.counter__container {
  display: flex;
  justify-content: center;
}

.counter__item {
  font-size: 1.5rem;
}

.counter__item:not(:last-of-type) {
  margin-right: 1.5rem;
}
</style>
