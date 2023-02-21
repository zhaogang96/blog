<template>
  <el-row class="content-view-container">
    <el-col class="col-left col" :xs="6" :sm="7" :md="6" :lg="5" :xl="4">
      <MenuList @click-menu="handleMenuClick"></MenuList>
    </el-col>
    <el-col class="col-right col" :xs="18" :sm="17" :md="18" :lg="19" :xl="20">
      <div class="content" v-html="state.html"></div
    ></el-col>
  </el-row>
  <!-- <div class="content-view-container"></div> -->
</template>

<script setup lang="ts">
import type { Directory } from "@/types/config/directory";
import { markdownToHtml } from "@/utils/markdownToHtml";
import { reactive } from "vue";
import MenuList from "./LeftMenu/MenuList.vue";

const state = reactive({
  html: "",
});
state.html = (await markdownToHtml("/files/intro.md")) || "";

const handleMenuClick = async (menu: Directory) => {
  if (menu.link) {
    state.html = (await markdownToHtml(`/files/${menu.link}`)) || "";
  }
};
</script>

<style scoped>
.content-view-container {
  box-sizing: border-box;
  height: 100vh;
}

.col {
  height: 100%;
  overflow: scroll;
}

.col.col-left {
  background-color: #545c64;
}

.col-right .content {
  padding: 20px 100px;
}
</style>
