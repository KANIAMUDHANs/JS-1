function zap()
{
    console.log("VALIDATING USER DETAILS-")
    var user=document.getElementById('user').value;
    console.log(user);
    var days=document.getElementById('days').value;
    console.log(days);
    var cabs=document.getElementById('cabs').value;
    console.log(cabs);

    var SUV=1000;
    var SEDAN=2500;
    var HATCHBACK=800;
    var PRIMEIUMCARS=5000;

    if(cabs=="SUV")
    {
        total=SUV*rate
        document.getElementById('ren').innerHTML="Total Rental Fare-SUV :" +total;
    }
    else if(cabs=="SEDAN")
    {
        total=SEDAN*rate
        document.getElementById('ren').innerHTML="Total Rental Fare-SEDAN :" +total;
    }
    else if(cabs=="HATCHBACK")
        {
            total=HATCHBACK*rate
            document.getElementById('ren').innerHTML="Total Rental Fare-HATCHBACK :" +total;
        }
    else
    {
         document.getElementById('ren').innerHTML="Total Rental Fare-PREMIMUMCARS :" + "NOT AVAILABLE";
    }
    
    document.getElementById('output').innerHTML="Thanks for Booking " +user + "  "  +" Have a Safe Journey !"; 
    
}