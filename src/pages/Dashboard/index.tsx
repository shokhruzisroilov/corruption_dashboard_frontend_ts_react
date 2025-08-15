import ApplicationsLIneChart from './ApplicationsLIneChart'
import CategoryPeoChart from './CategoryPeoChart'
import DashboardCards from './DashboardCards'
import DashboardFilters from './DashboardFilters'
import RegionsApplication from './RegionsAplication'
import ViolationsOverview from './ViolationsOverview'

const Dashboard = () => {
	return (
		<>
			<DashboardFilters />
			<DashboardCards />
			<CategoryPeoChart />
			<ApplicationsLIneChart />
			<RegionsApplication />
			<ViolationsOverview />
		</>
	)
}

export default Dashboard
