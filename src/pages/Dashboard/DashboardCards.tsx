import { useEffect, useState } from 'react'
import { dashboardStatsConfig } from '@/constants/dashboardStats'
import { ListIcon } from '@/assets/icons'

type StatItem = {
	value?: number | string
	percent?: string
}

const StatCard = ({
	title,
	icon,
	value,
	percent,
	hasPercent,
	actionText,
	barColor,
}: {
	title: string
	icon: string
	value?: number | string
	percent?: string
	hasPercent: boolean
	actionText: string
	barColor: string
}) => {
	return (
		<div className='bg-white rounded-xl p-4 flex flex-col border border-[#DEE0E3] relative'>
			{/* Left colored bar */}
			<div
				className='w-1 h-[122px] absolute left-0 top-1/2 -translate-y-1/2 rounded-r-xl'
				style={{ backgroundColor: barColor }}
			></div>

			{/* Icon */}
			<img src={icon} alt={`${title} icon`} className='w-8 h-8' />

			{/* Title */}
			<h3 className='mt-4 font-semibold text-[20px] leading-[28px] tracking-[-0.012em] text-[#0F132499]'>
				{title}
			</h3>

			{/* Value + Percent */}
			<h2 className='mt-2 font-bold text-[36px] leading-[100%] tracking-[-0.02em] text-[#14151A]'>
				{value ?? '-'}
				{hasPercent && percent && (
					<span className='text-[#9EA0A8] ml-2'>{percent}</span>
				)}
			</h2>

			{/* Action button */}
			<button className='mt-4 text-sm text-blue-500 flex items-center gap-1 cursor-pointer'>
				<img src={ListIcon} alt='list icon' className='w-4 h-4' />
				{actionText}
			</button>
		</div>
	)
}

const DashboardCards = () => {
	const [statsData, setStatsData] = useState<Record<string, StatItem>>({})

	const barColors = ['#4778F5', '#924FE8', '#26BD6C', '#F48E2F', '#E6483D']

	useEffect(() => {
		setStatsData({
			todayApplications: { value: 53, percent: '18%' },
			totalApplications: { value: 2643 },
			resolvedApplications: { value: 1238, percent: '18%' },
			inProcessApplications: { value: 684, percent: '18%' },
			rejectedApplications: { value: 418, percent: '18%' },
		})
	}, [])

	return (
		<div className='grid gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 p-5 bg-[#F7F7F8] rounded-lg border border-[#DEE0E3]'>
			{dashboardStatsConfig.map((stat, index) => {
				const item = statsData[stat.id] || {}
				return (
					<StatCard
						key={stat.id}
						title={stat.title}
						icon={stat.icon}
						value={item.value}
						percent={item.percent}
						hasPercent={stat.hasPercent}
						actionText={stat.actionText}
						barColor={barColors[index % barColors.length]} // Rang tanlash
					/>
				)
			})}
		</div>
	)
}

export default DashboardCards
