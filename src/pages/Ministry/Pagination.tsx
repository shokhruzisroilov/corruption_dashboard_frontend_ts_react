const Pagination = ({ table }: { table: any }) => {
	const pageCount = table.getPageCount()
	const currentPage = table.getState().pagination.pageIndex

	// Sahifa raqamlarini compact qilish
	const getPageNumbers = () => {
		const delta = 2 // current dan oldingi/ keyingi raqamlar
		const range: (number | string)[] = []
		const left = Math.max(0, currentPage - delta)
		const right = Math.min(pageCount - 1, currentPage + delta)

		for (let i = left; i <= right; i++) range.push(i)

		if (left > 1) range.unshift('...')
		if (left > 0) range.unshift(0)

		if (right < pageCount - 2) range.push('...')
		if (right < pageCount - 1) range.push(pageCount - 1)

		return range
	}

	return (
		<div className='flex items-center justify-between py-5 px-4'>
			{/* Left: Previous */}
			<button
				onClick={() => table.previousPage()}
				disabled={!table.getCanPreviousPage()}
				className='border px-2 py-1 rounded disabled:opacity-50'
			>
				Previous
			</button>

			{/* Center: Page numbers */}
			<div className='flex space-x-1'>
				{getPageNumbers().map((page, idx) =>
					typeof page === 'string' ? (
						<span key={idx} className='px-2 py-1'>
							{page}
						</span>
					) : (
						<button
							key={idx}
							onClick={() => table.setPageIndex(page)}
							className={`border px-2 py-1 rounded ${
								page === currentPage ? 'bg-blue-500 text-white' : 'bg-white'
							}`}
						>
							{page + 1}
						</button>
					)
				)}
			</div>

			{/* Right: Next */}
			<button
				onClick={() => table.nextPage()}
				disabled={!table.getCanNextPage()}
				className='border px-2 py-1 rounded disabled:opacity-50'
			>
				Next
			</button>
		</div>
	)
}

export default Pagination
