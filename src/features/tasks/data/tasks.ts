import { faker } from '@faker-js/faker'

// Set a fixed seed for consistent data generation


export const tasks = Array.from({ length: 10 }, () => {
  const statuses = [
    'Baru',
    'Proses',
    'Selesai',
    'Cancel',
  ] as const
  const labels = ['bug', 'feature', 'documentation'] as const
  const priorities = ['low', 'medium', 'high'] as const

  return {
    id: `C${faker.number.int({ min: 0, max: 100 })}`,
    title: faker.person.fullName(),
    status: faker.helpers.arrayElement(statuses),
    label: faker.helpers.arrayElement(labels),
    priority: faker.helpers.arrayElement(priorities),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
    assignee: faker.person.fullName(),
    description: faker.lorem.paragraph({ min: 1, max: 3 }),
    dueDate: faker.date.future(),
  }
})
