// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Styled Component
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import FormLayoutsSeparator from 'src/views/forms/form-layouts/FormLayoutsSeparator'

const ElectorRegister = () => {
  return (
    <DatePickerWrapper>
      <Grid item xs={12}>
        <FormLayoutsSeparator />
      </Grid>
    </DatePickerWrapper>
  )
}

export default ElectorRegister
