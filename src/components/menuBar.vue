<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
    menu-trigger="click"
  >
    <el-menu-item index="0">
      <img
        style="width: 50px;"
        src="@/assets/logo.png"
        alt="Project Logo"
      />
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index = "1">Collections</el-menu-item>
    <el-menu-item index="2">Processing Center</el-menu-item>
    <el-sub-menu index="3">
      <template #title>Workspace</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'menuBar',
  setup() {
    const activeIndex = ref('0');
    const handleSelect = (key: string, keyPath: string[]) => {
      console.log(key, keyPath);
    };

    return {
      activeIndex,
      handleSelect,
    };
  },
});
</script>

<style scoped>
.flex-grow {
  flex-grow: 1;
}
</style>
