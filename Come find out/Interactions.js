//JQuery implementation for UI changes
//put everything in here
$(document).ready(function() {
  var watchfulEye = new HashTable(6);
  alert('hello');
  $('#govButton').on('click', function() {
    var fname = $('#fname').val();
    alert(fname);
    var lname = $('#lname').val();
    //if fname is empty or 'First name'
      //alert we need your first name silly
    //if lname is empty or 'Last name'
      //alert What about your last name!?
    //if both are empty
      //alert we're watching you, please do this right.
    //if ()
      //call insert
  });



});
//watchfulEye.insert(fname, lname);
/*
<label for="fname">First name</label><br>
    <input type="text" id="fname" name="fname"><br>
    <label for="lname">Last name</label><br>
    <input type="text" id="lname" name="lname"><br>
    <label for="govButton">Check now!</label>
    <input type="button" id="govButton" name="govButton"><br>
*/

//.insert(fname, lname)

//on click of .govButton
  //retrieve fname and lname // handle case of empty values if .
  //convert all input values to strings
  //alert user both inputs must be filled if
  //call watchfulEye.insert($fname, $lname);

//create a 2nd hashtable called 'watchlist'
  //once sorted, if a registered name angers the system, increase danger#

//if first but no last
  //if sorted
    //fname lname play by the rules or im calling this in
    //increase danger#
  //if not
    // We need your first name silly

//if last but no first
  //if sorted
    //Don't mess with me fname
    //increase danger#
  //if not
    //What about your last name!?

//if no inputs
  //we're watching you, please do this right.

//if all yes 1
  //Well you are now!
//if all yes 2 on
  //Yes fname, because we love you
