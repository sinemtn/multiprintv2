import { faker } from '@faker-js/faker'

// Set a fixed seed for consistent data generation

export const tasks = Array.from({ length: 10 }, () => {
  const statuses = [
    'Baru',
    'Proses',
    'Selesai',
    'Cancel',
  ] as const
  
   const tipes = [
    'Maintenance',
    'Non-Repair',
    'Selesai',
 
  ] as const

  return {
    id: `ST${faker.number.int({ min: 0, max: 100 })}`,
    nokomplain: `C${faker.number.int({ min: 0, max: 100 })}`,
    namacustomer: faker.person.fullName(),
    status: faker.helpers.arrayElement(statuses),
    tipe: faker.helpers.arrayElement(tipes),
    namapic: faker.person.fullName(),
  }
})
