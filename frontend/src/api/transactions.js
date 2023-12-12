import instance from 'api'

export const fetchAllTransactions = (rowsPerPage, pageNumber) =>
  instance
    .get(`transaction?limit=${+rowsPerPage}&page=${+pageNumber}`)
    .then((response) => response.data)
    .catch(() => ({}))

export const fetchProduct = (id) =>
  instance
    .get(`/products/${id}`)
    .then((response) => response.data)
    .catch(() => ({}))

export const fetchProductStyles = () =>
  instance
    .get('/products/styles')
    .then((response) => response.data)
    .catch(() => ({}))

export const fetchProductBrands = () =>
  instance
    .get('/products/brands')
    .then((response) => response.data)
    .catch(() => ({}))

export const fetchProductTypes = () =>
  instance
    .get('/products/types')
    .then((response) => response.data)
    .catch(() => ({}))

export const removeTransaction = (id) =>
  instance
    .delete(`transaction/${id}`)
    .then((response) => response.data)
    .catch(() => ({}))

export const addTransaction = (body) =>
  instance
    .post('transaction/add', body)
    .then((response) => response)
    .catch(() => ({}))

export const updateTransaction = (body, id) =>
  instance
    .patch(`transaction/${id}`, body)
    .then((response) => response)
    .catch(() => ({}))
