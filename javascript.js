function validateForm() {
    var name = document.getElementById("name");
    var phno = document.getElementById("phno");

    if(name.value == "")
    {
        alert("please enter some value in name.")
    }

    if(!(isNaN(name.value)))
    {
        alert("please enter text in name section.");
    }

    if(isNaN(phno.value))
    {
        alert("please enter number in phno section.");
    }
}