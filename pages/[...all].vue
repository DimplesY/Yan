<script setup lang="ts">
import { ContentRenderer } from '#components'

const route = useRoute()
const { data } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})
</script>

<template>
  <main class="container mx-auto prose prose-neutral min-h-screen">
    <ContentRenderer v-if="data" :value="data" />
  </main>
</template>
