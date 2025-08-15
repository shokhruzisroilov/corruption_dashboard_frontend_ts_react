import React from 'react'
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
	type ChartOptions,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const ViolationsChart: React.FC = () => {
	const labels = [
		'Fond uchun pul yig‘ish',
		'Poraxo‘rlik',
		'Tanlovsiz ishga olish',
		'Davlat mulkini o‘zlashtirish',
		'Hisobotni soxtalashtirish',
		'Talabani pul evaziga o‘qishga kiritish',
		'Korrupsion shartnomalar',
		'Grant pullarini noto‘g‘ri sarflash',
		'Ish joyida qarindoshchilik',
		'Tushunarli javob bermaslik',
	]

	// Raqamlangan label
	const numberedLabels = labels.map((label, index) => `${index + 1}. ${label}`)

	const values = [90, 88, 86, 79, 75, 65, 59, 55, 49, 39]

	const data = {
		labels: numberedLabels,
		datasets: [
			{
				label: '%',
				data: values,
				backgroundColor: '#0D66EB',
				borderRadius: 6,
				barPercentage: 0.6,
				categoryPercentage: 0.7,
			},
		],
	}

	const options = {
		indexAxis: 'y' as const,
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: { display: false },
			tooltip: {
				callbacks: {
					label: (context: any) => `${context.raw} %`,
				},
			},
		},
		scales: {
			x: {
				ticks: {
					color: '#000',
					font: {
						weight: '400',
						size: 16,
					},
					callback: (value: any) => `${value} %`,
				},
				min: 0,
				max: 100,
				grid: { drawBorder: false },
			},
			y: {
				ticks: {
					color: '#000',
					font: {
						weight: '400',
						size: 16,
					},
					align: 'center',
				},
				grid: { drawBorder: false },
			},
		},
	}

	return (
		<div
			className='p-4 rounded-[12px] border border-[#E8E8E8] bg-white'
			style={{ height: '500px' }}
		>
			<Bar data={data} options={options as ChartOptions<'bar'>} />
		</div>
	)
}

export default ViolationsChart
