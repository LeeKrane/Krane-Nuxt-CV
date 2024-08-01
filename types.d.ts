type TitleDTO = {
	fullName: string
	role: string
	summary: string
}

type LanguageDTO = {
	name: string
	level: string
}

type SkillDTO = {
	name: string
	level: number
	url?: string
}

type SkillsetDTO = {
	title: string
	list: SkillDTO[]
}

type TechStackDTO = {
	name: string
	iconUrl?: string
	url?: string
}

type InstitutionDTO = {
	degreeOrPosition: string
	institution: string
	url: string
	start: string
	end?: string
	active?: boolean
	text?: string
	techStack?: TechStackDTO[]
}

type LinkDTO = {
	name: string
	url?: string
	iconPath?: string
}

type ProjectDTO = {
	name: string
	description: string
	techStack: TechStackDTO[]
	url?: string
}

type CV_DTO = {
	email: string
	phone: string
	address: string
	title: TitleDTO
	links: LinkDTO[]
	languages: LanguageDTO[]
	skills: SkillsetDTO[]
	hobbies?: string[]
	education: InstitutionDTO[]
	experience?: InstitutionDTO[]
	internships?: InstitutionDTO[]
	projects: ProjectDTO[]
}
