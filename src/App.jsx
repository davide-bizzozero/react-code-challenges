import './App.css';
import ColorRenderer from './components/ColorRenderer';
import DarkMode from './components/DarkMode';
import FocusInput from './components/FocusInput';
//import DogPics from './components/DogPics';
import FormValidator from './components/FormValidator';
import { NumberedList } from './components/NumberedList';
import PixelArt from './components/PixelArt';
import { RegularList } from './components/RegularList';
import ShoppingCart from './components/ShoppingCart';
import SimpleCalculator from './components/SimpleCalculator';
import { SplitScreen } from './components/SplitScreen';
import ToggleWindowEvent from './components/ToggleWindowEvent';
import { LargePersonListItem } from './components/people/LargePersonListItem';
import { SmallPersonListItem } from './components/people/SmallPersonListItem';
import { LargeProductListItem } from './components/products/LargeProductListItem';
import { SmallProductListItem } from './components/products/SmallProductListItem';
import { CurrentUserLoader } from './components/user/CurrentUserLoader';
import { ResourceLoader } from './components/ResourceLoader';
import { UserInfo } from './components/user/UserInfo';
import { UserLoader } from './components/user/UserLoader';
import { ProductInfo } from './components/products/ProductInfo';

import axios from 'axios';
import { DataSource } from './components/DataSource';
import StepsFlow from './components/steps/StepsFlow';
import { UserInfoForm } from './components/user/UserInfoForm';

const BASE_PATH = 'http://localhost:3000';

const getServerData = (url) => async () => {
  const response = await axios.get(BASE_PATH + url);
  return response.data;
};

const LeftHandComponent = ({ name }) => {
  return <h1 style={{ backgroundColor: 'green' }}>{name}</h1>;
};

const RightHandComponent = ({ message }) => {
  return <p style={{ backgroundColor: 'red' }}>{message}!</p>;
};

const people = [
  {
    name: 'John Doe',
    age: 54,
    hairColor: 'brown',
    hobbies: ['swimming', 'bicycling', 'video games'],
  },
  {
    name: 'Brenda Smith',
    age: 33,
    hairColor: 'black',
    hobbies: ['golf', 'mathematics'],
  },
  {
    name: 'Jane Garcia',
    age: 27,
    hairColor: 'blonde',
    hobbies: ['biology', 'medicine', 'gymnastics'],
  },
];

const products = [
  {
    name: 'Flat-Screen TV',
    price: '$300',
    description: 'Huge LCD screen, a great deal',
    rating: 4.5,
  },
  {
    name: 'Basketball',
    price: '$10',
    description: 'Just like the pros use',
    rating: 3.8,
  },
  {
    name: 'Running Shoes',
    price: '$120',
    description: 'State-of-the-art technology for optimum running',
    rating: 4.2,
  },
];

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

      <SplitScreen
        leftWeight={1}
        rightWeight={3}
      >
        <LeftHandComponent name='Shaun' />
        <RightHandComponent message='Hello' />
      </SplitScreen>

      <RegularList
        items={people}
        resourceName='person'
        itemComponent={SmallPersonListItem}
      />
      <hr />
      <NumberedList
        items={people}
        resourceName='person'
        itemComponent={LargePersonListItem}
      />
      <hr />
      <RegularList
        items={products}
        resourceName='product'
        itemComponent={SmallProductListItem}
      />
      <hr />
      <NumberedList
        items={products}
        resourceName='product'
        itemComponent={LargeProductListItem}
      />

      <hr />
      <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader>
      <hr />
      <UserLoader userId='123'>
        <UserInfo />
      </UserLoader>
      <hr />
      <ResourceLoader
        resourceUrl='users/123'
        resourceName='user'
      >
        <UserInfo />
      </ResourceLoader>
      <hr />
      {/* BEST SOLUTION ResourceLoader */}
      <ResourceLoader
        resourceUrl='products/1234'
        resourceName='product'
      >
        <ProductInfo />
      </ResourceLoader>
      <hr />
      {/* OR BEST SOLUTION DataSourc */}
      <h1>DATA SOURCE COMPONENT</h1>
      <DataSource
        getDataFunc={getServerData('/users/123')}
        resourceName='user'
      >
        <UserInfo />
      </DataSource>
      <DataSource
        getDataFunc={getServerData('/products/1234')}
        resourceName='product'
      >
        <ProductInfo />
      </DataSource>
      <hr />

      <StepsFlow />

      <hr />

      <UserInfoForm />
    </div>
  );
}

export default App;
