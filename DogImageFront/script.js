// $(document).readyState(alert("Connected!!"))

$("img").attr("src", "https://images.dog.ceo/breeds/bulldog-english/jager-2.jpg")

$("button").on("click", function() {
    // alert("button clicked")
    let endpoint = "https://dog.ceo/api/breeds/image/random"
    fetch(endpoint)
    .then(response => {
        // console.log(response.json())
        if(response.ok) return response.json()
        throw Error(!response.json() ? "No Data" : "connection issue")
    })
    .then(data => {
        console.log(data.message)
        $("img").attr("src", data.message)
        //do something with this data which is now an object

    })
    .catch(error => {
        $("#error").text(error)
    })
  
})

