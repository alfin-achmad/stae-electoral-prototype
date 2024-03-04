// ** MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports

// ** Third Party Imports
import { ApexOptions } from 'apexcharts'

// ** Custom Components Imports
import OptionsMenu from 'src/@core/components/option-menu'
import ReactApexcharts from 'src/@core/components/react-apexcharts'

const EcommerceVisitsByDay = () => {
  // ** Hook

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
        columnWidth: '70%',
        endingShape: 'rounded',
        startingShape: 'rounded'
      }
    },
    legend: { show: true },
    dataLabels: { enabled: true },
    xaxis: {
      axisTicks: { show: false },
      axisBorder: { show: false },
      categories: ['Aileu', 'Ainaro', 'Baucau', 'Bobonaro', 'Covalima', 'Dili', 'Ermera', 'Lautem', 'Liquica', 'Manatuto', 'Manufahi', 'RAEOA', 'Viqueque', 'Australia', 'South of Korea', 'Indonesia', 'UK', 'North Irland', 'Portugal'],
    },
    yaxis: { show: true },
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
      show: true,
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
        title='Total Electors Per Municipiu'
        subheader='Period 1 June - 30 December 2023'
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
        <ReactApexcharts type='bar' height={450} options={options} series={[{ data: [40000, 45000, 120000, 55000, 55000, 165000, 55000, 45000, 45000, 45000, 45000, 45000, 50000, 10000, 5000, 5000, 5000, 5000, 10000]}]} />
      </CardContent>
    </Card>
  )
}

export default EcommerceVisitsByDay
