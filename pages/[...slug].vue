<script setup lang="ts">
import BlurReveal from '~/components/ui/BlurReveal.vue';

</script>

<template>
  <div class="max-w-7xl mx-auto flex items-center z-10 flex-1">
    <main class="w-full bg-background text-foreground space-y-5">
      <NuxtImg v-motion-fade src="https://avatars.githubusercontent.com/u/51285767" class="rounded-full mx-auto block h-20 w-20 border shadow" format="webp" placeholder alt="DimplesY" />

      <ClientOnly>
        <BlurReveal
          :delay="0.2"
          :duration="0.75"
        >
          <h1 class="text-xl md:text-2xl lg:text-3xl font-bold text-center">Hey, I'm DimplesY 👋</h1>
        </BlurReveal>
      </ClientOnly>

      <div v-motion-slide-bottom class="prose mx-auto text-base md:text-lg lg:text-xl text-foreground px-4 box-border">
        <ContentDoc path="/" />
      </div>

      <div v-motion-slide-bottom class="flex gap-4 justify-center">
        <div class="w-20 h-20 rounded-lg cursor-pointer hover:scale-125 transition-all duration-300">
          <a href="https://blog.dimples.top" class="w-full h-full flex justify-center flex-col items-center gap-y-2">
            <img src="https://blog.dimples.top/img/DI-logo.png" class="text-foreground w-10 h-10" >
            <div class="text-sm">My Blog</div>
          </a>
        </div>
        
        <div class="w-20 h-20 rounded-lg cursor-pointer hover:scale-125 transition-all duration-300">
          <a href="https://github.com/DimplesY" class="w-full h-full flex justify-center flex-col items-center gap-y-2">
            <div class="icon-[carbon--logo-github] w-10 h-10"/>
            <div class="text-sm">GitHub</div>
          </a>
        </div>

        <div>
          <div class="w-20 h-20 rounded-lg cursor-pointer hover:scale-125 transition-all duration-300">
            <a href="https://x.com/Dimples_agaoj" class="w-full h-full flex justify-center flex-col items-center gap-y-2">
              <div class="icon-[carbon--logo-x] w-10 h-10"/>
              <div class="text-sm">X</div>
            </a>
          </div>
        </div>

        <div>
          <div class="w-20 h-20 rounded-lg cursor-pointer  hover:scale-125 transition-all duration-300">
            <a href="https://juejin.cn/user/4266553197470408" class="w-full h-full flex justify-center flex-col items-center gap-y-2">
              <img src="https://lf-web-assets.juejin.cn/obj/juejin-web/xitu_juejin_web/6c61ae65d1c41ae8221a670fa32d05aa.svg" class="text-foreground w-10 h-10" >
              <div class="text-sm">JueJin</div>
            </a>
          </div>
        </div>
      </div>
    </main>

    <div class="w-full h-full inset-0 pointer-events-none fixed bg-background bg-[url(https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png)] bg-repeat opacity-5"/>
  </div>
</template>
