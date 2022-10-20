<script setup lang="ts">
import {storeToRefs} from "pinia";
import {useColors} from "@/store";
import Color from "@/components/Color.vue";

const colorsStore = useColors()

const {colors} = storeToRefs(colorsStore)

</script>

<template>
  <div class="row">
    <Color
        v-for="(item, index) in colors"
        :key="item"
        :id="index"
        :hex='item.hex'
        :isLocked="item.isLocked"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: "Row",
}
</script>

<style scoped>
.row {
  display: flex;
  flex-direction: row;
  width: 100%;
}
</style>
