// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Custom Components Imports
import CardStatisticsCharacter from 'src/@core/components/card-statistics/card-stats-with-image'

// ** Styled Component Import
import KeenSliderWrapper from 'src/@core/styles/libs/keen-slider'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import EcommerceTable from 'src/views/dashboards/ecommerce/EcommerceTable'
import EcommerceVisitsByDay from 'src/views/dashboards/ecommerce/EcommerceVisitsByDay'
import EcommerceSalesOverview from 'src/views/dashboards/ecommerce/EcommerceSalesOverview'
import EcommerceSalesThisMonth from 'src/views/dashboards/ecommerce/EcommerceSalesThisMonth'
import EcommerceActivityTimeline from 'src/views/dashboards/ecommerce/EcommerceActivityTimeline'
import EcommerceImpressionsOrders from 'src/views/dashboards/ecommerce/EcommerceImpressionsOrders'

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
                stats: '8.14k',
                title: 'Ratings',
                chipColor: 'primary',
                trendNumber: '+15.6%',
                chipText: 'Year of 2022',
                src: '/images/cards/card-stats-img-1.png'
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <CardStatisticsCharacter
              data={{
                stats: '12.2k',
                trend: 'negative',
                title: 'Sessions',
                chipColor: 'success',
                trendNumber: '-25.5%',
                chipText: 'Last Month',
                src: '/images/cards/card-stats-img-2.png'
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <EcommerceSalesThisMonth />
          </Grid>
          <Grid item xs={12} md={6}>
            <EcommerceActivityTimeline />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <EcommerceImpressionsOrders />
          </Grid>
          <Grid item xs={12} md={9} sx={{ order: 3 }}>
            <EcommerceTable />
          </Grid>
          <Grid item xs={12} md={3} sx={{ order: 3 }}>
            <EcommerceVisitsByDay />
          </Grid>
        </Grid>
      </KeenSliderWrapper>
    </ApexChartWrapper>
  )
}

export default EcommerceDashboard
