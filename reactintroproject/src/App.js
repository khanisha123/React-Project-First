import './App.css';
import Navbar from './components/Navbar';
import User from './components/User';

function App() {
  return (
    <div className="App">
      <Navbar title="Navbar"/>
      <User Name="Xanış" Surname="Ələsgərov" Age="17"/>
      <User Name="Cavad" Age="18" Surname="Rüstəmli" />
      <User Name="Murad" Age="18" Surname="Ümüdov" />
      <User Name="Günel" Age="26" Surname="Yusubova" />
      <User Name="Kamran" Age="19" Surname="İsmayılov" />
    </div>
  );
}

export default App;
