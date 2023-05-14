import { useEffect, useState } from 'react';
import useFetch from './hooks/useFetch';

function App() {
  const { sendReq } = useFetch();
  const [catFact, setCatFact] = useState({ fact: '' });
  const [giphyImg, setGiphyImg] = useState({ url: '', title: '' });

  const callApis = async () => {
    type CatFact = { fact: string; length: number };

    const dataFact: CatFact = await sendReq('https://catfact.ninja/fact');
    const query = encodeURI(dataFact.fact.split(' ', 3).join(' '));
    setCatFact({
      fact: dataFact.fact,
    });

    type Giphy = {
      data: { title: string; images: { original: { url: string } } }[];
    };

    const dataGif: Giphy = await sendReq(
      `https://api.giphy.com/v1/gifs/search?api_key=${
        import.meta.env.VITE_GIPHY_API_KEY
      }&q=${query}`
    );
    const randomIndex = Math.floor(Math.random() * 3);
    setGiphyImg({
      url: dataGif.data[randomIndex].images.original.url,
      title: dataGif.data[randomIndex].title,
    });
  };

  useEffect(() => {
    console.log('eff');
    callApis();
  }, []);

  return (
    <>
      <h1>Cats Facts</h1>
      <main>
        <section>
          <img src={giphyImg.url} alt={giphyImg.title} />
          <p>{catFact.fact}</p>
        </section>
      </main>
    </>
  );
}

export default App;
