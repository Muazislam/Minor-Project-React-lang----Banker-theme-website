import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button from "./Button/Button.jsx";
import Student from "./Student.jsx";
import Hero from "./Section-1-Hero/Hero.jsx";
function App() {
  return (
    <>
      <Food />
      <Card />
      <Card />
      <Button />
      <Student name="Muaz" age="30" isStudent={true} />
      <Student name="Patrik" age={45} isStudent={false} />
      <Student name="Bhindi" age={80} isStudent={false} />
      <Student name="aloo kachalo" age={78} isStudent={false} />
      <Footer></Footer>
      <Header></Header>

      <Hero />
    </>
  );
}

export default App;
