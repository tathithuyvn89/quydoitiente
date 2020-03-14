function convert() {
    let amount = document.getElementById("amount").value;
     let fromcurrency = document.getElementById("Fromcurrency").value;
     let tocurrency = document.getElementById("Tocurrency").value;
     if (fromcurrency==="VND" && tocurrency==="USD"){
         let result = Number(amount)/23000;
         document.getElementById("result").innerHTML=("Result: "+ result);
     }
    if (fromcurrency==="USD" && tocurrency==="VND"){
        let result = Number(amount)*23000;
        document.getElementById("result").innerHTML=("Result: "+ result);
    }

}