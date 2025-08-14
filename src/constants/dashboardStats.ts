import {
	TodayApplicationsIcon,
	TotalApplicationsIcon,
	ResolvedApplicationsIcon,
	InProcessApplicationsIcon,
	RejectedApplicationsIcon,
} from '@/assets/icons'

export const dashboardStatsConfig = [
	{
		id: 'todayApplications',
		title: 'Bugungi kelgan arizalar',
		icon: TodayApplicationsIcon,
		hasPercent: true,
		actionText: 'Ro’yhat',
	},
	{
		id: 'totalApplications',
		title: 'Umumiy arizalar',
		icon: TotalApplicationsIcon,
		hasPercent: false,
		actionText: 'Ro’yhat',
	},
	{
		id: 'resolvedApplications',
		title: 'Hal qilingan arizalar',
		icon: ResolvedApplicationsIcon,
		hasPercent: true,
		actionText: 'Ro’yhat',
	},
	{
		id: 'inProcessApplications',
		title: 'Jarayondagi arizalar',
		icon: InProcessApplicationsIcon,
		hasPercent: true,
		actionText: 'Ro’yhat',
	},
	{
		id: 'rejectedApplications',
		title: 'Rad etilgan arizalar',
		icon: RejectedApplicationsIcon,
		hasPercent: true,
		actionText: 'Ro’yhat',
	},
]
