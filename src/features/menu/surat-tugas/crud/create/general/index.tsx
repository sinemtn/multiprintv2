import { ContentSection } from '../components/content-section'
import { ProfileForm } from './form'

export function AddSuratTugas() {
  return (
    <ContentSection
      title='General Surat Tugas'
      desc='Penginputan Data Surat Tugas Baru Bersifat General.'
    >
      <ProfileForm />
    </ContentSection>
  )
}
