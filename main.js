let selector = document.getElementById("select1")
let lay = document.getElementById("layout")
let lay2 = document.getElementById('layout2')
    lay3 = document.getElementById('layout3')
    lay4 = document.getElementById('layout4')
    list = document.getElementById('list')
selector.addEventListener("change",function(){
    let a = selector.value
    if (a == "spider") {
       lay.style.display='block'
       lay2.style.display='none'
       lay3.style.display='none'
       lay4.style.display='none'
       list.style.display='none'
    } else if (a == "iron") {
        lay2.style.display='block'
        lay.style.display='none'
        lay3.style.display='none'
        lay4.style.display='none'
        list.style.display='none'
    } else if (a == "cap") {
        lay3.style.display='block'
        lay.style.display='none'
        lay2.style.display='none'
        lay4.style.display='none'
        list.style.display='none'
    } else if (a == "pantera") {
        lay4.style.display='block'
        lay.style.display='none'
        lay2.style.display='none'
        lay3.style.display='none'
        list.style.display='none'
    } else if (a == 'sel') {
        list.style.display='flex'
        lay.style.display='none'
        lay2.style.display='none'
        lay3.style.display='none'
        lay4.style.display='none'
    }
})




let block_img5 = document.getElementById('block_img5')
let created_button = document.getElementById('button1')
    created_button.addEventListener('click',function(){
        block_img5.style.display='block'
        block2.style.display='none'
        block3.style.display='none'
        block4.style.display='none'
        block5.style.display='none'
        block6.style.display='none'
    })

let block2 = document.getElementById('block_img6')
let create2 = document.getElementById('button2')
    create2.addEventListener('click',function(){
        block2.style.display='block'
        block_img5.style.display='none'
        block3.style.display='none'
        block4.style.display='none'
        block5.style.display='none'
        block6.style.display='none'
    })

let block3 = document.getElementById('block_img7')
    create3 = document.getElementById('button3')
    create3.addEventListener('click',function(){
        block3.style.display='block'
        block_img5.style.display='none'
        block2.style.display='none'
        block4.style.display='none'
        block5.style.display='none'
        block6.style.display='none'
    })

let block4 = document.getElementById('block_img8')
    create5 = document.getElementById('button4')
    create5.addEventListener('click',function(){
        block4.style.display='block'
        block_img5.style.display='none'
        block2.style.display='none'
        block3.style.display='none'
        block5.style.display='none'
        block6.style.display='none'
    })

let block5 = document.getElementById('block_img9')
    create6 = document.getElementById('button5')
    create6.addEventListener('click',function(){
        block5.style.display='block'
        block_img5.style.display='none'
        block2.style.display='none'
        block3.style.display='none'
        block4.style.display='none'
        block6.style.display='none'
    })

let block6 = document.getElementById('block_img10')
    create7 = document.getElementById('button6')
    create7.addEventListener('click',function(){
        block6.style.display='block'
        block_img5.style.display='none'
        block2.style.display='none'
        block3.style.display='none'
        block4.style.display='none'
        block5.style.display='none'
    })

let create8 = document.getElementById('button7')
    create8.addEventListener('click',function(){
        block6.style.display='none'
        block_img5.style.display='none'
        block2.style.display='none'
        block3.style.display='none'
        block4.style.display='none'
        block5.style.display='none'
    })

let block7 = document.getElementById('gift1')
    img2 = document.getElementById('img2')
    img1 = document.getElementById('img1')
    line = document.getElementById('line')
    create9 = document.getElementById('button10')
    create9.addEventListener('click', function(){
        block7.style.display='block'
        img1.style.top='50px'
        img2.style.top='200px'
    })
    create10 = document.getElementById('button11')
    create10.addEventListener('click',function(){
        block7.style.display='none'
        img1.style.top='0px'
    })

let block8 = document.getElementById('gift2')
    block12 = document.getElementById('img12')
    create11 = document.getElementById('button12')
    create11.addEventListener('click',function(){
        block8.style.left='10px'
        block12.style.top='300px'
    })
    create12 = document.getElementById('button13')
    create12.addEventListener('click',function(){
        block8.style.left='-500px'
        block12.style.top='150px'
    })

let block9 = document.getElementById('gift3')
    create12 = document.getElementById('button14')
    img10 = document.getElementById('img15')
    create12.addEventListener('click',function(){
        block9.style.left='10px'
        img15.style.left='300px'
        img15.style.bottom='-10px'
    })
    create13 = document.getElementById('button15')
    create13.addEventListener('click',function(){
        block9.style.left='-520px'
        img15.style.left='165px'
        img15.style.bottom='100px'
    })

let block11 = document.getElementById('gif4')
    create16 = document.getElementById('bbutton16')
    img20 = document.getElementById('img20')
    create16.addEventListener('click',function(){
        block11.style.left='10px'
        img20.style.display='block'
    })
    create17 = document.getElementById('bbutton17')
    create17.addEventListener('click', function(){
        block11.style.left='-1020px'
        img20.style.display='none'
    })