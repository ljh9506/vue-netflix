<template>
  <div id="spinner"></div>
</template>

<script>
export default {};
</script>

<style scoped>
#spinner {
  border: 8px solid black;
  border-right-color: red;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  to {
    transform: rotate(365deg);
  }
}
</style>
