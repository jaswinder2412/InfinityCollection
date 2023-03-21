

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider'

// Fa icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'


// custom Components
import Header from './components/Header';
import Homepage from './views/Homepage';

// App Cuystom Scss
import './App.scss';




// Library Declarations
library.add(fab, faCheckSquare, faCoffee);



const App = () => {
  return (

    <ThemeProvider
  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
  minBreakpoint="xxs"
>
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <main>
        <Homepage/>
      </main>
    </div>
    </ThemeProvider>
  );
}

export default App;
