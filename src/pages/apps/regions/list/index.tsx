// ** React Imports
import {SyntheticEvent, useCallback, useEffect, useState} from 'react'

import {GetStaticProps, InferGetStaticPropsType} from 'next/types'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import {DataGrid, GridColDef} from '@mui/x-data-grid'

// ** Store Imports
import {useDispatch} from 'react-redux'

// ** Actions Imports
import {fetchData} from 'src/store/apps/user'

// ** Third Party Components
import axios from 'axios'

// ** Types Imports
import {AppDispatch} from 'src/store'
import {CardStatsType} from 'src/@fake-db/types'
import {UsersType} from 'src/types/apps/userTypes'

// ** Custom Table Components Imports
import TableHeader from 'src/views/apps/region/list/TableHeader'
import AddRegionDrawer from 'src/views/apps/region/list/AddRegionDrawer'
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Tab from "@mui/material/Tab";

interface CellType {
  row: UsersType
}

const columnsDistrict: GridColDef[] = [
  {
    flex: 0.2,
    minWidth: 230,
    field: 'fullName',
    headerName: 'Name',
  },
  {
    flex: 0.2,
    minWidth: 230,
    field: 'groupBy',
    headerName: 'Group',
  },
  {
    flex: 0.15,
    minWidth: 120,
    headerName: 'Summary',
    field: 'summary',
  },
]

const columnsSubDistrict: GridColDef[] = [
  {
    field: 'id',
    headerName: 'No.',
  },
  {
    field: 'fullName',
    headerName: 'Name',
  },
  {
    flex: 0.2,
    minWidth: 230,
    field: 'districtName',
    headerName: 'District Name',
  },
  {
    flex: 0.2,
    minWidth: 230,
    field: 'code',
    headerName: 'Code ',
  },
  {
    flex: 0.15,
    minWidth: 120,
    headerName: 'Summary',
    field: 'summary',
  }
]

const columnsSucco: GridColDef[] = [
  {
    field: 'id',
    headerName: 'No.',
  },
  {
    minWidth: 230,
    field: 'fullName',
    headerName: 'Name',
  },
  {
    field: 'code',
    headerName: 'Code ',
  },
  {
    minWidth: 230,
    field: 'codeSubdistrict',
    headerName: 'Code Sub District',
  },
  {
    headerName: 'Summary',
    field: 'summary',
  }
]

const columnsAldeia: GridColDef[] = [
  {
    field: 'id',
    headerName: 'No.',
  },
  {
    flex: 0.2,
    minWidth: 230,
    field: 'fullName',
    headerName: 'Name',
  },
  {
    flex: 0.2,
    minWidth: 230,
    field: 'code',
    headerName: 'Code District',
  },
  {
    flex: 0.2,
    minWidth: 230,
    field: 'codeSubdistrict',
    headerName: 'Code Sub District',
  },
  {
    flex: 0.15,
    minWidth: 120,
    headerName: 'Summary',
    field: 'currentPlan',
    renderCell: ({ row }: CellType) => {
      return (
        <Typography variant='subtitle1' noWrap sx={{ textTransform: 'capitalize' }}>
          {row.currentPlan}
        </Typography>
      )
    }
  },
]

const recordDistrict = [
  {
    "id": 1,
    "fullName": "Aileu",
    "groupBy": "Domestic",
    "summary": "",
  },
  {
    "id": 2,
    "fullName": "Ainaro",
    "groupBy": "Domestic",
    "summary": "",
  },
  {
    "id": 3,
    "fullName": "Atauro",
    "groupBy": "Domestic",
    "summary": "",
  },
  {
    "id": 4,
    "fullName": "Baucau",
    "groupBy": "Domestic",
    "summary": "",
  },
  {
    "id": 5,
    "fullName": "Bobonaro",
    "groupBy": "Domestic",
    "summary": "",
  },
  {
    "id": 6,
    "fullName": "Covalima",
    "groupBy": "Domestic",
    "summary": "",
  },
  {
    "id": 7,
    "fullName": "Dili",
    "groupBy": "Domestic",
    "summary": "",
  },
  {
    "id": 8,
    "fullName": "Ermera",
    "groupBy": "Domestic",
    "summary": "",
  },
  {
    "id": 9,
    "fullName": "Lautem",
    "groupBy": "Domestic",
    "summary": "",
  },
  {
    "id": 10,
    "fullName": "Liquica",
    "groupBy": "Domestic",
    "summary": "",
  },
  {
    "id": 11,
    "fullName": "Manatuto",
    "groupBy": "Domestic",
    "summary": "",
  },
  {
    "id": 12,
    "fullName": "Manufahi",
    "groupBy": "Domestic",
    "summary": "",
  },
  {
    "id": 13,
    "fullName": "RAEOA",
    "groupBy": "Domestic",
    "summary": "",
  },
  {
    "id": 14,
    "fullName": "Viqueque",
    "groupBy": "Domestic",
    "summary": "",
  },
]

const recordSubDistrict = [
  {
    "id": 1,
    "fullName": "Aileu",
    "districtName": "Aileu",
    "code": "0304",
    "summary": "",
  },
  {
    "id": 2,
    "fullName": "Laulara",
    "districtName": "Aileu",
    "code": "0302",
    "summary": "",
  },
  {
    "id": 3,
    "fullName": "Liquidoe",
    "districtName": "Aileu",
    "code": "0303",
    "summary": "",
  },
  {
    "id": 4,
    "fullName": "Remeixo",
    "districtName": "Aileu",
    "code": "0301",
    "summary": "",
  },
]

