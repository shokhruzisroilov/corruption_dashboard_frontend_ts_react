import { FilterSelect } from '@/components/ui/filter-select'

const DashboardFilters = () => {
	return (
		<div className='border-t border-[#E9EAEC]'>
			<div className='flex flex-wrap gap-4 py-5'>
				{/* Region */}
				<FilterSelect
					className='flex-1'
					options={[
						{ label: 'Toshkent', value: 'toshkent' },
						{ label: 'Samarqand', value: 'samarqand' },
						{ label: 'Andijon', value: 'andijon' },
					]}
					texts={{
						placeholder: 'Viloyatni tanlang',
						searchPlaceholder: 'Viloyatdan qidiring...',
						emptyText: 'Viloyatlar topilmadi',
					}}
				/>

				{/* Region */}
				<FilterSelect
					className='flex-1'
					options={[
						{ label: 'Chilonzor', value: 'chilonzor' },
						{ label: 'Olmazor', value: 'olmazor' },
						{ label: 'Yunusobod', value: 'yunusobod' },
					]}
					texts={{
						placeholder: 'Tumanni tanlang',
						searchPlaceholder: 'Tumandan qidiring...',
						emptyText: 'Tumanlar topilmadi',
					}}
				/>

				{/* Date */}
				<FilterSelect
					className='flex-1'
					options={[
						{ label: 'Bugun', value: 'today' },
						{ label: 'Hafta', value: 'week' },
						{ label: 'Oy', value: 'month' },
					]}
					texts={{
						placeholder: 'Vaqtni belgilang',
						searchPlaceholder: 'Vaqtdan qidiring...',
						emptyText: 'Vaqt topilmadi',
					}}
				/>
			</div>
		</div>
	)
}

export default DashboardFilters
