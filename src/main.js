const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');


if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav-link')

const linkAction = () => {
    const navMenu = document.getElementById('.nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


const scrollHeader = () => {
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('bg-header')
                    : header.classList.remove('bg-header')
}

window.addEventListener('scroll', scrollHeader)

const scrollUp =() =>{
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


const sections= document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionClass = document.querySelector('.nav_menu a[href*="' + sectionId + '"]');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }else{
            sectionClass.classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'fa-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-moon' :'fa-sun'

if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())

})


//Modal Functionalities Starts here !

function openOrderModal() {
    var modal = document.getElementById("orderModal");
    modal.style.display = "block";
  }

  function closeOrderModal() {
    var modal = document.getElementById("orderModal");
    modal.style.display = "none";
  }

  function openSecondModal(type) {
    if(type == 'regular'){
        console.log("Regular");
    var form = document.getElementById("orderForm");
    var selectedProtein = form.querySelector('#selectedProtein').value;

    if (selectedProtein) {
        closeOrderModal(); 
        var secondModal = document.getElementById("secondModal");
        secondModal.style.display = "block";
        //console.log("Order submitted with protein choice: " + selectedProtein)
    } else {
        //alert("Please select a protein option.");
        var selectProteinError = document.getElementById("selectProteinError");

        selectProteinError.innerHTML = `
        <p style="color:red;"><strong><i> Please select a Protein </i></strong></p> `;
    } }
    else if (type == 'special') {
        console.log("Teriyaki");
        //var selectedProtein = 'Teriyaki';
        var secondModal = document.getElementById("secondModal");
        secondModal.style.display = "block";
    }

}

function closeSecondModal() {
    var secondModal = document.getElementById("secondModal");
    secondModal.style.display = "none";
}
function closeThirdModal() {
    var secondModal = document.getElementById("thirdModal");
    secondModal.style.display = "none";
}

function selectProtein(protein) {

    const selectedProteinInput = document.getElementById('selectedProtein');
    const gridItems = document.querySelectorAll('.grid-item');

    if (selectedProteinInput.value === protein) {
        selectedProteinInput.value = ''; 
        gridItems.forEach(item => item.style.border = 'none'); 
    } else {
        selectedProteinInput.value = protein;
        gridItems.forEach(item => item.style.border = 'none'); 
        const selectedGridItem = document.querySelector(`.grid-item[onclick="selectProtein('${protein}')"]`);
        selectedGridItem.style.border = '2px solid #4CAF50';
        //document.getElementById("selectToppingsBtn").disabled = false;
    }
}

function selectRice(rice) {
    const selectedRiceInput = document.getElementById('selectedRice');
    const gridItems = document.querySelectorAll('.grid-item');
  
    if (selectedRiceInput.value === rice) {
        selectedRiceInput.value = ''; 
        gridItems.forEach(item => item.style.border = 'none'); 
    } else {
        selectedRiceInput.value = rice;
        gridItems.forEach(item => item.style.border = 'none'); 
        const selectedGridItem = document.querySelector(`.grid-item[onclick="selectRice('${rice}')"]`);
        selectedGridItem.style.border = '2px solid #4CAF50';
        document.getElementById("selectToppingsBtn").disabled = false;
    }
}

function selectBeans(beans) {
    const selectedBeanInput = document.getElementById('selectedBean');
    const gridItems = document.querySelectorAll('.grid-item');

    if (selectedBeanInput.value === beans) {
        selectedBeanInput.value = ''; 
        gridItems.forEach(item => item.style.border = 'none'); 
    } else {
        selectedBeanInput.value = beans;
        gridItems.forEach(item => item.style.border = 'none'); 
        const selectedGridItem = document.querySelector(`.grid-item[onclick="selectBeans('${beans}')"]`);
        selectedGridItem.style.border = '2px solid #4CAF50';
    }
}

function showToppings() {
    const selectedBeanInput = document.getElementById('selectedBean').value;
    if(selectedBeanInput){
    document.getElementById("toppingsSection").style.display = "block";
    selectToppingsBtn.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }else{
        var selectBeanError = document.getElementById("selectBeanError");
        selectBeanError.innerHTML = `
        <p style="color:red;"><strong><i> Please select an Option before Proceeding </i></strong></p> `;
    }
}

function showBeans() {
    const selectedRiceInput = document.getElementById('selectedRice').value;
    //document.getElementById("orderForm2").style.display = "grid";
    if(selectedRiceInput){
    document.getElementById("beansSection").style.display = "block";
    document.getElementById("selectToppingsBtn").style.display = "block";
    var selectBeansBtn = document.getElementById("selectBeansBtn");
    selectBeansBtn.scrollIntoView({
        behavior: 'smooth',
        block: 'start', 
        inline: 'start'
    });
}else{
    var selectRiceError = document.getElementById("selectRiceError");
    selectRiceError.innerHTML = `
        <p style="color:red;"><strong><i> Please select an Option before Proceeding </i></strong></p> `;
}
}

