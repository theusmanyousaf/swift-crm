'use client'
import DocumentList from '@/components/documentList/DocumentList'
import Header from '@/components/header/Header'

export default function Documents() {

  return (
    <div className='xl:ml-[29px] lg:ml-[27px] lg:mr-0 md:mx-[27px] overflow-auto'>
      <Header title='Documents' />
      <DocumentList />
    </div>
  )
}
