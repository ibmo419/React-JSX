import './App.css';
import MyFirstImage from "./Galaxy-A50.png"

function App() {
  return (
    <div className="App" style={{width:"70%",height:"90%"}}>
      
      <h1 className="title red">Huawei Y9 VS Galaxy A50</h1>
      <div style={{border:"solid 1px black"}}>
      <img src={MyFirstImage} style={{width:400,height:400}} alt="galaxy-A50"/>
      <h5>Display : 6.40-inch (1080x2340)</h5>
      <h5>Front : Camera 25MP</h5>
      <h5>Rear : Camera 25MP + 5MP + 8MP</h5>
      <h5>RAM : 4GB</h5>
      <h5>Storage : 64GB</h5>
      <h5>Battery Capacity : 4000mAh</h5>
      <h5>OS : Android Pie</h5>
      <a href="https://www.lesmobiles.com/telephones/samsung-galaxy-a50.html">For more information</a>
      </div>
      <div style={{border:"solid 1px black"}}>
      <img src="/huawei_y9.png" style={{width:400,height:400}} alt="huawei-Y9"/>
      <h5>Display : 6.50-inch</h5>
      <h5>Processor : HiSilicon Kirin 710</h5>
      <h5>Front : Camera 16MP + 2MP</h5>
      <h5>Rear : Camera 13MP + 2MP</h5>
      <h5>Storage : 64GB</h5>
      <h5>Battery Capacity : 4000mAh</h5>
      <h5>OS : Android Pie</h5>
      <a href="https://www.frandroid.com/produits/huawei/smartphones/6837-huawei-y9-2019">For more information</a>
      </div>
      
    </div>
  );
}

export default App;
