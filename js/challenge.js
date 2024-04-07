let counter = 0; let timer = setInterval(() => { counter++; document.getElementById("counter").innerText = counter; }, 1000);
document.getElementById("plus").addEventListener("click", () => { 
  counter++;document.getElementById("counter").innerText = counter; 
});
document.getElementById("minus").addEventListener("click", () => { 
  counter--; document.getElementById("counter").innerText = counter; 
});

let likes = {}; 
document.getElementById("like")
.addEventListener("click", () => { if (likes[counter]) {
likes[counter]++; } else { likes[counter] = 1;} 
document.getElementById("likes").innerText = likes[counter]; });

document.getElementById("pause").addEventListener("click", () => { 
clearInterval(timer); 
document.getElementById("plus").disabled = true;
document.getElementById("minus").disabled = true; 
document.getElementById("like").disabled = true; 
document.getElementById("pause").innerText = "Resume"; });

document.getElementById("resume").addEventListener("click", () => { 
timer = setInterval(() => { counter++; 
document.getElementById("counter").innerText = counter; }, 1000); 
document.getElementById("plus").disabled = false;
document.getElementById("minus").disabled = false; 
document.getElementById("like").disabled = false; 
document.getElementById("pause").innerText = "Pause"; }); 

document.querySelector("form").addEventListener("submit", (e) => {
e.preventDefault(); let comment = document.getElementById("comment").value; 
document.getElementById("comments").innerHTML += `<p>${comment}</p>`; 
document.getElementById("comment").value = ""; });