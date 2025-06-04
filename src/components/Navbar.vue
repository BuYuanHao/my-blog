<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200/50 shadow-glow-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <!-- Logo -->
        <div class="flex items-center">
          <router-link to="/" class="flex items-center space-x-3 group">
            <div class="tech-icon group-hover:animate-bounce-tech">
              <Code class="w-6 h-6" />
            </div>
            <span class="text-2xl font-black bg-gradient-to-r from-tech-cyan to-tech-purple bg-clip-text text-transparent">
              buyuanhao
            </span>
            <div class="hidden md:flex ml-2">
              <div class="w-2 h-2 bg-tech-cyan rounded-full animate-ping"></div>
              <div class="w-2 h-2 bg-tech-purple rounded-full animate-ping ml-1" style="animation-delay: 0.2s"></div>
              <div class="w-2 h-2 bg-tech-neon rounded-full animate-ping ml-1" style="animation-delay: 0.4s"></div>
            </div>
          </router-link>
        </div>

        <!-- 桌面端导航菜单 -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-1">
            <router-link
              v-for="item in navigation"
              :key="item.name"
              :to="item.to"
              class="nav-link"
              :class="{ 'nav-link-active': $route.path === item.to }"
            >
              <component :is="item.icon" class="w-5 h-5" />
              {{ item.name }}
            </router-link>
          </div>
        </div>

        <!-- 科技感装饰元素 -->
        <div class="hidden md:flex items-center space-x-4">
          <div class="tech-indicator">
            <div class="w-3 h-3 bg-tech-neon rounded-full animate-pulse-tech"></div>
          </div>
          <span class="text-sm font-mono text-gray-600">TECH BLOG</span>
        </div>

        <!-- 移动端菜单按钮 -->
        <div class="md:hidden">
          <button
            @click="toggleMobileMenu"
            class="tech-icon text-white transition-all duration-300 hover:animate-wave"
          >
            <Menu v-if="!mobileMenuOpen" class="w-6 h-6" />
            <X v-else class="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- 移动端菜单 -->
    <div v-if="mobileMenuOpen" class="md:hidden animate-slide-up">
      <div class="px-2 pt-2 pb-6 space-y-2 sm:px-3 bg-white/95 backdrop-blur-xl border-t border-gray-200/50">
        <router-link
          v-for="item in navigation"
          :key="item.name"
          :to="item.to"
          @click="closeMobileMenu"
          class="nav-link-mobile"
        >
          <component :is="item.icon" class="w-5 h-5" />
          {{ item.name }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { Home, BookOpen, Code, Menu, X } from 'lucide-vue-next'

const mobileMenuOpen = ref(false)

const navigation = [
  { name: '首页', to: '/', icon: Home },
  { name: '博客', to: '/blog', icon: BookOpen },
]

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>

<style scoped>
.nav-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: rgb(55 65 81);
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
}

.nav-link:hover {
  color: white;
  background: linear-gradient(to right, #00e5ff, #7c3aed);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0,229,255,0.3);
}

.nav-link::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 3px;
  background: linear-gradient(90deg, #00e5ff, #7c3aed);
  transition: width 0.3s ease;
  border-radius: 2px;
}

.nav-link:hover::before,
.nav-link-active::before {
  width: 100%;
}

.nav-link-active {
  color: white;
  background: linear-gradient(to right, #00e5ff, #7c3aed);
  box-shadow: 0 0 20px rgba(0,229,255,0.3), 0 0 40px rgba(0,229,255,0.1);
}

.nav-link-mobile {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  color: rgb(55 65 81);
  transition: all 0.3s;
  transform: scale(1);
}

.nav-link-mobile:hover {
  color: white;
  background: linear-gradient(to right, #00e5ff, #7c3aed);
  transform: scale(1.05);
}
</style> 