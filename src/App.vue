<template>
  <div id="app" class="wrapper">
    <!-- 保留组件 -->
    <keep-alive exclude="detail">
    <!-- 组件展示占位 -->
      <router-view />
    </keep-alive>
    <!-- 全局导航栏 -->
      <main-tab-bar />
  </div>
</template>

<script>
import MainTabBar from "components/content/MainTabBar"

export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
  @import url("assets/css/base.css");
</style>
