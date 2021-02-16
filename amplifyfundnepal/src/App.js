import Menu from './components/Menu'
import Footer from './components/View/Footer'
import FbShare from './components/View/FbShare'
import Fb from './components/View/Fb'
import './statics/style.css'
function App() {
  return (
    <div className="App">
      <header className="App-header">       
        <Menu />
      </header>
      <FbShare />
      <Fb />
      <Footer />
      </div>
  );
}

export default App;
