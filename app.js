firstImage = document.querySelector("ul li")
secondImage = document.querySelectorAll("ul li")[1]
thirdImage = document.querySelectorAll("ul li")[2]
p = document.getElementById("description")
firstImage.addEventListener("animationstart", firstImageInfo)
firstImage.addEventListener("animationiteration", firstImageInfo)
secondImage.addEventListener("animationstart", secondImageInfo)
secondImage.addEventListener("animationiteration", secondImageInfo)
thirdImage.addEventListener("animationstart", thirdImageInfo)
thirdImage.addEventListener("animationiteration", thirdImageInfo)


function firstImageInfo(){
    p.textContent = "First Image"
}
function secondImageInfo(){
    p.textContent = "Second Image"
}
function thirdImageInfo(){
    p.textContent = "Third Image"
}