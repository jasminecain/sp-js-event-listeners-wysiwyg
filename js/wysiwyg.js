let famousGuo = [
  {
    title: "Official and Adviser",
    name: "Guo Jia",
    bio: "Guo Jia aided Cao Cao greatly with his brilliance and foresight, and his strategies were instrumental to Cao's triumphs over rival warlords such as Lü Bu and Yuan Shao.",
    image: "https://i1.kknews.cc/large/ba400000bef2dd97aed",
    lifespan: {
      birth: 170,
      death: 201
    }
  },
  {
    title: "Emperor",
    name: "Guo Wei",
    bio: "Guo Wei was the founding emperor of imperial China's short-lived Later Zhou during the Five Dynasties and Ten Kingdoms period, reigning from 951 until his death.",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Guo_Wei_scth.jpg",
    lifespan: {
      birth: 904,
      death: 954
    }
  },
  {
    title: "Official and Chancellor",
    name: "Guo Zhengyi",
    bio: "Guo Zhengyi was an official of the Chinese dynasty Tang Dynasty, serving as a chancellor during the reign of Emperor Gaozong.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Spring_Outing_of_the_Tang_Court.jpg/300px-Spring_Outing_of_the_Tang_Court.jpg",
    lifespan: {
      birth: 656,
      death: 713
    }
  },
  {
    title: "General",
    name: "Guo Ziyi",
    bio: "Gui Ziya was regarded as one of the most powerful Tang generals before and after the Anshi Rebellion.",
    image: "https://www.epochtimes.com.br/wp-content/uploads/2013/05/094_Guo.Ziyi_by.jpg",
    lifespan: {
      birth: 697,
      death: 781
    }
  },
  {
    title: "Official and Adviser",
    name: "Guo Jia",
    bio: "Guo Jia aided Cao Cao greatly with his brilliance and foresight, and his strategies were instrumental to Cao's triumphs over rival warlords such as Lü Bu and Yuan Shao.",
    image: "https://i1.kknews.cc/large/ba400000bef2dd97aed",
    lifespan: {
      birth: 170,
      death: 201
    }
  }
  ];

var output = document.getElementById("outputBox");

for (counter = 0; counter < famousGuo.length; counter++) {
  // Give each person element a unique identifier
  //Creating card elemenet
  output.innerHTML += `<div class="person-container" id="person--${counter}">
    <h2>${famousGuo[counter].title}: ${famousGuo[counter].name}</h2>
    <section><p class="bio">${famousGuo[counter].bio}<p><img class="image" src="${famousGuo[counter].image}"</img></section>
    <footer>Life Span: ${famousGuo[counter].lifespan.birth} - ${famousGuo[counter].lifespan.death}</footer>
  </div>`
}

// Now cardGuo will have elements in it
var cards = document.getElementsByClassName('person-container');

// Event listeners are created
for (var i = 0; i < cards.length; i++) {
  cards[i].addEventListener('click', function(event) {
    toggleClassOff(cards);
    // Logic to execute when the element is clicked
    this.classList.toggle('elementToggle');
    // console.log('what is this?', this.classList.toggle);
      document.getElementById('inputText').focus();
        inputField.value = ""
      // ();
  });
};

//Edit each cards bio when input
function editBio(cards) {
  for (var i = 0; i < cards.length; i++) {
    inputField.addEventListener("keyup"), function(event) {
      debugger;
      output(cards[i]).innerHTML = event.target.value;
    }
  };
};

//Remove previous toggle when another card is clicked
function toggleClassOff(cards) {
  for (var i = 0; i < cards.length; i++) {
    if (cards[i].classList.contains('elementToggle')) {
      cards[i].classList.remove('elementToggle');
    }
  };
};


//Clear input box when enter is pressed
let inputField = document.getElementById("inputText");

inputField.addEventListener("keyup", clearField);
function clearField() {
  if (event.keyCode === 13) {
    inputField.value = "";
  };
};
