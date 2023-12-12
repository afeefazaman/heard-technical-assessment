import { Box, Paper, Typography, Modal } from '@mui/material'
import Card from '@mui/joy/Card'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import { isEmpty, isEqual } from 'lodash'

import { addTransaction, updateTransaction } from 'api/transactions'
import { transactionFields, transactionInitialValues } from 'utils/constants/transaction'
import { LoadingModal, Form } from 'components'
import { validateTransaction } from 'utils/validations'

import './styles.scss'

const TransactionModal = ({
  open,
  handleClose,
  action,
  currentTransaction,
  isTransactionChange,
  setIsTransactionChange,
}) => {
  const [loading, setloading] = useState(false)
  const [transactionFieldsInitialValues, setInitialValues] = useState(transactionInitialValues)

  useEffect(() => {
    if (action === 'update') setInitialValues(currentTransaction)

    return () => setInitialValues(transactionInitialValues)
  }, [action, currentTransaction])

  const handleTransaction = async (values) => {
    setloading(true)
    if (action === 'create') {
      const data = await addTransaction(values)
      if (!isEmpty(data)) {
        handleClose()
        setIsTransactionChange(!isTransactionChange)
        toast.success(`Transaction  ${action === 'add' ? 'added' : 'updated'}`)
      } else {
        toast.error('Error! Transaction not added')
      }
    } else if (!isEqual(values, currentTransaction)) {

      const data = await updateTransaction(values, currentTransaction.transactionId)
      if (!isEmpty(data)) {
        handleClose()
        setIsTransactionChange(!isTransactionChange)
        toast.success(`Transaction  ${action === 'add' ? 'added' : 'updated'}`)
      } else {
        toast.error('Error! Transaction not updated')
      }
    }
    handleClose()
    setloading(false)
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
      onBackdropClick={handleClose}
    >
      <Box className='add-transaction-container container-fluid container'>
        <LoadingModal show={loading} />
        <Box className='container'>
          <Paper className='mat-paper' elevation={2}>
            <Card className='mat-card'>
              <Typography className='heading' variant='h4'>
                {action} Transaction
              </Typography>
              <Form
                fieldsInitialValues={transactionFieldsInitialValues}
                handleSubmition={handleTransaction}
                action={action}
                validate={validateTransaction}
                fields={transactionFields}
                handleClose={handleClose}
              />
            </Card>
          </Paper>
        </Box>
      </Box>
    </Modal>
  )
}

export default TransactionModal