const recordSucco = [
  {
    "id": 1,
    "fullName": "Aisirrimou",
    "code": "030409",
    "codeSubdistrict": "0304",
    "summary": "",
  },
  {
    "id": 2,
    "fullName": "Bandudato",
    "code": "030402",
    "codeSubdistrict": "0304",
    "summary": "",
  },
  {
    "id": 3,
    "fullName": "Fahria",
    "code": "030411",
    "codeSubdistrict": "0304",
    "summary": "",
  },
  {
    "id": 4,
    "fullName": "Fatubossa",
    "code": "030405",
    "codeSubdistrict": "0304",
    "summary": "",
  },
  {
    "id": 5,
    "fullName": "Hoholau",
    "code": "030401",
    "codeSubdistrict": "0304",
    "summary": "",
  },
]

const recordAldeia = [
  {
    "id": 1,
    "fullName": "Aituhullaran",
    "code": "03040902",
    "codeSubdistrict": "030409",
    "summary": "",
  },
  {
    "id": 2,
    "fullName": "Bercati",
    "code": "03040903",
    "codeSubdistrict": "030409",
    "summary": "",
  },
  {
    "id": 3,
    "fullName": "Bessilau",
    "code": "03040904",
    "codeSubdistrict": "030409",
    "summary": "",
  },
  {
    "id": 4,
    "fullName": "Erkoatun",
    "code": "03040905",
    "codeSubdistrict": "030409",
    "summary": "",
  },
  {
    "id": 5,
    "fullName": "Hudilaran",
    "code": "03040906",
    "codeSubdistrict": "030409",
    "summary": "",
  },
]

const RegionList = ({}: InferGetStaticPropsType<typeof getStaticProps>) => {
  // ** State
  const [role] = useState<string>('')
  const [plan] = useState<string>('')
  const [value, setValue] = useState<string>('')
  const [status] = useState<string>('')
  const [addRegionOpen, setAddRegionOpen] = useState<boolean>(false)
  const [valueTab, setValueTab] = useState<string>('1')
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 10 })

  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(
      fetchData({
        role,
        status,
        q: value,
        currentPlan: plan
      })
    )
  }, [dispatch, plan, role, status, value])

  const handleFilter = useCallback((val: string) => {
    setValue(val)
  }, [])

  const handleChangeTab = (event: SyntheticEvent, newValue: string) => {
    setValueTab(newValue)
  }

  const toggleAddRegionDrawer = () => setAddRegionOpen(!addRegionOpen)

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Master Regions' sx={{ pb: 4, '& .MuiCardHeader-title': { letterSpacing: '.15px' } }} />
          <Divider />
          <TableHeader value={value} handleFilter={handleFilter} toggle={toggleAddRegionDrawer} />

          <TabContext value={valueTab}>
            <TabList onChange={handleChangeTab} aria-label='simple tabs example'>
              <Tab value='1' label='District' />
              <Tab value='2' label='Sub District' />
              <Tab value='3' label='Succo' />
              <Tab value='4' label='Aldeia' />
            </TabList>
            <TabPanel value='1'>
              <DataGrid
                autoHeight
                rows={recordDistrict}
                columns={columnsDistrict}
                checkboxSelection
                disableRowSelectionOnClick
                pageSizeOptions={[10, 25, 50]}
                paginationModel={paginationModel}
                onPaginationModelChange={setPaginationModel}
                sx={{ '& .MuiDataGrid-columnHeaders': { borderRadius: 0 } }}
              />
            </TabPanel>
            <TabPanel value='2'>
              <DataGrid
                autoHeight
                rows={recordSubDistrict}
                columns={columnsSubDistrict}
                checkboxSelection
                disableRowSelectionOnClick
                pageSizeOptions={[10, 25, 50]}
                paginationModel={paginationModel}
                onPaginationModelChange={setPaginationModel}
                sx={{ '& .MuiDataGrid-columnHeaders': { borderRadius: 0 } }}
              />
            </TabPanel>
            <TabPanel value='3'>
              <DataGrid
                autoHeight
                rows={recordSucco}
                columns={columnsSucco}
                checkboxSelection
                disableRowSelectionOnClick
                pageSizeOptions={[10, 25, 50]}
                paginationModel={paginationModel}
                onPaginationModelChange={setPaginationModel}
                sx={{ '& .MuiDataGrid-columnHeaders': { borderRadius: 0 } }}
              />
            </TabPanel>
            <TabPanel value='4'>
              <DataGrid
                autoHeight
                rows={recordAldeia}
                columns={columnsAldeia}
                checkboxSelection
                disableRowSelectionOnClick
                pageSizeOptions={[10, 25, 50]}
                paginationModel={paginationModel}
                onPaginationModelChange={setPaginationModel}
                sx={{ '& .MuiDataGrid-columnHeaders': { borderRadius: 0 } }}
              />
            </TabPanel>
          </TabContext>
        </Card>
      </Grid>

      <AddRegionDrawer open={addRegionOpen} toggle={toggleAddRegionDrawer} />
    </Grid>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get('/cards/statistics')
  const apiData: CardStatsType = res.data

  return {
    props: {
      apiData
    }
  }
}

export default RegionList
