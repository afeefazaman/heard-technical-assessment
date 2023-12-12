import { render, screen, waitFor } from '@testing-library/react'

import Table from 'components/Table'
import { TestApp } from 'utils/test'

const transactionColumns = [
  {
    name: 'title',
    selector: (row) => row.title,
    sortable: true,
    grow: 1.8,
    wrap: true,
  },
  {
    name: 'description',
    selector: (row) => row.description,
    sortable: true,
    grow: 1.8,
    wrap: true,
  },
]

describe('Table Component', () => {
  beforeEach(() => render(<Table data={transactionColumns} />, { wrapper: TestApp }))

  it('should render correctly', () => {
    expect.assertions(1)
    expect(screen).toMatchSnapshot()
  })

  it('should have 3 rows', async () => {
    await waitFor(() => {
      const row = screen.getAllByRole('row')
      expect(row).toHaveLength(3)
    })
  })

  it('should have 2 row group', async () => {
    await waitFor(() => {
      const rows = screen.getAllByRole('rowgroup')
      expect(rows).toHaveLength(2)
    })
  })
})
