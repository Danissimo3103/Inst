let likeNumber = document.getElementById("howmany") 
let post = document.getElementById("firstPost");  
let postsBox = document.getElementById("postsBox")  
let text = document.getElementById("text"); 
let comment = document.getElementById("comment")  
let comments = document.getElementById("comments")  
 
let c=35; 
 
let imgurls = [  
    "2разряд.png", 
    "1разряд.jpg", 
    "Олимпиада.jpg", 
]  
 
 
let textIT = [  
    "Долгожданный второй разряд! Спасибо клубу Чемпион за отличный турнир! Вперед к первому!", 
    "Вот и сбылась мечта! 1 разряд! Дальше - больше. Дорога к КМС открыта!", 
    "Очередная медаль на Олимпиаде, на этот раз почетная бронза!", 
]  
 
for(let i = 1; i < 100; i++){  
    newtext = textIT[i%3] 
    text.innerHTML = newtext 
    console.log(textIT[i%3]) 
 
    newpost = post.cloneNode(true);  
    imgpost = newpost.getElementsByClassName("img")[0]  
    text.innerHTML = textIT[i%3] 
    imgpost.setAttribute("src", imgurls[i%3])  
 
 
    postsBox.appendChild(newpost);  
 
} 
 
function like(){ 
    c++ 
    likeNumber.innerHTML = c 
} 
 
function addcomment(){ 
    let input = comment.value  
    let addme = document.createElement("p") 
    addme.innerHTML = "Daniil:" + input 
    comments.appendChild(addme) 
}