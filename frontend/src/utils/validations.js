export const validateTransaction = (values) => {
  const errors = {}

  if (!values.title) {
    errors.title = 'Required'
  }
  if (!values.description) {
    errors.description = 'Required'
  }
  if (!values.amount) {
    errors.amount = 'Required'
  }
  if (!values.fromAccount) {
    errors.fromAccount = 'Required'
  }
  if (!values.toAccount) {
    errors.toAccount = 'Required'
  }

  if (!values.transactionDate) {
    errors.transactionDate = 'Required'
  }

  return errors
}
