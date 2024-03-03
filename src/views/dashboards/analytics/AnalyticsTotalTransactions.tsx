// ** MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Grid, { GridProps } from '@mui/material/Grid'
import { styled, useTheme } from '@mui/material/styles'

// ** Icon Imports

// ** Third Party Imports
import { ApexOptions } from 'apexcharts'

// ** Custom Components Imports
import ReactApexcharts from 'src/@core/components/react-apexcharts'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

const series = [{
  name: 'Males',
  data: [0.4, 0.65, 0.76, 0.88, 1.5, 2.1, 2.9, 3.8, 3.9, 4.2, 4, 4.3, 4.1, 4.2, 4.5,0, 0, 0]
},
  {
    name: 'Females',
    data: [-0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7, -3.96, -4.22, -4.3, -4.4,-4.1, -4, -4.1, 0, 0, 0]
  }
]

// Styled Grid component
const StyledGrid = styled(Grid)<GridProps>(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  [theme.breakpoints.up('sm')]: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}))

const AnalyticsTotalTransactions = () => {
  // ** Hook
  const theme = useTheme()

  const options: ApexOptions = {
    chart: {
      type: 'bar',
      height: 600,
      stacked: true
    },
    plotOptions: {
      bar: {
        borderRadius: 0,
        horizontal: true,
        endingShape: 'flat',
        barHeight: '100%',
        startingShape: 'rounded'
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 1,
      colors: ["#fff"]
    },

    grid: {
      xaxis: {
        lines: {
          show: false
        }
      }
    },
    yaxis: {
      min: -5,
      max: 5,
      title: {
        // text: 'Age',
      },
    },
    tooltip: {
      shared: false,
      y: {
        formatter: function (val) {
          return Math.abs(val) + "%"
        }
      }
    },
    title: {
      text: ''
    },
    xaxis: {
      categories: ['85+', '80-84', '75-79', '70-74', '65-69', '60-64', '55-59', '50-54',
        '45-49', '40-44', '35-39', '30-34', '25-29', '20-24', '15-19', '10-14', '5-9',
        '0-4'
      ],
      title: {
        text: 'Percentage'
      },
    },
    colors: ['rgba(255, 255, 0, 0.8)', hexToRGBA('#836FFF', 1)],
  }

  return (
    <Card>
      <Grid container>
        <StyledGrid item xs={12} sm={12}>
          <CardHeader title='Total Electors by Age' titleTypographyProps={{ sx: { letterSpacing: '0.15px' } }} />
          <CardContent
            sx={{
              '& .apexcharts-series[rel="2"]': {
                transform: theme.direction === 'rtl' ? 'translateX(-5px)' : 'translateX(5px)'
              }
            }}
          >
            <ReactApexcharts type='bar' height={475} series={series} options={options} />
          </CardContent>
        </StyledGrid>
      </Grid>
    </Card>
  )
}

export default AnalyticsTotalTransactions
