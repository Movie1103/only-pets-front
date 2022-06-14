function CategoryCard({ title, src }) {
  return (
    <div className="relative">
      <div className="w-40 h-60">
        <img src={src} alt={title} className="rounded-lg" />
        <h4 className="absolute text-white right-5 bottom-4">{title}</h4>
      </div>
    </div>
  );
}

export default CategoryCard;
