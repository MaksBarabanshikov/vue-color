<script setup lang="ts">
import {Ref, ref} from "vue";
import {generateRandomColor} from "@/helper/generateRandomColor";
import Col from "@/components/Col.vue";

const items:Ref = ref([])

for (let i = 0; i < 6; i++) {
  items.value.push(generateRandomColor())
}

</script>

<template>
  <div class="row">
    <Col
        v-for="item in items"
        :color='item'
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
