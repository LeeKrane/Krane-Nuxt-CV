<script setup lang="ts">
const {
	title,
	url
} = defineProps<{
	title: string
	url: string
}>()
</script>

<template>
	<TechBase
		:title
		:url
		:web="true" />
</template>
