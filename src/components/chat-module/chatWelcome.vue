<template>
  <div class="welcome-wrapper">
    <div class="header">
      <div class="icon">icon</div>
      <div class="title">我是DeepSeek,很高兴见到你</div>
    </div>
    <div class="description">我可以帮你写代码、读文件、写作各种创意内容，请把你的任务交给我吧~</div>
    <div class="input-module">
      <div class="text-input">
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
      <div class="user-control"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {})
</script>

<style lang="scss" scoped>
.welcome-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  .header {
    .icon {
    }
    .title {
    }
  }
  .description {
    color: #f8faff;
    font-size: 14px;
    margin-top: 8px;
  }
  .input-module {
    padding: 10px;
    margin-top: 20px;
    background: rgb(64, 64, 69);
    cursor: text;
    border: 1px solid #536e8c;
    border-radius: 24px;
    display: flex;
    .text-input {
      width: 100%;
      // 12x28(line-height)
      max-height: 336px;
      margin: 0 4px;
      overflow: hidden;
      textarea {
        line-height: 28px;
        color: rgba(245, 245, 245);
      }
    }
    .user-control {
    }
  }
}
</style>
