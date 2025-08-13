import {
	DashboardIcon,
	MinistryIcon,
	PrivateDeptIcon,
	RegionalIcon,
	KindergartenIcon,
	SchoolIcon,
	NationalOrgIcon,
	UniversityIcon,
	OthersIcon,
} from '@/assets/icons'

export const navItems = [
	{ path: '/', label: 'Dashboard', icon: DashboardIcon },
	{ path: '/ministry', label: 'Vazirlik', icon: MinistryIcon },
	{
		path: '/private-departments',
		label: 'Xususiy boshqarmalar',
		icon: PrivateDeptIcon,
	},
	{
		path: '/regional-branches',
		label: 'Hududiy bo’linmalar',
		icon: RegionalIcon,
	},
	{
		path: '/kindergartens',
		label: 'DMT lar (bog’cha)',
		icon: KindergartenIcon,
	},
	{ path: '/schools', label: 'Maktablar', icon: SchoolIcon },
	{
		path: '/national-organizations',
		label: 'Respublika tasarrufidagi tashkilotlar',
		icon: NationalOrgIcon,
	},
	{
		path: '/universities',
		label: 'Universitet va institutlar',
		icon: UniversityIcon,
	},
	{ path: '/others', label: 'Boshqa', icon: OthersIcon },
]
