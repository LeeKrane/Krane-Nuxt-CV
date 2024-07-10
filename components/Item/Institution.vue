<script setup lang="ts">
const { institution, swapHeadings = false } = defineProps<{
	institution: InstitutionDTO
	swapHeadings?: boolean
}>()
</script>

<template>
	<li>
		<div></div>
		<div></div>
		<a :href="institution.url" target="_blank"><h2>{{ swapHeadings ? institution.degreeOrPosition : institution.institution }}</h2></a>
		<h3>{{ swapHeadings ? institution.institution : institution.degreeOrPosition }}</h3>
		<div class="flex time items-center">
			<img src="~@/public/icons/clock.svg" alt="Email Icon" class="w-5 h-5 mr-2 fill-gray-800" />
			<p>{{ institution.start }} - {{ institution.active ? "now (graduation expected in " + institution.end + ")" : institution.end }}</p>
		</div>
		<p>{{ institution.text }}</p>
	</li>
</template>
