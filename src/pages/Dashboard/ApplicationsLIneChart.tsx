import { useState, useMemo } from 'react'
import { FilterSelect } from '@/components/ui/filter-select'
import LineChart from '@/components/charts/LineChart'

type DayFilter = 'today' | 'yesterday' | 'last7' | 'last30'

const ApplicationsLineChart = () => {
	const [selectedDay, setSelectedDay] = useState<DayFilter>('last30')
	const [selectedCategory, setSelectedCategory] = useState('school')

	const backendData: Record<
		DayFilter,
		{ categories: string[]; data: number[] }
	> & {
		tooltip: string
	} = {
		tooltip: `
		Jami 36 ta<br/>
		13 (Vazirlik)<br/>
		6 (Xususiy boshqarmalar)<br/>
		6 (Hududiy bo’linmalar)<br/>
		6 (DMT lar (bog’cha))<br/>
		6 (Maktablar)<br/>
		6 (Respublika tasarrufidagi tashkilotlar)<br/>
		6 (Unversitet va insitutlar)<br/>
		7 (Boshqa)
	`,
		last30: {
			categories: Array.from({ length: 30 }, (_, i) => `Kun ${i + 1}`),
			data: Array.from(
				{ length: 30 },
				() => Math.floor(Math.random() * 20) + 1
			),
		},
		last7: {
			categories: Array.from({ length: 7 }, (_, i) => `Kun ${i + 1}`),
			data: Array.from({ length: 7 }, () => Math.floor(Math.random() * 20) + 1),
		},
		today: {
			categories: ['Bugun'],
			data: [Math.floor(Math.random() * 20) + 1],
		},
		yesterday: {
			categories: ['Kecha'],
			data: [Math.floor(Math.random() * 20) + 1],
		},
	}

	// Filterni qo'llash
	const currentData = useMemo(() => {
		return backendData[selectedDay] || backendData.last30
	}, [selectedDay, backendData])

	return (
		<div className='rounded-lg gap-3 p-5 bg-[#F7F7F8] border border-[#0A0F2914] shadow-sm'>
			<div className='bg-white border border-[#E8E8E8] rounded-[12px] p-6'>
				<div className='flex flex-col lg:flex-row lg:items-center lg:justify-between border-b border-[#E8E8E8] pb-6 gap-4'>
					<h3 className='font-semibold text-[20px] text-[#14151A]'>
						So‘nggi 30 kunda kelgan arizalar
					</h3>
					<div className='flex flex-col sm:flex-row sm:flex-wrap gap-4 w-full md:w-auto'>
						<FilterSelect
							className='flex-1 w-full lg:min-w-[400px]'
							options={[
								{ label: 'Bugun', value: 'today' },
								{ label: 'Kecha', value: 'yesterday' },
								{ label: 'Oxirgi 7 kun', value: 'last7' },
								{ label: 'Oxirgi 30 kun', value: 'last30' },
							]}
							onChange={value => setSelectedDay(value as DayFilter)}
							value={selectedDay}
						/>
						<FilterSelect
							className='flex-1 w-full lg:min-w-[400px]'
							options={[
								{ label: 'Maktab', value: 'school' },
								{ label: 'Vazirlik', value: 'ministry' },
								{ label: 'Hududiy bo’linmalar', value: 'regional' },
								{ label: 'Universitet va institutlar', value: 'university' },
								{ label: 'DMT (bog’cha)', value: 'dmt' },
								{ label: 'Xususiy boshqarmalar', value: 'private' },
								{ label: 'Boshqa', value: 'other' },
							]}
							onChange={setSelectedCategory}
							value={selectedCategory}
						/>
					</div>
				</div>

				{/* Chart */}
				<div className='pt-6'>
					<LineChart
						data={currentData.data}
						categories={currentData.categories}
						tooltipContent={backendData.tooltip}
					/>
				</div>
			</div>
		</div>
	)
}

export default ApplicationsLineChart
