const Card = (props) => {
    return (
    <div class="card">
        <p class="title">{props.name}</p>
        <p>{props.job}</p>
    </div>
    )
  }
  
  const App = () => {
    return(
    <div>  
    <Card name="ipong" job="FrontEnd Dev"/>
    <Card name="daffa"  job="project magang"/>
    <Card name="bagus"  job="ui/ux"/>
    </div>
    )
  }
  ReactDOM.render(<App />, document.querySelector('#root'))