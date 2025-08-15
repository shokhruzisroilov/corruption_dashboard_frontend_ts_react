import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/layout/Header/Header'
import SideBar from '../components/layout/SideBar/SideBar'

const AdminLayout = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true)

	const toggleSidebar = () => setIsSidebarOpen(prev => !prev)

	useEffect(() => {
		if (window.innerWidth < 1024) {
			setIsSidebarOpen(false)
		}
	}, [])

	return (
		<div className='flex min-h-screen bg-white'>
			{/* Sidebar */}
			<div
				className={`transition-all duration-300 ${
					isSidebarOpen ? 'w-[316px]' : 'w-0 overflow-hidden'
				}`}
			>
				<SideBar />
			</div>

			{/* Main content */}
			<div className='flex-1 flex flex-col'>
				<Header onToggleSidebar={toggleSidebar} />
				<main
					className={`transition-all duration-300 ${
						isSidebarOpen ? 'w-[calc(100vw-316px)]' : 'w-[100vw]'
					} h-[calc(100vh-94px)] px-6 pb-6 overflow-auto scroll-custom`}
				>
					<Outlet />
				</main>
			</div>
		</div>
	)
}

export default AdminLayout
