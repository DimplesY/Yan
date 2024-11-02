<script setup lang="ts">
</script>

<template>
  <div class="h-screen max-w-7xl mxa flex items-center">
    <main class="w-full h-200 bg-background text-foreground space-y-2xl">
      <NuxtImg src="https://avatars.githubusercontent.com/u/51285767?v=4" class="rounded-full mxa block h-20 w-20 border shadow border-yan-border" placeholder alt="DimplesY" />

      <h1 class="text-3xl text-center">DimplesY's Homepage</h1>

      <div class="prose mxa">
        <ContentDoc path="/" />
      </div>


      <div class="flex gap-2 justify-center">
        <div class="w-20 h-20 border-yan-border border-1 rounded-lg cursor-pointer">
          <a href="https://github.com/DimplesY" class="w-full h-full flex justify-center flex-col items-center">
            <div class="i-carbon-logo-github text-foreground w-10 h-10"/>
            <div class="text-sm">GitHub</div>
          </a>
        </div>

        <div>
          <div class="w-20 h-20 border-yan-border border-1 rounded-lg cursor-pointer">
            <a href="https://x.com/Dimples_agaoj" class="w-full h-full flex justify-center flex-col items-center">
              <div class="i-carbon-logo-twitter text-foreground w-10 h-10"/>
              <div class="text-sm">Twitter</div>
            </a>
          </div>
        </div>

        <div>
          <div class="w-20 h-20 border-yan-border border-1 rounded-lg grid place-content-center cursor-pointer ">
            <a href="https://juejin.cn/user/4266553197470408" class="w-full h-full flex justify-center flex-col items-center">
              <img src="https://lf-web-assets.juejin.cn/obj/juejin-web/xitu_juejin_web/6c61ae65d1c41ae8221a670fa32d05aa.svg" class="text-foreground w-10 h-10" >
              <div class="text-sm">JueJin</div>
            </a>
          </div>
        </div>
      </div>


   </main>
  </div>
</template>
