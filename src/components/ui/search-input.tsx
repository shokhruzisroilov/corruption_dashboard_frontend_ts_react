import { useState } from 'react'
import { Search, X } from 'lucide-react'
import { Input } from '@/components/ui/input'

interface SearchInputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {}

export function SearchInput({ ...props }: SearchInputProps) {
	const [value, setValue] = useState('')

	return (
		<div className='flex items-center gap-2 bg-white border border-[#DEE0E3] shadow-[0px_1px_2px_0px_#14151A0D] rounded-md px-3 text-gray-700 relative'>
			<Search size={16} className='text-gray-400' />
			<Input
				{...props}
				value={value}
				onChange={e => setValue(e.target.value)}
				className='w-full border-none shadow-none p-0 focus-visible:ring-0 placeholder-gray-400 text-gray-700 selection:bg-primary/20 selection:text-primary font-normal text-sm leading-5 tracking-[-0.5%]'
			/>
			{value && (
				<button
					type='button'
					onClick={() => setValue('')}
					className='absolute right-3 text-gray-400 hover:text-gray-600 cursor-pointer'
				>
					<X size={16} />
				</button>
			)}
		</div>
	)
}
