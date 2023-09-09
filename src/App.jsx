import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Items from './components/Items'

export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: 'Цагаан сандал',
          img: '',
          desc: 'Lorem ipsum dolor sit amet.',
          category: 'chairs',
          price: '67.000',
        },
        {
          id: 2,
          title: 'Ширээ',
          img: '',
          desc: 'Lorem ipsum dolor sit amet.',
          category: 'tables',
          price: '178.000',
        },
        {
          id: 3,
          title: 'Диван',
          img: '',
          desc: 'Lorem ipsum dolor sit amet.',
          category: 'sofa',
          price: '978.000',
        },
        {
          id: 4,
          title: 'Ламп',
          img: '',
          desc: 'Lorem ipsum dolor sit amet.',
          category: 'light',
          price: '3.500',
        },
        {
          id: 5,
          title: 'Цагаан ширээ',
          img: '',
          desc: 'Lorem ipsum dolor sit amet.',
          category: 'tables',
          price: '266.500',
        },
      ],
    }
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Items items={this.state.items}/>
        <Footer />
      </div>
    )
  }
}

export default App
