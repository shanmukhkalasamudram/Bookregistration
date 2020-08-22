function validateForm(input) {


    
    var y = document.forms["myForm"]["publisher"].value;
    var x = document.forms["myForm"]["title"].value;
    var a = document.forms["myForm"]["edition"].value;
    var b = document.forms["myForm"]["price"].value;
    var c = document.forms["myForm"]["isbn"].value;

    var d = /^\d\d\d-\d-\d\d-\d\d\d\d\d\d-\d$/;

    var letters = /^[0-9]+$/;
    var letter = /^[a-zA-Z]+$/;

    if (x.length > 75 ) {
      alert("Title is too long, please make it short");
      return false;
    }

    if(y.length > 30 ){
      alert("Publisher name is too long, please make it short");
      return false;
    }

    if((a).match(letters))
      {
      alert('For edition, Only String  is accepted : you can try another');
      return false;
      }


      if((b).match(letter))
      {
      alert('For Cost, Only number  is accepted : you can try another');
      return false;
      }

    if (!c.match(d))
    {
      alert( "The ISBN number entered is invalid!" );
      return false;
    } 
    
  }

  