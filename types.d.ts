type TitleDTO = {
	fullName: string
	role: string
	summary: string
}

type PersonalInformationDTO = {
	email: string
	phone: string
	address: string
}

type LinkDTO = {
	name: string
	url: string
	iconPath: string
}

type LanguageDTO = {
	name: string
	level: string
}

type EducationDTO = {
	degree: string
	school: string
	location: string
	start: string
	end?: string
	active?: boolean
	text?: string[]
}

type ExperienceDTO = {
	position: string
	company: string
	location: string
	start: string
	end?: string
	active?: boolean
	text?: string[]
}

type ProjectDTO = {
	name: string
	description: string
	link?: string
}

type CVDTO = {
	title: TitleDTO
	personalInformation: PersonalInformationDTO
	links: LinkDTO[]
	skills: string[]
	hobbies: string[]
	education: EducationDTO[]
	experience: ExperienceDTO[]
	languages: LanguageDTO[]
	projects: ProjectDTO[]
}
