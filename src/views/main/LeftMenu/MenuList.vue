<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu
        active-text-color="#ffd04b"
        background-color="transparent"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
      >
        <MenuContent
          :menu="directory"
          @click-menu="handleMenuClick"
        ></MenuContent>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { directory } from "./directory";
import MenuContent from "@/components/MenuContent.vue";
import type { Directory } from "@/types/config/directory";

const emit = defineEmits<{
  (e: "clickMenu", menu: Directory): void;
}>();

const handleMenuClick = (menu: Directory) => {
  emit("clickMenu", menu);
};
</script>

<style>
.el-menu {
  border-right: 0 !important;
}
</style>
