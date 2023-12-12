export const transactionFields = [
  {
    id: 0,
    label: 'Title',
    name: 'title',
    type: 'text',
  },
  {
    id: 1,
    label: 'Description',
    name: 'description',
    type: 'text',
  },
  {
    id: 5,
    label: 'Amount',
    name: 'amount',
    type: 'number',
  },
  {
    id: 6,
    label: 'From Account',
    name: 'fromAccount',
    type: 'text',
  },
  {
    id: 6,
    label: 'To Account',
    name: 'toAccount',
    type: 'text',
  },
  {
    id: 4,
    label: 'Transaction Date',
    name: 'transactionDate',
    type: 'date',
  },
]

export const transactionInitialValues = {
  title: '',
  description: '',
  amount: '',
  fromAccount: '',
  toAccount: '',
  transactionDate: '',
}
