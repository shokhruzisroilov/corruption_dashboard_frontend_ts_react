import { Menu } from 'lucide-react'

interface HeaderProps {
	onToggleSidebar: () => void
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar }) => {
	return (
		<header className='h-[70px] md:h-[94px] bg-white flex items-center justify-between px-4 border-b border-gray-200'>
			<div className='flex items-center gap-3 md:gap-4'>
				{/* Sidebar toggle button */}
				<button
					onClick={onToggleSidebar}
					className='p-2 rounded-md hover:bg-gray-100 transition-colors cursor-pointer'
				>
					<Menu size={24} />
				</button>

				<div>
					<h1 className='font-semibold text-lg md:text-2xl leading-6 md:leading-8 text-[#14151A]'>
						Analitika
					</h1>
					<p className='hidden sm:block text-xs md:text-sm text-[#0F132499]'>
						Barcha hududlar va ma'lumotlar bo'yicha analitik hisobotlar
					</p>
				</div>
			</div>

			{/* Admin */}
			<div className='flex items-center gap-2'>
				<div className='w-9 h-9 md:w-10 md:h-10 bg-[#F48E2F] rounded-full flex items-center justify-center'>
					<span className='font-medium text-xs md:text-sm text-white'>A</span>
				</div>
				<div className='hidden sm:block'>
					<h3 className='text-xs md:text-sm font-medium'>Admin</h3>
					<p className='text-[10px] md:text-xs text-[#0F132499]'>Hodim</p>
				</div>
			</div>
		</header>
	)
}

export default Header
