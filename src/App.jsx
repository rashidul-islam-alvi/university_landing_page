import { MantineProvider } from "@mantine/core";
import Header from "./components/Header/Header";
import NavBar from "./components/Header/NavBar";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import VarsityEvents from "./components/Events/VarsityEvents";
import News from "./components/News/News";
import Academic from "./components/Academic/Academic";
import MobileFeatures from "./components/Features/MobileFeatures ";
import Footer from "./components/Footer/Footer";
import Degree from "./components/DegreeEarn/Degree";
import Jobs from "./components/Jobs/Jobs";
import Details from "./components/DetailsSection/Details";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      {/* Header */}
      <Header />
      <NavBar />
      {/* HeroSection */}
      <div className="block p-4 sm:hidden">
        <img
          src="https://nub.ac.bd/assets/images/logo_nub.png"
          alt="logo_nub"
          className="h-[100%]"
        />
      </div>
      <Hero />
      {/* Features*/}
      <MobileFeatures />
      <Features />
      {/* Events*/}
      <VarsityEvents />
      {/* News*/}
      <News />
      {/* Academic*/}
      <Academic />
      {/* Degree*/}
      <Degree />
      {/* details */}
      <Details />
      {/* {footer} */}
      <Footer />
    </MantineProvider>
  );
}

export default App;
