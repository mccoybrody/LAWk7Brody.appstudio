btnSubmitAdd.onclick=function(){
    let customerName = inptName1.value
    let street = inptStreet.value
    let city = inptCity.value
    let state = inptState.value
    let zipcode = inptZip.value
    query = "INSERT INTO customer (name, street, city, state, zipcode) VALUES ('" + customerName + "', '" + street + "', '" + city + "', '" + state + "', '" + zipcode + "')"
    alert(query)
    
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=dhe61359&query=" + query)
    if (req.status == 200) {
        if (req.responseText == 500)
            lblMessage4.textContent = "You have successfully added the pet!"
        else
            lblMessage4.textContent = "There was a problem with adding the pet to the database."
        } else 
        lblMessage4.textContent = "Error: " + req.status
}