const form1 = document.querySelector("form")
const container = document.querySelector(".c1")

if(form1.lastChild.value<700000000 && form1.lastChild.value>9999999999)
{
    alert("renter valid value")
    form1.lastChild.value=0
}

const change = function(e){
    e.preventDefault()

    // selecting element required
    const nameInput = document.querySelector(".name-input")
    const numberInput = document.querySelector(".number-input")


    // creating Element
    const card = document.createElement("div")
    const cardHeader = document.createElement("div")
    const heading = document.createElement("h4")
    const cardBody = document.createElement("div")
    const cardFooter = document.createElement("div")
    const name = document.createElement("p")
    const number = document.createElement("p")
    const btncall = document.createElement("button")
    const btnwhats = document.createElement("button")

    // giving bootstrap classes to element for styling
    btncall.innerHTML ='<i class="fa-solid fa-phone"></i>'
    btnwhats.innerHTML ='<i class="fa-brands fa-whatsapp"></i>'
    btncall.className="btn btn-primary docall"
    btnwhats.className="btn btn-success dowhats"
    card.className = "card col-10 col-lg-6"
    cardHeader.className = "card-header text-center"
    cardBody.className = "card-body"
    cardFooter.className = "card-footer d-flex justify-content-between"
    heading.className="heading"
    name.className ="contact-name"
    number.className ="contact-number"

    // seting name and number by user in html
    name.innerHTML = "Name: <span>"+ nameInput.value +"</span>"
    number.innerHTML="Number: <span>" + numberInput.value +"</span>"
    heading.innerText="Contact Card"


//    appending elements
    container.appendChild(card)
    card.appendChild(cardHeader)
    card.appendChild(cardBody)
    card.appendChild(cardFooter)
    cardHeader.appendChild(heading)
    cardBody.appendChild(name)
    cardBody.appendChild(number)
    cardFooter.appendChild(btnwhats)
    cardFooter.appendChild(btncall)

    
}


// click call and whatsapp function
const perform = function(e){

    // selecting phone click
    if(e.target.className.includes("fa-phone"))
    {
        let x = e.target.parentElement.parentElement.parentElement.firstChild.nextSibling.lastChild.lastChild.innerText
        window.open('tel:' + x)
    }
// selecting whatsapp click
    if(e.target.className.includes("fa-whatsapp"))
    {
        let x = e.target.parentElement.parentElement.parentElement.firstChild.nextSibling.lastChild.lastChild.innerText
        window.open("https://wa.me/" + x)
    }

}

container.addEventListener("click",perform)
form1.addEventListener("submit",change)