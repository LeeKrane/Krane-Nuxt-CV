<script setup lang="ts">
const { title } = defineProps<{ title: string }>()
</script>

<template>
	<section>
		<h2>{{ title }}</h2>
		<hr>
		<slot />
	</section>
</template>
