import { getRouteApi } from '@tanstack/react-router'
import { ContentSection } from '../components/content-section'
import { AccountForm } from './form'

const routeApi = getRouteApi('/_authenticated/surat-tugas/actions/general/$id')

export function ActionGeneral() {
  const { id } = routeApi.useParams()

  return (
    <ContentSection
      title='Edit'
      desc={`Mengedit data untuk ID: ${id}`}
    >
      <AccountForm />
    </ContentSection>
  )
}