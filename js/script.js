var menShirt = document.querySelector('#men_shirt');
var designerShirt = document.querySelector('#designer');

function rollover(){
    menShirt.innerHTML = "<h2>Shirt</h2><p><img class=\"card-img-top\" src=\"img/me.jpg\" alt=\"shirt\"></p> <span class=\"men_span\"><a class=\"btn btn-secondary\" id=\"view\" href=\"detail.html\" role=\"button\">QUICK VIEW &raquo;</a></span><p>Shirt</p><p><a class=\"btn btn-secondary\" href=\"detail.html\" role=\"button\">View details &raquo;</a></p>";
    
}

function mouseaway(){
   menShirt.innerHTML = "<h2>Shirt</h2><p><img class=\"card-img-top\" src=\"img/me.jpg\" alt=\"shirt\"></p> <p>Shirt</p><p><a class=\"btn btn-secondary\" href=\"detail.html\" role=\"button\">View details &raquo;</a></p>";
   
   
}
function designerIn(){
    designerShirt.innerHTML = "<h2>Shirt</h2><p><img class=\"card-img-top\" src=\"img/designer.jpg\" alt=\"shirt\"></p> <span class=\"men_span\"><a class=\"btn btn-secondary\" id=\"view\" href=\"detail.html\" role=\"button\">QUICK VIEW &raquo;</a></span><p>Shirt</p><p><a class=\"btn btn-secondary\" href=\"detail.html\" role=\"button\">View details &raquo;</a></p>";
}
function designerOut(){
    designerShirt.innerHTML = "<h2>Shirt</h2><p><img class=\"card-img-top\" src=\"img/designer.jpg\" alt=\"shirt\"></p> <p>Shirt</p><p><a class=\"btn btn-secondary\" href=\"detail.html\" role=\"button\">View details &raquo;</a></p>";
}
