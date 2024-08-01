<script setup lang="ts">
const { projects } = defineProps<{ projects: ProjectDTO[] }>()
</script>

<template>
	<SectionGeneral class="masonry-listing" title="Projects">
		<div class="ul-container">
			<ul>
				<li v-for="project in projects.slice(0, Math.ceil(projects.length * 0.5))">
					<a :href="project.url" target="_blank"><h2>{{ project.name }}</h2></a>
					<p>{{ project.description }}</p>
					<div v-if="project.techStack" class="flex gap-1 mt-2">
						<Tech
							v-for="tech in project.techStack"
							:key="tech.name"
							:name="tech.name"
							:icon-url="tech.iconUrl"
							:href-url="tech.hrefUrl"
						/>
					</div>
				</li>
			</ul>
			<ul>
				<li v-for="project in projects.slice(Math.ceil(projects.length * 0.5))">
					<a :href="project.url" target="_blank"><h2>{{ project.name }}</h2></a>
					<p>{{ project.description }}</p>
					<div v-if="project.techStack" class="flex gap-1 mt-2">
						<Tech
							v-for="tech in project.techStack"
							:key="tech.name"
							:name="tech.name"
							:icon-url="tech.iconUrl"
							:href-url="tech.hrefUrl"
						/>
					</div>
				</li>
			</ul>
		</div>
	</SectionGeneral>
</template>
