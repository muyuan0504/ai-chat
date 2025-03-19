import { createRouter, createWebHistory } from 'vue-router'

const AiChat = () => import('@/views/ai-chat/index')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/ai-chat',
    },
    {
      path: '/ai-chat',
      name: 'aiChat',
      component: AiChat,
    },
  ],
})

export default router
