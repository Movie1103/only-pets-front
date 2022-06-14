import cover from '../../../img/pets-cover.jpg';

function SearchArea() {
  return (
    <div className="relative">
      <div className="flex justify-center">
        <img src={cover} alt="pets" className="mx-auto opacity-50" />
        <div className="absolute top-1/4">
          <h1>Find places near you</h1>
        </div>
      </div>
    </div>
  );
}

export default SearchArea;
