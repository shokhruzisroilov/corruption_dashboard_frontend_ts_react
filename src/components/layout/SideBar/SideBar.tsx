import { Link, useNavigate } from 'react-router-dom'

const SideBar = () => {
	const navigate = useNavigate()

	const handleLogout = () => {
		localStorage.removeItem('token')
		navigate('/login', { replace: true })
	}

	return (
		<aside className='w-[316px] bg-gray-800 text-white min-h-screen p-4 flex flex-col'>
			{/* Logo va nom */}
			<div className='mb-6 flex items-center space-x-2'>
				<img
					src='https://via.placeholder.com/40'
					alt='Logo'
					className='w-10 h-10'
				/>
				<span className='text-xl font-bold'>Admin Panel</span>
			</div>

			{/* Search input */}
			<div className='mb-6'>
				<input
					type='text'
					placeholder='Search...'
					className='w-full p-2 rounded bg-gray-700 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
				/>
			</div>

			{/* Navigation links */}
			<nav className='flex-1 space-y-2 overflow-y-auto'>
				<Link to='/' className='block hover:bg-gray-700 p-2 rounded'>
					Dashboard
				</Link>
				<Link to='/ministry' className='block hover:bg-gray-700 p-2 rounded'>
					Ministry
				</Link>
				<Link
					to='/private-departments'
					className='block hover:bg-gray-700 p-2 rounded'
				>
					Private Departments
				</Link>
				<Link
					to='/regional-branches'
					className='block hover:bg-gray-700 p-2 rounded'
				>
					Regional Branches
				</Link>
				<Link
					to='/kindergartens'
					className='block hover:bg-gray-700 p-2 rounded'
				>
					Kindergartens
				</Link>
				<Link to='/schools' className='block hover:bg-gray-700 p-2 rounded'>
					Schools
				</Link>
				<Link
					to='/national-organizations'
					className='block hover:bg-gray-700 p-2 rounded'
				>
					National Organizations
				</Link>
				<Link
					to='/universities'
					className='block hover:bg-gray-700 p-2 rounded'
				>
					Universities
				</Link>
				<Link to='/others' className='block hover:bg-gray-700 p-2 rounded'>
					Others
				</Link>
			</nav>

			{/* Logout */}
			<button
				onClick={handleLogout}
				className='mt-4 w-full bg-red-600 hover:bg-red-700 p-2 rounded'
			>
				Logout
			</button>
		</aside>
	)
}

export default SideBar
