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

// ** Third Party Imports
// ** import DatePicker from 'react-datepicker'

const FormLayoutsSeparator = () => {
  const [language, setLanguage] = useState<string[]>([])

  // Handle Select
  const handleSelectChange = (event: SelectChangeEvent<string[]>) => {
    setLanguage(event.target.value as string[])
  }

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
                  <Typography variant='body2' sx={{ fontWeight: 600 }}>
                    1. Residence
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={1}>
                    <Grid item xs={4} sm={4}>
                      <FormControl fullWidth>
                        <InputLabel id='form-layouts-separator-multiple-select-label'>District</InputLabel>
                        <Select
                          multiple
                          value={language}
                          onChange={handleSelectChange}
                          id='form-layouts-separator-multiple-select'
                          labelId='form-layouts-separator-multiple-select-label'
                          input={<OutlinedInput label='District' id='select-multiple-language' />}
                        >
                          <MenuItem value='English'>English</MenuItem>
                          <MenuItem value='French'>French</MenuItem>
                          <MenuItem value='Spanish'>Spanish</MenuItem>
                          <MenuItem value='Portuguese'>Portuguese</MenuItem>
                          <MenuItem value='Italian'>Italian</MenuItem>
                          <MenuItem value='German'>German</MenuItem>
                          <MenuItem value='Arabic'>Arabic</MenuItem>
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
                          value={language}
                          onChange={handleSelectChange}
                          id='form-layouts-separator-multiple-select'
                          labelId='form-layouts-separator-multiple-select-label'
                          input={<OutlinedInput label='Succo' id='select-multiple-language' />}
                        >
                          <MenuItem value='English'>English</MenuItem>
                          <MenuItem value='French'>French</MenuItem>
                          <MenuItem value='Spanish'>Spanish</MenuItem>
                          <MenuItem value='Portuguese'>Portuguese</MenuItem>
                          <MenuItem value='Italian'>Italian</MenuItem>
                          <MenuItem value='German'>German</MenuItem>
                          <MenuItem value='Arabic'>Arabic</MenuItem>
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
                          value={language}
                          onChange={handleSelectChange}
                          id='form-layouts-separator-multiple-select'
                          labelId='form-layouts-separator-multiple-select-label'
                          input={<OutlinedInput label='Sub District' id='select-multiple-language' />}
                        >
                          <MenuItem value='English'>English</MenuItem>
                          <MenuItem value='French'>French</MenuItem>
                          <MenuItem value='Spanish'>Spanish</MenuItem>
                          <MenuItem value='Portuguese'>Portuguese</MenuItem>
                          <MenuItem value='Italian'>Italian</MenuItem>
                          <MenuItem value='German'>German</MenuItem>
                          <MenuItem value='Arabic'>Arabic</MenuItem>
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
                          value={language}
                          onChange={handleSelectChange}
                          id='form-layouts-separator-multiple-select'
                          labelId='form-layouts-separator-multiple-select-label'
                          input={<OutlinedInput label='Aldeia' id='select-multiple-language' />}
                        >
                          <MenuItem value='English'>English</MenuItem>
                          <MenuItem value='French'>French</MenuItem>
                          <MenuItem value='Spanish'>Spanish</MenuItem>
                          <MenuItem value='Portuguese'>Portuguese</MenuItem>
                          <MenuItem value='Italian'>Italian</MenuItem>
                          <MenuItem value='German'>German</MenuItem>
                          <MenuItem value='Arabic'>Arabic</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={2} sm={1}>
                      <TextField fullWidth label='Code' placeholder='' />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant='body2' sx={{ fontWeight: 600 }}>
                    2. Personal Info
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
                    <Grid item xs={2} sm={2}>
                      <TextField fullWidth label='Date of Birth' placeholder='' />
                    </Grid>
                    <Grid item xs={2} sm={2}>
                      <TextField fullWidth label='Age' placeholder='' />
                    </Grid>
                    <Grid item xs={2} sm={2}>
                      <TextField fullWidth label='Gender' placeholder='' />
                    </Grid>
                    <Grid item xs={5} sm={8}>
                      <TextField fullWidth label="Father's Name" placeholder='' />
                    </Grid>
                    <Grid item xs={5} sm={8}>
                      <TextField fullWidth label="Mother's Name" placeholder='' />
                    </Grid>
                    <Grid item xs={2} sm={12} sx={{mb: 3}} />
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
                              value={language}
                              onChange={handleSelectChange}
                              id='form-layouts-separator-multiple-select'
                              labelId='form-layouts-separator-multiple-select-label'
                              input={<OutlinedInput label='District' id='select-multiple-language' />}
                            >
                              <MenuItem value='English'>English</MenuItem>
                              <MenuItem value='French'>French</MenuItem>
                              <MenuItem value='Spanish'>Spanish</MenuItem>
                              <MenuItem value='Portuguese'>Portuguese</MenuItem>
                              <MenuItem value='Italian'>Italian</MenuItem>
                              <MenuItem value='German'>German</MenuItem>
                              <MenuItem value='Arabic'>Arabic</MenuItem>
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
                              value={language}
                              onChange={handleSelectChange}
                              id='form-layouts-separator-multiple-select'
                              labelId='form-layouts-separator-multiple-select-label'
                              input={<OutlinedInput label='Succo' id='select-multiple-language' />}
                            >
                              <MenuItem value='English'>English</MenuItem>
                              <MenuItem value='French'>French</MenuItem>
                              <MenuItem value='Spanish'>Spanish</MenuItem>
                              <MenuItem value='Portuguese'>Portuguese</MenuItem>
                              <MenuItem value='Italian'>Italian</MenuItem>
                              <MenuItem value='German'>German</MenuItem>
                              <MenuItem value='Arabic'>Arabic</MenuItem>
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
                              value={language}
                              onChange={handleSelectChange}
                              id='form-layouts-separator-multiple-select'
                              labelId='form-layouts-separator-multiple-select-label'
                              input={<OutlinedInput label='Sub District' id='select-multiple-language' />}
                            >
                              <MenuItem value='English'>English</MenuItem>
                              <MenuItem value='French'>French</MenuItem>
                              <MenuItem value='Spanish'>Spanish</MenuItem>
                              <MenuItem value='Portuguese'>Portuguese</MenuItem>
                              <MenuItem value='Italian'>Italian</MenuItem>
                              <MenuItem value='German'>German</MenuItem>
                              <MenuItem value='Arabic'>Arabic</MenuItem>
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
                              value={language}
                              onChange={handleSelectChange}
                              id='form-layouts-separator-multiple-select'
                              labelId='form-layouts-separator-multiple-select-label'
                              input={<OutlinedInput label='Aldeia' id='select-multiple-language' />}
                            >
                              <MenuItem value='English'>English</MenuItem>
                              <MenuItem value='French'>French</MenuItem>
                              <MenuItem value='Spanish'>Spanish</MenuItem>
                              <MenuItem value='Portuguese'>Portuguese</MenuItem>
                              <MenuItem value='Italian'>Italian</MenuItem>
                              <MenuItem value='German'>German</MenuItem>
                              <MenuItem value='Arabic'>Arabic</MenuItem>
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
                  <Typography variant='body2' sx={{ fontWeight: 600 }}>
                    3. Register Information
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant='body2' sx={{ fontWeight: 600 }}>
                    4. Document
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant='body2' sx={{ fontWeight: 600 }}>
                    5. Evidence
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2} alignItems="flex-start">
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                6. Data Digital
              </Typography>
            </Grid>
          </Grid>
          {/*<Grid container spacing={5} md={9}>*/}
            {/*<Grid item xs={10}>*/}
            {/*  <Typography variant='body2' sx={{ fontWeight: 600 }}>*/}
            {/*    1. Residence*/}
            {/*  </Typography>*/}
            {/*  <Grid container sx={{mt: 2}} spacing={2}>*/}
            {/*    <Grid item xs={12} sm={5}>*/}
            {/*      <FormControl fullWidth>*/}
            {/*        <InputLabel id='form-layouts-separator-multiple-select-label'>District</InputLabel>*/}
            {/*        <Select*/}
            {/*          multiple*/}
            {/*          value={language}*/}
            {/*          onChange={handleSelectChange}*/}
            {/*          id='form-layouts-separator-multiple-select'*/}
            {/*          labelId='form-layouts-separator-multiple-select-label'*/}
            {/*          input={<OutlinedInput label='District' id='select-multiple-language' />}*/}
            {/*        >*/}
            {/*          <MenuItem value='English'>English</MenuItem>*/}
            {/*          <MenuItem value='French'>French</MenuItem>*/}
            {/*          <MenuItem value='Spanish'>Spanish</MenuItem>*/}
            {/*          <MenuItem value='Portuguese'>Portuguese</MenuItem>*/}
            {/*          <MenuItem value='Italian'>Italian</MenuItem>*/}
            {/*          <MenuItem value='German'>German</MenuItem>*/}
            {/*          <MenuItem value='Arabic'>Arabic</MenuItem>*/}
            {/*        </Select>*/}
            {/*      </FormControl>*/}
            {/*    </Grid>*/}
            {/*    <Grid item xs={3} sm={1}>*/}
            {/*      <TextField fullWidth label='Code' placeholder='' />*/}
            {/*    </Grid>*/}

            {/*    <Grid item xs={12} sm={5}>*/}
            {/*      <FormControl fullWidth>*/}
            {/*        <InputLabel id='form-layouts-separator-multiple-select-label'>Succo</InputLabel>*/}
            {/*        <Select*/}
            {/*          multiple*/}
            {/*          value={language}*/}
            {/*          onChange={handleSelectChange}*/}
            {/*          id='form-layouts-separator-multiple-select'*/}
            {/*          labelId='form-layouts-separator-multiple-select-label'*/}
            {/*          input={<OutlinedInput label='Succo' id='select-multiple-language' />}*/}
            {/*        >*/}
            {/*          <MenuItem value='English'>English</MenuItem>*/}
            {/*          <MenuItem value='French'>French</MenuItem>*/}
            {/*          <MenuItem value='Spanish'>Spanish</MenuItem>*/}
            {/*          <MenuItem value='Portuguese'>Portuguese</MenuItem>*/}
            {/*          <MenuItem value='Italian'>Italian</MenuItem>*/}
            {/*          <MenuItem value='German'>German</MenuItem>*/}
            {/*          <MenuItem value='Arabic'>Arabic</MenuItem>*/}
            {/*        </Select>*/}
            {/*      </FormControl>*/}
            {/*    </Grid>*/}
            {/*    <Grid item xs={3} sm={1}>*/}
            {/*      <TextField fullWidth label='Code' placeholder='' />*/}
            {/*    </Grid>*/}

            {/*    <Grid item xs={12} sm={5}>*/}
            {/*      <FormControl fullWidth>*/}
            {/*        <InputLabel id='form-layouts-separator-multiple-select-label'>Sub District</InputLabel>*/}
            {/*        <Select*/}
            {/*          multiple*/}
            {/*          value={language}*/}
            {/*          onChange={handleSelectChange}*/}
            {/*          id='form-layouts-separator-multiple-select'*/}
            {/*          labelId='form-layouts-separator-multiple-select-label'*/}
            {/*          input={<OutlinedInput label='Sub District' id='select-multiple-language' />}*/}
            {/*        >*/}
            {/*          <MenuItem value='English'>English</MenuItem>*/}
            {/*          <MenuItem value='French'>French</MenuItem>*/}
            {/*          <MenuItem value='Spanish'>Spanish</MenuItem>*/}
            {/*          <MenuItem value='Portuguese'>Portuguese</MenuItem>*/}
            {/*          <MenuItem value='Italian'>Italian</MenuItem>*/}
            {/*          <MenuItem value='German'>German</MenuItem>*/}
            {/*          <MenuItem value='Arabic'>Arabic</MenuItem>*/}
            {/*        </Select>*/}
            {/*      </FormControl>*/}
            {/*    </Grid>*/}
            {/*    <Grid item xs={3} sm={1}>*/}
            {/*      <TextField fullWidth label='Code' placeholder='' />*/}
            {/*    </Grid>*/}

            {/*    <Grid item xs={12} sm={5}>*/}
            {/*      <FormControl fullWidth>*/}
            {/*        <InputLabel id='form-layouts-separator-multiple-select-label'>Aldeia</InputLabel>*/}
            {/*        <Select*/}
            {/*          multiple*/}
            {/*          value={language}*/}
            {/*          onChange={handleSelectChange}*/}
            {/*          id='form-layouts-separator-multiple-select'*/}
            {/*          labelId='form-layouts-separator-multiple-select-label'*/}
            {/*          input={<OutlinedInput label='Aldeia' id='select-multiple-language' />}*/}
            {/*        >*/}
            {/*          <MenuItem value='English'>English</MenuItem>*/}
            {/*          <MenuItem value='French'>French</MenuItem>*/}
            {/*          <MenuItem value='Spanish'>Spanish</MenuItem>*/}
            {/*          <MenuItem value='Portuguese'>Portuguese</MenuItem>*/}
            {/*          <MenuItem value='Italian'>Italian</MenuItem>*/}
            {/*          <MenuItem value='German'>German</MenuItem>*/}
            {/*          <MenuItem value='Arabic'>Arabic</MenuItem>*/}
            {/*        </Select>*/}
            {/*      </FormControl>*/}
            {/*    </Grid>*/}
            {/*    <Grid item xs={3} sm={1}>*/}
            {/*      <TextField fullWidth label='Code' placeholder='' />*/}
            {/*    </Grid>*/}
            {/*  </Grid>*/}
            {/*</Grid>*/}

            {/*<Grid item xs={12} sm={9}>*/}
            {/*  <TextField fullWidth type='email' label='Email' placeholder='carterleonard@gmail.com' />*/}
            {/*</Grid>*/}



            {/*<Grid item xs={2}>*/}
            {/*  <Typography variant='body2' sx={{ fontWeight: 600 }}>*/}
            {/*    6. Data Digital*/}
            {/*  </Typography>*/}
            {/*  <Grid container sx={{mt: 2}} spacing={2}>*/}
            {/*    <Grid item xs={9} sm={9} border={1} height={200}>*/}

            {/*    </Grid>*/}
            {/*    <Grid item xs={9} sm={9} border={1} height={200}>*/}

            {/*    </Grid>*/}
            {/*    <Grid item xs={9} sm={9} border={1} height={200}>*/}

            {/*    </Grid>*/}
            {/*  </Grid>*/}
            {/*</Grid>*/}

            {/*<Grid item xs={9}>*/}
            {/*  <Typography variant='body2' sx={{ fontWeight: 600 }}>*/}
            {/*    2. Personal Info*/}
            {/*  </Typography>*/}
            {/*</Grid>*/}
            {/*<Grid item xs={9}>*/}
            {/*  <Typography variant='body2' sx={{ fontWeight: 600 }}>*/}
            {/*    3. Register Information*/}
            {/*  </Typography>*/}
            {/*</Grid>*/}
            {/*<Grid item xs={9}>*/}
            {/*  <Typography variant='body2' sx={{ fontWeight: 600 }}>*/}
            {/*    4. Document*/}
            {/*  </Typography>*/}
            {/*</Grid>*/}
            {/*<Grid item xs={9}>*/}
            {/*  <Typography variant='body2' sx={{ fontWeight: 600 }}>*/}
            {/*    5. Evidence*/}
            {/*  </Typography>*/}
            {/*</Grid>*/}
            {/*<Grid item xs={12} sm={6}>*/}
            {/*  <TextField fullWidth label='First Name' placeholder='Leonard' />*/}
            {/*</Grid>*/}
            {/*<Grid item xs={12} sm={6}>*/}
            {/*  <TextField fullWidth label='Last Name' placeholder='Carter' />*/}
            {/*</Grid>*/}
            {/*<Grid item xs={12} sm={6}>*/}
            {/*  <FormControl fullWidth>*/}
            {/*    <InputLabel id='form-layouts-separator-select-label'>Country</InputLabel>*/}
            {/*    <Select*/}
            {/*      label='Country'*/}
            {/*      defaultValue=''*/}
            {/*      id='form-layouts-separator-select'*/}
            {/*      labelId='form-layouts-separator-select-label'*/}
            {/*    >*/}
            {/*      <MenuItem value='UK'>UK</MenuItem>*/}
            {/*      <MenuItem value='USA'>USA</MenuItem>*/}
            {/*      <MenuItem value='Australia'>Australia</MenuItem>*/}
            {/*      <MenuItem value='Germany'>Germany</MenuItem>*/}
            {/*    </Select>*/}
            {/*  </FormControl>*/}
            {/*</Grid>*/}

            {/*<Grid item xs={12} sm={6}>*/}
            {/*  <DatePicker*/}
            {/*    selected={date}*/}
            {/*    showYearDropdown*/}
            {/*    showMonthDropdown*/}
            {/*    placeholderText='MM-DD-YYYY'*/}
            {/*    customInput={<CustomInput />}*/}
            {/*    id='form-layouts-separator-date'*/}
            {/*    onChange={(date: Date) => setDate(date)}*/}
            {/*  />*/}
            {/*</Grid>*/}
            {/*<Grid item xs={12} sm={6}>*/}
            {/*  <TextField fullWidth label='Phone No.' placeholder='+1-123-456-8790' />*/}
            {/*</Grid>*/}
          {/*</Grid>*/}
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
