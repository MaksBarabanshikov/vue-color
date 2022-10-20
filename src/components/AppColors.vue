<script setup lang="ts">
  import Row from "@/components/Row.vue";
  import {useColors} from "@/store";
  import {generateInitialColor} from "@/helper/helper";
  import {onBeforeMount, onDeactivated, onMounted} from "vue";

  const colorsStore = useColors()

  const generateColors = () => colorsStore.setColors(generateInitialColor(colorsStore.colors))

  const globalListener = (event) => {
    event.preventDefault()
    if (event.code === "Space") {
      colorsStore.setColors(generateInitialColor(colorsStore.colors))
    }
  }

  generateColors()

  onMounted(() => window.addEventListener('keydown', globalListener))

  onDeactivated(() => window.removeEventListener('keydown', globalListener))
</script>

<template>
  <Row/>
</template>

<script lang="ts">
export default {
  name: "AppColors",
}
</script>

<style scoped>

</style>
