<script setup lang="tsx">
import BlurReveal from '~/components/ui/BlurReveal.vue'

const skillList = [
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  },
  {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
  },
  {
    name: 'Java',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
  },
  {
    name: 'Vue',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg',
  },
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  },
  {
    name: 'Next.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
  },
]
</script>

<template>
  <div class="min-h-screen box-border text-base-content">
    <header class="w-full flex justify-between h-25">
      <div class="flex-1 flex items-center justify-center text-xl">
        DimplesY
      </div>
      <div class="flex-1" />
      <div class="flex-1 flex items-center justify-center">
        <!-- <label class="toggle text-base-content">
          <input type="checkbox" value="light" class="theme-controller">
          <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></g></svg>
          <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></g></svg>
        </label> -->
      </div>
    </header>

    <section class="container max-w-7xl mx-auto px-3 pb-10">
      <NuxtImg v-motion-fade src="https://avatars.githubusercontent.com/u/51285767" class="rounded-full block h-46 mx-auto md:mx-0 w-46" format="webp" placeholder alt="DimplesY" />

      <div class="h-10 mt-10">
        <ClientOnly>
          <BlurReveal
            :delay="0.2"
            :duration="0.75"
          >
            <h1 class="text-xl md:text-2xl lg:text-3xl">
              Hey, I'm DimplesY 👋
            </h1>
          </BlurReveal>
        </ClientOnly>
      </div>

      <div v-motion-slide-bottom class="prose">
        <p>
          I'm DimplesY, a full-stack software engineer with a passion for web and app development. I love exploring interesting projects on GitHub and diving deep into the latest technology trends.
        </p>

        <p>
          Coding is one of the most exciting things in the world to me, and I'm always eager to learn and grow. My primary tech stack includes JavaScript/TypeScript, Java, and Python, and I'm also expanding my skills with Rust and Go.
        </p>
      </div>

      <div class="flex flex-col gap-10 mt-10">
        <div>
          <h2 class="text-2xl font-bold">
            Skills
          </h2>
          <ul class="grid grid-cols-2 lg:grid-cols-3 gap-2 mt-8">
            <li v-for="skill in skillList" :key="skill.name" class="w-full rounded-selector border-base-200 border p-10 gap-5 flex items-center justify-center flex-col">
              <img class="w-10 h-10" :src="skill.icon">
              <span>{{ skill.name }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
