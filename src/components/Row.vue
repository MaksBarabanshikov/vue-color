<script setup lang="ts">
import {useColors} from "@/store";
import Col from "@/components/Col.vue";

const colors = useColors().colors

</script>

<template>
  <div class="row">
    <Col
        v-for="(item, index) in colors"
        :key="item.hex"
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
