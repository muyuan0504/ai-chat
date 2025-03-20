<template>
  <div class="chat-container">
    <div class="side-module">
      <SideBar />
    </div>
    <div class="chat-module">
      <ChatWelcome v-if="isInit" />
      <ChatRoom v-else />
    </div>

    <div class="markdown-body" v-html="renderedMarkdown"></div>
  </div>
</template>

<script setup>
import SideBar from '@/components/chat-module/sideBar'
import ChatWelcome from '@/components/chat-module/chatWelcome'
import ChatRoom from '@/components/chat-module/chatRoom'

import { ref } from 'vue'

const isInit = ref(true)
</script>

<style lang="scss">
.chat-container {
  min-width: 100W;
  min-height: 100vh;
  background: #fff;
  display: flex;
  // background: #292a2d;
  .side-module {
    width: 120px;
  }
  .chat-module {
    box-sizing: border-box;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 800px;
    height: 100%;
    margin: auto;
    padding: 0 64px;
    display: flex;
    position: relative;
  }
}
</style>
