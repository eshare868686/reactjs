import logo from './logo.svg';
import './App.css';
import { Card } from './Compontents/Card';
import { data } from './Data/data';

function App() {
  return (
    <div className="App">
      {data.map(x=>{
        return(
          <Card title={x.title}/>
        )
      })}
      <p></p>
    </div>
  );
}

export default App;
