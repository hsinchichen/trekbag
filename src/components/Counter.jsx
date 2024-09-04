function Counter({ totalNumberOfItems, numberOfItemsPacked }) {
  // const newItems = items.filter((item) => {
  //   if (item.packed === true) {
  //     return item;
  //   }
  // });

  return (
    <p>
      <b>{numberOfItemsPacked}</b> / {totalNumberOfItems} itmes packed
    </p>
  );
}

export default Counter;
