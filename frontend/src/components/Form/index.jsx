import { Button, CardContent, TextField, Typography, Box } from '@mui/material'
import { Fragment } from 'react'
import { Formik } from 'formik'
import { isEmpty } from 'lodash'

import './styles.scss'

const Form = ({ fieldsInitialValues, handleSubmition, action, validate, fields, handleClose }) => (
  <CardContent className='mat-card-content'>
    <Formik
      initialValues={fieldsInitialValues}
      enableReinitialize
      validate={validate}
      onSubmit={handleSubmition}
    >
      {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
        <form className='mat-form' onSubmit={handleSubmit}>
          {fields.map((field) => (
            <Fragment key={field.name}>
              <TextField
                className='text-field'
                fullWidth
                label={field.label}
                variant='outlined'
                type={field.type}
                name={field.name}
                onBlur={handleBlur}
                InputLabelProps={{ shrink: field.type == 'date' || values[field.name] && true }}  
                onChange={handleChange}
                value={
                  field.type == 'date' && values[field.name]
                    ? new Date(values[field.name]).toISOString().split('T')[0]
                    : values[field.name]
                }
              />
              <Typography className='warn-typography'>
                {errors[field.name] && touched[field.name] && errors[field.name]}
              </Typography>
            </Fragment>
          ))}
          <Box className='transaction-btn-container'>
            <Button
              className='submit-button close-button'
              onClick={handleClose}
              variant='text'
              size='large'
            >
              Close
            </Button>
            <Button
              className='submit-button'
              type='submit'
              disabled={!isEmpty(errors)}
              variant='contained'
              size='large'
            >
              {action}
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  </CardContent>
)

export default Form
