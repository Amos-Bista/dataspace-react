import "./App.css";
import Herosection from "./component/herosection";
import SearchDomain from "./component/searchdomain";
// import Valuablecustomer from "./component/valuablecustomer";
import Plans from "./component/Plans";

function App() {
  return (
    <div className="relative flex-col text-black">
      <div className="mb-64 ">
        <Herosection />
      </div>

      <div className="absolute top-[51%]  w-full">
        <SearchDomain />
      </div>

      <section>
        <h1 className="flex justify-center text-4xl ">
          Our Popular Plans & Pricing
        </h1>
        <div className="mb-28">
          <Plans />
        </div>
      </section>
      {/* <section className="mb-28">
        <h1 className="flex justify-center pb-10 text-4xl">
          Our Valued Costumers
        </h1>
        <Valuablecustomer />
      </section> */}
    </div>
  );
}

export default App;
