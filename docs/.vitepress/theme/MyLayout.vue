<!-- .vitepress/theme/MyLayout.vue -->
<!-- https://vitepress.vuejs.org/guide/theme-introduction.html#layout-slots -->
<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useRouter } from 'vitepress'

const { Layout } = DefaultTheme

const { route, go } = useRouter()

const backToTop = () => {
  go(route.path)
}

// Full list of slots available in the default theme layout:
// 1. When layout: 'doc' (default) is enabled via frontmatter:
// aside-top
// aside-bottom
// aside-outline-before
// aside-outline-after
// aside-ads-before
// aside-ads-after
// 2. When layout: 'home' is enabled via frontmatter:
// home-hero-before
// home-hero-after
// home-features-before
// home-features-after
</script>

<template>
  <Layout>
    <template #aside-ads-after>
      <div class="back-to-top" @click="backToTop">
        返回顶部
      </div>
    </template>
    <!-- <template #aside-outline-before>
      aside-outline-before
    </template> -->
  </Layout>
</template>

<style lang="less" scoped>
.back-to-top {
  // position: fixed;
  // bottom: 20px;
  // right: 20px;
  // z-index: 999;
  color: var(--vp-c-text-2);
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 16px;
  cursor: pointer;
  transition: all .3s;
}
</style>
