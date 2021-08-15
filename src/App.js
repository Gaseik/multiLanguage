import logo from './logo.svg';
import './App.css';
import { FormattedMessage, FormattedDate,FormattedTime, IntlProvider } from "react-intl";
import React, { useState, useEffect } from 'react'


function App() {
  const [lang, setLang] = useState(navigator.language)
  const [locale, setLocale] = useState()
  console.log(navigator.language)
  useEffect(
    () => {
      const nn = async () => {
        const resp = await fetch(`./lang/${lang}.json`)
        const data = await resp.json()
        setLocale(data)
      }
      nn()

    }, [lang])


  return (
    <IntlProvider messages={locale}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <select
              value={lang}
              onChange={(evt) => {
                setLang(evt.target.value);
              }}
            >
              <option value="en">English</option>
              <option value="zh-TW">中文</option>
              <option value="fr">Français</option>
              <option value="jp">日本語</option>
            </select>
          </div>
          <p>
            <FormattedMessage
              id="app.header"
              defaultMessage="Edit src/App.js and save to reload."
            />


          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FormattedMessage
              id="app.content"
              defaultMessage="Learn React"
            // defaultMessage={<div>Edit <code>src/App.js</code> and save to reload.</div>}
            />

          </a>
          <FormattedDate
            value={new Date()}
            
            year="numeric"
            month="long"
            day="numeric"
            weekday="long"
          />
          <div>
          <FormattedTime value={new Date()} />
          </div>
           
        </header>
      </div>
    </IntlProvider>
  );
}

export default App;
