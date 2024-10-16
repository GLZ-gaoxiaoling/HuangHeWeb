<template>
  <a-menu v-model:selectedKeys="current" mode="horizontal" :items="items" :style="{ lineHeight: '64px' }" />
</template>

<script lang="ts" setup>
import { h, ref } from 'vue';
import {
  HomeOutlined,
  AppstoreOutlined,
  SettingOutlined,
  SmileOutlined,
  MenuOutlined,
  GlobalOutlined
} from '@ant-design/icons-vue';
import { MenuProps } from 'ant-design-vue';

const current = ref<string[]>(['home']);// 当前选中的菜单项

const items = ref<MenuProps['items']>([
  {
    key: 'logo',
    icon: () => h('img', {
      src: 'https://pro.upload.logomaker.com.cn/2024/08/2408270325168200.png', // Logo图片的URL
      style: 'width:90px; margin: 8px 0px -20px 0px;', // 图片样式
      alt: 'logo'
    }),
    title: 'Logo',
  },
  {
    key: 'home',
    icon: () => h(HomeOutlined),
    label: '首页',
    title: '首页',
  },
  {
    key: 'app',
    icon: () => h(GlobalOutlined),
    label: '新闻发布',
    title: '新闻发布',
  },
  {
    key: 'sub1',
    icon: () => h(MenuOutlined),
    label: '资料下载',
    title: '资料下载',
    children: [
      {
        type: 'group',
        label: '分组1',
        children: [
          {
            label: '选项1',
            key: 'setting:1',
          },
          {
            label: '选项2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: '分组2',
        children: [
          {
            label: '选项3',
            key: 'setting:3',
          },
          {
            label: '选项4',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
  {
    key: 'blog',
    icon: () => h(SmileOutlined),
    label: '博客',
    title: '博客',
  },
]);
</script>
