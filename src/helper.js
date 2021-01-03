export const importAll = r => {
  let images = {}

  r.keys().map(item => { images[item.replace('./', '')] = r(item) })

  return images
}
