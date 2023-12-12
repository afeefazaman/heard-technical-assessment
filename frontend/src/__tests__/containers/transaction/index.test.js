import {
  render, screen, waitFor, act,
} from '@testing-library/react'

import Transactions from 'container/transactions'
import { TestApp } from 'utils/test'

describe('Transactions Container', () => {
  beforeEach(() => act(() => render(<Transactions />, { wrapper: TestApp })))

  it('should render correctly', () => {
    expect.assertions(1)
    expect(screen).toMatchSnapshot()
  })

  it('should have heading', async () => {
    await waitFor(() => {
      expect(screen.getAllByRole('heading').length).toBe(1)
    })
  })

  it('should have 1 button', async () => {
    await waitFor(() => {
      expect(screen.getAllByRole('button').length).toBe(1)
    })
  })
})
