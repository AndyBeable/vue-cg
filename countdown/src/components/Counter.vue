<template>
  <div class="counter__container">
    <div class="counter__item">
      <p>{{ displayDays }}</p>
      <div class="label">Days</div>
    </div>
    <div class="counter__item">
      <p>{{ displayHours }}</p>
      <div class="label">Hours</div>
    </div>
    <div class="counter__item">
      <p>{{ displayMinutes }}</p>
      <div class="label">Minutes</div>
    </div>
    <div class="counter__item">
      <p>{{ displaySeconds }}</p>
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

  computed: {
    seconds() {
      return () => 1000;
    },
    minutes() {
      return this.seconds * 60;
    },
    hours() {
      return this.minutes * 60;
    },
    days() {
      return this.hours * 24;
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.counter__container {
  display: flex;
  justify-content: center;
}

.counter__item {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.counter__item p {
  font-size: 2.5rem;
}

.counter__item:not(:last-of-type) {
  margin-right: 1.5rem;
}
</style>
