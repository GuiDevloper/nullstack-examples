import Nullstack from 'nullstack';
import './Application.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Dynamic from './pages/Dynamic';

class Application extends Nullstack {
  
  prepare({ page }) {
    page.title = 'Nullstack active-class-name';
  }

  render() {
    return (
      <>
        <Nav/>
        <Home route="/"/>
        <About route="/about"/>
        <Blog route="/blog"/>
        <Dynamic route="/*"/>
      </>
    )
  }

}

export default Application;