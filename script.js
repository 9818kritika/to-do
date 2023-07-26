let inp = document.getElementById('inp')
let txt=document.querySelector('.text')

function Add()
{
    if(inp.value=="")
    {
        alert('Please enter')
    }

    else{
        let newEle = document.createElement("ul")
        newEle.innerHTML = `${inp.value} <iconify-icon icon="mdi:trash"></iconify-icon>`;

        txt.appendChild(newEle);
        inp.value="";
        newEle.querySelector("iconify-icon").addEventListener("click", remove)
        function remove(){
            newEle.remove()
        }
    }
}