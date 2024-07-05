# Krane Nuxt CV

## Clone the repository
It does not matter which one of the following options you pick, they are just mirrors.

GitHub:

`git clone https://github.com/LeeKrane/krane-nuxt-cv.git`

GitLab:

`git clone https://gitlab.com/LeeKrane/krane-nuxt-cv.git`

GitLab self-managed:

`git clone https://gitlab.kradev.net/krane/krane-nuxt-cv.git`

## Navigate to the project directory
`cd krane-nuxt-cv`

## Install dependencies
`bun i`

## Create your data
File: `assets/cv-data.json`

### Data Format
Example file: `assets/cv-data-template.json`
```json
{
	"title": {
		"fullName": "John Doe",
		"role": "Software Engineer",
		"summary": "This is a summary of my professional experience."
	},
	"personalInformation": {
		"email": "john.doe@gmail.com",
		"phone": "+1234567890",
		"address": "1234 Elm Street, Springfield, IL 62701"
	},
	"links": [
		{
			"name": "GitHub",
			"url": "https://www.github.com/",
			"iconPath": "github.png"
		},
		{
			"name": "GitLab",
			"url": "https://www.gitlab.com/",
			"iconPath": "gitlab.png"
		},
		{
			"name": "LinkedIn",
			"url": "https://www.linkedin.com/",
			"iconPath": "linkedin.png"
		}
	],
	"languages": [
		{
			"name": "English",
			"level": "Native"
		},
		{
			"name": "German",
			"level": "Fluent"
		}
	],
	"skills": [
		"JavaScript",
		"TypeScript",
		"Vue.js",
		"Nuxt.js",
		"Java"
	],
	"hobbies": [
		"Reading",
		"Traveling",
		"Photography"
	],
	"education": [
		{
			"degree": "Bachelor of Science",
			"school": "University of Illinois",
			"location": "Champaign, IL",
			"start": "06/2015",
			"end": "09/2019",
			"active": false,
			"text": [
				"Graduated with honors",
				"Dean's List"
			]
		}
	],
	"experience": [
		{
			"position": "Software Engineer",
			"company": "Acme Corporation",
			"location": "Springfield, IL",
			"start": "04/2019",
			"end": "05/2022",
			"tasks": [
				"Developed new features for the company's web application",
				"Maintained and improved existing codebase",
				"Collaborated with team members to meet project deadlines"
			]
		},
		{
			"position": "Intern",
			"company": "Tech Company",
			"location": "Chicago, IL",
			"start": "09/2023",
			"active": true,
			"tasks": [
				"Assisted with testing and debugging of software applications",
				"Participated in team meetings and code reviews",
				"Learned about software development best practices"
			]
		}
	],
	"projects": [
		{
			"name": "Project 1",
			"description": "This is a description of Project 1."
		}
	]
}
```

## Add your avatar
Place your profile picture (square) here: `public/avatar.png`

## Start the development server
`bun run dev`

Your resume is now available under http://localhost:3000/
