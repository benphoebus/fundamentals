import React from 'react'
import NotesList from '../js/components/NotesList'
import Header from '../js/components/Header';
import Content from '../js/components/Content';

function Home() {
  return (
    <>
      <div className="container" id="app">
        <Header />
        <Content />
        <NotesList />
      </div>
      
    </>
  )
}

export default Home