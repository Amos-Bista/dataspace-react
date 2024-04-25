
import "./App.css";
import Herosection from "./component/herosection";
import SearchDomain from "./component/searchdomain";
// import Plans from "./component/Plans";
import Valuablecustomer from "./component/valuablecustomer";

function App() {
  return (
    <div className="flex-col text-black relative">
      <div className=" mb-64">
        <Herosection />
      </div>

      <div className="absolute top-[51%]  w-full">
        <SearchDomain />
      </div>

      <section>
        <h1 className="flex justify-center text-4xl ">
          Our Popular Plans & Pricing
        </h1>
        {/* <div className="mb-28">
          <Plans />
        </div> */}
      </section>
      {/* <section className="mb-28">
        <h1 className="flex justify-center text-4xl pb-10">
          Our Valued Costumers
        </h1>
        <Valuablecustomer />
      </section> */}
    </div>
  );
}

export default App;
