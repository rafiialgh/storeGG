import List from "./List";

interface FooterItemProps {
  data: object;
}

export default function FooterItem(props: FooterItemProps) {
  const { data } = props;
  // console.log(data);

  return (
    <>
      {Object.keys(data).map((key, index) => {
        return (
          <div className="col-md-4 col-6 mb-lg-0 mb-25">
            <p
              className="text-lg fw-semibold color-palette-1 mb-12"
              key={index}
            >
              {key}
            </p>
            <ul className="list-unstyled">
              <List items={data}/>
            </ul>
          </div>
        );
      })}
    </>
  );
}
