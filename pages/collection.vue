<template>
  <div class="text-foreground w-full max-w-7xl mx-auto">

    <h2 class="text-xl h-20 grid place-content-center lg:place-content-start lg:content-center items-center px-5">文章收集</h2>
    <div class="text-foreground/80 text-center lg:text-start lg:leading-10 px-5">这里搜集了一些对我有用文章链接</div>

    <ul class="border-t border-border border-dashed mt-5">
      <li v-for="item in data" :key="item.id" class="p-5 border-b border-border border-dashed w-full hover:bg-muted">
        <NuxtLink class="flex items-center gap-x-4 w-full h-full" :to="item.link">
          <div class="mx-w-1/10 line-clamp-1" >{{ item.title }}</div>
          <div class="text-sm flex items-center gap-x-2">
            <div v-for="tag in item.tags" :key="tag" class="px-1 border-dashed border border-muted rounded">{{ tag }} </div>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import data from '@/content/data.json'
</script>

