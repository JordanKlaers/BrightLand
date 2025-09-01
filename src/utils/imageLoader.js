export const loadImages_Residential = () => {
  return import.meta.glob('../assets/images/residential/*', {
    eager: false
  })
}

export const loadImages_Commercial = () => {
  return import.meta.glob('../assets/images/commercial/*', {
    eager: false
  })
}
