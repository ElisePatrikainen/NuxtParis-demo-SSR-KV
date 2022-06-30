export default defineEventHandler(async () => {
  const storage = useStorage()

  const itemsKeys = await storage.getKeys('db:items')

  const itemsP = itemsKeys.map(key => storage.getItem(key).then(item => item.body))

  const items = await Promise.all(itemsP)

  return items
})
