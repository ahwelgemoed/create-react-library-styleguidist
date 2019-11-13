import React, { Component } from 'react'

import { Button } from 'tm'

export default class App extends Component {
  render() {
    return (
      <div>
        <Button testProps={'Hello From Here'} />
      </div>
    )
  }
}
