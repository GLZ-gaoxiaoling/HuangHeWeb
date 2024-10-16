<template>
  <div id="app">
    <!-- 导航栏组件 -->
    <HeaderComponent />

    <!-- 主要内容区域 -->
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
// 导入组件
import HeaderComponent from './components/HeaderComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
  }
  // 其他逻辑和数据处理
};
</script>

<style>
/* 全局样式 */
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

main {
  flex-grow: 1;
  padding: 20px;
}
</style>
