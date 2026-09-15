import Header from "./components/Header";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      <div>
        <Header />
        <Hero />

        {/* Card-ების სექცია */}
        <section className="flex flex-wrap justify-center gap-6 px-4 my-8">
          <Card />
          <Card />
          <Card />
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default App;
