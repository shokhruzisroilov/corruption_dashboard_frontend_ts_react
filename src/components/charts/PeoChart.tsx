import { useLayoutEffect, useRef } from 'react'
import * as am5 from '@amcharts/amcharts5'
import * as am5percent from '@amcharts/amcharts5/percent'
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated'

type PieDataItem = {
	category: string
	value: number
	resolved?: number
	inProcess?: number
	rejected?: number
}

interface SchoolPieChartProps {
	data: PieDataItem[]
}

const SchoolPieChart: React.FC<SchoolPieChartProps> = ({ data = [] }) => {
	const chartRef = useRef<HTMLDivElement | null>(null)

	useLayoutEffect(() => {
		if (!data.length || !chartRef.current) return

		const root = am5.Root.new(chartRef.current)
		root.setThemes([am5themes_Animated.new(root)])

		const horizontalLayout = am5.HorizontalLayout.new(root, { gap: 10 })
		const verticalLayout = am5.VerticalLayout.new(root, { gap: 10 })

		const container = root.container.children.push(
			am5.Container.new(root, {
				width: am5.percent(100),
				height: am5.percent(100),
				layout: verticalLayout,
			})
		)

		const chart = container.children.push(
			am5percent.PieChart.new(root, {
				innerRadius: am5.percent(50),
				layout: verticalLayout,
			})
		)

		const series = chart.series.push(
			am5percent.PieSeries.new(root, {
				name: 'Arizalar',
				valueField: 'value',
				categoryField: 'category',
				legendLabelText: '{category}',
				legendValueText:
					"{value} ta ({valuePercentTotal.formatNumber('0.0')}%)",
				tooltip: am5.Tooltip.new(root, {
					labelText:
						'{category}\nJami: {value} ta\nHal qilingan: {resolved}\nJarayondagi: {inProcess}\nRad etilgan: {rejected}',
				}),
			})
		)

		// Colors
		const colors = [
			'#4778F5',
			'#924FE8',
			'#26BD6C',
			'#F48E2F',
			'#E6483D',
			'#00C9A7',
			'#FFB800',
		]
		const colorSet = am5.ColorSet.new(root, {})
		colorSet.set(
			'colors',
			colors.map(c => am5.color(c))
		)
		series.set('colors', colorSet)

		// Hover effects
		series.slices.template.setAll({
			stroke: am5.color(0xffffff),
			strokeWidth: 2,
			strokeOpacity: 0.7,
			cornerRadius: 8,
			interactive: true,
			cursorOverStyle: 'pointer',
		})
		series.slices.template.states.create('hover', {
			scale: 1.05,
			shadowBlur: 10,
			shadowColor: am5.color(0x000000),
			shadowOffsetX: 0,
			shadowOffsetY: 4,
		})

		// Center label
		const centerLabel = series.children.push(
			am5.Label.new(root, {
				text: '{valueSum} ta\nJami arizalar',
				centerX: am5.percent(50),
				centerY: am5.percent(50),
				populateText: true,
				fontSize: 30,
				fontWeight: '700',
				fontFamily: 'Inter',
				fill: am5.color(0x333333),
				textAlign: 'center',
			})
		)

		series.data.setAll(data)

		const legend = container.children.push(
			am5.Legend.new(root, {
				width: am5.percent(100),
				layout: verticalLayout,
				paddingTop: 20,
				paddingBottom: 40,
				scrollable: true,
				maxHeight: am5.percent(40),
			})
		)
		legend.data.setAll(series.dataItems)
		legend.labels.template.setAll({
			fontSize: 14,
			fontWeight: '400',
			fontFamily: 'Inter',
			fill: am5.color(0x333333),
		})

		// Appear animation
		series.appear(1000, 100)
		chart.appear(1000, 100)

		// Responsive layout and font
		const resize = () => {
			const w = window.innerWidth

			// Layout
			if (w >= 1600) {
				container.set('layout', horizontalLayout)
				chart.set('width', am5.percent(70))
				legend.set('width', am5.percent(30))
			} else {
				container.set('layout', verticalLayout)
				chart.set('width', am5.percent(100))
				legend.set('width', am5.percent(100))
			}

			// Center label font
			if (w < 640) {
				centerLabel.set('fontSize', 12)
			} else if (w < 1024) {
				centerLabel.set('fontSize', 16)
			} else if (w < 1600) {
				centerLabel.set('fontSize', 20)
			} else {
				centerLabel.set('fontSize', 24)
			}
		}

		window.addEventListener('resize', resize)
		resize()

		return () => {
			window.removeEventListener('resize', resize)
			root.dispose()
		}
	}, [data])

	return (
		<div
			ref={chartRef}
			style={{ width: '100%', height: '600px', minHeight: '400px' }}
		/>
	)
}

export default SchoolPieChart
