<script setup lang="ts">
const { title, institutions, swapHeadings = false } = defineProps<{
	title: string
	institutions: InstitutionDTO[]
	swapHeadings?: boolean
}>()
</script>

<template>
	<SectionGeneral class="dotted-listing" :title="title">
		<ul>
			<ItemInstitution v-for="institution in institutions" :institution :swap-headings />
		</ul>
	</SectionGeneral>
</template>