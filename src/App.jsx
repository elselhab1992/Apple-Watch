import GlobalStyles from "./GlobalStyles";
import Theme from "./Theme";
import {
  Header,
  Hero,
  About,
  AppleWatch,
  FindUs,
  Smartwatch,
  ImgSlider,
  Trade,
  Updated,
  Footer,
} from "./components";

function App() {
  return (
    <Theme>
      <GlobalStyles />
      <Header />
      <Hero />
      <About />
      <AppleWatch />
      <FindUs />
      <Smartwatch />
      <ImgSlider />
      <Trade />
      <Updated />
      <Footer />
    </Theme>
  );
}

export default App;
