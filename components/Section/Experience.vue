<script setup lang="ts">
const { title, institutions } = defineProps<{
	title: string
	institutions: InstitutionDTO[]
}>()
</script>

<template>
	<SectionGeneral class="dotted-listing" :title="title">
		<ul>
			<ItemInstitution v-for="institution in institutions" :institution :swap-headings="true" />
		</ul>
	</SectionGeneral>
</template>