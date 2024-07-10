export const useSkillLevelMapping = (level: number): string => {
	switch (level) {
		case 0: return "proficient"
		case 1: return "good"
		case 2: return "decent"
		case 3: return "basic"
		default: return "unknown"
	}
}
