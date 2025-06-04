<template>
  <div class="pt-20">

    <!-- 主要内容：技术文章时间轴 -->
    <section class="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="section-title">最新技术文章</h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            记录技术成长轨迹，分享开发心得
          </p>
        </div>
        
        <div class="timeline-container">
          <div class="timeline-line"></div>
          
          <div
            v-for="post in blogPosts"
            :key="post.id"
            class="timeline-item"
          >
            <div class="timeline-dot"></div>
            <div class="timeline-date">{{ post.date }}</div>
            
            <div class="timeline-card cursor-pointer">
              <span class="timeline-category">{{ post.category }}</span>
              
              <h3 class="timeline-title">
                {{ post.title }}
              </h3>
              
              <p class="timeline-excerpt">{{ post.excerpt }}</p>
              
              <div class="timeline-meta">
                <div class="timeline-stat">
                  <Clock class="w-4 h-4" />
                  <span>{{ post.readTime }}分钟阅读</span>
                </div>
                <div class="timeline-stat">
                  <Eye class="w-4 h-4" />
                  <span>{{ post.views }}次浏览</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="text-center mt-16">
          <router-link to="/blog" class="tech-button">
            查看更多文章
            <ArrowRight class="w-4 h-4 ml-2" />
          </router-link>
        </div>
      </div>
    </section>

    <!-- 个人联系方式 -->
    <section class="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <div class="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-r from-tech-cyan to-tech-purple rounded-full">
            <User class="w-10 h-10 text-white" />
          </div>
          <h2 class="text-3xl font-bold mb-4">关于作者</h2>
          <p class="text-lg text-gray-300 max-w-2xl mx-auto">
            专注Java后端开发，热爱技术分享。在微服务架构、性能优化、系统设计等领域有丰富经验。
            希望通过技术博客与大家分享开发心得，共同成长。
          </p>
        </div>
        
        <div class="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8">
          <!-- 邮箱联系 -->
          <div 
            class="contact-item group cursor-pointer bg-white/10 backdrop-blur-sm border border-white/20 hover:border-tech-cyan/50 rounded-2xl p-6 text-center transition-all duration-300 hover:transform hover:scale-105"
            @click="copyEmail"
          >
            <Mail class="w-10 h-10 text-tech-cyan mx-auto mb-4 group-hover:animate-bounce" />
            <h3 class="text-xl font-semibold mb-2">邮箱联系</h3>
            <p class="text-gray-400 mb-2">171708489@qq.com</p>
            <p class="text-xs text-tech-cyan opacity-75">{{ emailCopyText }}</p>
          </div>
          
          <!-- GitHub -->
          <div 
            class="contact-item group cursor-pointer bg-white/10 backdrop-blur-sm border border-white/20 hover:border-tech-purple/50 rounded-2xl p-6 text-center transition-all duration-300 hover:transform hover:scale-105"
            @click="openGitHub"
          >
            <Github class="w-10 h-10 text-tech-purple mx-auto mb-4 group-hover:animate-bounce" />
            <h3 class="text-xl font-semibold mb-2">GitHub</h3>
            <p class="text-gray-400 mb-2">https://github.com/BuYuanHao</p>
            <p class="text-xs text-tech-purple opacity-75">点击访问</p>
          </div>
        </div>
        
        <div class="text-center mt-12">
          <p class="text-gray-400 text-sm">
            © 2025 Java技术博客. 专注分享，持续学习.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ArrowRight, Clock, Eye, User, Mail, Github } from 'lucide-vue-next'

const emailCopyText = ref('点击复制')

const blogPosts = [
  {
    id: 1,
    title: 'Spring Boot 3.0 新特性详解',
    excerpt: '深入解析Spring Boot 3.0的重要更新，包括对Java 17的支持、原生镜像构建等新特性。',
    date: '2024-01-15',
    category: 'Spring Boot',
    readTime: 8,
    views: 1247
  },
  {
    id: 2,
    title: 'Java虚拟机性能调优实战',
    excerpt: '通过实际案例分享JVM性能调优的技巧和方法，帮助提升应用程序的运行效率。',
    date: '2024-01-12',
    category: 'JVM',
    readTime: 12,
    views: 892
  },
  {
    id: 3,
    title: 'Redis缓存策略最佳实践',
    excerpt: '总结Redis在企业级应用中的缓存策略设计，包括缓存穿透、缓存雪崩等问题的解决方案。',
    date: '2024-01-08',
    category: 'Redis',
    readTime: 10,
    views: 756
  },
  {
    id: 4,
    title: '微服务架构设计原则',
    excerpt: '从零开始构建微服务架构，分享服务拆分、通信机制、监控告警等关键技术点。',
    date: '2024-01-05',
    category: '微服务',
    readTime: 15,
    views: 1103
  },
  {
    id: 5,
    title: 'MySQL索引优化详解',
    excerpt: '深入分析MySQL索引的工作原理，通过实例演示如何进行索引优化以提升查询性能。',
    date: '2024-01-02',
    category: 'MySQL',
    readTime: 11,
    views: 634
  },
  {
    id: 6,
    title: 'Docker部署指南',
    excerpt: '从基础概念到实际部署，全面介绍Docker在Java应用中的使用，包括多阶段构建等技巧。',
    date: '2023-12-28',
    category: 'Docker',
    readTime: 9,
    views: 823
  }
]

// 复制邮箱
const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText('171708489@qq.com')
    emailCopyText.value = '已复制!'
    setTimeout(() => {
      emailCopyText.value = '点击复制'
    }, 2000)
  } catch (err) {
    emailCopyText.value = '复制失败'
    setTimeout(() => {
      emailCopyText.value = '点击复制'
    }, 2000)
  }
}

// 打开GitHub
const openGitHub = () => {
  window.open('https://github.com/BuYuanHao', '_blank')
}
</script>

<style scoped>
.hover-glow {
  transition: all 0.3s ease;
}

.hover-glow:hover {
  box-shadow: 0 0 30px rgba(0, 229, 255, 0.3), 0 0 60px rgba(0, 229, 255, 0.1);
  transform: translateY(-5px) scale(1.02);
}
</style> 