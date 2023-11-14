import { useEffect, useState } from 'react';

const getDogPic = async () => {
  // API: https://dog.ceo/dog-api/
  try {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const dog = await response.json();
    return dog.message;
  } catch (error) {
    console.error(error);
  }
};

export default function DogPics() {
  const [dogPic, setDogPic] = useState('');

  useEffect(() => {
    getDogPic().then((dogPic) => setDogPic(dogPic));
  }, []);

  return (
    <div className='dog-pics'>
      <img src={dogPic} />
      <button onClick={async () => setDogPic(await getDogPic())}>🐶</button>
    </div>
  );
}
