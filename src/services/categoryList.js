export const categoryList = category => {
  const name = [];
  if (category?.grooming) {
    name.push('Grooming ');
  }
  if (category?.shop) {
    name.push('Shop ');
  }
  if (category?.hospital) {
    name.push('Hospital ');
  }
  if (category?.hotel) {
    name.push('Hotel ');
  }
  return name;
};
