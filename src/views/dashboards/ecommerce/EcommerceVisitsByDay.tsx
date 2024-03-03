// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import { ApexOptions } from 'apexcharts'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'
import OptionsMenu from 'src/@core/components/option-menu'
import ReactApexcharts from 'src/@core/components/react-apexcharts'

const EcommerceVisitsByDay = () => {
  // ** Hook
  const theme = useTheme()

  const options: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      height: 600,
      toolbar: { show: false }
    },
    plotOptions: {
      bar: {
        borderRadius: 0,
        distributed: true,
        columnWidth: '55%',
        endingShape: 'rounded',
        startingShape: 'rounded'
      }
    },
    legend: { show: false },
    dataLabels: { enabled: false },
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    xaxis: {
      axisTicks: { show: false },
      axisBorder: { show: false },
      categories: ['Aileu', 'Ainaro', 'Baucau', 'Bobonaro', 'Covalima', 'Dili', 'Ermera', 'Lautem', 'Liquica', 'Manatuto', 'Manufahi', 'RAEOA', 'Viqueque', 'Australia', 'South of Korea', 'Indonesia', 'UK', 'North Irland', 'Portugal'],
      labels: {
        style: { colors: theme.palette.text.disabled }
      }
    },
    yaxis: { show: false },
    colors: [
      'rgba(255, 0, 0, 0.5)',
      'rgba(0, 255, 0, 0.7)',
      'rgba(0, 0, 255, 0.3)',
      'rgba(255, 255, 0, 0.8)',
      'rgba(255, 0, 255, 0.6)',
      'rgba(0, 255, 255, 0.4)',
      'rgba(128, 128, 0, 0.5)',
      'rgba(128, 0, 128, 0.7)',
      'rgba(0, 128, 128, 0.3)',
      'rgba(128, 255, 0, 0.8)',
      'rgba(255, 128, 0, 0.6)',
      'rgba(128, 0, 255, 0.4)',
      'rgba(0, 128, 255, 0.5)',
      'rgba(255, 128, 128, 0.7)',
      'rgba(128, 255, 128, 0.3)',
      'rgba(128, 128, 255, 0.8)',
      'rgba(255, 255, 128, 0.6)',
      'rgba(255, 128, 255, 0.4)'
    ],
    grid: {
      show: false,
      padding: {
        top: -15,
        left: -7,
        right: -4
      }
    }
  }

  return (
    <Card>
      <CardHeader
        title='Total Electors Per Districts'
        subheader='Period 1 June - 30 Decembre 2023'
        subheaderTypographyProps={{ sx: { lineHeight: 1.429 } }}
        titleTypographyProps={{ sx: { letterSpacing: '0.15px' } }}
        action={
          <OptionsMenu
            options={['Refresh', 'Edit', 'Share']}
            iconButtonProps={{ size: 'small', className: 'card-more-options' }}
          />
        }
      />
      <CardContent>
        <ReactApexcharts type='bar' height={400} options={options} series={[{ data: [62105, 44735, 46293, 23750, 40826, 55094, 58892, 29321, 48982, 50805, 39380, 42684, 47452, 32920, 49961, 40764, 33199, 42459, 45750]}]} />
        <Box sx={{ mt: 5, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography sx={{ mb: 0.75, fontWeight: 600 }}>Most Visited Day</Typography>
            <Typography variant='body2'>Total 62.4k Visits on Thursday</Typography>
          </Box>
          <CustomAvatar skin='light' variant='rounded'>
            <Icon icon='mdi:chevron-right' />
          </CustomAvatar>
        </Box>
      </CardContent>
    </Card>
  )
}

export default EcommerceVisitsByDay
