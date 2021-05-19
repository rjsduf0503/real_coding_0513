import "./CityList.css";
import CityOver10 from "./CityOver10.jsx"
import { BrowserRouter as Router} from "react-router-dom";

function CityList(props) {
  // const cities = props.cities;
  const { cities } = props;
  

  return (
    <Router>
      <div>
        <h1 className="city">CityList</h1>
        
        <ul>
          {cities.map((item, index) => {
            if(index==1){
              return(
                <li key={index}>
                  <a href="https://www.google.com/maps?q=Andong&bih=969&biw=1920&hl=ko&iflsig=AINFCbYAAAAAYKUCSnLKcvAaV9Ams5qonGTViXjrssBU&gs_lcp=Cgdnd3Mtd2l6EAMyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAUL34AVi9-AFg7P0BaAFwAHgAgAF-iAF-kgEDMC4xmAEAoAECoAEBqgEHZ3dzLXdperABAA&uact=5&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjunfqM0NXwAhWRF6YKHR3ACvgQ_AUoAnoECAEQBA">{item}</a>
                </li>
              )
            }
            // console.log(item, index);
            if(item.length>10){
              item = <CityOver10 cityOver10={item} idx={index}/>
            }
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </Router>
  );
}

export default CityList;
