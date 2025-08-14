import { NavLink, useNavigate } from 'react-router-dom'
import { navItems } from '@/constants/navItems'
import { SearchInput } from '@/components/ui/search-input'
import { LogoutIcon } from '@/assets/icons'

const SideBar = () => {
	const navigate = useNavigate()

	const handleLogout = () => {
		localStorage.removeItem('token')
		navigate('/login', { replace: true })
	}

	return (
		<aside className='w-[316px] bg-[#F7F7F8] min-h-screen flex flex-col p-4 border-r border-[#DEE0E3] scroll-custom'>
			{/* Logo va nom */}
			<div className='flex items-center'>
				<span className='font-semibold text-[24px] leading-[32px] tracking-[-0.014em] text-[#14151A]'>
					Admin Dashboard
				</span>
			</div>

			{/* Search input */}
			<div className='py-3'>
				<SearchInput placeholder='Qidirish' />
			</div>

			{/* Navigation links */}
			<nav className='flex-1 space-y-2 overflow-y-auto pt-4'>
				{navItems.map(item => (
					<NavLink
						key={item.path}
						to={item.path}
						className={({ isActive }) =>
							`flex items-center gap-2 p-2 rounded-lg hover:bg-[#0A0F290A] transition-colors font-medium text-sm leading-[20px] tracking-[-0.5%] text-[#14151A] ${
								isActive ? 'bg-[#0A0F290A] font-semibold' : ''
							}`
						}
					>
						<img
							src={item.icon}
							alt={`${item.label} icon`}
							className='w-5 h-5'
						/>
						{item.label}
					</NavLink>
				))}
			</nav>

			{/* Logout */}
			<button
				onClick={handleLogout}
				className='flex items-center gap-2 p-2 rounded-lg hover:bg-[#0A0F290A] transition-colors font-medium text-sm leading-[20px] tracking-[-0.5%] text-[#FF4D4F] mt-4 w-full cursor-pointer'
			>
				{LogoutIcon && (
					<img src={LogoutIcon} alt='Logout icon' className='w-5 h-5' />
				)}
				Logout
			</button>
		</aside>
	)
}

export default SideBar
