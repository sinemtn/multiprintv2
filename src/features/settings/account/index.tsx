import { ContentSection } from '../components/content-section'
import { AccountForm } from './account-form'

export function SettingsAccount() {
  return (
    <ContentSection
      title='Account'
      desc='Update Akun anda.'
    >
      <AccountForm />
    </ContentSection>
  )
}
