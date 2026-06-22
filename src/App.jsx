import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ArticleList from "./components/ArticleList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ArticleList />
      <Footer />
    </div>
  );
}

export default App;
