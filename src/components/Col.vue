<script setup lang="ts">
import ButtonLock from "@/components/ButtonLock.vue";
import { useColors } from "@/store";

interface Props {
  id: number
  hex: string;
  isLocked: boolean;
}
const props = defineProps<Props>()

const colors = useColors();

const handleLocked = (id) => colors.changeLockStatus(id)

const handleCopy = (text: string) => {
  navigator.clipboard.writeText(text)
  alert(`Цвет скопирован! ${text}`)
}

</script>
<template>
  <div class="col" :style="{ 'background-color': hex }">
    <h2 @click="handleCopy(hex)">{{hex}}</h2>
    <button-lock
        :isLocked="isLocked"
        @click="handleLocked(id)"
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
