<template>
  <el-sub-menu
    v-for="(item, index) in menu"
    :key="index"
    :index="parentIndex ? `${parentIndex}-${index}` : `${index}`"
    @click.stop="emit('clickMenu', item)"
  >
    <template #title>
      <span>{{ item.title }}</span>
    </template>
    <MenuContent
      :menu="item.children"
      :parent-index="parentIndex ? `${parentIndex}-${index}` : `${index}`"
      v-if="item.children?.length"
      @click-menu="(menu) => emit('clickMenu', menu)"
    ></MenuContent>
  </el-sub-menu>
</template>

<script lang="ts" setup>
import type { Directory } from "@/types/config/directory";

defineProps<{
  menu: Directory[];
  parentIndex?: string;
}>();

const emit = defineEmits<{
  (e: "clickMenu", menu: Directory): void;
}>();
</script>

<style></style>
