import Theme from './componenets/Theme';
import { Navbar } from './componenets/Navbar';
import { Footer } from './componenets/Footer';
import { Routes } from './componenets/Routes';

function App() {
  return (
    <Theme>
      <Navbar />
      <Routes />
      <Footer />
    </Theme>
  );
}

export default App;
