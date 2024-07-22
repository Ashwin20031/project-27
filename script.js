const quiz = [
    {
        question: "In Web design, what extension CSS uses:",
        option: ["css", "html", "js"],
        correct: "css"
    },
    {
        question: "In Web design, what extension HTML uses:",
        option: ["css", "html", "js"],
        correct: "html"
    },
    {
        question: "In Web design, what extension JAVASCRIPT uses:",
        option: ["css", "html", "js"],
        correct: "js"
    }
]

function setQuestion() {

    const questions = document.querySelector(".container");

    for (let i = 0; i < 3; i++) {


        const div = document.createElement('DIV');
        div.classList.add('option');

        const content = document.createElement('P')
        content.innerHTML = `${i+1})   ${quiz[i].question}`;
        content.classList.add('content')

        const q=document.createElement('DIV');

        const op=document.createElement('ul')
        
        for(let j = 0 ; j <quiz[i].option.length;j++ ){
            const li=document.createElement('LI');
            const f=document.createElement('P')
            const s=document.createElement('P')
            f.innerHTML=`${j+1}`
            f.classList.add("f")
            s.innerHTML=`${quiz[i].option[j]}`
            
            li.append(f)
            li.append(s)
            li.addEventListener("click",()=>{
                if (quiz[i].option[j]==quiz[i].correct){
                  li.style.backgroundColor="green"
                  li.style.color="white"
                  f.style.color="green"
                  f.style.backgroundColor="white"
                }
                else{
                    
                    li.style.backgroundColor="red"
                    li.style.color="white"
                    f.style.backgroundColor="white"
                    f.style.color="red"
                }
            })
            op.append(li)
        }
        
        
        // div.append(p)
        div.append(content)
        div.append(op);
        
        questions.append(div)


    }
}

setQuestion()











