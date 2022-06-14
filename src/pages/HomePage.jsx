import Category from '../components/layouts/home/Category';
import SearchArea from '../components/layouts/search/SearchArea';

function HomePage() {
  return (
    <>
      <div className="shadow-2xl shadow-neutral-200">
        <SearchArea />
      </div>
      <div className="mx-auto max-w-screen-lg">
        <Category />
      </div>
    </>
  );
}

export default HomePage;
