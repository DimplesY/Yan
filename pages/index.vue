<template>
  <div class="min-h-screen container max-w-7xl mx-auto text-foreground py-20 box-border px-5 md:px-10 xl:px-20 border-x border-solid border-zinc-100">

    <NuxtImg v-motion-fade src="https://avatars.githubusercontent.com/u/51285767" class="rounded-full block h-20 w-20 border shadow" format="webp" placeholder alt="DimplesY" />

    <div class="h-10 mt-10">
      <ClientOnly>
        <BlurReveal
          :delay="0.2"
          :duration="0.75"
        >
          <h1 class="text-xl md:text-2xl lg:text-3xl font-bold">Hey, I'm DimplesY 👋</h1>
        </BlurReveal>
      </ClientOnly>
    </div>

    <div v-motion-slide-bottom class="prose prose-gray prose-p:text-gray-400 md:prose-lg text-base">
      <p>
      I'm DimplesY, a full-stack software engineer with a passion for web and app development. I love exploring interesting projects on GitHub and diving deep into the latest technology trends.
      </p>

      <p>
      Coding is one of the most exciting things in the world to me, and I'm always eager to learn and grow. My primary tech stack includes JavaScript/TypeScript, Java, and Python, and I'm also expanding my skills with Rust and Go.
      </p>
    </div>


    <div class="flex flex-col gap-10">
      <div>
        <h2 class="text-2xl font-bold">Skills</h2>
        <ul class="grid grid-cols-2 lg:grid-cols-3 gap-2 mt-2">
          <li class="h-10 grid items-center">JavaScript/TypeScript</li>
          <li class="h-10 grid items-center">Vue</li>
          <li class="h-10 grid items-center">React</li>
          <li class="h-10 grid items-center">Node.js</li>
          <li class="h-10 grid items-center">Java</li>
          <li class="h-10 grid items-center">Python</li>
          <li class="h-10 grid items-center">Go</li>
        </ul>
      </div>
    </div>

  </div>
</template>


<script setup lang="tsx">
import BlurReveal from '~/components/ui/BlurReveal.vue';
</script>
