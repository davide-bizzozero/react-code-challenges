export const NumberedList = ({
  items,
  resourceName,
  itemComponent: ItemComponent,
}) => {
  return (
    <>
      {items.map((item, i) => (
        <>
          <h3 key={i}>{i + 1}</h3>
          <ItemComponent
            key={i + 1}
            {...{ [resourceName]: item }}
          />
        </>
      ))}
    </>
  );
};
