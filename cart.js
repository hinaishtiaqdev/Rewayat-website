let cart = JSON.parse(localStorage.getItem("cart")) || [];


// ADD TO CART

document.querySelectorAll(".add-cart").forEach(button=>{


button.addEventListener("click",function(){


let name = this.dataset.name;

let price = Number(this.dataset.price);



let existing = cart.find(item=>item.name===name);



if(existing){

existing.quantity++;

}

else{

cart.push({

name:name,
price:price,
quantity:1

});

}



localStorage.setItem("cart", JSON.stringify(cart));

updateCartCount();

alert(name + " Added To Cart");

});


});




// CART COUNT


function updateCartCount() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let badge = document.getElementById("cart-count");

    if (badge) {

        badge.innerHTML = cart.length;

    }

}


// MENU CATEGORY FILTER


document.addEventListener("DOMContentLoaded", function () {

    const buttons = document.querySelectorAll(".category-btn");
    const sections = document.querySelectorAll(".menu-section");

    // Agar menu page nahi hai to error na aaye
    if (buttons.length === 0 || sections.length === 0) {
        return;
    }

    buttons.forEach(button => {

        button.addEventListener("click", function () {

            const category = this.dataset.category;

            // Active button
            buttons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            // Show / Hide sections
            sections.forEach(section => {

                if (category === "all" || section.dataset.category === category) {

                    section.style.display = "block";

                } else {

                    section.style.display = "none";

                }

            });

        });

    });

});