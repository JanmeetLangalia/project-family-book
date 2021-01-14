var family_a = [
"Prabhavati Langalia-Dadi",
"Jayesh Langalia-Papa", 
"Shruti Langalia-Mumma",
"Janmeet Langalia-Me",
"Viren Langalia-Uncle",
"Nisha Langalia-Aunty",
"Saloni Langalia-Sister",
"Vinisha Langalia-Sister",
"Nayna Langalia-Aunty",
"Dhruv Langalia-Brother",
"Janhvi Langalia-Sister",
"Ketan Langalia-Uncle",
]

var photos_a = [
"Dadi.jpg",
"Papa.jpg",
"Mumma.jpg",
"Me.jpg",
"Viren.jpg",
"Nisha.jpg",
"Saloni.jpg",
"Vinisha.jpg",
"Nayna.jpg",
"Dhruv.jpg",
"Janhvi.jpg",
"Ketan.jpg"
]
var i = 0
    function Next() {  

      if (i == 11)
    
    {
      i=0;
    }

    document.getElementById("FAMILY1").src = photos_a[i];

    var htmldata;
    
    htmldata=family_a[i];
    document.getElementById ("name1").innerHTML=htmldata;

      i++;
    }
