<script setup lang="ts">
const {
	name,
	url
} = defineProps<{
	name: string
	url?: string
}>()
</script>

<template>
	<TechItemNuxt v-if="name.toLowerCase() === 'nuxt.js'" />
	<TechItemVue v-else-if="name.toLowerCase() === 'vue.js'" />
	<TechItemSCSS v-else-if="name.toLowerCase() === 'scss'" />
	<TechItemPython v-else-if="name.toLowerCase() === 'python'" />
	<TechItemTypeScript v-else-if="name.toLowerCase() === 'typescript'" />
	<TechItemDaisyUI v-else-if="name.toLowerCase() === 'daisyui'" />
	<TechItemDiscordJS v-else-if="name.toLowerCase() === 'discord.js'" />
	<TechItemDocker v-else-if="name.toLowerCase() === 'docker'" />
	<TechItemGitLab v-else-if="name.toLowerCase() === 'gitlab'" />
	<TechItemJava v-else-if="name.toLowerCase() === 'java'" />
	<TechItemNestJS v-else-if="name.toLowerCase() === 'nest.js'" />
	<TechItemNextcloud v-else-if="name.toLowerCase() === 'nextcloud'" />
	<TechItemNodeJS v-else-if="name.toLowerCase() === 'node.js'" />
	<TechItemPiHole v-else-if="name.toLowerCase() === 'pihole'" />
	<TechItemPortainer v-else-if="name.toLowerCase() === 'portainer'" />
	<TechItemPostgreSQL v-else-if="name.toLowerCase() === 'postgresql'" />
	<TechItemRaspberryPi v-else-if="name.toLowerCase() === 'raspberrypi'" />
	<TechItemRockyLinux v-else-if="name.toLowerCase() === 'rockylinux'" />
	<TechItemSpringBoot v-else-if="name.toLowerCase() === 'springboot'" />
	<TechItemTailwindCSS v-else-if="name.toLowerCase() === 'tailwindcss'" />
	<TechItemWireguard v-else-if="name.toLowerCase() === 'wireguard'" />
	<TechItemWeb v-else-if="url" :title="name" :url />
</template>
