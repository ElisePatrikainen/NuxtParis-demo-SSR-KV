export default eventHandler(async (nitro) => {
  const storage = useStorage()
  const data = await import('../../data/mockData').then(r => r.default || r) as any[]
  for (const item of data) {
    await storage.setItem(`db:items:${item.id}`, item)
  }
  return 'Seed done!'
})
