<script setup lang="ts">

</script>

<template>
  <div class="min-h-screen max-w-7xl mxa flex items-center">
    <main class="w-full bg-background text-foreground space-y-2xl">
      <NuxtImg v-motion-fade src="https://avatars.githubusercontent.com/u/51285767?v=4" class="rounded-full mxa block h-20 w-20 border shadow border-brand-border" placeholder alt="DimplesY" />

      <h1 v-motion-slide-bottom  class="text-3xl font-bold text-center">DimplesY's Homepage</h1>

      <div v-motion-slide-bottom class="prose mxa px-4 box-border md:px-0 text-xl">
        <ContentDoc path="/" />
      </div>

      <div v-motion-slide-bottom class="flex gap-4 justify-center">
        <div class="w-20 h-20 border-brand-border border-1 rounded-lg cursor-pointer hover:scale-120 transition-all duration-300">
          <a href="https://blog.dimples.top" class="w-full h-full flex justify-center flex-col items-center gap-y-2">
            <img src="https://blog.dimples.top/img/DI-logo.png" class="text-foreground w-10 h-10" >
            <div class="text-sm">My Blog</div>
          </a>
        </div>
        
        <div class="w-20 h-20 border-brand-border border-1 rounded-lg cursor-pointer hover:scale-120 transition-all duration-300">
          <a href="https://github.com/DimplesY" class="w-full h-full flex justify-center flex-col items-center gap-y-2">
            <div class="i-carbon-logo-github text-foreground w-10 h-10"/>
            <div class="text-sm">GitHub</div>
          </a>
        </div>

        <div>
          <div class="w-20 h-20 border-brand-border border-1 rounded-lg cursor-pointer hover:scale-120 transition-all duration-300">
            <a href="https://x.com/Dimples_agaoj" class="w-full h-full flex justify-center flex-col items-center gap-y-2">
              <div class="i-carbon-logo-twitter text-foreground w-10 h-10"/>
              <div class="text-sm">Twitter</div>
            </a>
          </div>
        </div>

        <div>
          <div class="w-20 h-20 border-brand-border border-1 rounded-lg cursor-pointer  hover:scale-120 transition-all duration-300">
            <a href="https://juejin.cn/user/4266553197470408" class="w-full h-full flex justify-center flex-col items-center gap-y-2">
              <img src="https://lf-web-assets.juejin.cn/obj/juejin-web/xitu_juejin_web/6c61ae65d1c41ae8221a670fa32d05aa.svg" class="text-foreground w-10 h-10" >
              <div class="text-sm">JueJin</div>
            </a>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
