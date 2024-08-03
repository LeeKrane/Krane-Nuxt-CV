<script lang="ts" setup>
	import cvDataRaw from 'assets/cv-data.json'

	const cvData: Ref<CV_DTO | null> = ref(null)

	const email = computed(() => cvData.value?.email)
	const phone = computed(() => cvData.value?.phone)
	const address = computed(() => cvData.value?.address)
	const links = computed(() => cvData.value?.links)
	const languages = computed(() => cvData.value?.languages)
	const hobbies = computed(() => cvData.value?.hobbies)
	const skills = computed(() => cvData.value?.skills)

	const title = computed(() => cvData.value?.title)
	const education = computed(() => cvData.value?.education)
	const experience = computed(() => cvData.value?.experience)
	const internships = computed(() => cvData.value?.internships)
	const projects = computed(() => cvData.value?.projects)

	onMounted(() => {
		cvData.value = cvDataRaw
	})
</script>

<template>
	<div v-if="cvData" class="root-div flex bg-gray-100 font-sans">
		<PanePerson :email :phone :address :links :languages :hobbies :skills />
		<PaneCareer :title :education :experience :internships :projects />
	</div>
	<div v-else class="root-div flex items-center justify-center h-screen w-screen font-bold text-4xl bg-gray-200">
		<p class="p-6 rounded-xl bg-gray-300 shadow-lg">Loading data...</p>
	</div>
</template>

<style lang="scss">
@media print {
	html, body {
		width: 100%;
		height: 100%;
	}

	@page {
		size: A4;
		margin: 0;
	}

	div.root-div {
		div.left-pane,
		div.right-pane {
			@apply pb-32;
		}
	}
}

div.left-pane {
	section {
		@apply text-gray-100;
	}
}

div.right-pane {
	section {
		@apply text-gray-900;

		&.dotted-listing ul li {
			@apply relative ml-2 pl-5;

			&>:first-child {
				@apply absolute bg-gray-100 rounded-full h-4 w-4 border-2 border-gray-600 z-40;
			
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

		&.masonry-listing ul li {
			@apply bg-gray-200 shadow-lg;
		}
	}
}

div.left-pane,
div.right-pane {
	@apply flex flex-col p-6 shadow-xl print:min-h-screen;

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

		div:not(.time) {
			&:not(:last-child) {
				@apply mb-4;
			}
		}

		&.masonry-listing {
			div.ul-container {
				@apply flex gap-4;

				ul {
					@apply flex flex-wrap gap-4 mb-auto;

					width: 50%;

					li {
						@apply p-4 rounded-lg h-auto flex-grow bg-gradient-to-br from-gray-200 to-gray-300;

						height: fit-content;
					}
				}
			}
		}
	}
}
</style>
