'use client'
import React, { useState, useEffect } from 'react';
import {FaFistRaised} from 'react-icons/fa';
import {BsRainbow} from 'react-icons/bs';

function Home() {
  const [quote, setQuote] = useState('');
  const [name, setName] = useState('');
  const [isBlack, setIsBlack] = useState(false);
  const [isRainbow, setIsRainbow] = useState(false);

  const getRandomItem = (data) => {
    const randomIndex = Math.floor(Math.random() * data.length);
    return data[randomIndex];
  };

  const fetchData = async () => {
    try {
      const response = await fetch('/dummy.json');
      const data = await response.json();
      const randomItem = getRandomItem(data);
      setQuote(randomItem.quote);
      setName(randomItem.name);
      setIsBlack(randomItem.isBlack);
      setIsRainbow(randomItem.isRainbow);
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
    }
  };

  useEffect(() => {
    // Carregar dados do arquivo JSON quando a página é carregada
    fetchData();
  }, []);

  const handleNewQuoteClick = () => {
    // Ao clicar no botão "Nova Citação", escolher outro elemento aleatório
    fetchData();
  };

  return (
    <>
      <div className="flex flex-col h-screen justify-center items-center">
        <h1 className="text-7xl text-gray-700">"{quote}"</h1>
        <p className="text-3xl">{name}</p>
        {isBlack && <FaFistRaised />}
        {isRainbow && <BsRainbow />}
        <button className="btn btn-primary" onClick={handleNewQuoteClick}>Nova Citação</button>
      </div>
    </>
  );
}

export default Home;