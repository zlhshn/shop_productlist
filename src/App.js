import React from 'react';
import {products} from './components/data'
import {categories} from  './components/data'
import  Category from './components/category';
import  Card from  './components/card'
import Navbar from  './components/navbar'



function App() {
  return (
    <main >
      <Navbar/>
      <Category categories = {categories}/>
      <Card products = {products} />

    </main>
  );
}


export default App;
