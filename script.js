const loginBtn = document.getElementById('btn')
loginBtn.addEventListener('click', function () {
    const loginArea = document.getElementById('login-area')
    loginArea.style.display = 'none'
    const transctionArea = document.getElementById('transction-area')
    transctionArea.style.display='block'

})


const dipositBtn = document.getElementById('diposit-btn')
 dipositBtn.addEventListener('click',function (){
     const dipositAmount = document.getElementById('diposit-amount').value
     const dipositNumber = parseFloat(dipositAmount)
     const currentDiposit = document.getElementById('curr').innerText
     const currentDipositNumber = parseFloat(currentDiposit)
     const totalDiposit = dipositNumber + currentDipositNumber
     
     document.getElementById('currentDiposit').innerText= totalDiposit

 })
