<script lang="ts" setup>
	import cvDataRaw from '~/assets/cv-data.json'

	const cvData: Ref<CVDTO | null> = ref(null)

	onMounted(() => {
		cvData.value = cvDataRaw
	})
</script>

<template>
	<div>
		<div v-if="cvData" class="flex bg-gray-100 font-sans">
			<div class="left-pane w-1/3 bg-gray-800">
				<section class="self-center">
					<img src="public/avatar.png" alt="Profile Picture" class="rounded-full w-64 max-h-64">
				</section>

				<section>
					<h2>Personal Information</h2>
					<hr>
					<ul class="space-y-2">
						<li class="flex items-center">
							<img src="~@/public/icons/email.svg" alt="Email Icon" class="w-6 h-6 mr-2" />
							<a :href="'mailto:' + cvData.personalInformation.email">{{ cvData.personalInformation.email }}</a>
						</li>
						<li class="flex items-center">
							<img src="~@/public/icons/phone.svg" alt="Email Icon" class="w-6 h-6 mr-2" />
							{{ cvData.personalInformation.phone }}
						</li>
						<li class="flex items-center">
							<img src="~@/public/icons/location.svg" alt="Email Icon" class="w-6 h-6 mr-2" />
							{{ cvData.personalInformation.address }}
						</li>
					</ul>
				</section>

				<section>
					<h2>Links</h2>
					<hr>
					<ul class="space-y-2">
						<li v-for="link in cvData.links" class="flex items-center">
							<img v-if="link.iconPath === 'github.png'" src="~@/assets/icons/github.png" class="w-5 mr-3" />
							<img v-else-if="link.iconPath === 'gitlab.png'" src="~@/assets/icons/gitlab.png" class="w-5 mr-3" />
							<img v-else-if="link.iconPath === 'nextcloud.png'" src="~@/assets/icons/nextcloud.png" class="w-5 mr-3" />
							<img v-else-if="link.iconPath === 'linkedin.png'" src="~@/assets/icons/linkedin.png" class="w-5 mr-3" />
							<a :href="link.iconPath" target="_blank">
								{{ link.name }}
							</a>
						</li>
					</ul>
				</section>

				<section>
					<h2>Languages</h2>
					<hr>
					<ul class="grid gap-2 list-disc ml-4">
						<li v-for="language in cvData.languages">{{ language.name }} ({{ language.level }})</li>
					</ul>
				</section>

				<section>
					<h2>Hobbies</h2>
					<hr>
					<ul class="grid gap-2 list-disc ml-4">
						<li v-for="hobby in cvData.hobbies">{{ hobby }}</li>
					</ul>
				</section>

				<section>
					<h2>Skills</h2>
					<hr>
					<ul class="grid grid-cols-2 gap-2 list-disc ml-4">
						<li v-for="skill in cvData.skills">{{ skill }}</li>
					</ul>
				</section>
			</div>

			<div class="right-pane w-2/3 bg-gray-200">
				<section>
					<h1 class="text-4xl font-bold">{{ cvData.title.fullName }}</h1>
					<label class="text-xl">{{ cvData.title.role }}</label>
				</section>

				<section>
					<h2>Professional Summary</h2>
					<hr>
					<label>{{ cvData.title.summary }}</label>
				</section>

				<section class="listing">
					<h2>Education</h2>
					<hr>
					<ul>
						<li v-for="education in cvData.education">
							<div></div>
							<div></div>
							<h2>{{ education.school }}</h2>
							<h3>{{ education.degree }}</h3>
							<label>{{ education.start }} - {{ education.active ? "now (graduation expected in " + education.end + ")" : education.end }}</label>
							<ul class="list-disc pl-4 mt-2">
								<li v-for="text in education.text">{{ text }}</li>
							</ul>
						</li>
					</ul>
				</section>

				<section class="listing">
					<h2>Experience</h2>
					<hr>
					<ul>
						<li v-for="experience in cvData.experience">
							<div></div>
							<div></div>
							<h2>{{ experience.position }}</h2>
							<h3>{{ experience.company }}</h3>
							<label>{{ experience.start }} - {{ experience.active ? "now" : experience.end }}</label>
							<ul class="list-disc pl-4 mt-2">
								<li v-for="text in experience.text">{{ text }}</li>
							</ul>
						</li>
					</ul>
				</section>

				<section class="listing">
					<h2>Projects</h2>
					<hr>
					<ul>
						<li v-for="project in cvData.projects">
							<div></div>
							<div></div>
							<h2>{{ project.name }}</h2>
							<label>{{ project.description }}</label>
						</li>
					</ul>
				</section>
			</div>
		</div>
		<div class="flex justify-center items-center w-full h-10 bg-gray-900 text-white gap-12">
			<label class="text-xl text-center">© Christian Kranabetter 2024</label>
		</div>
	</div>
</template>

<style lang="scss" scoped>
div.left-pane {
	section {
		@apply text-gray-200;

		h2 {
			@apply text-white;
		
		}
	}
}

div.right-pane {
	section {
		@apply text-gray-800;

		h1 {
			@apply text-black;
		}

		label {
			@apply text-gray-800;
		}

		&.listing > ul > li {
			@apply relative ml-2 pl-5;

			&>:first-child {
				@apply absolute bg-gray-200 rounded-full h-4 w-4 border-2 border-gray-600 z-40;
			
				top: 0.4rem;
				left: -0.57rem;
			}

			&>:nth-child(2) {
				@apply absolute border-l-2 border-gray-600 w-2 z-30;

				top: 0.4rem;
				left: -0.125rem;
				height: calc(100% - 0rem);
			}

			&:not(:last-child) {
				@apply pb-4;
			}
		}
	}
}

div.left-pane,
div.right-pane {
	@apply flex flex-col p-6 shadow-xl;

	section {
		&:not(:last-child) {
			@apply mb-6;
		}

		h2 {
			@apply text-xl font-bold;
		}

		h3 {
			@apply font-bold;
		}

		hr {
			@apply my-2 border-gray-500;
		}

		div {
			&:not(:last-child) {
				@apply mb-4;
			}
		}
	}
}
</style>
