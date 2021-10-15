<template>
  <div>
    <div>{{ displayDays }}</div>
    <div>{{ displayHours }}</div>
    <div>{{ displayMinutes }}</div>
    <div>{{ displaySeconds }}</div>
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
