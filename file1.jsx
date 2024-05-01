import { ResponsiveImage } from "components";

const BannerOne = (props) => {
  //? Props
  const { data } = props;

  //? Local components
  const BannerImage = ({ item, index }) => (
    <ResponsiveImage
      dimensions="h-[40vw] lg:h-72 w-full"
      className={`rounded-2xl overflow-hidden ${
        index === 0
          ? "lg:rounded-none lg:rounded-tl-2xll"
          : index === 1
          ? "lg:rounded-none lg:rounded-tr-2xll"
          : index === 2
          ? "lg:rounded-none lg:rounded-bl-2xll"
          : "lg:rounded-none lg:rounded-br-2xll"
      }`}
      src={item.image.url}
      alt={item.title}
    />
  );

  return (
    <section className="grid gap-3 px-3 lg:relative lg:grid-cols-2 lg:gap-44">
      {data.map((item, index) =>
        item.uri ? (
          <a href={item.uri} target="_blank" key={index}>
            <BannerImage item={item} index={index} />
          </a>
        ) : (
          <BannerImage key={index} item={item} index={index} />
        )
      )}
      <div className="xabsolute z-10 hidden w-16 h-16 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full inset-1/2 lg:block" />
    </section>
  );
};

// test
// test
// test

export default BannerOne;
