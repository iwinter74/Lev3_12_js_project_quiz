let data=[
    { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/4a864049-816a-479e-8736-51740e8b724b.jpg",
      question:"Which ocean lies on the east coast of the United States?",
      choice:["Eastern","Pacific","Indian","Atlantic"],
      answer: "Atlantic",
    },
    { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/4d101ba1-9275-4fb5-ba2c-5606e6c0274e.jpg",
      question:"Which is the worlds highest mountain?",
      choice:["K2","Makalu","Mount_Everest","Kilimanjaro"],
      answer:"Mount_Everest",
    },
    { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/07121a24-b34b-4711-9bfa-5287163e65ce.jpg",
      question:"Which of these cities is not in Europe?",
      choice:["Prague","Moscow","Barcelona","Reykjavik"],
      answer:"Moscow"
    },
    { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/467a486b-be3a-4183-90ed-dd6867d5852d.jpg",
      question:"True or False: Iceland is covered in ice.",
      choice:["correct","wrong"],
      answer:"wrong"
    },
    { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/ecf8af7b-8541-4572-b63b-ee7d7f9fc4cc.jpg",
      question:"The United Kingdom is comprised of how many countries?",
      choice:["One","Two","Three","Four"],
      answer:"Four"
    },
    { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/ecf8af7b-8541-4572-b63b-ee7d7f9fc4cc.jpg",
      question:"Which of the following countries do not border France?",
      choice:["Germany","Netherlands","Spain","Italy"],
      answer:"Netherlands"
    },
      { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/6e99b817-7be7-4f8a-9146-3f602ac81fad.jpg",
      question:"Which U.S. state is the Grand Canyon located in?",
      choice:["Wyoming","Arizona","New_Mexico","Nevada"],
      answer:"Arizona"
    },
   { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/866f119d-e5e2-45ca-846c-b6d10a59d1e4.jpg",
      question:"Which is the smallest country, measured by total land area?",
      choice:["Maldives","Monaco","Vatican"],
      answer:"Vatican"
    },
   { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/13efaf72-d695-4f65-b043-2b805b6a88eb.jpg",
      question:"Which is the longest river in the world?",
      choice:["Amazon_River","Congo_River","Yellow_River","Nile_River"],
      answer:"Nile_River"
    },
   { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/1226f177-dc1a-4142-8875-bdaa177717d7.jpg",
      question:"Which is the largest body of water?",
      choice:["indian_Ocean","Pacific_Ocean","Atlantic_Ocean","Nile"],
      answer:"Pacific_Ocean"
    }
]

// data.forEach(element => {                                                                                 
//     document.getElementById("content").innerHTML +=
// `<img src="${element.url}" alt="">
// <p>${element.question}</p>`
//     element.choice.forEach(elt => {
//     document.getElementById("content").innerHTML +=
//       `<input type="button" value="${elt}" id="${elt}" onclick="compare(${elt})">`
      
// });

// });

// Korrektur Georg

data.forEach((element) => {
  document.getElementById(
    "content"
  ).innerHTML += `<img src="${element.url}" alt="">
<p>${element.question}</p>`;
  element.choice.forEach((elt) => {
    document.getElementById(
      "content"
    ).innerHTML += `<input type="button" class='${element.question}' value="${elt}" id="${elt}" onclick="compare(${elt})">`;
  });
});



// function compare(x) {

//     data.forEach(element => {
//         let b = element.answer
//         console.log("answer " + b)
//         element.choice.forEach(a => {
//             console.log("choice " + a)
//             if (a == b) {
//                 console.log("true")
//               x.classList.add("true")
//               setTimeout(function () {x.classList.remove('true') }, 1000);
//                 } else {
//                 console.log("false")
//               x.classList.add("false")
//               setTimeout(function () {x.classList.remove('false') }, 1000);
//                 }
//             });
        
        
//         })
      
// }

// Korrektur Georg

function compare(x) {
  console.log(`userChoice is`, x.id, x.className);
  let myChoice = x.id;
  let myQuestion = x.className;
  for (let i = 0; i < data.length; i++) {
    if (myQuestion == data[i].question) {
      console.log("WORKING");
      let b = data[i].answer;
      if (myChoice == b) {
        console.log("true");
        x.classList.add("true");
        setTimeout(function () {x.classList.remove('true') }, 1000);
      } else if (myChoice != b) {
        console.log("false");
        x.classList.add("false");
        setTimeout(function () {x.classList.remove('false') }, 1000);
      }
    }
  }
}

// Korrektur Anass

// const content = document.getElementById("content")
// content.innerHTML = `<h1>Quiz</h1>`

// data.forEach(elt => {

//     let figure = document.createElement('figure')
//     content.appendChild(figure)
//     let img = document.createElement('img')
//     img.src = elt.url
//     figure.appendChild(img)
//     let figcaption = document.createElement('figcaption')
//     figure.appendChild(figcaption)
//     let h3 = document.createElement('h3')
//     h3.textContent = elt.question
//     figcaption.appendChild(h3)
//     for (let i = 0; i < elt.choice.length; i++) {
//         let button = document.createElement("button")
//         button.textContent = elt.choice[i]
//         button.className = elt.answer.toString()
//         figcaption.appendChild(button)
//     }
//     let btn = document.getElementsByClassName(elt.answer.toString())
//     for (let i = 0; i < btn.length; i++) {
//         btn[i].addEventListener("click", (e) => {
//             console.log(e.target.innerText)
//             if (e.target.innerText == elt.answer) {
//                 e.target.style.background = "green"
//             } else {
//                 e.target.style.background = "red"
//             }
//             Array.from(btn).forEach(btn => {
//                 btn.disabled = true
//             })
//         })

//     }
// })


