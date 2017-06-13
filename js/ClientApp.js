import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var div = React.DOM.div

var MyTitleFactory = React.createFactory(MyTitle)

var myFirstComponent = React.createClass({
  render: function () {
    return (
      div(null,
        MyTitleFactory({title: 'props are read only propperties', color: 'peru'}),
        MyTitleFactory({title: 'that parents can pass to children', color: 'mediumaquamarine'}),
        MyTitleFactory({title: 'props can be read', color: 'rebeccapurple'}),
        MyTitleFactory({title: 'but props can\'t be modified', color: 'magenta'})
      )
    )
  }
})

ReactDOM.render(React.createElement(myFirstComponent), document.getElementById('app'))
