import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import LikeButton from './components/LikeButtonNoRef'
import Hello from './components/Hello'
import useMousePosition from './hooks/useMousePosition'

interface IShowResult {
  message: string;
  status: string
}
const DogShow: React.FC<{data:IShowResult}> = ({data})=>{
  return (
    <>
      <h2>Dog show: {data.status}</h2>
      <img src={data.message} alt=""/>
    </>
  )
}

// 入需要ts支持，在npx create-react-app 创建项目时需要加此参数 --typescript
// npx 用于这种一般项目只在开始用一次，没必要npm全局安装，他会需要的时候下载，放在一个空间，用完自己删掉
// 内部安装的模块，想要命令行使用，之前时一种写在package.json的script命令中，一种是直接node_modules/.bin/mocha去那node_modules里面的执行文件
// npm script(在package.json的script命令中)能做到的原理是：他会启动一个shell来运行命令，运行之前将需要的js，node_modules/.bin目录加入运行的path，所以就有了，用完之后再去掉。

// 用npx就可以不全局安装 mocha，而 npx mocha -version // 可以直接命令了 就想上面npm script一样
interface IShowResult {
  message: string;
  status: string;
}

interface IThemeProps {
  [key: string]: { color: string; background: string; }
}

const themes: IThemeProps = {
  'light': {
    color: '#000',
    background: '#eee',
  },
  'dark': {
    color: '#fff',
    background: '#222',
  }
}
export const ThemeContext = React.createContext(themes.light)
const App: React.FC = () => {

  return (
    <div className="App">
      <ThemeContext.Provider value={themes.dark}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>

          <LikeButton/>
          {/*<MouseTracker/>*/}

          {/*<p>X: {positions.x}, Y : {positions.y}</p>*/}

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </ThemeContext.Provider>
    </div>
  )
}

export default App
