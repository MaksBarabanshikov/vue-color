<script setup lang="ts">
  import {ref} from "vue";

  interface Props {
    isLocked: boolean;
  }

  const props = defineProps<Props>()

  const emit = defineEmits(['handleLocked'])
  // const handleLocked = () => {
  //   locked.value = !locked.value
  //   console.log(locked.value)
  // }

</script>
<template>
  <button @click="$emit('handleLocked')" class="button-lock">
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
