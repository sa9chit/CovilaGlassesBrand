import "./App.css";
import { Header1 } from "./component/page1SearchHeroSection/header1";
import { Header2 } from "./component/page1SearchHeroSection/header2";
import { HeroSection } from "./component/page1SearchHeroSection/heroSection";
import { Ui } from "./component/page2Product/ui";
import { Locationn } from "./component/page3Location/location";
function App() {
  return (
    <>
      <div className="lg:h-[140vh] h-[105vh] flex flex-col  justify-between">
        <Header1></Header1>
        <Header2 />
        <HeroSection />
      </div>
      <div className="lg:h-screen h-[90vh] mt-5">
        <Ui></Ui>
      </div>
      <div>
        <Locationn />
      </div>
    </>
  );
}

export default App;
