import About from "./layouts/About";
import Banner from "./layouts/Banner";
import Blog from "./layouts/Blog";
import Counter from "./layouts/Counter";
import Members from "./layouts/Members";
import Process from "./layouts/Process";
import Service from "./layouts/Service";
import Testimoni from "./layouts/Testimoni";
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
      <Members />
      <Testimoni />
      <Blog />
    </>
  );
}
