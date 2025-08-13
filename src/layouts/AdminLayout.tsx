import { Outlet } from 'react-router-dom'
import Header from '../components/layout/Header/Header'
import SideBar from '../components/layout/SideBar/SideBar'

const AdminLayout = () => {
	return (
		<div className='flex min-h-screen bg-gray-100'>
			<SideBar />
			<div className='flex-1 flex flex-col'>
				<Header />
				<main className='w-[calc(100vw-316px)] h-[calc(100vh-94px)] p-6 overflow-auto'>
					<Outlet />
				</main>
			</div>
		</div>
	)
}

export default AdminLayout
