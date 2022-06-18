export const filterService = (service, g, s, hos, ho) => {
  let arr = [];
  if (g) {
    const filtered = service?.filter(el => el.category.grooming === true);
    if (filtered) {
      filtered.map(el => {
        arr.push(el);
      });
    }
  }
  if (s) {
    const filtered = service?.filter(el => el.category.shop === true);
    if (filtered) {
      filtered.map(el => {
        arr.push(el);
      });
    }
  }
  if (hos) {
    const filtered = service?.filter(el => el.category.hospital === true);
    if (filtered) {
      filtered.map(el => {
        arr.push(el);
      });
    }
  }
  if (ho) {
    const filtered = service?.filter(el => el.category.hotel === true);
    if (filtered) {
      filtered.map(el => {
        arr.push(el);
      });
    }
  }
  const newArr = [];
  for (const k in arr) {
    newArr[arr[k].id] = arr[k];
  }
  return newArr;
};
