<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <section class="rounded-xl border border-slate-800 bg-slate-900 p-6">
    <h1 class="text-2xl font-bold text-white">Detail Turnamen #{{ route.params.id }}</h1>
    <p class="mt-2 text-sm text-slate-400">
      Placeholder untuk UC-07 (Dynamic route detail jadwal, format BO1/BO3, venue, prize pool, dan link pendaftaran).
    </p>
  </section>
</template>
