// src/components/RegionsApplication.tsx
import React, { useEffect } from 'react'
import * as am5 from '@amcharts/amcharts5'
import * as am5map from '@amcharts/amcharts5/map'
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated'
// O‘zbekiston geoJSON
import uzbekistanGeo from '@amcharts/amcharts5-geodata/uzbekistanLow'

const RegionsApplication: React.FC = () => {
	useEffect(() => {
		// Root yaratish
		const root = am5.Root.new('uzbekistanMap')

		root.setThemes([am5themes_Animated.new(root)])

		// Xarita chart
		const chart = root.container.children.push(
			am5map.MapChart.new(root, {
				panX: 'translateX',
				panY: 'translateY',
				projection: am5map.geoMercator(),
			})
		)

		// Polygon series (viloyatlar)
		const polygonSeries = chart.series.push(
			am5map.MapPolygonSeries.new(root, {
				geoJSON: uzbekistanGeo as any,
				valueField: 'value',
			})
		)

		polygonSeries.mapPolygons.template.setAll({
			tooltipText: '{name}: {value}',
			interactive: true,
		})

		polygonSeries.mapPolygons.template.states.create('hover', {
			fill: am5.color(0x677935),
		})

		// Rang gradienti
		polygonSeries.set('heatRules', [
			{
				target: polygonSeries.mapPolygons.template,
				dataField: 'value',
				min: am5.color(0xe0f3ff),
				max: am5.color(0x0050a0),
				key: 'fill',
			},
		])

		// Backend ma’lumotlari o‘rniga random data
		const data = (uzbekistanGeo as any).features.map((feature: any) => ({
			id: feature.id,
			value: Math.floor(Math.random() * 5000), // bu joyga backend’dan kelgan ariza soni qo‘yiladi
		}))

		polygonSeries.data.setAll(data)

		// Heat legend
		const heatLegend = chart.children.push(
			am5.HeatLegend.new(root, {
				orientation: 'vertical',
				startColor: am5.color(0xe0f3ff),
				endColor: am5.color(0x0050a0),
				startText: 'Kam',
				endText: 'Ko‘p',
				stepCount: 5,
			})
		)

		polygonSeries.events.on('datavalidated', () => {
			heatLegend.set('startValue', polygonSeries.getPrivate('valueLow'))
			heatLegend.set('endValue', polygonSeries.getPrivate('valueHigh'))
		})

		return () => {
			root.dispose()
		}
	}, [])

	return <div id='uzbekistanMap' style={{ width: '100%', height: '500px' }} />
}

export default RegionsApplication
