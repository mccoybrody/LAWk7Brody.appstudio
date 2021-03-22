let req = ""
let query = ""
let results = ""
let pw = "Password"  // put your database password here
let netID = "dhe61359"
let allCustomers = []

customerSelect.onshow=function(){
    txtResponse.style.height = "100px"
}

btnCustomers.onclick=function(){
    query = "SELECT * FROM customer"
    // Below change from my netID to yours (twice: user and database)    
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=dhe61359&pass=" + pw + "&database=dhe61359&query=" + query)

    if (req.status == 200) {
           console.log(`req.responseText is a JSON string that looks like this: ${req.responseText}`)
        results = JSON.parse(req.responseText)

           console.log(`The parsed JSON string is converted to a JS object (an array of arrays): ${results} where results[0] is ${results[0]}, the first array in the JS results object.`)
        
        if (results.length == 0)    // no results were returned by the query
           lblMessage1.textContent = "There are no pets in the database."
        else { 
            console.log(`the first row/item in the big array is a small array: ${results[0]}`)
            console.log(`to get to Paul, need results[0][1]: ${results[0][1]}`)

        let message = ""
        for (i = 0; i < results.length; i++)
            message = message + results[i][1] + "\n"
        txtResponse.value = message
     } // end else

  } else   // the transit didn't work - bad wifi? server turned off?
        lblMessage1.textContent = "Error code: " + req.status
}