
try{  let response=await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
let data=await response.json();
console.log(data);
SetData(data);
}
catch(error){
console.log(error);
alert(" Error in fatching data .Make sure youre connected with secure network")
}
}
// getdata();

return (
    <table className="table">{
Data&&(Data.map((iteam,index)=>(
    <tr key={index} >
        <td><img src={iteam.image} height={"35px"}></img></td>
        <td>{iteam.name}</td>
    <td>{iteam.symbol}</td>
    <td>{iteam.current_price}</td>
    <td>{iteam.circulating_supply}</td>
    <td>{iteam.ath_change_percentage}</td>
    <td>Mkt Cap:{iteam.market_cap}</td>
    </tr>
)))
}
    </table>
)
}