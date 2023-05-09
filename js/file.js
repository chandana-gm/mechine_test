

function totalAmount() {
    var name = document.getElementById("name").value
    var consumerid = document.getElementById("consumerid").value
    var units = document.getElementById("units").value
    var Amount = document.getElementById("amount")


    var usedunit = document.getElementById("usedunit")
    var name2 = document.getElementById("name2")
    var consumerid2 = document.getElementById("consumerid2")

    name2.value = name
    consumerid2.value = consumerid
    usedunit.value = units
    if (name != "" && consumerid != "" && units != "") {
        flag = true;
        console.log("inside");
        var body = document.querySelector("body")
        if (units > 0 && units < 100) {
            var total = units * 5
            Amount.value = total

        }
        else if (units >= 100 && units < 150) {
            var total1 = units * 5



            console.log(total1);
            var total2 = units - 100
            console.log(total2);
            var total3 = total2 * 5
            console.log(total3);

            var total4 = total1 + total3
            Amount.value = total4

        }
        else if (units >= 150 && units < 200) {
            var total5 = units * 5
            var total6 = units - 100
            var total7 = total6 * 8
            var total8 = total5 + total7
            Amount.value = total8

        }


        else if (units >= 200) {
            var total5 = units * 5
            var total6 = units - 100
            var total7 = total6 * 10
            var total8 = total5 + total7
            Amount.value = total8

        }
        else {
            

            console.log("THE UNIT VALUE CANNOT BE ZERO");
            alert("THE UNIT VALUE CANNOT BE ZERO")
            $('body').removeClass("modal-open");
            $('.modal-backdrop').remove();
            $('#exampleModal').modal('hide');
        
        }



    }
    else {

        alert("enter the values properly");
        $('body').removeClass("modal-open");
        $('.modal-backdrop').remove();
        $('#exampleModal').modal('hide');

    }
    


}


