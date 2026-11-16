<template>
  <footer class="bg-yellow-400">
    <div class="max-w-2xl mx-auto text-black py-10 mt-10">
      <div class="text-center">
        <p class="Dancing text-5xl">Você é o seu único limite.</p>
        <h3 class="text-2xl mt-3">Vamos nos conectar?</h3>

        <div class="flex justify-center my-8">
          <a
            class="border rounded-lg px-4 py-2 mx-2 hover:bg-yellow-300"
            href="https://www.linkedin.com/in/rafael-mesquita-a180221a4/"
            target="_blank"
            rel="noopener noreferrer"
          >LinkedIn</a>
          <a
            class="border rounded-lg px-4 py-2 mx-2 hover:bg-yellow-300"
            href="https://github.com/rafaelpmesquita"
            target="_blank"
            rel="noopener noreferrer"
          >GitHub</a>
        </div>
      </div>

      <div class="mt-8 flex flex-col md:flex-row md:justify-between items-center text-sm text-black">
        <p>&copy; Rafael Mesquita, {{ currentYear }}.</p>
        <span class="mt-3 md:mt-0">Desenvolvido com Vue.js e Nuxt.</span>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    currentYear(): number {
      return new Date().getFullYear()
    }
  }
})
</script>
