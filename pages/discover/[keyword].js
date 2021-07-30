import { useRouter } from 'next/router'
import { Pagination } from 'antd'
import { useState } from 'react'
import Head from 'components/layouts/head'
import Container from 'components/elements/container/container'
import EventListWrapper from 'components/modules/events/eventListWrapper'
import { useGetEvents } from 'modules/events/get-events'
import Context from 'libs/context/context'

function SearchResult() {
  const router = useRouter()
  const { keyword } = router.query
  console.log('keyword', keyword)

  const [ pageIndex, setPageIndex ] = useState(0)
  const [ pageSize, setPageSize ] = useState(10)
  const { 
    filterDateValue, setFilterDateValue,
    filterTypeValue, setFilterTypeValue,
    filterCategoryValue, setFilterCategoryValue
  } = Context.useContainer()

  const { data: dataEvents, error, count } = useGetEvents(pageIndex, pageSize, filterDateValue, filterTypeValue, filterCategoryValue, keyword)

  const onShowSizeChange = (current, pageSize) => {
    const start = +current === 1 ? 0 : (+current - 1) * pageSize
    setPageIndex(start)
    setPageSize(pageSize)
  }

  return (
    <>
      <Head title='Search Result | Ventsity' />

      <Container>
        <EventListWrapper
          dataEvents={dataEvents}
          error={error}
        />
        <div className='flex justify-content-center align-items-center' style={{ marginTop: 64 }}>
          <Pagination
            showSizeChanger
            onChange={onShowSizeChange}
            defaultCurrent={1}
            total={count}
            hideOnSinglePage
          />
        </div>
      </Container>
    </>
  )
}

export default SearchResult