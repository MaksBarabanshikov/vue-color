<script setup lang="ts">
  import Row from "@/components/Row.vue";
  import {useColors} from "@/store";
  import {generateInitialColor} from "@/helper/generateRandomColor";
  import {TColors} from "@/types";

  const colors = useColors()

  const generatedColors: TColors = generateInitialColor()

  colors.setColors(generatedColors)
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
