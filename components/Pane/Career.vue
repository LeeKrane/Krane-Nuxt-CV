<script setup lang="ts">
const { title, education, experience, internships, projects } = defineProps<{
	title?: TitleDTO
	education?: InstitutionDTO[]
	experience?: InstitutionDTO[]
	internships?: InstitutionDTO[]
	projects?: ProjectDTO[]
}>()
</script>

<template>
	<div class="right-pane w-2/3 bg-gray-100">
		<section v-if="title">
			<h1 class="text-4xl font-bold">{{ title.fullName }}</h1>
			<p class="text-xl">{{ title.role }}</p>
		</section>

		<SectionGeneral v-if="title" title="Professional Summary">
			<p>{{ title.summary }}</p>
		</SectionGeneral>

		<SectionEducation
			v-if="education"
			:institutions="education" />

		<SectionExperience
			v-if="experience"
			title="Experience"
			:institutions="experience" />

		<SectionExperience
			v-if="internships"
			title="Internships"
			:institutions="internships" />

		<SectionProjects
			v-if="projects"
			:projects="projects" />
	</div>
</template>
