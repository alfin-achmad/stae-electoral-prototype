// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Custom Components Imports
import CardStatisticsCharacter from 'src/@core/components/card-statistics/card-stats-with-image'

// ** Styled Component Import
import KeenSliderWrapper from 'src/@core/styles/libs/keen-slider'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import EcommerceVisitsByDay from 'src/views/dashboards/ecommerce/EcommerceVisitsByDay'
import EcommerceSalesOverview from 'src/views/dashboards/ecommerce/EcommerceSalesOverview'
import AnalyticsTotalTransactions from "../../../views/dashboards/analytics/AnalyticsTotalTransactions";

const EcommerceDashboard = () => {
  return (
    <ApexChartWrapper>
      <KeenSliderWrapper>
        <Grid container spacing={6} className='match-height'>
          <Grid item xs={12} md={6}>
            <EcommerceSalesOverview />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <CardStatisticsCharacter
              data={{
                stats: '400.000',
                title: 'Male Electors',
                chipColor: 'primary',
                chipText: 'Period 1 June - 30 December 2023',
                src: '/images/cards/card-stats-img-1.png'
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <CardStatisticsCharacter
              data={{
                stats: '450.000',
                title: 'Female Electors',
                chipColor: 'primary',
                chipText: 'Period 1 June - 30 December 2023',
                src: '/images/cards/card-stats-img-2.png'
              }}
            />
          </Grid>
          <Grid item xs={12} md={9} sx={{ order: 3 }} height={600}>
            <EcommerceVisitsByDay />
          </Grid>
          <Grid item xs={12} md={3} sx={{ order: 3 }} height={600}>
            <AnalyticsTotalTransactions />
          </Grid>
        </Grid>
      </KeenSliderWrapper>
    </ApexChartWrapper>
  )
}

export default EcommerceDashboard
