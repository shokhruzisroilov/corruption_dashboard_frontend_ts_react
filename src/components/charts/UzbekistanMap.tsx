import React, { useLayoutEffect } from 'react'
import * as am5 from '@amcharts/amcharts5'
import * as am5map from '@amcharts/amcharts5/map'
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated'
import uzbekistanGeo from '@amcharts/amcharts5-geodata/uzbekistanLow'

const UzbekistanMap: React.FC = () => {
	useLayoutEffect(() => {
		let root = am5.Root.new('uzbekistanMap')

		root.setThemes([am5themes_Animated.new(root)])

		let chart = root.container.children.push(
			am5map.MapChart.new(root, {
				panX: 'none',
				panY: 'none',
				wheelX: 'none',
				wheelY: 'none',
				projection: am5map.geoMercator(),
			})
		)

		let polygonSeries = chart.series.push(
			am5map.MapPolygonSeries.new(root, {
				geoJSON: uzbekistanGeo,
				valueField: 'value',
				calculateAggregates: true,
			})
		)

		polygonSeries.mapPolygons.template.setAll({
			tooltipText: '{name}: {value}',
			interactive: true,
			fillOpacity: 0.9,
		})

		polygonSeries.set('heatRules', [
			{
				target: polygonSeries.mapPolygons.template,
				dataField: 'value',
				min: am5.color(0x4778f5),
				max: am5.color(0x1e88e5),
				key: 'fill',
			},
		])

		// Viloyatlar ma’lumotlari
		polygonSeries.data.setAll([
			{ id: 'UZ-AN', value: 127 },
			{ id: 'UZ-FA', value: 183 },
			{ id: 'UZ-NG', value: 121 },
			{ id: 'UZ-TK', value: 43 },
			{ id: 'UZ-TT', value: 74 },
			{ id: 'UZ-SA', value: 74 },
			{ id: 'UZ-BU', value: 74 },
			{ id: 'UZ-QA', value: 74 },
			{ id: 'UZ-SU', value: 74 },
			{ id: 'UZ-JI', value: 74 },
			{ id: 'UZ-SI', value: 74 },
			{ id: 'UZ-NW', value: 74 },
			{ id: 'UZ-KH', value: 74 },
			{ id: 'UZ-QR', value: 74 },
		])

		return () => {
			root.dispose()
		}
	}, [])

	const regions = [
		{ name: 'Andijon viloyati', value: 127 },
		{ name: 'Farg‘ona viloyati', value: 183 },
		{ name: 'Namangan viloyati', value: 121 },
		{ name: 'Toshkent viloyati', value: 43 },
		{ name: 'Toshkent shahri', value: 74 },
		{ name: 'Samarqand viloyati', value: 74 },
		{ name: 'Buxoro viloyati', value: 74 },
		{ name: 'Qashqadaryo viloyati', value: 74 },
		{ name: 'Surxondaryo viloyati', value: 74 },
		{ name: 'Jizzax viloyati', value: 74 },
		{ name: 'Sirdaryo viloyati', value: 74 },
		{ name: 'Navoiy viloyati', value: 74 },
		{ name: 'Xorazm viloyati', value: 74 },
		{ name: 'Qoraqalpog‘iston Respublikasi', value: 74 },
	]

	return (
		<div className='flex flex-col lg:flex-row gap-4 p-4 rounded-lg bg-white border border-[#E8E8E8] shadow-[0px_1px_1px_0px_#0000000F]'>
			{/* Xarita */}
			<div className='w-full lg:w-1/2 h-[300px] lg:h-[500px]'>
				<div id='uzbekistanMap' className='w-full h-full rounded-lg shadow' />
			</div>

			{/* Viloyatlar ro‘yxati */}
			<div className='w-full lg:w-1/2 overflow-y-auto bg-[#F6F8F9] rounded-[12px] p-5'>
				<ul className='divide-y'>
					{regions.map((item, idx) => (
						<li
							key={idx}
							className='flex justify-between items-center h-[34px] '
						>
							<span className='font-medium text-[12px] leading-4 tracking-[0] text-[#1A2024]'>
								{item.name}
							</span>
							<span className='font-semibold text-[16px] leading-5 tracking-[0] text-[#1A2024]'>
								{item.value}
							</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default UzbekistanMap
