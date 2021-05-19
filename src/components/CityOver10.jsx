// import CityList from "./CityList.jsx"

function CityOver10(props){
    const { cityOver10, idx } = props
    // console.log(idx);
    // console.log(cityOver10);

    return ([
                // cityOver10.map((item, index) => {
                    // return <li key={index}>{item}</li>;
                // })
                // <p className="cityOver10">{cityOver10}</p>
                <span className="cityOver10" key={idx}>{cityOver10}</span>
    ]);
}

export default CityOver10;