var selectedToppings = {};
function toggleTopping(topping,imageElement) {
    if (imageElement) {
    if (selectedToppings[topping]) {
        selectedToppings[topping] = false;
        imageElement.style.border = "none"; 
    } else {
        selectedToppings[topping] = true;
        console.log(topping)
        imageElement.style.border = "2px solid #4CAF50";    
    }
}}

function placeOrder(){
    closeSecondModal();
    
    var selectedProtein = document.getElementById("selectedProtein").value;
    var selectedRice = document.getElementById("selectedRice").value;
    var selectedBeans = document.getElementById('selectedBean').value;
    //var regular = document.getElementById("regular").value;
    
    //console.log("Hiiiiiiiii ",regular);
    var bowlImage = document.getElementById("bowlImage");
    if(selectedProtein){
    if (selectedProtein == 'Steak'){
        //console.log('steak');
        bowlImage.innerHTML = ` <img src="/img/steak-bowl.jpg" alt="Steak Bowl"> `;
    }else if (selectedProtein == 'Chicken'){
        bowlImage.innerHTML = ` <img src="/img/chix-bowl.jpeg" alt="Chicken Bowl"> `;
    }
    else if (selectedProtein == 'Veggies(Includes Tofu)'){ 
        bowlImage.innerHTML = ` <img src="/img/tofu.webp" alt="Veggie Bowl"> `;
    }
    var orderSummaryContent = document.getElementById("orderSummaryContent");
    orderSummaryContent.innerHTML = `
        <p><strong>Choose your Protein:</strong> <i>${selectedProtein}</i></p>
        <p><strong>Choose your Rice:</strong> <i> ${selectedRice}</i></p>
        <p><strong>Beans Selection:</strong> <i>${selectedBeans}</i></p>
        <p><strong>Toppings?</strong> <i>${getToppingsList(selectedToppings)}</i></p>
        <label for="quantity">Quantity:</label>
        <div class="quantity-container">
        <button onclick="decrementQuantity()">-</button>
        <input type="text" id="quantity" value="1" readonly>
        <button id="max" onclick="incrementQuantity()">+</button>
        </div>
    `;
    }
    else {
        console.log("Teriyaki Here")
        bowlImage.innerHTML = ` <img src="/img/teriyaki.jpeg" alt="Teriyaki Bowl"> `;
        var orderSummaryContent = document.getElementById("orderSummaryContent");
        orderSummaryContent.innerHTML = `
            <p><strong>Choose your Protein:</strong> <i>Teriyaki Chicken</i></p>
            <p><strong>Choose your Rice:</strong> <i>${selectedRice}</i></p>
            <p><strong>What kind of Toppings would you like?:</strong> <i>${getToppingsList(selectedToppings)}</i></p>
            <label for="quantity">Quantity:</label>
            <div class="quantity-container">
            <button onclick="decrementQuantity()">-</button>
            <input type="text" id="quantity" value="1" readonly>
            <button id="max" onclick="incrementQuantity()">+</button>
            </div>
        `;
    } 
    var thirdModal = document.getElementById("thirdModal");
    thirdModal.style.display = "block";
    /*console.log("Selected Toppings:", selectedToppings);
    console.log("Selected Protein:", selectedProtein.value);
    console.log("Selected Rice:", selectedRice.value);*/
}

function editOrder(){
    document.getElementById("thirdModal").style.display = "none";
    document.getElementById("orderModal").style.display = "block";
}

function getToppingsList(selectedToppings) {
    // Extract toppings from the object
    var toppingsList = Object.keys(selectedToppings)
        .filter(topping => selectedToppings[topping])
        .map(topping => `${topping.charAt(0).toUpperCase() + topping.slice(1)}`)
        .join(', ');

    return toppingsList || 'None';  // Display 'None' if no toppings are selected
}

function submitOrder() {
    //closeThirdModal();
    document.getElementById("orderSummary").style.display = "none";
    //alert("Order Placed !!!", selectedProtein.value);
    document.getElementById("orderSuccess").style.display = "block";
    console.log("Selected Toppings:", selectedToppings);
    console.log("Selected Protein:", selectedProtein.value);
    console.log("Selected Rice:", selectedRice.value);
}

let quantity = 1; 
function incrementQuantity() {
    quantity++;
    updateQuantity();
}
function decrementQuantity() {
    if (quantity > 1) {
        quantity--;
        updateQuantity();
    }
}
function updateQuantity() {
    document.getElementById("quantity").value = quantity;
    if (quantity > 6){
        document.getElementById("max").disabled = true;
    }
}