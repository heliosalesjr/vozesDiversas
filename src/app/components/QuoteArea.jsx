'use client'

import React, { useState, useEffect } from 'react';
import { FaFistRaised } from 'react-icons/fa';
import { BsRainbow } from 'react-icons/bs';
import BackgroundImage from './BackgroundImage';
import { bgImages } from './bgImages';

function QuoteArea() {
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
    <div className='flex flex-col h-screen justify-center items-center'
      
    >
        
      <div
        className="bg-white max-w-3xl bg-opacity-50 backdrop-filter backdrop-blur-md p-6 rounded-lg shadow-lg m-2 flex flex-col justify-start items-start hover:shadow-lg transition-all duration-300"
      >
        <p className="text-3xl px-16 text-center py-4">"{quote}"</p>
        <p className="text-2xl font-semibold text-center mx-auto">{name}</p>
        <div className='flex py-4 text-center mx-auto'>
          {isBlack && <FaFistRaised className='text-4xl text-gray-700'/>}
          {isRainbow && <BsRainbow className='text-5xl text-pink-700'/>}
        </div>
        <button className="btn btn-primary mx-auto" onClick={handleNewQuoteClick}>Nova Citação</button>
      </div>
    </div>
  );
}

export default QuoteArea;
