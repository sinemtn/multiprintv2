import { ContentSection } from '../components/content-section'
import { ProfileForm } from './form'

export function AddComplaint() {
  return (
    <ContentSection
      title='General Komplain'
      desc='Penginputan Data Komplain Baru Yang Bersifat General.'
    >
      <ProfileForm />
    </ContentSection>
  )
}
