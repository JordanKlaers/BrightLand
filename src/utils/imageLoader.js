export const loadGalleryImages = () => {
  return import.meta.glob('../assets/images/*.jpg', {
    eager: false,
    // import: 'default',
  })
}
