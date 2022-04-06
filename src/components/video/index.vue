<template>
  <!-- 要传送的小视屏播放窗口 -->
  <div id="small"></div>

  <!-- 被监听出入视口的站位元素 -->
  <div class="observerContainer" id="videoContainer"></div>

  <!-- 初始化播放的大视频窗口 -->
  <div class="bigBox">
    <div id="main"></div>
  </div>

  <!-- 模拟滚动 -->
  <div style="height: 200px"></div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
