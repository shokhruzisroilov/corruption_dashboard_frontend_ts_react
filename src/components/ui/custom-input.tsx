import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import clsx from 'clsx'

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	showPasswordToggle?: boolean
	containerClassName?: string
}

export function CustomInput({
	showPasswordToggle = false,
	type = 'text',
	value,
	onChange,
	containerClassName,
	...props
}: CustomInputProps) {
	const [internalValue, setInternalValue] = useState(value || '')
	const [showPassword, setShowPassword] = useState(false)

	const isPasswordType = type === 'password'
	const inputValue = value !== undefined ? value : internalValue

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (value === undefined) {
			setInternalValue(e.target.value)
		}
		onChange?.(e)
	}

	return (
		<div
			className={clsx(
				'relative flex items-center bg-white border border-[#DEE0E3] rounded-md shadow-[0px_1px_2px_0px_#14151A0D]',
				containerClassName
			)}
		>
			<input
				{...props}
				type={
					isPasswordType && showPasswordToggle
						? showPassword
							? 'text'
							: 'password'
						: type
				}
				value={inputValue}
				onChange={handleChange}
				className={clsx(
					'w-full px-3 py-2 text-gray-700 text-sm placeholder-gray-400 rounded-md',
					'focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary',
					props.className
				)}
			/>

			{showPasswordToggle && isPasswordType && (
				<button
					type='button'
					onClick={() => setShowPassword(prev => !prev)}
					className='absolute right-3 text-gray-400 hover:text-gray-600'
				>
					{showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
				</button>
			)}
		</div>
	)
}
