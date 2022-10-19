<script setup lang="ts">
import {ref} from "vue";
import ButtonLock from "@/components/ButtonLock.vue";
interface Props {
  color: string;
}
const props = defineProps<Props>()

const isLocked = ref(false)

const handleCopy = (text: string) => {
  navigator.clipboard.writeText(text)
  alert(`Цвет скопирован! ${text}`)
}
</script>
<template>
  <div class="col" :style="{ 'background-color': color }">
    <h2 @click="handleCopy(color)">{{color}}</h2>
    <button-lock
        :isLocked="isLocked"
        @handleLocked="isLocked = !isLocked"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: "col",
}
</script>

<style scoped lang="scss">
.col {
  flex: 1;
  background: #ccc;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  h2 {
    padding: 10px;
    font-size: 20px;
    color: #fff;
    border-radius: 10px;
    transition: background 0.3s ease-in-out;

    &:hover {
      background: rgba(0, 0, 0, 0.1);
      cursor: pointer;
    }
  }
}
</style>
