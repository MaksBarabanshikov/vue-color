<script setup lang="ts">
import {Color} from "chroma-js";

interface Props {
  hex: Color;
  luminance: number;
}

const props = defineProps<Props>()

const handleCopy = (hex: string) => {
  navigator.clipboard.writeText(hex)
  alert(`Цвет скопирован! ${hex}`)
}

</script>

<template>
  <h2
      :style="{color: luminance > 0.5 ? 'black' : 'white'}"
      @click="handleCopy(hex)"
  >
    {{ hex }}
  </h2>
</template>

<script lang="ts">
export default {
  name: "hex"
}
</script>

<style scoped>

</style>
