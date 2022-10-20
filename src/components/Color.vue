<script setup lang="ts">
import ButtonLock from "@/components/ButtonLock.vue";
import { useColors } from "@/store";
import Hex from "@/components/Hex.vue";
import {luminance} from "@/helper/helper";
import chroma, {Color} from "chroma-js";
import {computed} from "vue";

interface Props {
  id: number
  hex: Color;
  isLocked: boolean;
}
const props = defineProps<Props>()

const colors = useColors();

const luminance = computed(() => chroma(props.hex || 'black').luminance())

const handleLocked = (id) => colors.changeLockStatus(id)
</script>
<template>
  <div class="col" :style="{ 'background-color': hex }">
    <hex
        :hex="hex"
        :luminance="luminance"
    />
    <button-lock
        :isLocked="isLocked"
        :luminance="luminance"
        @click="handleLocked(id)"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: "Color",
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
