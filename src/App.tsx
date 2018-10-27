import axios from 'axios';
import * as React from 'react';

import 'bulma/css/bulma.min.css';
import 'monaco-editor/min/vs/editor/editor.main.css';
import './App.css';
import logo from './logo.svg';

class App extends React.Component {
  public componentDidMount() {
    console.log("컴포넌트 마운트 완료");
    axios.get("https://httpbin.org/get").then(v => {
      console.log(v.data);
    }).catch(ex => {
      console.log(ex);
    });
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">안녕 리액트</h1>
        </header>
        <div id="에디터" className="editor" />
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
