<script setup lang="ts">
const {
	institution,
	education = false,
} = defineProps<{
	institution: InstitutionDTO
	education?: boolean
}>();
</script>

<template>
	<li>
		<div></div>
		<div></div>
		<a :href="institution.url" target="_blank"
			><h2>
				{{
					education
						? institution.institution
						: institution.degreeOrPosition
				}}
			</h2></a
		>
		<h3>
			{{
				education
					? institution.degreeOrPosition
					: institution.institution
			}}
		</h3>
		<div class="flex time items-center">
			<img
				src="~@/public/icons/clock.svg"
				alt="Email Icon"
				class="w-5 h-5 mr-2 fill-gray-800"
			/>
			<p>
				{{ institution.start }} -
				{{
					institution.active
						? "now " + (education
							? "(graduation expected in " + institution.end + ")"
							: "(end expected in " + institution.end + ")")
						: institution.end
				}}
			</p>
		</div>
		<p>{{ institution.text }}</p>
		<div v-if="institution.techStack" class="flex gap-1 mt-2">
			<TechSelector
				v-for="tech in institution.techStack"
				:key="tech"
				:name="tech"
			/>
		</div>
	</li>
</template>
