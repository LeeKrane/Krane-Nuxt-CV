<script setup lang="ts">
const { projects } = defineProps<{ projects: ProjectDTO[] }>()
</script>

<template>
	<SectionGeneral class="masonry-listing" title="Projects">
		<ul>
			<li v-for="project in projects">
				<a :href="project.url" target="_blank"><h2>{{ project.name }}</h2></a>
				<hr>
				<p>{{ project.description }}</p>
			</li>
		</ul>
	</SectionGeneral>
</template>
