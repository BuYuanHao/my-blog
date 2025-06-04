<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Navbar from './components/Navbar.vue'

const cursor = ref(null)
const cursorPos = ref({ x: 0, y: 0 })
const particles = ref([])
let lastParticleTime = 0

// 鼠标移动事件
const handleMouseMove = (e) => {
  const newPos = { x: e.clientX, y: e.clientY }
  cursorPos.value = newPos
  
  // 限制粒子生成频率，提高性能
  const now = Date.now()
  if (now - lastParticleTime > 50 && Math.random() < 0.2) { // 减少到20%概率，50ms间隔
    createParticle(newPos.x, newPos.y)
    lastParticleTime = now
  }
}

// 创建粒子
const createParticle = (x, y) => {
  // 减少粒子数量限制
  if (particles.value.length > 8) {
    const oldParticle = particles.value.shift()
    if (oldParticle && oldParticle.element && oldParticle.element.parentNode) {
      oldParticle.element.parentNode.removeChild(oldParticle.element)
    }
  }
  
  const particle = document.createElement('div')
  const particleTypes = ['mouse-particle', 'mouse-particle mouse-particle-purple']
  particle.className = particleTypes[Math.floor(Math.random() * particleTypes.length)]
  
  // 减少随机偏移
  const offsetX = (Math.random() - 0.5) * 10
  const offsetY = (Math.random() - 0.5) * 10
  
  particle.style.left = (x + offsetX) + 'px'
  particle.style.top = (y + offsetY) + 'px'
  particle.style.transform = 'translate(-50%, -50%)'
  
  document.body.appendChild(particle)
  
  particles.value.push({
    element: particle,
    timestamp: Date.now()
  })
  
  // 缩短存活时间
  setTimeout(() => {
    if (particle && particle.parentNode) {
      particle.parentNode.removeChild(particle)
    }
  }, 500)
}

// 鼠标悬停事件
const handleMouseEnter = () => {
  document.body.classList.add('custom-cursor-hover')
}

const handleMouseLeave = () => {
  document.body.classList.remove('custom-cursor-hover')
}

// 鼠标点击事件
const handleMouseDown = () => {
  document.body.classList.add('custom-cursor-click')
  
  // 减少点击爆发粒子数量
  const x = cursorPos.value.x
  const y = cursorPos.value.y
  
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      const angle = (360 / 5) * i
      const distance = Math.random() * 20 + 10
      
      const particleX = x + Math.cos(angle * Math.PI / 180) * distance
      const particleY = y + Math.sin(angle * Math.PI / 180) * distance
      
      const burst = document.createElement('div')
      burst.className = 'mouse-particle mouse-particle-purple'
      burst.style.left = particleX + 'px'
      burst.style.top = particleY + 'px'
      burst.style.transform = 'translate(-50%, -50%)'
      burst.style.width = '3px'
      burst.style.height = '3px'
      
      document.body.appendChild(burst)
      
      setTimeout(() => {
        if (burst && burst.parentNode) {
          burst.parentNode.removeChild(burst)
        }
      }, 400)
    }, i * 20)
  }
}

const handleMouseUp = () => {
  document.body.classList.remove('custom-cursor-click')
}

// 清理所有粒子
const clearParticles = () => {
  particles.value.forEach(particle => {
    if (particle.element && particle.element.parentNode) {
      particle.element.parentNode.removeChild(particle.element)
    }
  })
  particles.value = []
}

onMounted(() => {
  // 添加全局鼠标事件监听
  document.addEventListener('mousemove', handleMouseMove, { passive: true })
  document.addEventListener('mousedown', handleMouseDown)
  document.addEventListener('mouseup', handleMouseUp)
  
  // 为所有可交互元素添加悬停效果
  const interactiveElements = 'a, button, [role="button"], input, textarea, select, .cursor-pointer, .tech-card, .tech-button, .timeline-card, .contact-item'
  
  // 使用事件委托
  document.addEventListener('mouseenter', (e) => {
    if (e.target.matches(interactiveElements)) {
      handleMouseEnter()
    }
  }, true)
  
  document.addEventListener('mouseleave', (e) => {
    if (e.target.matches(interactiveElements)) {
      handleMouseLeave()
    }
  }, true)
  
  // 页面离开时清理
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      clearParticles()
    }
  })
})

onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouseMove)
  document.removeEventListener('mousedown', handleMouseDown)
  document.removeEventListener('mouseup', handleMouseUp)
  clearParticles()
})
</script>

<template>
  <div id="app" class="min-h-screen">
    <!-- 自定义鼠标指针 -->
    <div 
      ref="cursor" 
      class="custom-cursor"
      :style="{ left: cursorPos.x + 'px', top: cursorPos.y + 'px' }"
    ></div>
    
    <!-- 导航栏 -->
    <Navbar />
    
    <!-- 主要内容区域 -->
    <main class="relative">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
#app {
  font-family: 'Inter', sans-serif;
  min-height: 100vh;
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
}
</style>
