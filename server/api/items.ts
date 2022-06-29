import storage from '../../services/storage'

export default defineEventHandler(async () => {
  const itemsKeys = await storage.getKeys('items')

  const itemsP = itemsKeys.map(key => storage.getItem(key).then(item => item.body))

  const items = await Promise.all(itemsP)

  return items
})