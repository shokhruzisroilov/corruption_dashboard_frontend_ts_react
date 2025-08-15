import ViolationsChart from '@/components/charts/ViolationsChart'

const ViolationsOverview = () => {
	return (
		<>
			<div>
				<h2 className='font-medium text-[20px] leading-7 tracking-[-1.2%] text-[#14151A] py-4'>
					Eng ko‘p uchraydigan qonunbuzilish turlari
				</h2>
			</div>
			<div className='rounded-lg gap-3 p-5 bg-[#F7F7F8] border border-[#0A0F2914] shadow-sm'>
				<ViolationsChart />
			</div>
		</>
	)
}

export default ViolationsOverview
