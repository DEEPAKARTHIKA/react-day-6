import logo from './logo.svg';
import './App.css';
import List from './Components/List';


    

function App() {
  return (
    <div className="App">
      <List products={[{no:"1",name:"Red& Black Frock", price:"$150", imageUrl:"https://assets.ajio.com/medias/sys_master/root/h29/h03/12570500464670/-473Wx593H-440921119-black-MODEL.jpg"},
      {no:"2",name:"Strappy A-lined Tiered Dress", price:"$230", imageUrl:"https://assets.ajio.com/medias/sys_master/root/20210212/ygDE/60257c1df997dd5c40ee2900/-473Wx593H-441044087-red-MODEL.jpg"},
      {no:"3",name:"Glitter Print Dress", price:"$245",imageUrl:"https://media.wforwoman.com/product/22FEW12494-119006/665/22FEW12494-119006_1.jpg?format=webp&w=480&dpr=2.6"},
      {no:"4",name:"Red Dress", price:"$180",imageUrl:"https://images.bestsellerclothing.in/data/only/august07-2021/253411901_g1.jpg?width=380&height=500&mode=fill&fill=blur&format=auto"}]}/>
    </div>
  );
}

export default App;
