import { Box } from '@mui/material'
import DataTable from 'react-data-table-component'
import Skeleton, { Table } from '@nejcm/react-skeleton-emotion'

import { defaultPageCount } from 'utils/constants/common'

export default ({ data, count, columns, setPageNumber, setRowsPerPage, loading }) => {
  const table = (
    <Box>
      <DataTable
        theme='solarized'
        columns={columns}
        defaultSortFieldId={1}
        data={data}
        pagination
        highlightOnHover
        paginationTotalRows={count}
        paginationPerPage={defaultPageCount}
        paginationServer
        onChangePage={(number) => setPageNumber(number - 1)}
        onChangeRowsPerPage={(number) => setRowsPerPage(number)}
        persistTableHead
      />
    </Box>
  )

  const skeleton = (
    <Skeleton>
      <Table rows={5} />
    </Skeleton>
  )

  const load = loading ? skeleton : table

  return data.length !== 0 ? table : load
}
