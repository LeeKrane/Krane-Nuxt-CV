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
Files: `assets/public-cv-data.json`, `assets/private-cv-data.json`

### Data Format
You can just replace the public data with yours. For the private data, the format is the following:

```json
{
	"email": "example@gmail.com",
	"phone": "+123456789",
	"address": "Iliketrains Street 2, 12345 Nuxtville"
}
```

## Add your avatar
Place your profile picture (square) here: `public/avatar.png`

## Start the development server
`bun run dev`

Your resume is now available under http://localhost:3000/
