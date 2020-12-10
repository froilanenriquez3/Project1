function redeemAvailable(clicked_id) {
  var buttonID = document.getElementById(clicked_id);
  var promotionID = buttonID.parentNode.parentNode.parentNode.id;
  var promotion = document.getElementById(promotionID);
  var availables = document.getElementById("available");
  availables.removeChild(promotion);
  document.getElementById("redeemed").appendChild(promotion);
}
