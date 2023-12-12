import { Box, Button, CardContent, Paper, Typography } from '@mui/material'
import Card from '@mui/joy/Card'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'

import { defaultPageCount } from 'utils/constants/common'
import { fetchAllTransactions, removeTransaction } from 'api/transactions'
import { isEmpty } from 'lodash'
import { DeleteModal, Table } from 'components'
import TransactionModal from '../../components/TransactionModal'

import './styles.scss'

const Transactions = () => {
  const [transactions, setTransactions] = useState([])
  const [transactionsCount, setTransactionsCount] = useState(0)
  const [confirmModal, setConfirmModal] = useState(false)
  const [currentTransaction, setCurrentTransaction] = useState({})
  const [pageNumber, setPageNumber] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(defaultPageCount)
  const [loading, setloading] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [isTransactionChange, setIsTransactionChange] = useState(false)
  const [currenAction, setCurrenAction] = useState(null)

  const getTransactions = async () => {
    setloading(true)
    const data = await fetchAllTransactions(rowsPerPage, pageNumber + 1)
    if (isEmpty(data)) return

    setTransactions(data.rows)
    setTransactionsCount(data.count)
    setloading(false)
  }

  useEffect(() => {
    getTransactions()
  }, [rowsPerPage, pageNumber, isTransactionChange])

  const handleRemoveTransaction = async () => {
    setConfirmModal(false)
    setloading(true)
    const data = await removeTransaction(currentTransaction.transactionId)
    if (!isEmpty(data)) {
      await getTransactions()
      toast.success('Transaction removed')
    } else {
      toast.error('Error! Transaction not removed')
    }
    setloading(false)
  }

  const handleAction = (type, transaction) => {
    setCurrenAction(type)
    setCurrentTransaction(transaction)

    if (type == 'delete') return setConfirmModal(true)

    setOpenModal(true)
  }

  const handleAddTransaction = () => {
    setCurrenAction('create')
    setOpenModal(true)
  }

  const productsColumns = [
    {
      name: 'TITLE',
      selector: (row) => row.title,
      sortable: true,
      wrap: true,
    },
    {
      name: 'DESCRIPTION',
      selector: (row) => row.description,
      sortable: true,
      wrap: true,
    },
    {
      name: 'AMOUNT',
      selector: (row) => row.amount,
      sortable: true,
      wrap: true,
    },
    {
      name: 'FROM ACCOUNT',
      selector: (row) => row.fromAccount,
      sortable: true,
      wrap: true,
    },
    {
      name: 'TO ACCOUNT',
      selector: (row) => row.toAccount,
      sortable: true,
      wrap: true,
    },
    {
      name: 'TRANSACTION DATE',
      selector: (row) => new Date(row.transactionDate).toDateString(),
      sortable: true,
      wrap: true,
    },
    {
      name: '',
      selector: (row) => (
        <Box>
          <Button
            onClick={() => handleAction('update', row)}
            variant='contained'
            color='primary'
            className='edit-button'
          >
            Edit
          </Button>
          <Button
            onClick={() => handleAction('delete', row)}
            variant='contained'
            color='error'
            className='edit-button'
          >
            Delete
          </Button>
        </Box>
      ),
      wrap: true,
    },
  ]

  return (
    <>
      <DeleteModal
        handleDelete={handleRemoveTransaction}
        setConfirmModal={setConfirmModal}
        show={confirmModal}
      />
      <TransactionModal
        action={currenAction}
        currentTransaction={currentTransaction}
        open={openModal}
        handleClose={() => setOpenModal(false)}
        isTransactionChange={isTransactionChange}
        setIsTransactionChange={setIsTransactionChange}
      />
      <Box className='container-fluid transaction-container'>
        <Paper className='mat-paper' elevation={2}>
          <Card>
            <Card className='card-wrapper'>
              <Typography variant='h4'>Transaction List</Typography>
              <CardContent className='mat-card-header'>
                <Button onClick={handleAddTransaction} className='add-button' variant='contained'>
                  + Add
                </Button>
              </CardContent>
            </Card>
            <Table
              data={transactions}
              count={transactionsCount}
              columns={productsColumns}
              setPageNumber={setPageNumber}
              setRowsPerPage={setRowsPerPage}
              loading={loading}
            />
          </Card>
        </Paper>
      </Box>
    </>
  )
}

export default Transactions
