<template>
  <div class="welcome-wrapper">
    <div class="header">
      <div class="icon">icon</div>
      <div class="title">我是DeepSeek,很高兴见到你</div>
    </div>
    <div class="description">我可以帮你写代码、读文件、写作各种创意内容，请把你的任务交给我吧~</div>
    <div class="input-module">
      <div class="text-input">
        <div class="text-module">
          <textarea v-model="inputText" name="" id="" cols="30" rows="10"></textarea>
          <div class="text-frame">{{ inputText }}</div>
        </div>
      </div>
      <div class="user-control">
        <a-button type="primary" :icon="h(ApiOutlined)">深度思考</a-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, h } from 'vue'
import { ApiOutlined } from '@ant-design/icons-vue'

const inputText = ref('')

onMounted(() => {})
</script>

<style lang="scss" scoped>
.welcome-wrapper {
  width: 100%;
  height: 100%;
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
    width: 100%;
    margin-top: 20px;
    background: rgb(243, 244, 246);
    cursor: text;
    border: 1px solid #dce0e9;
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    position: relative;
    .text-input {
      width: 100%;
      padding: 10px;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      z-index: 1;
      border-radius: 24px;
      box-shadow: 0px 0px 0px 0.5px #dce0e9;
      .text-module {
        width: 100%;
        // 12x28(line-height)
        max-height: 336px;
        display: flex;
        margin: 0 4px;
        position: relative;
        textarea {
          resize: none;
          display: block;
          width: 100%;
          background: rgb(243, 244, 246);
          line-height: 28px;
          margin: 0;
          padding: 0;
          border: none;
          outline: none;
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          word-break: break-word;
          white-space: pre-wrap;
          overflow: auto;
        }
        .text-frame {
          pointer-events: none;
          min-height: 56px;
          visibility: hidden;
          word-break: break-word;
          white-space: pre-wrap;
          border: none;
          width: 100%;
          margin: 0;
          padding: 0;
        }
      }
    }
    .user-control {
    }
  }
}
</style>
