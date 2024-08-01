<script setup lang="ts">
const { name: nameRaw, iconUrl, url: urlRaw } = defineProps<{
	name: string
	iconUrl?: string
	url?: string
}>()

const { name, iconName, url } = useTechStackMapping(nameRaw)
</script>

<template>
	<a
			class="flex items-center"
			:href="url ? url : urlRaw"
			target="_blank"
	>
		<img
				:src="iconName ? ('/_nuxt/assets/icons/' + iconName) : iconUrl"
				alt="?"
				:title="name"
				class="w-6 flex items-center justify-center"
		/>
	</a>
</template>

<style lang="scss" scoped>
img {
	@media not print {
		@apply drop-shadow;
	}
}
</style>
