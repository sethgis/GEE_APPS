
import Navbar from './Navbar';
import Home from './Home';
import Sidebar from './Sidebar';
import MyMap from './Component'
// import newMap from './Mymap';
// import newmap from './Mymap';


function App() {
  
 
  // const link = "http://sethnyawacha.surge.sh/";
  return (
    <div className="App">
    
      <Navbar />
      <Sidebar />
      <MyMap />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
