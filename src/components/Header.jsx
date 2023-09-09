import React from 'react'

export default function Header() {
  return (
    <header>
      <div>
        <span className="logo">Гэрийн тавилгууд</span>
        <ul className="nav">
          <li>Бидний тухай</li>
          <li>Контакт</li>
          <li>Кабинет</li>
        </ul>
      </div>
      <div className="presentation"></div>
    </header>
  )
}
