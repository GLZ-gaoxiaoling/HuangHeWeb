<template>
  <a-menu v-model:selectedKeys="current" mode="horizontal" :items="items" />
</template>
<script lang="ts" setup>
import { h, ref } from 'vue';
import { HomeOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
import { MenuProps } from 'ant-design-vue';
const current = ref<string[]>(['mail']);

const items = ref<MenuProps['items']>([
  {
    key: 'logo',
    icon: () => h('img', {
      src: 'https://pro.upload.logomaker.com.cn/2024/08/2408270325168200.png',
      style: 'width:50px;  margin: 8px 0px 0px 0px;',
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
    icon: () => h(AppstoreOutlined),
    label: '新闻发布',
    title: 'Navigation Two',
  },
  {
    key: 'sub1',
    icon: () => h(SettingOutlined),
    label: '资料下载',
    title: 'Navigation Three - Submenu',
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
  {
    key: 'alipay',
    label: '博客',
    title: 'Navigation Four - Link',
  },
]);
</script>

