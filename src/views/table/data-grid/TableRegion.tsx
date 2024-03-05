import React, { useState, useEffect, useCallback, useRef } from 'react'
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import { TextField } from '@mui/material'

import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// import DraggableDialog from 'src/@core/components/dialog'

// ** Icon Imports
import Icon from 'src/@core/components/icon'


import {
  TreeList,
  Paging,
  Pager,
  Column,
  Selection,
  HeaderFilter,
  Scrolling,
  SearchPanel,
  TreeListTypes
} from 'devextreme-react/tree-list'
import {RegionList} from "../../../@fake-db/apps/region";

const allowedPageSizes = [5, 10, 20]

const RegionCell = (props: TreeListTypes.ColumnCellTemplateData) => {
  const region = props.data.data

  if (!region) {
    // console.log(props.data.data.KODE)
    return <span className='name'>not assigned</span>
  }

  const imageURL = `/images/regions/${region.AREA.toLowerCase()}.jpeg`

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <CustomAvatar src={imageURL} sx={{ mr: 3, width: 20, height: 20 }} />
      </Box>
    </React.Fragment>
  )
}

interface Region {
  NAMA?: string | null;
  KODE?: string;
  DPSA?: string | null;
  URUT?: number;
  INDUK?: string;
  AREA?: string;
}

export default function TreeDataSimple() {
  const [selectedRegion, setSelectedRegion] = useState<string | undefined>(undefined);
  const [searchValue, setSearchValue] = useState('')
  const [searchKey, setSearchKey] = useState('-')
  const textFieldRef = useRef<HTMLInputElement>(null);
  const [isExpanded] = useState(true)
  const [expandedRowKeys, setExpandedRowKeys] = useState<string[]>([]);

  const fullExpand = (): void => {
    const allKeys: string[] = RegionList.map(item => item.KODE);
    setExpandedRowKeys(allKeys);
  };


  const fullCollapse = () => {
    setExpandedRowKeys([]);
  };


  const onFocusedRowChanged = useCallback(async (e: TreeListTypes.FocusedRowChangedEvent) => {
    const rowData = e.row && e.row?.data
    console.log('rowData', rowData)
    if (rowData) {
      setSearchKey(rowData.KODE)
      setSelectedRegion(rowData.DPSA)
    } else {
      setSearchKey('-')
      setSelectedRegion(undefined)
    }
  }, [])





  const handleClearClick = () => {
    setSearchValue('')
    if (textFieldRef.current) {
      textFieldRef.current.focus()
    }
  }
  useEffect(() => {
    if (textFieldRef.current) {
      textFieldRef.current.focus();
    }
  }, []);



  function searchDataByNameLike(region: Region[], searchValue: string): Region[] {
    console.log('search region', region)
    const lowercasedsearchValue = searchValue.trim().toLowerCase()
    const result = region.filter(
      item =>
        item.NAMA?.trim().toLowerCase().includes(lowercasedsearchValue) ||
        item.KODE?.trim().toLowerCase().includes(lowercasedsearchValue)
    )

    const firstResult = result.length > 0 ? result[0] : undefined;
    setSearchKey(firstResult?.KODE || '');
    setSelectedRegion(firstResult?.DPSA || '');

    return result
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          {/* <CardHeader title='Daftar Region' /> */}
          <Box
            sx={{
              p: 5,
              pb: 3,
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
              <Typography sx={{ mt: 2 }}>
                {`${selectedRegion ? selectedRegion : ''}`}
              </Typography>
            </Box>

            <Box />
            <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>

              <Button onClick={fullExpand}>Expand All</Button>
              <Button onClick={fullCollapse}>Collapse All</Button>

              <TextField
                size='small'
                inputRef={textFieldRef}
                value={searchValue} // Pastikan TextField terikat dengan state searchValue
                placeholder='Search Region'
                sx={{ mb: 2, maxWidth: '250px' }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon icon='mdi:magnify' fontSize='1.25rem' />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton edge='end' onClick={() => handleClearClick()}>
                        <Icon icon='basil:cross-solid' width='25' height='25' />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
                onChange={e => {
                  const newValue = e.target.value
                  setSearchValue(newValue)

                  if (newValue) {
                    searchDataByNameLike(RegionList, newValue)
                  }
                }}
                id="search"
              />

            </Box>



            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <TreeList
                dataSource={RegionList}
                rootValue={'00'}
                focusedRowEnabled={true}
                focusedRowKey={searchKey}
                expandedRowKeys={expandedRowKeys}
                onExpandedRowKeysChange={(keys) => setExpandedRowKeys(keys)}
                showRowLines={true}
                showBorders={true}
                columnAutoWidth={true}
                wordWrapEnabled={true}
                autoExpandAll={isExpanded}
                onFocusedRowChanged={onFocusedRowChanged}
                keyExpr='KODE'
                parentIdExpr='INDUK'
              >
                {/* <Pager allowedPageSizes={allowedPageSizes} showPageSizeSelector={true} showNavigationButtons={true} />
                  <Paging enabled={true} defaultPageSize={10} /> */}
                <Scrolling mode='virtual' />
                <SearchPanel visible={false} text={searchValue} />
                <Selection mode='single' recursive={false} />
                <HeaderFilter visible={true} />
                <Paging enabled={true} defaultPageSize={10} />
                <Pager showPageSizeSelector={true} allowedPageSizes={allowedPageSizes} showInfo={true} />
                {/* <ColumnChooser enabled={true} /> */}

                <Column dataField='Name' sortOrder='asc' />
                <Column dataField='Code' />
                <Column caption='' width='35' cellComponent={RegionCell} />
                <Column dataField='Area' />

                {/* <Column
                              dataField="no" /> */}
              </TreeList>
            </Box>

            <Box />
          </Box>

          {/* <Box> */}
          {/* </Box> */}

          {/* <Button fullWidth size='large' variant='contained' onClick={()=>handleButtonClick()} >
                Dialog
              </Button> */}

          {/* <SimpleDialogDemo open={dialogOpen} onClose={handleCloseDialog} data={region} onSave={handleSaveRegion} /> */}
        </Card>
      </Grid>
    </Grid>
  )
}
