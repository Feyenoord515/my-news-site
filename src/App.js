import React from 'react';
import Article from './components/Article';
import articles from './articles';
import Header from './components/Header';
import Footer from './components/Footer';
import InternationalNews from './components/InternationalNews';
import Regionales from './components/Regionales';


function App() {
  return (

    <>
    <div className="vw-100">
       
    <div className=" vw-100 " >
      <Header />
    </div><div className="container mx-auto w-full">
        <h1 className="text-4xl font-bold my-8">Noticias locales</h1>
        {articles.map((article, index) => (
          <Article
            key={index}
            title={article.title}
            author={article.author}
            body={article.body} />
        ))}
      </div>
        <div className="container mx-auto w-full">
        <h1 className="text-4xl font-bold my-8">Noticias Regionales</h1>
      <Regionales />
        </ div>
      <div className="container mx-auto w-full">
        <h1 className="text-4xl font-bold my-8">Noticias Internacionales</h1>
      <InternationalNews />
        </ div>
      <div className=" vw-100 " >
      <Footer />
    </div>
      </div>
      </>
  );
}

export default App;
