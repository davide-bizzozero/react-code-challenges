import './App.css';
import ColorRenderer from './components/ColorRenderer';
import DarkMode from './components/DarkMode';
import FocusInput from './components/FocusInput';
//import DogPics from './components/DogPics';
import FormValidator from './components/FormValidator';
import PixelArt from './components/PixelArt';
import ShoppingCart from './components/ShoppingCart';
import SimpleCalculator from './components/SimpleCalculator';
import ToggleWindowEvent from './components/ToggleWindowEvent';

function App() {
  return (
    <div className='App'>
      <ColorRenderer />
      <DarkMode />

      <FormValidator />

      {/* <DogPics /> */}

      <ToggleWindowEvent />

      <PixelArt />

      <SimpleCalculator />

      <FocusInput />

      <ShoppingCart />
    </div>
  );
}

export default App;
