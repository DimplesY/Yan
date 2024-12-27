<template>
  <div class="min-h-screen flex flex-col">
    <header class="flex w-full text-foreground justify-between items-center max-w-7xl mx-auto py-6 px-2 border-b border-border">
      <NuxtLink to="/">DimplesY</NuxtLink>
      
      <NuxtLink class="flex items-center justify-center gap-x-2 px-2 rounded transition-all duration-150 hover:bg-muted"  to="/collection">
        <div class="icon-[carbon--book]"/>
        <span>Collection</span>
      </NuxtLink>
    </header>

    <slot />
  </div>
</template>
