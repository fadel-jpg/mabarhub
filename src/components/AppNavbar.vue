<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

const navLinks = [
  { label: 'Beranda', to: '/' },
  { label: 'Cari Party', to: '/lfg' },
  { label: 'Turnamen', to: '/turnamen' },
  { label: 'Admin', to: '/admin' },
  { label: 'Tentang', to: '/about' },
]
</script>

<template>
  <header class="border-b border-slate-800 bg-slate-900/90 backdrop-blur">
    <nav class="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
      <RouterLink to="/" class="flex items-center gap-2 text-lg font-bold text-white">
        <i class="fa-solid fa-gamepad text-sky-400"></i>
        <span>MabarHub</span>
      </RouterLink>

      <button
        type="button"
        class="rounded-md p-2 text-slate-300 hover:bg-slate-800 hover:text-white md:hidden"
        aria-label="Buka menu navigasi"
        @click="menuOpen = !menuOpen"
      >
        <i :class="menuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"></i>
      </button>

      <ul class="hidden items-center gap-6 md:flex">
        <li v-for="link in navLinks" :key="link.to">
          <RouterLink
            :to="link.to"
            class="text-sm font-medium text-slate-300 transition hover:text-white"
            active-class="text-sky-400"
          >
            {{ link.label }}
          </RouterLink>
        </li>
      </ul>
    </nav>

    <ul v-if="menuOpen" class="flex flex-col gap-2 border-t border-slate-800 px-4 py-3 md:hidden">
      <li v-for="link in navLinks" :key="link.to">
        <RouterLink
          :to="link.to"
          class="block rounded-md px-3 py-2 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white"
          active-class="bg-slate-800 text-sky-400"
          @click="menuOpen = false"
        >
          {{ link.label }}
        </RouterLink>
      </li>
    </ul>
  </header>
</template>
