<script setup lang="ts">
const { email, phone, address, links, languages, hobbies, skills } = defineProps<{
	email?: string
	phone?: string
	address?: string
	links?: LinkDTO[]
	languages?: LanguageDTO[]
	hobbies?: string[]
	skills?: SkillsetDTO[]
}>()

const skillLevelDisplays = [
	useSkillLevelMapping(0),
	useSkillLevelMapping(1),
	useSkillLevelMapping(2),
	useSkillLevelMapping(3),
]
</script>

<template>
	<div class="left-pane w-1/3 bg-gray-800">
		<section class="self-center">
			<img src="public/avatar.png" alt="Profile Picture" class="rounded-full w-64 max-h-64">
		</section>

		<section v-if="email && phone && address">
			<h2>Personal Information</h2>
			<hr>
			<ul class="space-y-2">
				<li class="flex items-center">
					<img src="~@/public/icons/email.svg" alt="Email Icon" class="w-6 h-6 mr-2 fill-gray-200" />
					<a :href="'mailto:' + email">{{ email }}</a>
				</li>
				<li class="flex items-center">
					<img src="~@/public/icons/phone.svg" alt="Email Icon" class="w-6 h-6 mr-2 fill-gray-200" />
					<a :href="'tel:' + phone">{{ phone }}</a>
				</li>
				<li class="flex items-center">
					<img src="~@/public/icons/location.svg" alt="Email Icon" class="w-6 h-6 mr-2 fill-gray-200" />
					{{ address }}
				</li>
			</ul>
		</section>

		<section>
			<h2>Links</h2>
			<hr>
			<ul class="space-y-2">
				<li v-for="link in links" class="flex items-center">
					<img v-if="link.iconPath === 'github.png'" src="~@/assets/icons/github.png" class="w-5 mr-3" />
					<img v-else-if="link.iconPath === 'gitlab.png'" src="~@/assets/icons/gitlab.png" class="w-5 mr-3" />
					<img v-else-if="link.iconPath === 'nextcloud.png'" src="~@/assets/icons/nextcloud.png" class="w-5 mr-3" />
					<img v-else-if="link.iconPath === 'linkedin.png'" src="~@/assets/icons/linkedin.png" class="w-5 mr-3" />
					<a :href="link.url" target="_blank">
						{{ link.name }}
					</a>
				</li>
			</ul>
		</section>

		<section class="languages">
			<h2>Languages</h2>
			<hr>
			<ul>
				<li v-for="language in languages" class="language">
					{{ language.name }} ({{ language.level }})
				</li>
			</ul>
		</section>

		<section v-if="hobbies">
			<h2>Hobbies</h2>
			<hr>
			<ul class="grid gap-2 list-disc ml-4">
				<li v-for="hobby in hobbies">{{ hobby }}</li>
			</ul>
		</section>

		<section class="skillsets">
			<h2>Skills</h2>
			<hr>
			<ul>
				<li v-for="sld in skillLevelDisplays" class="skill" :class="sld">
					{{ sld.charAt(0).toUpperCase() + sld.slice(1) }}
				</li>
			</ul>
			<hr>
			<div v-for="skillset in skills">
				<h3>{{ skillset.title }}</h3>
				<ul>
					<li v-for="skill in skillset.list" class="skill" :class="useSkillLevelMapping(skill.level)">
						<a v-if="skill.url" :href="skill.url">{{ skill.name }}</a>
						<p v-else>{{ skill.name }}</p>
					</li>
				</ul>
			</div>
		</section>
	</div>
</template>