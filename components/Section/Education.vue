<script setup lang="ts">
const { institutions = false } = defineProps<{
	institutions: InstitutionDTO[]
}>()
</script>

<template>
	<SectionGeneral class="dotted-listing" title="Education">
		<ul>
			<ItemInstitution v-for="institution in institutions" :institution :education="true" />
		</ul>
	</SectionGeneral>
</template>