import React, { Component } from 'react'
import List from './Component/ListKey'
import Ref from './Component/Ref'


export default class App extends Component {
  render() {
    return (
      <div>
        <List/>
        <Ref/>
      </div>
    )
  }
}
