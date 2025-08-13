import { useState } from 'react'

const Header = () => {
	const [isOpen, setIsOpen] = useState(false)
	const toggleDropdown = () => setIsOpen(!isOpen)

	return (
		<header className='h-[94px] bg-white shadow px-4 py-3 flex items-center justify-between'>
			<h1 className='text-lg font-semibold'>Admin Panel</h1>

			{/* User Profile */}
			<div className='relative'>
				<button
					onClick={toggleDropdown}
					className='flex items-center space-x-2 focus:outline-none'
				>
					<img
						src='https://via.placeholder.com/32'
						alt='User Avatar'
						className='w-8 h-8 rounded-full'
					/>
					<span className='text-sm font-medium'>John Doe</span>
				</button>

				{/* Dropdown */}
				{isOpen && (
					<div className='absolute right-0 mt-2 w-40 bg-white border rounded shadow-md z-10'>
						<a
							href='#'
							className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
						>
							Profile
						</a>
						<a
							href='#'
							className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
						>
							Settings
						</a>
					</div>
				)}
			</div>
		</header>
	)
}

export default Header
