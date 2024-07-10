import DocumentList from '@/components/documentList/DocumentList'
import Header from '@/components/header/Header'

export default function Documents() {
  return (
    <div className='xl:ml-[29px]'>
      <Header title='Documents' />
      <DocumentList />
    </div>
  )
}
