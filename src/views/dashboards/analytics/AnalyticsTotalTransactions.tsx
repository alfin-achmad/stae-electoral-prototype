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

const series = [
  {data: [95000, 165000, 105000, 45000, 10000], name: 'Male'},
  {data: [105000, 155000, 125000, 30000, 15000], name: 'Female'},
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
      stacked: true,
      toolbar: { show: false }
    },
    plotOptions: {
      bar: {
        borderRadius: 0,
        horizontal: true,
        dataLabels: {
          position: 'top',
        },
      }
    },
    legend: { show: true },
    dataLabels: {
      enabled: true,
      offsetX: -6,
      style: {
        fontSize: '12px',
        colors: ['#fff']
      }
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
    title: {
      text: ''
    },
    xaxis: {
      categories: ['17-21', '21-35', '35-45', '45-55', '55 =>'],
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
