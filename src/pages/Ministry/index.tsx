import { useState } from 'react'
import {
	flexRender,
	getCoreRowModel,
	useReactTable,
	getFilteredRowModel,
	getPaginationRowModel,
} from '@tanstack/react-table'
import { columns } from '@/constants/columns'
import { data } from '@/constants/tableData'
import Pagination from './Pagination'
import { SearchInput } from '@/components/ui/search-input'

const Ministry = () => {
	const [globalFilter, setGlobalFilter] = useState('')

	const table = useReactTable({
		data,
		columns,
		state: { globalFilter },
		onGlobalFilterChange: setGlobalFilter,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
	})

	return (
		<div className='bg-white border border-[#EDEDEF] shadow-[0_1px_2px_#1018280D] rounded-2xl'>
			{/* Search */}
			<div className='w-full py-3 px-4'>
				<SearchInput
					placeholder='Search viloyat...'
					value={globalFilter}
					onChange={e => setGlobalFilter(e.target.value)}
				/>
			</div>

			{/* Table */}
			<div className='overflow-x-auto border rounded-lg'>
				<table className='min-w-full border-collapse border border-gray-300'>
					<thead>
						{table.getHeaderGroups().map(headerGroup => (
							<tr key={headerGroup.id}>
								{headerGroup.headers.map(header => (
									<th
										key={header.id}
										colSpan={header.colSpan}
										className='border border-gray-300 p-2 bg-gray-100 text-center'
									>
										{header.isPlaceholder
											? null
											: flexRender(
													header.column.columnDef.header,
													header.getContext()
											  )}
									</th>
								))}
							</tr>
						))}
					</thead>
					<tbody>
						{table.getRowModel().rows.map(row => (
							<tr key={row.id}>
								{row.getVisibleCells().map(cell => (
									<td
										key={cell.id}
										className='border border-gray-300 p-2 text-center'
									>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{/* Pagination */}
			<Pagination table={table} />
		</div>
	)
}

export default Ministry
