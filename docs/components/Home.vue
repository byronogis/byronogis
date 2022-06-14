<script setup lang="ts">
import { ref } from 'vue'

const title = ref('')

const content = '谁知道什么会发生在下一个'

let idx = 0

const timer = setInterval(() => {
  title.value += content[idx]
  idx++
  title.value.length === content.length && clearInterval(timer)
}, 200)
</script>

<template>
  <div class="home-container">
    <p class="home-title">
      {{ title }}
      <Transition>
        <template v-if="title.length === content.length">
          <span>…</span>
        </template>
      </Transition>
    </p>

    <div class="home-btn-list">
      <button class="home-btn">
        <a href="/essays" class="home-btn-link">随笔</a>
      </button>
    </div>

    <Earth />
  </div>
</template>

<style lang="less" scoped>
.home-container {
  box-sizing: content-box;

}
.home-title {
  margin: 0.5em 0;
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.5;
  color: var(--vp-c-text-2);
}

.home-btn {
  display: inline-block;
  padding: 0 20px;
  border: 1px solid var(--vp-button-alt-border);
  border-radius: 20px;
  border-color: var(--vp-button-alt-border);
  background-color: var(--vp-button-alt-bg);
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 38px;
  white-space: nowrap;
  color: var(--vp-button-alt-text);
  transition: color 0.25s, border-color 0.25s, background-color 0.25s;

  .home-btn-link {
    color: var(--vp-button-alt-text);
  }

}

.v-enter-active,
.v-leave-active {
  transition: opacity 1.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
