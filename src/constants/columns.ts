// columns.ts
import type { ColumnDef } from '@tanstack/react-table'
import type { RegionData } from './tableData'

export const columns: ColumnDef<RegionData>[] = [
	{
		accessorKey: 'region',
		header: 'Viloyat',
	},
	{
		header: 'Vazirlikda korrupsiya holati',
		columns: [
			{ accessorKey: 'korrupsiya.jami', header: 'Jami ariza soni' },
			{ accessorKey: 'korrupsiya.jarayonda', header: 'Jarayondagi arizalar' },
			{ accessorKey: 'korrupsiya.hal', header: 'Hal qilingan arizalar' },
			{ accessorKey: 'korrupsiya.rad', header: 'Rad etilgan arizalar' },
		],
	},
	{
		header: 'Qarindoshlik asosida ishga olish',
		columns: [
			{ accessorKey: 'qarindoshlik.jami', header: 'Jami ariza soni' },
			{ accessorKey: 'qarindoshlik.jarayonda', header: 'Jarayondagi arizalar' },
			{ accessorKey: 'qarindoshlik.hal', header: 'Hal qilingan arizalar' },
			{ accessorKey: 'qarindoshlik.rad', header: 'Rad etilgan arizalar' },
		],
	},
	{
		header: 'Davlat mablag’larini noto‘g‘ri sarflash',
		columns: [
			{ accessorKey: 'notoGriSarf.jami', header: 'Jami ariza soni' },
			{ accessorKey: 'notoGriSarf.jarayonda', header: 'Jarayondagi arizalar' },
			{ accessorKey: 'notoGriSarf.hal', header: 'Hal qilingan arizalar' },
			{ accessorKey: 'notoGriSarf.rad', header: 'Rad etilgan arizalar' },
		],
	},
	{
		header: 'Boshqa',
		columns: [
			{ accessorKey: 'boshqa.jami', header: 'Jami ariza soni' },
			{ accessorKey: 'boshqa.jarayonda', header: 'Jarayondagi arizalar' },
			{ accessorKey: 'boshqa.hal', header: 'Hal qilingan arizalar' },
			{ accessorKey: 'boshqa.rad', header: 'Rad etilgan arizalar' },
		],
	},
]
