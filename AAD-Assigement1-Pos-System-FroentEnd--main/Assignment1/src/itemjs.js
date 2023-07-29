const form = document.getElementById('itemform');


$("#btnsave").on("click", ()=>{
    const id  = document.getElementById("Iid").value;
    const name  = document.getElementById("ItemDesc").value;
    const price = document.getElementById("UPrice").value;
    const qty = document.getElementById("Qty").value;
    console.log(id +" "+name+ " "+price+" "+qty );
    var item = {
        "item_id" : id,
        "item_name" : name,
        "Item_qty" : qty,
        "Item_price" : price,
    }
    console.log(item);
    let itemJSON = JSON.stringify(item);
    console.log(itemJSON);
    $.ajax({
        URL:"http://localhost:8080/Assignment_1/item-Controller",
        method: "POST",
        async: true,
        data: itemJSON,
        headers: {
            "Content-Type": "application/json"
        },
        dataType: "json",
        contentType: "application.json",
        success: (response) => {
            console.log(response);
            if (response.status !== false) {
                console.log("Done!", "item Successfully save!", "success")
                
            } else {
                console.log("Error!", "Something went wrong while updating the customer!" + response.responseMessage, "error")
            }


        },
        error: (error) => {
            console.log("Error!", "Something went wrong while performing the request!" + error, "error")
        }
    })
})

