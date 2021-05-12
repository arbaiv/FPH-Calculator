$(function(){
// function for the buttons
$('div#button-default').on('click', function(){
    $('div#advance-form').show();
    $('div#activate-icon').css('display', 'block');
    $('div#non-activate-icon').css('display', 'none');
    $('form').trigger('reset');
});
$('div#button-outside').on('click', function(){
    $('div#advance-form').hide();
    $('div#activate-icon').css('display', 'none');
    $('div#non-activate-icon').css('display', 'block');
    $('form').trigger('reset');
});

// Math for inside dhaka on normal occassions
$('input#default-submit-button').on('click', function(e){
    e.preventDefault();
(function(){
    if($('div#activate-icon').css('display') == "block"){
    var $defaultDressPrice = parseInt($('input#default-dress-prices').val());
    var deliveryCharge = 80;
    var totalPrice = $defaultDressPrice + deliveryCharge;
    var defaultNote = "Note: <span>mam, apnar total price " + $defaultDressPrice + " + " + deliveryCharge + " = " + totalPrice + " tk/- delivery time 3-4 days. order ki process kore dibo?</span>";
    $('p#default-para').html(defaultNote);
    } else{
        var $totalDressprice = parseInt($('input#default-dress-prices').val());
        var outsideCharge = 130;
        var firstTotalPrice = $totalDressprice + outsideCharge;
        var outsdieBkashCharge = Math.round(firstTotalPrice * (2/100));
        var finalPrice = firstTotalPrice + outsdieBkashCharge;
        var customerAdvanceNote = "Note : <span title=\"Double Click To Copy\"> mam, apnar total price " + $totalDressprice + " + " + outsideCharge + " (delivery charge) " + " + " + outsdieBkashCharge + " (bkash charge) " + " = " + finalPrice + " tk/- apnake full payment bkash a advance korte hobe. ata amader personal bkash number 01727755531 and bkash kore last digit dilei amra order ta process kore dibo</span>";
        $('p#default-para').html(customerAdvanceNote); 
    }    
    }())
    
});

// Math for inside dhaka on advance occasion 
$('input#advance-submit-button').on('click', function(e){
e.preventDefault();
(function(){
    var $advanceDressPrice = parseInt($('input#advance-dress-prices').val());
    var $dressPercentage = parseInt($('input#advance-dress-percentage').val());
    var deliveryChargeNow = 80;
    var normalTotalPrice = $advanceDressPrice + deliveryChargeNow;
    var bkashPrice = Math.round(normalTotalPrice * ($dressPercentage/100));
    var advanceNote = "";

    if(bkashPrice >= 1000){
    var extraCharge = Math.round(bkashPrice * (2/100));
    bkashPrice += extraCharge;
    normalTotalPrice += extraCharge;
    var remainingPrice = normalTotalPrice - bkashPrice;
    //Customer Note if bkash charge applicable 
    advanceNote += "Note: <span>mam, apnar total price "; 
    advanceNote += $advanceDressPrice + " + " + deliveryChargeNow + " = " + ($advanceDressPrice + deliveryChargeNow);
    advanceNote += " tk/- apnake bkash korte hobe " + bkashPrice + " tk/- (akhane " + extraCharge + " tk/- bkash charge dhora hoyeche)";
    advanceNote += " and baki " + remainingPrice + " tk/-  apnake cash on delivery ar somoy dite hobe </span>";  
    } else{
        var remainingPrice = normalTotalPrice - bkashPrice;
        //customer note if bkash charge not applicable
        advanceNote += "Note: <span>mam, apnar total price " + $advanceDressPrice + " + " + deliveryChargeNow + " = " + normalTotalPrice + " tk/- apnake bkash korte hobe " + bkashPrice + " tk/- " + "and baki " + remainingPrice + " tk/- apnake cash on delivery ar somoy dite hobe</span>";
    }
    $('p#advance-para').html(advanceNote);
}())
});


});
