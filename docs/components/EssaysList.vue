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

const needEssays = Object.values(allEssays)
  .map(essay => JSON.parse(essay.__pageData) as PageData)
  .filter(essay => props.tags ? essay.frontmatter?.tags?.includes(props.tags) : essay)
  .sort((a, b) => +new Date(b.frontmatter.lastmod) - +new Date(a.frontmatter.lastmod))
</script>

<template>
  <div>
    <div v-for="({ relativePath, frontmatter }) in needEssays" :key="relativePath" class="essays-list-item">
      <div class="eli-title">
        <a :href="`/${relativePath.slice(0, -3)}.html`" :title="`/${relativePath.slice(0, -3)}`" class="eli-title-link">
          {{ frontmatter.title ?? '无标题' }}
        </a>
      </div>
      <div class="eli-desc">
        {{ frontmatter.description ?? '无简要' }}
      </div>
      <div class="eli-other">
        <div class="eli-other-item eli-tag">
          标签:
          <span v-for="tag in frontmatter.tags" :key="tag">
            {{ tag }}
            <span v-if="tag !== frontmatter.tags.at(-1)">, </span>
          </span>
        </div>
        <div class="eli-other-item  eli-lastmod">
          最后编辑: {{ frontmatter.lastmod ?? '' }}
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
    font-size: 20px;
    font-weight: bold;
    .eli-title-link::after {
      content: '>>';
      padding-left: 3px;
      font-size: 12px;
    }
  }
  .eli-desc {
    margin: 6px 0 2px;
    font-size: 14px;
    color: var(--vp-c-text-2);
  }
  .eli-other {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .eli-other-item {
      font-size: 12px;
      color: var(--vp-c-text-2);
      &.eli-lastmod {
        width: 160px;
      }
    }
  }
}
</style>
