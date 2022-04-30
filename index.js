let mainbox = document.getElementById("mb")
let inelement = document.createElement("div")
let arr = [];
let vv = []
r1sf=true
r2sf=true
r3sf=true
r4sf=true
r5sf=true
c1sf=true
c2sf=true
c3sf=true
c4sf=true
c5sf=true
for (let i = 0; i < 5; i++){cd
  let tt = []
  for (let j = 0; j < 5; j++){
    tt.push(1)
  }
  vv.push(tt)
}

do {
  let num = Math.floor(Math.random() * 25 + 1);
  arr.push(num);
  arr = arr.filter((item, index) => {
    return arr.indexOf(item) === index
  });
} while (arr.length < 25);

console.log(arr)
function fun1(){
    let celement = document.createElement("div")
    celement.classList.add(`ac`)
}
for (let i = 0; i < 5; i++) {
    let element = document.createElement("div")
   element.classList.add(`r`)
   element.setAttribute("id",`r`+i)
    mainbox.appendChild(element)}
let k=0
let tc=0
for (let i = 0; i < 5; i++) {
    let id  = `r`+i
    let row = document.getElementById(id)
    for (let j = 0; j <5;j++){
    let rowelement = document.createElement("div")
       rowelement.classList.add(`rc`)
       rowelement.setAttribute("id",`r`+i+`c`+j)
       rowelement.innerHTML= arr[k]
       rowelement.addEventListener('click', function handleClick(event) {
        let rid = event.srcElement.id
        let ae = document.getElementById(rid)
        ae.setAttribute("style","background: linear-gradient(to top right, aqua calc(50% - 1px), black , aqua calc(50% + 1px) );")
        let rv = parseInt(rid.charAt(1))
        let cv = parseInt(rid.charAt(3))
        vv[rv][cv] = 0
        let ts="BINGO"
        r1s = eval(vv[0].join("+"))
        r2s = eval(vv[1].join("+"))
        r3s = eval(vv[2].join("+"))
        r4s = eval(vv[3].join("+"))
        r5s = eval(vv[4].join("+"))
        let c1=[vv[0][0],vv[1][0],vv[2][0],vv[3][0],vv[4][0]]
        let c2=[vv[0][1],vv[1][1],vv[2][1],vv[3][1],vv[4][1]]
        let c3=[vv[0][2],vv[1][2],vv[2][2],vv[3][2],vv[4][2]]
        let c4=[vv[0][3],vv[1][3],vv[2][3],vv[3][3],vv[4][3]]
        let c5=[vv[0][4],vv[1][4],vv[2][4],vv[3][4],vv[4][4]]
        let cc=[c1,c2,c3,c4,c5]
        c1s = eval(cc[0].join("+"))
        c2s = eval(cc[1].join("+"))
        c3s = eval(cc[2].join("+"))
        c4s = eval(cc[3].join("+"))
        c5s = eval(cc[4].join("+"))
        console.log(c1s)
        if(r1s==0 && r1sf){
          tc+=1
          r1sf=false
          let rese = document.getElementById("res")
          rese.innerHTML+= ts[tc-1]
        }
        if(r2s==0 && r2sf){
          tc+=1
          r2sf=false
          let rese = document.getElementById("res")
          rese.innerHTML+= ts[tc-1]
        }
        if(r3s==0 && r3sf){
          tc+=1
          r3sf=false
          let rese = document.getElementById("res")
          rese.innerHTML+= ts[tc-1]
        }
        if(r4s==0 && r4sf){
          tc+=1
          r4sf=false
          let rese = document.getElementById("res")
          rese.innerHTML+= ts[tc-1]
        }
        if(r5s==0 && r5sf){
          tc+=1
          r5sf=false
          let rese = document.getElementById("res")
          rese.innerHTML+= ts[tc-1]
        }
        if(c1s==0 && c1sf){
          tc+=1
          c1sf=false
          let rese = document.getElementById("res")
          rese.innerHTML+= ts[tc-1]
        }
        if(c2s==0 && c2sf){
          tc+=1
          c2sf=false
          let rese = document.getElementById("res")
          rese.innerHTML+= ts[tc-1]
        }
        if(c3s==0 && c3sf){
          tc+=1
          c3sf=false
          let rese = document.getElementById("res")
          rese.innerHTML+= ts[tc-1]
        }
        if(c4s==0 && c4sf){
          tc+=1
          c4sf=false
          let rese = document.getElementById("res")
          rese.innerHTML+= ts[tc-1]
        }
        if(c5s==0 && c5sf){
          tc+=1
          c5sf=false
          let rese = document.getElementById("res")
          rese.innerHTML+= ts[tc-1]
        }
        if(tc==5){
          let rese = document.getElementById("res")
          rese.innerHTML="Game Over"
        }
      }); 
        row.appendChild(rowelement)
        k+=1
    }
}
    