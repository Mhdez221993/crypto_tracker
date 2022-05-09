const updateData = (data = {}) => {
  let newData = []
  Object.entries(data.bpi).map((key) => {
    newData.push(
      {
        // value: false,
        date: key[0],
        price: key[1],
        name: 'BTC'
      }
    )
  });

  return newData
}

export default updateData;