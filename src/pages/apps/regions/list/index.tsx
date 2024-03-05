// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import CardHeader from '@mui/material/CardHeader'

// ** Custom Table Components Imports
import TableRegion from 'src/views/table/data-grid/TableRegion'

const RegionList = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Master Regions' sx={{ pb: 4, '& .MuiCardHeader-title': { letterSpacing: '.15px' } }} />
          <Divider />
          <TableRegion />
        </Card>
      </Grid>
    </Grid>
  )
}
export default RegionList
