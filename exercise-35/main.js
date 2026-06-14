   const images =document.querySelector('#image1')


function chaneImage() {
 const url = prompt("enter the url code")
    images.setAttribute('src',url)
 const color = prompt("enter the boder color")

 images.style.border =`4px solid ${color}`;
  const width = prompt("enter your width ")
 images.style.width =width + "px";
  const heigth = prompt("enter your height ")
 images.style.height  = heigth + "px";
 const radius = prompt("enter your boder radius ")
 images.style.borderRadius  = radius + "px";
 
}
