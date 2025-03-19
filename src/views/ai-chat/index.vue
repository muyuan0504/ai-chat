<template>
  <div class="chat-container">
    <div class="sidebar"></div>
    <div class="chat-module">
      <ChatRoom />
    </div>

    <div class="markdown-body" v-html="renderedMarkdown"></div>
  </div>
</template>

<script setup>
import ChatRoom from '@/components/chat-module/chatRoom'
</script>

<style>
.chat-container {
  min-width: 100W;
  min-height: 100vh;
  background: #fff;
}

</style>
