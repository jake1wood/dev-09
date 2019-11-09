function calculatePrice(signTextLength) {

    var tiles = signTextLength;
    
    var pricePerTile = 5;
     
     if($('#upgradeFont').is(":checked"))
     {
       pricePerTile = 6;
     }
     
    var subTotal = tiles * pricePerTile;
    var shipping = 7;
    var grandTotal = subTotal + shipping;

    if(tiles <= 0)
    {
      subTotal = "";
      shipping = "";
      grandTotal = "";
    }
    //set tiles
    $('#tiles').html(tiles);

    //set subTotal
    $('#subTotal').html('$' + subTotal)

    //set shipping
    $('#shipping').html('$' + shipping)

    //set grand total
    $('#grandTotal').html('$' + grandTotal)


}
    
    function clearForm()
    {
      $('#signText').val('');
      $('#upgradeFont').prop('checked', false);
      
      $('#tiles').html('');

    //set subTotal
    $('#subTotal').html('$')

    //set shipping
    $('#shipping').html('$')

    //set grand total
    $('#grandTotal').html('$')

    }