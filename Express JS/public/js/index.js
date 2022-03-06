document.getElementById('srcbtn').addEventListener('click',()=>{
    document.getElementById('search').style.display = "block";
    document.getElementsByTagName('button').classList.add('srcbtn_active');
    console.log(`the button was clicked`);
});

document.getElementById('x').addEventListener('click',()=>{
    document.getElementById('search').style.display = "none";
    document.getElementById('srcbtn').classList.remove('srcbtn_active');
    
    // console.log()
});
