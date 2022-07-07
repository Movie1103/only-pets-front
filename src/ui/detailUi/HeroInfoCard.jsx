import { categoryList } from "../../services/categoryList";

function HeroInfoCard({ userId, title, src, category, open, close }) {
  const list = categoryList(category);
  return (
    <div className="flex justify-between shadow-lg shadow-neutral-300 rounded-xl">
      <div className="m-12">
        <div className="flex flex-col gap-4">
          <h2 className="font-medium">{title}</h2>
          <div className="flex flex-col gap-2">
            <p>
              <span className="font-medium">Services: </span>
              {list?.map(el => el)}
            </p>
            <p>
              <span className="font-medium">Opening hours: </span>
              {open} - {close}
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-sm rounded-tr-lg rounded-br-lg shadow-lg shadow-neutral-300">
        <img
          src={src}
          alt="Service cover"
          className="h-full bg-cover rounded-br-lg rounded-tr-lg"
        />
      </div>
    </div>
  );
}

export default HeroInfoCard;
