const getCroppedImageURL = (url: string) => {
  if (!url) return '';
  const target = 'media/';
  const index = url.indexOf(target) + 'media/'.length;
  return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
};

export default getCroppedImageURL;
