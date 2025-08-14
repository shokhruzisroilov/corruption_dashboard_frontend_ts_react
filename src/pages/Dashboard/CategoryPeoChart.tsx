import SchoolPieChart from '@/components/charts/PeoChart'

const CategoryPeoChart = () => {
	const data = [
		{ category: 'Maktab', value: 36, resolved: 13, inProcess: 6, rejected: 7 },
		{ category: 'Vazirlik', value: 13, resolved: 8, inProcess: 3, rejected: 2 },
		{
			category: 'Hududiy bo’linmalar',
			value: 20,
			resolved: 12,
			inProcess: 5,
			rejected: 3,
		},
		{
			category: 'Universitet va institutlar',
			value: 25,
			resolved: 15,
			inProcess: 7,
			rejected: 3,
		},
		{
			category: 'DMT (bog’cha)',
			value: 10,
			resolved: 5,
			inProcess: 3,
			rejected: 2,
		},
		{
			category: 'Xususiy boshqarmalar',
			value: 15,
			resolved: 9,
			inProcess: 4,
			rejected: 2,
		},
		{ category: 'Boshqa', value: 7, resolved: 4, inProcess: 2, rejected: 1 },
	]

	return (
		<div className='py-5'>
			<h3 className='font-medium text-[20px] leading-[28px] tracking-[-0.012em] text-[#14151A]'>
				So‘nggi oyda murojaatlar bo‘yicha kategoriya taqsimoti
			</h3>
			<div className='border border-[#0A0F2914] shadow-[0px_1px_2px_0px_#14151A0D] rounded-lg mt-6 p-5'>
				<SchoolPieChart data={data} />
			</div>
		</div>
	)
}

export default CategoryPeoChart
