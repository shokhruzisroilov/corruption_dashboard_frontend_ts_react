import React, { useEffect, useRef } from 'react'
import ApexCharts from 'apexcharts'

interface LineChartProps {
	data: number[]
	categories: string[]
	tooltipContent?: string
}

const LineChart: React.FC<LineChartProps> = ({
	data,
	categories,
	tooltipContent,
}) => {
	const chartRef = useRef<HTMLDivElement | null>(null)
	const chartInstance = useRef<ApexCharts | null>(null)

	useEffect(() => {
		if (!chartRef.current) return

		const options: ApexCharts.ApexOptions = {
			chart: {
				type: 'bar',
				height: 350,
				toolbar: { show: false },
				fontFamily: 'Inter, sans-serif',
			},
			series: [
				{
					name: 'Arizalar',
					data: data,
				},
			],
			plotOptions: {
				bar: {
					borderRadius: 8,
					columnWidth: '30px',
				},
			},
			dataLabels: {
				enabled: false,
			},
			xaxis: {
				categories: categories.map(cat => cat.replace(/^Kun\s*/, '')),
				labels: {
					rotate: -45,
					style: { fontSize: '12px', colors: ['#555'] },
				},
				axisBorder: { show: false },
				axisTicks: { show: false },
			},
			yaxis: {
				labels: {
					style: { fontSize: '12px', colors: ['#555'] },
				},
			},
			colors: ['#FF9500'],
			grid: {
				borderColor: '#EAEAEA',
				strokeDashArray: 4,
			},
			tooltip: {
				custom: () => {
					return `
						<div style="padding:10px;font-size:13px;line-height:1.5">
							${tooltipContent || ''}
						</div>
					`
				},
			},
		}

		if (chartInstance.current) {
			chartInstance.current.updateOptions(options)
		} else {
			chartInstance.current = new ApexCharts(chartRef.current, options)
			chartInstance.current.render()
		}

		return () => {
			chartInstance.current?.destroy()
			chartInstance.current = null
		}
	}, [data, categories, tooltipContent])

	return (
		<div className='w-full overflow-x-auto scroll-line'>
			<div
				ref={chartRef}
				className='h-[350px] md:h-[400px]'
				style={{ minWidth: `${categories.length * 50}px` }}
			/>
		</div>
	)
}

export default LineChart
