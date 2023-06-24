let hed = document.querySelector("header")
hed.innerHTML = `
<div class="img"><img src="./img/photo_2023-05-24_11-58-32.jpg" alt=""></div>
    <div class="wrapper">
        <div class="con">
            <h1>Kirish</h1>
            <div class="form">
                <label for="username" id="log1"><i class="fa-solid fa-user"></i></label>
                <input type="name" placeholder="Login" id="username">
                <label for="password" id="parol1"><i class="fa-solid fa-lock"></i></label>
                <input type="password" id="password" placeholder="Parol">
                <button class="btn">Kirish</button>
            </div>
        </div>
    </div>`

let form = document.querySelector(".btn")
let input = document.querySelector("input")
let pass = document.querySelector("#password")
let user = document.querySelector("#username")

form.addEventListener("click", (e) => {
    e.preventDefault()
    let password = document.getElementById("password").value;
    let username = document.getElementById("username").value;
    if (password === "login06" && username === "login") {
      setTimeout(() => {
        window.location.href = "./login1.html"
      }, 1200);

        let tasdiq = document.querySelector(".tasdiq")
        tasdiq.style. opacity = "1"
    } else {

        input.style.borderColor = "red"
        pass.style.borderColor = "red"
        
      
    }
    const userr = {
        user:user.value,
        pass:pass.value
       
    
    }
    localStorage.setItem("user" , JSON.stringify(userr))
    refers()

})

const refers = () => {
    input.value = ""
}

form.addEventListener("click", (e) => {
    e.preventDefault()
    reset()
})

const reset = () => {
    pass.value = ""
}

user.addEventListener("click" , () =>{
    input.style.borderColor = ""

})

pass.addEventListener("click" , () =>{
    pass.style.borderColor = ""

})







