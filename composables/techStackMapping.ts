export const useTechStackMapping = (name: string): {
	name: string
	iconName?: string
	url?: string
} => {
	switch (name.toLowerCase()) {
		case "daisyui": return {
			name: "DaisyUI",
			iconName: "daisyui.png",
			url: "https://daisyui.com/"
		}
		case "discord.js": return {
			name: "Discord.js",
			iconName: "discordjs.png",
			url: "https://discord.js.org/"
		}
		case "docker": return {
			name: "Docker",
			iconName: "docker.png",
			url: "https://www.docker.com/"
		}
		case "gitlab": return {
			name: "GitLab",
			iconName: "gitlab.png",
			url: "https://gitlab.com/"
		}
		case "java": return {
			name: "Java",
			iconName: "java.png",
			url: "https://www.java.com/"
		}
		case "nest.js": return {
			name: "Nest.js",
			iconName: "nestjs.png",
			url: "https://nestjs.com/"
		}
		case "nextcloud": return {
			name: "Nextcloud",
			iconName: "nextcloud.png",
			url: "https://nextcloud.com/"
		}
		case "node.js": return {
			name: "Node.js",
			iconName: "nodejs.png",
			url: "https://nodejs.org/"
		}
		case "nuxt.js": return {
			name: "Nuxt.js",
			iconName: "nuxtjs.png",
			url: "https://nuxt.com/"
		}
		case "pihole": return {
			name: "Pi-hole",
			iconName: "pihole.png",
			url: "https://pi-hole.net/"
		}
		case "portainer": return {
			name: "Portainer",
			iconName: "portainer.png",
			url: "https://www.portainer.io/"
		}
		case "postgresql": return {
			name: "PostgreSQL",
			iconName: "postgresql.png",
			url: "https://www.postgresql.org/"
		}
		case "python": return {
			name: "Python",
			iconName: "python.png",
			url: "https://www.python.org/"
		}
		case "raspberrypi": return {
			name: "Raspberry Pi",
			iconName: "rpi.png",
			url: "https://www.raspberrypi.com/"
		}
		case "rockylinux": return {
			name: "Rocky Linux",
			iconName: "rockylinux.png",
			url: "https://rockylinux.org/"
		}
		case "scss": return {
			name: "SCSS",
			iconName: "sass.png",
			url: "https://sass-lang.com/documentation/syntax/"
		}
		case "springboot": return {
			name: "Spring Boot",
			iconName: "spring.png",
			url: "https://spring.io/projects/spring-boot"
		}
		case "tailwindcss": return {
			name: "TailwindCSS",
			iconName: "tailwindcss.png",
			url: "https://tailwindcss.com/"
		}
		case "typescript": return {
			name: "TypeScript",
			iconName: "typescript.png",
			url: "https://www.typescriptlang.org/"
		}
		case "vue.js": return {
			name: "Vue.js",
			iconName: "vuejs.png",
			url: "https://vuejs.org/"
		}
		case "wireguard": return {
			name: "WireGuard",
			iconName: "wireguard.png",
			url: "https://www.wireguard.com/"
		}
		default: return {
			name: name
		}
	}
}