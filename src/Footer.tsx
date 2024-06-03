import React from 'react';
import { Email, Hour, Tech, Copyright, Phone } from './components';

export const Footer = () => {
    return (
      <footer className="w-full h-60 bg-gradient-to-t to-cyan-400 from-blue-600 sm:flex flex-col">
        <div className="w-full lg:px-40 pt-5 pb-3 px-2 flex">
            <Hour/>
            <Tech/>
            <Phone/>
            <Email/>
        </div>
        <Copyright/>
      </footer>
    )
}