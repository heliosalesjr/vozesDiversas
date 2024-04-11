'use client'
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa'; // Importe o ícone de menu de hambúrguer do React Icons

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="navbar bg-base-100">
        <div className={`flex-1`}>
          <a className="btn btn-ghost normal-case text-xl">Ornitorrinco</a>
        </div>
        <div className={`hidden md:flex ${menuOpen ? 'hidden' : ''}`}>
          <a href="/sobre" className="btn btn-ghost">Sobre</a>
          <a href="/comunidade" className="btn btn-ghost">Comunidade</a>
          <a href="/github" className="btn btn-ghost">Github</a>
        </div>
        <div className="md:hidden lg:hidden">
          <button className="btn btn-square btn-ghost" onClick={toggleMenu}>
            {menuOpen ? (
              <div className="bg-base-200 p-4">
                <a href="/sobre" className="btn btn-block">Sobre</a>
                <a href="/comunidade" className="btn btn-block">Comunidade</a>
                <a href="/github" className="btn btn-block">Github</a>
              </div>
            ) : (
              <FaBars className="inline-block w-5 h-5" /> // Ícone de menu de hambúrguer
            )}
          </button>
        </div>
      </div>
    </>
  );
}

export default NavBar;






