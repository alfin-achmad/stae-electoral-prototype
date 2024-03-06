// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import Select, { SelectChangeEvent } from '@mui/material/Select'

import { useDropzone } from 'react-dropzone'

// ** Third Party Imports
import DatePicker from 'react-datepicker'
import {DateType} from "../../../types/forms/reactDatepickerTypes";
import CustomInput from "../form-elements/pickers/PickersCustomInput";
import Box from "@mui/material/Box";

interface FileProp {
  name: string
  type: string
  size: number
}

const FormLayoutsSeparator = () => {
  const [district, setDistrict] = useState<string[]>([])
  const [subDistrict, setSubDistrict] = useState<string[]>([])
  const [succo, setSucco] = useState<string[]>([])
  const [aldeia, setAldeia] = useState<string[]>([])
  const [date, setDate] = useState<DateType>(new Date())
  const [files, setFiles] = useState<File[]>([])

  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif']
    },
    onDrop: (acceptedFiles: File[]) => {
      setFiles(acceptedFiles.map((file: File) => Object.assign(file)))
    }
  })

  const img = files.map((file: FileProp) => (
    <img key={file.name} alt={file.name} className='single-file-image' src={URL.createObjectURL(file as any)} />
  ))

  // Handle Select
  const handleSelectChange = (event: SelectChangeEvent<string[]>, typeSelect: string) => {
    const listType: any = {
      "district": () => setDistrict(event.target.value as string[]),
      "subDistrict": () => setSubDistrict(event.target.value as string[]),
      "succo": () => setSucco(event.target.value as string[]),
      "aldeia": () => setAldeia(event.target.value as string[]),
    }

    return listType[typeSelect]()
  }

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

  return (
    <Card>
      <CardHeader title='Register Elector National' />
      <Divider sx={{ m: '0 !important' }} />
      <form onSubmit={e => e.preventDefault()}>
        <CardContent>
          <Grid container spacing={1}>
            <Grid item xs={10}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography variant='body2' sx={{ fontWeight: 'bolder' }}>
                    I. Residence
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={1}>
                    <Grid item xs={4} sm={4}>
                      <FormControl fullWidth>
                        <InputLabel id='form-layouts-separator-multiple-select-label'>District</InputLabel>
                        <Select
                          multiple
                          value={district}
                          onChange={(e) => handleSelectChange(e, 'district')}
                          id='form-layouts-separator-multiple-select'
                          labelId='form-layouts-separator-multiple-select-label'
                          input={<OutlinedInput label='District' id='select-multiple-language' />}
                        >
                          {recordDistrict && recordDistrict.map((i) => {
                            return (
                              <MenuItem key={i.id} value={i.id}>{i.fullName}</MenuItem>
                            )
                          })}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={2} sm={1} sx={{mr: 5}}>
                      <TextField fullWidth label='Code' placeholder='' />
                    </Grid>
                    <Grid item xs={5} sm={5}>
                      <FormControl fullWidth>
                        <InputLabel id='form-layouts-separator-multiple-select-label'>Succo</InputLabel>
                        <Select
                          multiple
                          value={succo}
                          onChange={(e) => handleSelectChange(e, 'succo')}
                          id='form-layouts-separator-multiple-select'
                          labelId='form-layouts-separator-multiple-select-label'
                          input={<OutlinedInput label='Succo' id='select-multiple-language' />}
                        >
                          {recordSucco && recordSucco.map((i) => {
                            return (
                              <MenuItem key={i.id} value={i.id}>{i.fullName}</MenuItem>
                            )
                          })}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={2} sm={1}>
                      <TextField fullWidth label='Code' placeholder='' />
                    </Grid>
                  </Grid>

                  <Grid container spacing={1} sx={{mt: 1}}>
                    <Grid item xs={4} sm={4}>
                      <FormControl fullWidth>
                        <InputLabel id='form-layouts-separator-multiple-select-label'>Sub District</InputLabel>
                        <Select
                          multiple
                          value={subDistrict}
                          onChange={(e) => handleSelectChange(e, 'subDistrict')}
                          id='form-layouts-separator-multiple-select'
                          labelId='form-layouts-separator-multiple-select-label'
                          input={<OutlinedInput label='Sub District' id='select-multiple-language' />}
                        >
                          {recordSubDistrict && recordSubDistrict.map((i) => {
                            return (
                              <MenuItem key={i.id} value={i.id}>{i.fullName}</MenuItem>
                            )
                          })}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={2} sm={1} sx={{mr: 5}}>
                      <TextField fullWidth label='Code' placeholder='' />
                    </Grid>
                    <Grid item xs={5} sm={5}>
                      <FormControl fullWidth>
                        <InputLabel id='form-layouts-separator-multiple-select-label'>Aldeia</InputLabel>
                        <Select
                          multiple
                          value={aldeia}
                          onChange={(e) => handleSelectChange(e, 'aldeia')}
                          id='form-layouts-separator-multiple-select'
                          labelId='form-layouts-separator-multiple-select-label'
                          input={<OutlinedInput label='Aldeia' id='select-multiple-language' />}
                        >
                          {recordAldeia && recordAldeia.map((i) => {
                            return (
                              <MenuItem key={i.id} value={i.id}>{i.fullName}</MenuItem>
                            )
                          })}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={2} sm={1}>
                      <TextField fullWidth label='Code' placeholder='' />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant='body2' sx={{ fontWeight: 'bolder' }}>
                    II. Personal Info
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={1}>
                    <Grid item xs={4} sm={6}>
                      <TextField fullWidth label='No. Elector' placeholder='' />
                    </Grid>
                    <Grid item xs={2} sm={2} sx={{mr: 5}}>
                      <TextField fullWidth label='Date Registration' placeholder='' />
                    </Grid>
                    <Grid item xs={5} sm={8}>
                      <TextField fullWidth label='Fullname' placeholder='' />
                    </Grid>
                    <Grid item xs={2} sm={2}></Grid>
                    <Grid item xs={2} sm={2}></Grid>
                    <Grid item xs={2} sm={2} sx={{mt: 1}}>
                      <DatePicker
                        selected={date}
                        id='basic-input'
                        placeholderText='Click to select a date'
                        onChange={(date: Date) => setDate(date)}
                        customInput={<CustomInput label='Date of Birth' />}
                      />
                    </Grid>
                    <Grid item xs={2} sm={2} sx={{mt: 1}}>
                      <TextField fullWidth label='Age' placeholder='' />
                    </Grid>
                    <Grid item xs={2} sm={2} sx={{mt: 1}}>
                      <TextField fullWidth label='Gender' placeholder='' />
                    </Grid>
                    <Grid item xs={5} sm={8}>
                      <TextField fullWidth label="Father's Name" placeholder='' />
                    </Grid>
                    <Grid item xs={5} sm={8}>
                      <TextField fullWidth label="Mother's Name" placeholder='' />
                    </Grid>
                    <Grid item xs={2} sm={12}>
                      <Divider sx={{ m: '10px 0px !important' }} />
                    </Grid>
                    <Grid item xs={2} sm={2}>
                      <TextField fullWidth label='Births in East Timor ?' placeholder='' />
                    </Grid>
                    <Grid item xs={2} sm={2}>
                      <TextField fullWidth label='Citizen' placeholder='' />
                    </Grid>

                    <Grid item xs={12}>
                      <Grid container spacing={1}>
                        <Grid item xs={4} sm={4}>
                          <FormControl fullWidth>
                            <InputLabel id='form-layouts-separator-multiple-select-label'>District</InputLabel>
                            <Select
                              multiple
                              value={district}
                              onChange={(e) => handleSelectChange(e, 'district')}
                              id='form-layouts-separator-multiple-select'
                              labelId='form-layouts-separator-multiple-select-label'
                              input={<OutlinedInput label='District' id='select-multiple-language' />}
                            >
                              {recordDistrict && recordDistrict.map((i) => {
                                return (
                                  <MenuItem key={i.id} value={i.id}>{i.fullName}</MenuItem>
                                )
                              })}
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={2} sm={1} sx={{mr: 5}}>
                          <TextField fullWidth label='Code' placeholder='' />
                        </Grid>
                        <Grid item xs={5} sm={5}>
                          <FormControl fullWidth>
                            <InputLabel id='form-layouts-separator-multiple-select-label'>Succo</InputLabel>
                            <Select
                              multiple
                              value={succo}
                              onChange={(e) => handleSelectChange(e, 'succo')}
                              id='form-layouts-separator-multiple-select'
                              labelId='form-layouts-separator-multiple-select-label'
                              input={<OutlinedInput label='Succo' id='select-multiple-language' />}
                            >
                              {recordSucco && recordSucco.map((i) => {
                                return (
                                  <MenuItem key={i.id} value={i.id}>{i.fullName}</MenuItem>
                                )
                              })}
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={2} sm={1}>
                          <TextField fullWidth label='Code' placeholder='' />
                        </Grid>
                      </Grid>

                      <Grid container spacing={1} sx={{mt: 1}}>
                        <Grid item xs={4} sm={4}>
                          <FormControl fullWidth>
                            <InputLabel id='form-layouts-separator-multiple-select-label'>Sub District</InputLabel>
                            <Select
                              multiple
                              value={subDistrict}
                              onChange={(e) => handleSelectChange(e, 'subDistrict')}
                              id='form-layouts-separator-multiple-select'
                              labelId='form-layouts-separator-multiple-select-label'
                              input={<OutlinedInput label='Sub District' id='select-multiple-language' />}
                            >
                              {recordSubDistrict && recordSubDistrict.map((i) => {
                                return (
                                  <MenuItem key={i.id} value={i.id}>{i.fullName}</MenuItem>
                                )
                              })}
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={2} sm={1} sx={{mr: 5}}>
                          <TextField fullWidth label='Code' placeholder='' />
                        </Grid>
                        <Grid item xs={5} sm={5}>
                          <FormControl fullWidth>
                            <InputLabel id='form-layouts-separator-multiple-select-label'>Aldeia</InputLabel>
                            <Select
                              multiple
                              value={aldeia}
                              onChange={(e) => handleSelectChange(e, 'aldeia')}
                              id='form-layouts-separator-multiple-select'
                              labelId='form-layouts-separator-multiple-select-label'
                              input={<OutlinedInput label='Aldeia' id='select-multiple-language' />}
                            >
                              {recordAldeia && recordAldeia.map((i) => {
                                return (
                                  <MenuItem key={i.id} value={i.id}>{i.fullName}</MenuItem>
                                )
                              })}
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={2} sm={1}>
                          <TextField fullWidth label='Code' placeholder='' />
                        </Grid>
                        <Grid item xs={2} sm={10}>
                          <TextField fullWidth label='Address' placeholder='' />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12}>
                  <Typography variant='body2' sx={{ fontWeight: 'bolder' }}>
                    III. Register Information
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={1}>
                    <Grid item xs={4} sm={5}>
                      <TextField fullWidth label='Officers' placeholder='' />
                    </Grid>
                    <Grid item xs={4} sm={2}>
                      <DatePicker
                        selected={date}
                        id='basic-input'
                        placeholderText='Click to select a date'
                        onChange={(date: Date) => setDate(date)}
                        customInput={<CustomInput label='Date' />}
                      />
                    </Grid>
                    <Grid item xs={4} sm={12}></Grid>
                    <Grid item xs={2} sm={5}>
                      <TextField fullWidth label='Corrector' placeholder='' />
                    </Grid>
                    <Grid item xs={4} sm={2}>
                      <DatePicker
                        selected={date}
                        id='basic-input'
                        placeholderText='Click to select a date'
                        onChange={(date: Date) => setDate(date)}
                        customInput={<CustomInput label='Date' />}
                      />
                    </Grid>

                    <Grid item xs={4} sm={12}></Grid>

                    <Grid item xs={2} sm={5}>
                      <TextField fullWidth label='District Input' placeholder='' />
                    </Grid>
                    <Grid item xs={2} sm={5}>
                      <TextField fullWidth label='District Edit' placeholder='' />
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12}>
                  <Typography variant='body2' sx={{ fontWeight: 'bolder' }}>
                    IV Document
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={1}>
                    <Grid item xs={4} sm={5}>
                      <TextField fullWidth label='Identity' placeholder='' />
                    </Grid>
                    <Grid item xs={4} sm={12}></Grid>
                    <Grid item xs={2} sm={10}>
                      <TextField fullWidth label='Name' placeholder='' />
                    </Grid>

                    <Grid item xs={4} sm={12}></Grid>

                    <Grid item xs={2} sm={10}>
                      <TextField fullWidth label='No.' placeholder='' />
                    </Grid>
                    <Grid item xs={2} sm={5}>
                      <TextField fullWidth label='Published' placeholder='' />
                    </Grid>
                    <Grid item xs={2} sm={2}>
                      <DatePicker
                        selected={date}
                        id='basic-input'
                        placeholderText='Click to select a date'
                        onChange={(date: Date) => setDate(date)}
                        customInput={<CustomInput label='Date' />}
                      />
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12}>
                  <Typography variant='body2' sx={{ fontWeight: 'bolder' }}>
                    V. Evidence
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2} alignItems="flex-start">
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                VI. Data Digital
              </Typography>
              <Box {...getRootProps({ className: 'dropzone' })} sx={files.length ? { height: 450 } : {}}>
                <input {...getInputProps()} />
                {files.length ? (
                  img
                ) : (
                  <Box sx={{ display: 'flex', flexDirection: ['column', 'column', 'row'], alignItems: 'center' }}>
                    <Box sx={{ mb: 5, mt: 3, display: 'flex', flexDirection: 'column', justifyContent: 'center',  textAlign: ['center'], border: 1, borderColor: '#CCC', padding: 2, height: 200, width: 150 }}>
                      <Typography>Click to Capture Photo</Typography>
                    </Box>
                  </Box>
                )}
              </Box>

              <Box {...getRootProps({ className: 'dropzone' })} sx={files.length ? { height: 450 } : {}}>
                <input {...getInputProps()} />
                {files.length ? (
                  img
                ) : (
                  <Box sx={{ display: 'flex', flexDirection: ['column', 'column', 'row'], alignItems: 'center' }}>
                    <Box sx={{ mb: 5, display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: ['center'], border: 1, borderColor: '#CCC', padding: 2, height: 200, width: 150 }}>
                      <Typography>Click to Capture Finger</Typography>
                    </Box>
                  </Box>
                )}
              </Box>

              <Box {...getRootProps({ className: 'dropzone' })} sx={files.length ? { height: 450 } : {}}>
                <input {...getInputProps()} />
                {files.length ? (
                  img
                ) : (
                  <Box sx={{ display: 'flex', flexDirection: ['column', 'column', 'row'], alignItems: 'center' }}>
                    <Box sx={{ mb: 5, display: 'flex', flexDirection: 'column', justifyContent: 'center',  textAlign: ['center'], border: 1, borderColor: '#CCC', padding: 2, height: 200, width: 150 }}>
                      <Typography>Click to Capture Signature</Typography>
                    </Box>
                  </Box>
                )}
              </Box>
            </Grid>
          </Grid>
        </CardContent>
        <Divider sx={{ m: '0 !important' }} />
        <CardActions>
          <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
            Save
          </Button>
          <Button type='reset' size='large' color='secondary' variant='outlined'>
            Cencel
          </Button>
        </CardActions>
      </form>
    </Card>
  )
}

export default FormLayoutsSeparator
