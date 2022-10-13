import { Link } from "react-router-dom";
import RoundedImage from "../../../components/RoundedImage";

function CategoryCard({
  id,
  title,
  imageSource,
  artists,
}: {
  id: string;
  title: string;
  imageSource: string;
  artists: Array<any>;
}) {
  return (
    <Link
      to={`/categories/${id}`}
      className="grid grid-cols-1 grid-rows-1 drop-shadow-md"
    >
      <RoundedImage
        className="col-span-full row-span-full"
        imageSource={imageSource}
        alt={title}
      />
      <div className="flex flex-col justify-end p-2 text-white col-span-full row-span-full w-fit">
        <h1 className="font-bold ">{title}</h1>
      </div>
    </Link>
  );
}

export default CategoryCard;
