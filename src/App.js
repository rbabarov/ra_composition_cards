import './App.css';
import Card from "./components/Card";
import CardTitle from "./components/CardTitle";
import CardText from "./components/CardText";
import Button from "./components/Button";

const URL = "https://images.unsplash.com/photo-1635832636644-7bfbc2c61592?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=875&q=80";
function App() {
  return (
    <div className="App container pt-5 d-flex">
      <Card imgUrl={URL} style={{width: '20rem', marginBottom: '20px'}}>
          <CardTitle>Card 1</CardTitle>
          <CardText>
          Some quick example text to build 
          on the card title and make up the 
          bulk of the card's content.
          </CardText>
          <Button>Go somewhere</Button>
      </Card>
      <Card style={{width: '20rem'}}>
          <CardTitle>Card 2</CardTitle>
          <CardText>
          With supporting text below as a 
          natural lead-in to additional 
          content.
          </CardText>
          <Button>Go somewhere</Button>
      </Card>
    </div>
  );
}

export default App;
