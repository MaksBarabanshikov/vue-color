<script setup lang="ts">

  interface Props {
    isLocked: boolean;
    luminance: number
  }

  defineProps<Props>()

  // const handleLocked = () => {
  //   locked.value = !locked.value
  //   console.log(locked.value)
  // }

</script>
<template>
  <button
      class="button-lock"
      :style="{color: luminance > 0.5 ? 'black' : 'white'}"
  >
    <fa v-if="isLocked" icon="lock"></fa>
    <fa v-else icon="lock-open"></fa>
  </button>
</template>

<script lang="ts">
export default {
  name: "ButtonLock"
}
</script>

<style scoped lang="scss">
.button-lock {
  border: none;
  background: transparent;
  font-size: 1.5rem;
  color: #fff;
  padding: 10px;
  border-radius: 10px;
  transition: background 0.3s ease-in-out;
  width: 48px;
  outline: none;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
}
</style>
