export default defineNitroPlugin(async (nitro) => {
  const storage = useStorage()
  const itemsKeys = await storage.getKeys('db:items')
  if (itemsKeys.length) { return }
  console.log('Seeding database...')
  const data = await import('../../data/mockData').then(r => r.default || r) as any[]
  for (const item of data) {
    await storage.setItem(`db:items:${item.id}`, item)
  }
})
