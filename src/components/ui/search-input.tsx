import { useState } from 'react'
import { Search, X } from 'lucide-react'

interface SearchInputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {}

export function SearchInput({ ...props }: SearchInputProps) {
	const [value, setValue] = useState('')

	return (
		<div className='relative flex items-center bg-white border border-[#DEE0E3] rounded-md shadow-[0px_1px_2px_0px_#14151A0D]'>
			{/* Search icon */}
			<div className='absolute left-3 pointer-events-none'>
				<Search size={16} className='text-gray-400' />
			</div>

			<input
				{...props}
				value={value}
				onChange={e => setValue(e.target.value)}
				placeholder={props.placeholder || 'Search...'}
				className='w-full pl-10 pr-10 py-2 text-gray-700 text-sm placeholder-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary'
			/>

			{/* Clear button */}
			{value && (
				<button
					type='button'
					onClick={() => setValue('')}
					className='absolute right-3 text-gray-400 hover:text-gray-600'
				>
					<X size={16} />
				</button>
			)}
		</div>
	)
}
