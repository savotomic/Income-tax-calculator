import logo from './logo.svg';
import './App.scss';
import InputField from './components/inputField';

function App() {
  return (
    <div className="App">
      <div className="container">
        <a href="#">Income tax calculator</a>
        <InputField name="income" placeholder="Enter income"></InputField>
      </div>
    </div>
  );
}

export default App;
