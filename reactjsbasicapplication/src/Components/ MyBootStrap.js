import React, {
  Component
} from 'react';

class MyBootStrap extends Component {

  render() {

    return ( < div className = 'MyBootStrap' >
      <
      div className = "jumbotron text-center" >
      <
      h1 > My First Bootstrap Page < /h1> <
      p > Resize this responsive page to see the effect! < /p> < /
      div >

      <
      div className = "container-fluid" >
      <
      div className = "row" >
      <
      div className = "col-sm-3"
      style = {
        {
          background: 'red'
        }
      } >
      <
      h3 > Column 1 < /h3> <
      p > Lorem ipsum dolor.. < /p> <
      p > < abbr > Ut enim ad.. < /abbr>< /p > < /
      div > <
      div className = "col-md-3 display-4"
      style = {
        {
          background: 'green'
        }
      } >
      <
      h3 > Column 2 < /h3> <
      p > Lorem ipsum dolor.. < /p> <
      p > Ut enim ad.. < /p > < /
      div > <
      div className = "col-lg-3" >
      <
      h3 > Column 3 < /h3> <mark><
      p > Lorem ipsum dolor.. < /p></mark > <
      p className = 'bg-warning' > bootstrap text colors < /p> <
      p className = "text-muted" > text - muted < /p> <
      p className = "text-primary" > text - primary < /p> <
      p className = "text-success" > text - success. < /p> <
      p className = "text-info" > text - info. < /p> <
      p className = "text-warning" > text - warning. < /p> <
      p className = "text-danger" > text - danger. < /p> <
      p className = "text-secondary" > text - secondary. < /p> <
      p className = "text-dark" > text - dark. < /p> <
      p className = "text-body" > text - body. < /p> <
      p className = "text-light" > text - light. < /p> <
      p className = "text-white" > text - white. < /p>< /
      div >
      <
      div className = "col-xl-3 "
      style = {
        {
          background: 'purple'
        }
      } >
      <
      h3 > Column 4 < /h3> <
      p > Lorem ipsum dolor.. < /p> <small><
      p className = 'bg-warning' > bootstrap bg colors < /p></small >

      <
      p className = "bg-primary text-white" > bg - primary. < /p> <
      p className = "bg-success text-white" > bg - success. < /p> <
      p className = "bg-info text-white" > bg - info. < /p> <
      p className = "bg-warning text-white" > bg - warning. < /p> <
      p className = "bg-danger text-white" > bg - danger. < /p> <
      p className = "bg-secondary text-white" > bg - secondary. < /p> <
      p className = "bg-dark text-white" > bg - dark. < /p> <
      p className = "bg-light text-dark" > bg - light. < /p>< /
      div > <
      /div> < /
      div >

      <
      footer className = 'blockquote-footer' > Created by Ramesh < /footer>< /
      div >
    );
  }
}
export default MyBootStrap;