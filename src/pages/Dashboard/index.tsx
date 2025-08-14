import ApplicationsLIneChart from './ApplicationsLIneChart'
import CategoryPeoChart from './CategoryPeoChart'
import DashboardCards from './DashboardCards'
import DashboardFilters from './DashboardFilters'
import RegionsApplication from './RegionsAplication'

const Dashboard = () => {
	return (
		<>
			<DashboardFilters />
			<DashboardCards />
			<CategoryPeoChart />
			<ApplicationsLIneChart />
			<RegionsApplication />
		</>
	)
}

export default Dashboard
