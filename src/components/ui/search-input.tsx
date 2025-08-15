import { useState } from 'react'
import { Search, X } from 'lucide-react'

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	placeholder?: string
	value?: string
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function SearchInput({
	value,
	onChange,
	placeholder,
	...props
}: SearchInputProps) {
	const [internalValue, setInternalValue] = useState('')

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (onChange) {
			onChange(e)
		} else {
			setInternalValue(e.target.value)
		}
	}

	const displayValue = value ?? internalValue

	return (
		<div className='relative flex items-center bg-white border border-[#DEE0E3] rounded-md shadow-[0px_1px_2px_0px_#14151A0D]'>
			{/* Search icon */}
			<div className='absolute left-3 pointer-events-none'>
				<Search size={16} className='text-gray-400' />
			</div>

			<input
				{...props}
				value={displayValue}
				onChange={handleChange}
				placeholder={placeholder || 'Search...'}
				className='w-full pl-10 pr-10 py-2 text-gray-700 text-sm placeholder-gray-400 rounded-md focus:outline-none focus:ring-0 focus:border-transparent focus:shadow-none'
			/>

			{/* Clear button */}
			{displayValue && (
				<button
					type='button'
					onClick={() =>
						handleChange({
							target: { value: '' },
						} as React.ChangeEvent<HTMLInputElement>)
					}
					className='absolute right-3 text-gray-400 hover:text-gray-600'
				>
					<X size={16} />
				</button>
			)}
		</div>
	)
}
