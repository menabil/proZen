import About from "./layouts/About";
import Banner from "./layouts/Banner";
import Counter from "./layouts/Counter";
import Process from "./layouts/Process";
import Service from "./layouts/Service";
import Work from "./layouts/Work";

export default function Home() {
  return (
    <>
      <Banner />
      <Service />
      <About />
      <Counter />
      <Work />
      <Process />
    </>
  );
}
