customerUpdate.onshow=function(){
  // populate the textarea with all the pet names
    txtaNames_contents.style.height = "150px"
    query = "SELECT * FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=blm26391&query=" + query)
    if (req.status == 200) {
        results = JSON.parse(req.responseText)
        let message = ""
        for (i = 0; i < results.length; i++)
            message = message + results[i][1] + "\n"
        txtaNames.value = message
    }
}


btnSubmitUpdate.onclick=function(){
    let newName = inptNewName.value
    let oldName = inptOldName.value
    query = "SELECT * FROM customer WHERE `name` = '" + oldName + "'"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=blm26391&query=" + query)
    if (req.status == 200) {
        allPetData = JSON.parse(req.responseText)
        if (allPetData.length > 0) {
            query = "UPDATE customer SET `name` ='" + newName + "' WHERE `name` = '" + oldName + "'"
            req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=blm26391&query=" + query)
            if (req.status ==  200)  // transit worked
                if (req.responseText == 500)   // update worked
                    lblMessage7.textContent = `You have successfully updated ${oldName} to ${newName}.`
                else
                    lblMessage7.textContent = `There was a problem updating ${oldName} to ${newName}.`
            else   // transit error
                lblMessage7.textContent = `Error: ${req.status}`
        }
    }
}