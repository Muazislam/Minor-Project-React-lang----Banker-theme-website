function Food() {
  const food1 = "orange";
  const food2 = "banana";
  const food3 = "bhinddi";
  return (
    <ul>
      <li>Apple</li>
      <li>{food1}</li>
      <li>{food2}</li>
      <li>{food3.toUpperCase()}</li>
    </ul>
  );
}
export default Food;
