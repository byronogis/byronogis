<script setup lang="ts">
interface Props {
  tags?: string
}

interface PageData {
  description: string
  frontmatter: any
  headers: any[]
  lastUpdated: string | null
  relativePath: string
  title: string
}

const props = withDefaults(defineProps<Props>(), {
  tags: undefined,
})

const allEssays = import.meta.globEager('/essays/**/*.md')

const needEssays: PageData[] = Object.values(allEssays)
  .map(essay => JSON.parse(essay.__pageData))
  .filter(essay => props.tags ? essay.frontmatter?.tags?.includes(props.tags) : essay)
</script>

<template>
  <div>
    <div v-for="({ relativePath, frontmatter }) in needEssays" :key="relativePath" class="essays-list-item">
      <div class="eli-title">
        <a :href="`/${relativePath.slice(0, -3)}.html`" :title="`/${relativePath.slice(0, -3)}`">
          {{ frontmatter.title ?? '无标题' }}
        </a>
      </div>
      <div class="eli-desc">
        {{ frontmatter.description ?? '无简要' }}
      </div>
      <div class="eli-other">
        <div class="eli-other-item eli-tag">
          tags: {{ frontmatter.tags ?? '无标签' }}
        </div>
        <div class="eli-other-item  eli-lastmod">
          lastUpdated: {{ frontmatter.lastmod ?? '' }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.essays-list-item {
  padding: 10px;
  border-bottom: 1px solid var(--vp-c-divider-light);
  .eli-title {
    font-size: 16px;
    font-weight: bold;
  }
  .eli-desc {
    font-size: 14px;
    color: #666;
  }
  .eli-other {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .eli-other-item {
      font-size: 12px;
      color: #666;
    }
  }
}
</style>
