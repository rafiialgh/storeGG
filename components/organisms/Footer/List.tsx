interface ListProps {
  items: object;
}

export default function List(props: ListProps) {
  const { items } = props;
  // console.log(items)
  return (
    <>
      {Object.values(items).map((value, index) => {
        <li className="mb-6">
          <a href="" className="text-lg color-palette-1 text-decoration-none">
            {value}
          </a>
        </li>;
      })}
    </>
  );
}
