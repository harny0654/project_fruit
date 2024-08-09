document.addEventListener('DOMContentLoaded', () => {
    
    function fetchProducts() {
        
        const products = [
            { name: 'Product 1', price: 10, description: 'Description of Product 1' },
            { name: 'Product 2', price: 20, description: 'Description of Product 2' },
            { name: 'Product 3', price: 30, description: 'Description of Product 3' },
        ];

        const productList = document.getElementById('product-list');
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <p>Price: $${product.price}</p>
                <button>Add to Cart</button>
            `;
            productList.appendChild(productCard);
        });
    }

    fetchProducts();
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

let userSelected = null;

function Read() {
    let data = {};
    data["txtName"] = document.getElementById("txtName").value;
    data["txtAge"] = document.getElementById("txtAge").value;
    data["txtEmail"] = document.getElementById("txtEmail").value;
    data["txtImage"] = document.getElementById("txtImage").files[0];
    return data;
}

function Create(data) {
    const cardContainer = document.getElementById("card-container");

    const card = document.createElement("div");
    card.className = "card";

    const reader = new FileReader();
    reader.onload = function (e) {
        card.innerHTML = `
            <img src="${e.target.result}" alt="Image">
            <div class="card-content">
                <h3>${data.txtName}</h3>
                <p>price: ${data.txtAge} ฿</p>
                <p>Email: ${data.txtEmail}</p>
                <br>
                <button onclick="Edit(this)">Edit</button>
                <button onclick="Delete(this)">Delete</button>
            </div>
        `;
        cardContainer.appendChild(card);
    };
    reader.readAsDataURL(data.txtImage);
}

function Edit(button) {
    const card = button.parentElement.parentElement;
    userSelected = card;
    document.getElementById("txtName").value = card.querySelector("h3").innerText;
    document.getElementById("txtAge").value = card.querySelector("p:nth-child(2)").innerText.split(': ')[1];
    document.getElementById("txtEmail").value = card.querySelector("p:nth-child(3)").innerText.split(': ')[1];
    
}

function Update(formData) {
    const reader = new FileReader();
    reader.onload = function (e) {
        userSelected.querySelector("img").src = e.target.result;
        userSelected.querySelector("h3").innerText = formData.txtName;
        userSelected.querySelector("p:nth-child(2)").innerText = "price: " + formData.txtAge;
        userSelected.querySelector("p:nth-child(3)").innerText = "Email: " + formData.txtEmail;
    };
    reader.readAsDataURL(formData.txtImage);
}

function Delete(button) {
    if (confirm('คุณต้องการลบข้อมูลหรือไม่')) {
        const card = button.parentElement.parentElement;
        card.remove();
        ClearForm();
    }
}

function FormSubmit() {
    let formData = Read();

    if (userSelected == null) {
        Create(formData);
    } else {
        Update(formData);
    }
    ClearForm();
}

function ClearForm() {
    document.getElementById("txtName").value = "";
    document.getElementById("txtAge").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtImage").value = "";

    userSelected = null;
}





