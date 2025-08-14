import { Outlet } from 'react-router-dom'
import Header from '../components/layout/Header/Header'
import SideBar from '../components/layout/SideBar/SideBar'

const AdminLayout = () => {
	return (
		<div className='flex min-h-screen bg-white'>
			<SideBar />
			<div className='flex-1 flex flex-col'>
				<Header />
				<main className='w-[calc(100vw-316px)] h-[calc(100vh-94px)] px-6 overflow-auto scroll-custom'>
					<Outlet />
				</main>
			</div>
		</div>
	)
}

export default AdminLayout
