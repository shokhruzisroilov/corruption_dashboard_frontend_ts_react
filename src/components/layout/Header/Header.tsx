const Header = () => {
	return (
		<header className='h-[94px] bg-white flex items-center justify-between px-8'>
			<div className='flex flex-col gap-1'>
				<h1 className='font-semibold text-2xl leading-8 tracking-[-1.4%] text-[#14151A]'>
					Analitika
				</h1>
				<p className='font-normal text-[14px] leading-5 tracking-[-0.5%] text-[#0F132499]'>
					Barcha hududlar va ma'lumotlar bo'yicha analitik hisobotlar
				</p>
			</div>

			{/* Admin */}
			<div className='flex items-center gap-2'>
				<div className='w-10 h-10 bg-[#F48E2F] rounded-full flex items-center justify-center'>
					<span className='font-medium text-sm leading-5 tracking-[-0.5%] text-white text-center'>
						A
					</span>
				</div>
				<div>
					<h3 className='text-sm font-medium'>Admin</h3>
					<p className='font-normal text-[12px] leading-4 tracking-normal text-[#0F132499] text-center'>
						Hodim
					</p>
				</div>
			</div>
		</header>
	)
}

export default Header
