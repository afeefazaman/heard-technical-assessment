import {
  render, screen, waitFor, act,
} from '@testing-library/react'

import Transaction from 'container/transactions/index'
import { TestApp } from 'utils/test'

describe('Transaction Container', () => {
  beforeEach(() => act(() => render(<Transaction />, { wrapper: TestApp })))

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
