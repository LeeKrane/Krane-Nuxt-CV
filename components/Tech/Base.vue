<script setup lang="ts">
const { url, iconUrl, title, web = false } = defineProps<{
	url: string
	iconUrl?: string
	title: string
	web?: boolean
}>()
</script>

<template>
	<a
		class="flex items-center"
		:href="url"
		target="_blank"
	>
		<img
			v-if="!web"
			:src="iconUrl"
			alt="?"
			:title="title"
			class="w-6 flex items-center justify-center drop-shadow"
		/>
		<img
			v-else
			src="~@/public/icons/web-dark.svg"
			alt="?"
			:title="title"
			class="w-6 flex items-center justify-center drop-shadow"
		/>
	</a>
</template>
