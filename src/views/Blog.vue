<template>
  <div class="pt-24 pb-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h1 class="section-title">技术博客</h1>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto">
          分享Java开发经验、技术心得和最佳实践
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article
          v-for="post in blogPosts"
          :key="post.id"
          class="tech-card group cursor-pointer"
        >
          <div class="flex items-center text-sm text-gray-400 mb-3">
            <Calendar class="w-4 h-4 mr-2" />
            {{ post.date }}
            <span class="mx-2">·</span>
            <Tag class="w-4 h-4 mr-1" />
            {{ post.category }}
          </div>
          
          <h3 class="text-lg font-semibold text-white mb-3 group-hover:text-tech-cyan transition-colors duration-300">
            {{ post.title }}
          </h3>
          
          <p class="text-gray-400 text-sm leading-relaxed mb-4">{{ post.excerpt }}</p>
          
          <div class="flex items-center justify-between text-sm">
            <div class="flex items-center">
              <Clock class="w-4 h-4 text-gray-400 mr-1" />
              <span class="text-gray-400">{{ post.readTime }} 分钟阅读</span>
            </div>
            <div class="flex items-center">
              <Eye class="w-4 h-4 text-gray-400 mr-1" />
              <span class="text-gray-400">{{ post.views }}</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Calendar, Tag, Clock, Eye } from 'lucide-vue-next'

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
    title: '微服务架构设计原则与实践',
    excerpt: '从零开始构建微服务架构，分享服务拆分、通信机制、监控告警等关键技术点。',
    date: '2024-01-05',
    category: '微服务',
    readTime: 15,
    views: 1103
  },
  {
    id: 5,
    title: 'MySQL索引优化深度解析',
    excerpt: '深入分析MySQL索引的工作原理，通过实例演示如何进行索引优化以提升查询性能。',
    date: '2024-01-02',
    category: 'MySQL',
    readTime: 11,
    views: 634
  },
  {
    id: 6,
    title: 'Docker容器化部署实战指南',
    excerpt: '从基础概念到实际部署，全面介绍Docker在Java应用中的使用，包括多阶段构建等技巧。',
    date: '2023-12-28',
    category: 'Docker',
    readTime: 9,
    views: 823
  }
]
</script> 