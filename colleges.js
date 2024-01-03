/*\
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.display = "block";
  }
});

function filter() {
  const cards = document.querySelectorAll(".card");

  const DubaiCheckbox = document.getElementById("Dubai");
  const SharjahCheckbox = document.getElementById("Sharjah");
  const AbuDhabiCheckbox = document.getElementById("Abu Dhabi");
  const RasAlKhaimaCheckbox = document.getElementById("Ras Al Khaima");
  const AjmanCheckbox = document.getElementById("Ajman");
  const PrivateCheckbox = document.getElementById("Private");
  const PublicCheckbox = document.getElementById("Public");

  for (let i = 0; i < cards.length; i++) {
    {
      console.log(colleges[i].location);

      const Location = colleges[i].location;
      const publicPrivate = colleges[i].publicPrivate;

      if (DubaiCheckbox.checked && Location.includes("Dubai")) {
        cards[i].style.display = "block";
      } else if (SharjahCheckbox.checked && Location.includes("Sharjah")) {
        cards[i].style.display = "block";
      } else if (AbuDhabiCheckbox.checked && Location.includes("Abu Dhabi")) {
        cards[i].style.display = "block";
      } else if (
        RasAlKhaimaCheckbox.checked &&
        Location.includes("Ras al khaimah")
      ) {
        cards[i].style.display = "block";
      } else if (AjmanCheckbox.checked && Location.includes("Ajman")) {
        cards[i].style.display = "block";
      } else if (PublicCheckbox.checked && publicPrivate.includes("Public")) {
        cards[i].style.display = "block";
      } else if (PrivateCheckbox.checked && publicPrivate.includes("Private")) {
        cards[i].style.display = "block";
      } else {
        cards[i].style.display = "none";
      }
    }
  }
}*/
// data for colleges
/*const colleges = [
  {
    name: "American University in Emirates",
    location: "Dubai",
    publicPrivate: "private",
    website: "https://aue.ae/",
    logo: "images/AUElogo.png",
    img: "images/AUEcampus.jpg",
  },

  {
    name: "American University in Sharjah",
    location: "Sharjah",
    publicPrivate: "private",
    website: "https://www.aus.edu/",
    logo: "images/AUSlogo.png",
    img: "images/AUScampus.jfif",
  },
  {
    name: "RIT",
    location: "Dubai",
    publicPrivate: "private",
    website: "https://www.rit.edu/dubai/",
    logo: "images/RITlogo.png",
    img: "images/RITcampus.jpg",
  },
  {
    name: "ALDAR",
    location: "Dubai",
    publicPrivate: "public",
    website: "https://www.aldar.com/en",
    logo: "images/aldar-logo.png",
    img: "images/aldarcampus.png",
  },
  {
    name: "jumaira",
    location: "Dubai",
    publicPrivate: "private",
    website: "https://www.gemsjc.com/",
    logo: "images/jumaira-logo.png",
    img: "images/Jumairacampus.png",
  },
  {
    name: "American University in Dubai",
    location: "Dubai",
    publicPrivate: "private",
    website: "https://www.aud.edu/",
    logo: "images/AUDlogo.png",
    img: "images/AUDcampus.jfif",
  },
  {
    name: "UAEU",
    location: "Abu Dhabi",
    publicPrivate: "public",
    website: "https://www.uaeu.ac.ae/en/",
    logo: "images/UAEUlogo.png",
    img: "images/UAEUcampus.jpg",
  },
  {
    name: "Khalifa University",
    location: "Abu Dhabi",
    publicPrivate: "public",
    website: "https://www.ku.ac.ae/",
    logo: "images/Khalifa-logo.jfif",
    img: "images/khalifacampus.jpg",
  },
  {
    name: "University of Sharjah",
    location: "Sharjah",
    publicPrivate: "private",
    website: "https://www.sharjah.ac.ae/en/Pages/default.aspx",
    logo: "images/sharjah-uni-logo.png",
    img: "images/sharjahcampus.jpg",
  },
  {
    name: "BUiD",
    location: "Dubai",
    publicPrivate: "private",
    website: "https://www.buid.ac.ae/",
    logo: "images/BUiDlogo.png",
    img: "images/BUiDcampus.jpg",
  },

  {
    name: "Zayed University",
    location: "Dubai",
    publicPrivate: "public",
    website: "https://www.zu.ac.ae/main/en/index",
    logo: "images/zayedunilogo.jfif",
    img: "images/zayedcampus.jpg",
  },
  {
    name: "Gulf Medical University",
    location: "Ajman",
    publicPrivate: "private",
    website: "https://gmu.ac.ae/",
    logo: "images/gulf-med-uni-logo.jfif",
    img: "images/gmucampus.jpg",
  },
  {
    name: "Higher Colleges of Technology",
    location: "Abu Dhabi",
    publicPrivate: "public",
    website: "https://hct.ac.ae/en/",
    logo: "images/Higher_Colleges_of_Technology_logo.png",
    img: "images/HCTcampus.jpg",
  },
  {
    name: "Abu Dhabi University",
    location: "Abu Dhabi",
    publicPrivate: "private",
    website: "https://www.adu.ac.ae/en/home",
    logo: "images/Abu_Dhabi_Universityl-ogo.png",
    img: "images/AbuDhabicampus.jpg",
  },
  {
    name: "AU Ras Al Khaimah",
    location: "Ras Al Khaima",
    publicPrivate: "public",
    website:
      "https://join.aurak.ac.ae/?utm_source=adwords&utm_medium=cpc&utm_campaign=UAE&utm_content=%7C2%7C512140942933%7C_2%7C%7C3%7C%7C_3%7C&utm_term=%7C4%7Ckwd-301310586949%7C_4%7Caurak512140942933%7C_2%7C%7C3%7C%7C_3%7C&utm&gclid=Cj0KCQiA1sucBhDgARIsAFoytUv-_NCOVFXmc8GzXgKvPGJ4jVZZCHh0NiKH1h9-jOO9wGbUsouINUUaAtspEALw_wcB",
    logo: "images/AURAKlogo.png",
    img: "images/AURAKcampus.png",
  },
  {
    name: "higher colleges of technology",
    location: "Sharjah",
  },
];
*/

const colleges = [
  {
    name: "American University In The Emirates",
    location: "Dubai",
  },
  {
    name: "American University of Sharjah",
    location: "Sharjah",
  },
  {
    name: "Rochester Institute of Technology of Dubai",
    location: "Dubai",
  },
  {
    name: "ALDAR",
    location: "Dubai",
  },
  {
    name: "jumaira",
    location: "Dubai",
  },
  {
    name: "American University in Dubai",
    location: "Dubai",
  },
  {
    name: "United Arab Emirates University",
    location: "Abu Dhabi",
  },
  {
    name: "Khalifa University",
    location: "Abu Dhabi",
  },
  {
    name: "University of sharjah",
    location: "Sharjah",
  },
  {
    name: "British University in Dubai",
    location: "Dubai",
  },
  {
    name: "zayed university",
    location: "Dubai",
  },
  {
    name: "Gulf Medical University",
    location: "Ajman",
  },
  {
    name: "Higher Colleges of Technology",
    location: "Abu Dhabi",
  },
  {
    name: "Abu Dhabi University",
    location: "Abu Dhabi",
  },
  {
    name: "American University of Ras al Khaimah",
    location: "Ras al Khaimah",
  },
  {
    name: "Abu Dhabi Polytechnic",
    location: "Abu Dhabi",
  },
  {
    name: "Abu Dhabi School of Management",
    location: "Abu Dhabi",
  },
  {
    name: "Ajman University",
    location: "Ajman",
  },
  {
    name: "Al Ain University",
    location: "Al Ain",
  },
  {
    name: "Al Dar University College (On Probation)",
    location: "Dubai",
  },
  {
    name: "Al Falah University",
    location: "Dubai",
  },
  {
    name: "Al Qasimia University",
    location: "Sharjah",
  },
  {
    name: "Al Wasl University",
    location: "Dubai",
  },
  {
    name: "Amity University Dubai",
    location: "Dubai",
  },
  {
    name: "Canadian University of Dubai",
    location: "Dubai",
  },
  {
    name: "City University College of Ajman",
    location: "Ajman",
  },
  {
    name: "Dubai Institute of Design and Innovation",
    location: "Dubai",
  },
  {
    name: "Dubai Medical College",
    location: "Dubai",
  },
  {
    name: "Dubai Pharmacy College",
    location: "Dubai",
  },
  {
    name: "Emirates Aviation University",
    location: "Dubai",
  },
  {
    name: "Emirates College for Advanced Education",
    location: "Abu Dhabi",
  },
  {
    name: "Emirates Institute for Banking and Financial Studies",
    location: "Dubai",
  },
  {
    name: "European University College",
    location: "Dubai",
  },
  {
    name: "Fatima College of Health Sciences",
    location: "Abu Dhabi",
  },
  {
    name: "Higher Colleges of Technology",
    location: "Al Ain",
  },
  {
    name: "Imam Malik College for Islamic Sharia and Law",
    location: "Dubai",
  },
  {
    name: "Institute of Management Technology Dubai",
    location: "Dubai",
  },
  {
    name: "Islamic Azad University U.A.E. Branch",
    location: "Dubai",
  },
  {
    name: "Jumeira University",
    location: "Dubai",
  },
  {
    name: "Khawarizmi International College",
    location: "Abu Dhabi",
  },
  {
    name: "Liwa College of Technology",
    location: "Abu Dhabi",
  },
  {
    name: "Manipal University, Dubai",
    location: "Dubai",
  },
  {
    name: "Middlesex University Dubai",
    location: "Dubai",
  },
  {
    name: "Mohamed Bin Zayed University for Humanities",
    location: "Abu Dhabi",
  },
  {
    name: "Mohamed bin Zayed University of Artificial Intelligence",
    location: "Abu Dhabi",
  },
  {
    name: "Mohammed Bin Rashid School of Government",
    location: "Dubai",
  },
  {
    name: "Mohammed Bin Rashid University of Medicine and Health Sciences",
    location: "Dubai",
  },
  {
    name: "Murdoch University Dubai",
    location: "Dubai",
  },
  {
    name: "New York Institute of Technology Abu Dhabi",
    location: "Abu Dhabi",
  },
  {
    name: "New York University Abu Dhabi",
    location: "Abu Dhabi",
  },
  {
    name: "Ras al-Khaimah Medical and Health Sciences University",
    location: "Ras al-Khaimah",
  },
  {
    name: "Rochester Institute of Technology, Dubai",
    location: "Dubai",
  },
  {
    name: "Shaheed Zulfikar Ali Bhutto Institute of Science and Technology Dubai",
    location: "Dubai",
  },
  {
    name: "Skyline University College",
    location: "Sharjah",
  },
  {
    name: "The British University in Dubai",
    location: "Dubai",
  },
  {
    name: "The Emirates Academy of Hospitality Management",
    location: "Dubai",
  },
  {
    name: "Umm Al Quwain University",
    location: "Umm Al Quwain",
  },
  {
    name: "United Arab Emirates University",
    location: "Al-Ain",
  },
  {
    name: "Université Paris-Sorbonne Abou Dhabi",
    location: "Abu Dhabi",
  },
  {
    name: "Université Saint-Joseph de Dubai",
    location: "Dubai",
  },
  {
    name: "University College of Mother and Family Sciences",
    location: "Ajman",
  },
  {
    name: "University of Birmingham Dubai",
    location: "Dubai",
  },
  {
    name: "University of Dubai",
    location: "Dubai",
  },
  {
    name: "University of Fujairah",
    location: "Fujairah",
  },
  {
    name: "University of Science and Technology of Fujairah",
    location: "Fujairah",
  },
  {
    name: "University of Sharjah",
    location: "Sharjah",
  },
  {
    name: "University of Wollongong in Dubai",
    location: "Dubai",
  },
  {
    name: "Zayed University",
    location: "Dubai",
  },
];

//********************************************************************************************************************************************************************

const container = document.getElementById("accordion");

colleges.forEach((result, idx) => {
  // Create card element
  const card = document.createElement("div");
  card.classList = "card-body";

  // Construct card content

  const content = `<div class="card">
    <div class="item" data-id="1">
    <div class="card-body">
  
      <img src="${result.img}" class="card-img-top"/>
      <img src="${result.logo}" class="logo"/>
      <span class="circle"></span>
      
      <img
      src="images/like.png"
      class="heart"
      role="button"
      />    
      <h5 class="card-title">${result.name}</h5>
      <p id="location">${result.location} - ${result.publicPrivate}</p>
      
      
      <a href="${result.website}" target="_blank" class="btn btn-lg btn btn-outline-primary button-primary-over">Visit Website</a>
    </div>
  </div>
  </div>
  
    `;

  // Append newyly created card element to the container
  container.innerHTML += content;
});
//***********************************************************************************************************************************************************

const hearts = document.getElementsByClassName("heart");
Array.from(hearts).forEach(function (heart) {
  heart.addEventListener("click", function () {
    const src = heart.getAttribute("src");
    if (src === "images/like.png") {
      heart.setAttribute("src", "images/like (1).png");
      localStorage.setItem(heart.id, "liked"); // store the liked state in local storage
    } else if (src === "images/like (1).png") {
      heart.setAttribute("src", "images/like.png");
      localStorage.removeItem(heart.id);
    }
  });
});

//******************************************************************************************************************

function search() {
  var input, filter, items, txtValue;
  input = document.getElementById("searchbox");
  filter = input.value.toUpperCase();
  items = document.querySelectorAll(".card");
  for (var i = 0; i < items.length; i++) {
    txtValue =
      items[i].querySelector(".card-title").textContent ||
      items[i].querySelector(".card-title").innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      items[i].style.display = "";
    } else {
      items[i].style.display = "none";
    }
  }
}

/**********************************************************************************************************************************
  //this one would theoretically work/*
  document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    for (let i = 0; i < cards.length; i++) {
      cards[i].style.display = "block";
    }
  });
  
  function filter() {
    const cards = document.querySelectorAll(".card");
  
    const DubaiCheckbox = document.getElementById("Dubai");
    const SharjahCheckbox = document.getElementById("Sharjah");
    const AbuDhabiCheckbox = document.getElementById("Abu Dhabi");
    const RasAlKhaimaCheckbox = document.getElementById("Ras Al Khaima");
    const AjmanCheckbox = document.getElementById("Ajman");
    const PrivateCheckbox = document.getElementById("Private");
    const PublicCheckbox = document.getElementById("Public");
  
    for (let i = 0; i < cards.length; i++) {
      const Location = colleges[i].location;
      const publicPrivate = colleges[i].publicPrivate;
  
      if (
        DubaiCheckbox.checked &&
        Location.includes("Dubai") &&
        PublicCheckbox.checked &&
        publicPrivate.includes("Public")
      ) {
        cards[i].style.display = "block";
      } else if (
        DubaiCheckbox.checked &&
        Location.includes("Dubai") &&
        PublicCheckbox.checked &&
        !publicPrivate.includes("Public")
      ) {
        cards[i].style.display = "none";
      } else if (
        DubaiCheckbox.checked &&
        Location.includes("Dubai") &&
        PrivateCheckbox.checked &&
        publicPrivate.includes("Private")
      ) {
        cards[i].style.display = "block";
      } else if (
        DubaiCheckbox.checked &&
        Location.includes("Dubai") &&
        PrivateCheckbox.checked &&
        !publicPrivate.includes("Private")
      ) {
        cards[i].style.display = "none";
      } else if (
        SharjahCheckbox.checked &&
        Location.includes("Sharjah") &&
        PublicCheckbox.checked &&
        publicPrivate.includes("Public")
      ) {
        cards[i].style.display = "block";
      } else if (
        SharjahCheckbox.checked &&
        Location.includes("Sharjah") &&
        PublicCheckbox.checked &&
        !publicPrivate.includes("Public")
      ) {
        cards[i].style.display = "none";
      } else if (
        SharjahCheckbox.checked &&
        Location.includes("Sharjah") &&
        PrivateCheckbox.checked &&
        publicPrivate.includes("Private")
      ) {
        cards[i].style.display = "block";
      } else if (
        SharjahCheckbox.checked &&
        Location.includes("Sharjah") &&
        PrivateCheckbox.checked &&
        !publicPrivate.includes("Private")
      ) {
        cards[i].style.display = "none";
      } else if (
        AbuDhabiCheckbox.checked &&
        Location.includes("Abu Dhabi") &&
        PublicCheckbox.checked &&
        publicPrivate.includes("Public")
      ) {
        cards[i].style.display = "block";
      } else if (
        AbuDhabiCheckbox.checked &&
        Location.includes("Abu Dhabi") &&
        PublicCheckbox.checked &&
        !publicPrivate.includes("Public")
      ) {
        cards[i].style.display = "none";
      } else if (
        AbuDhabiCheckbox.checked &&
        Location.includes("Abu Dhabi") &&
        PrivateCheckbox.checked &&
        publicPrivate.includes("Private")
      ) {
        cards[i].style.display = "block";
      } else if (
        AbuDhabiCheckbox.checked &&
        Location.includes("Abu Dhabi") &&
        PrivateCheckbox.checked &&
        !publicPrivate.includes("Private")
      ) {
        cards[i].style.display = "none";
      } else if (
        RasAlKhaimaCheckbox.checked &&
        Location.includes("Ras al khaimah") &&
        PublicCheckbox.checked &&
        publicPrivate.includes("Public")
      ) {
        cards[i].style.display = "block";
      } else if (
        RasAlKhaimaCheckbox.checked &&
        Location.includes("Ras al khaimah") &&
        PublicCheckbox.checked &&
        !publicPrivate.includes("Public")
      ) {
        cards[i].style.display = "none";
      } else if (
        RasAlKhaimaCheckbox.checked &&
        Location.includes("Ras al khaimah") &&
        PrivateCheckbox.checked &&
        publicPrivate.includes("Private")
      ) {
        cards[i].style.display = "block";
      } else if (
        RasAlKhaimaCheckbox.checked &&
        Location.includes("Ras al khaimah") &&
        PrivateCheckbox.checked &&
        !publicPrivate.includes("Private")
      ) {
        cards[i].style.display = "none";
      } else if (
        AjmanCheckbox.checked &&
        Location.includes("Ajman") &&
        PublicCheckbox.checked &&
        publicPrivate.includes("Public")
      ) {
        cards[i].style.display = "block";
      } else if (
        AjmanCheckbox.checked &&
        Location.includes("Ajman") &&
        PublicCheckbox.checked &&
        !publicPrivate.includes("Public")
      ) {
        cards[i].style.display = "none";
      } else if (
        AjmanCheckbox.checked &&
        Location.includes("Ajman") &&
        PrivateCheckbox.checked &&
        publicPrivate.includes("Private")
      ) {
        cards[i].style.display = "block";
      } else if (
        AjmanCheckbox.checked &&
        Location.includes("Ajman") &&
        PrivateCheckbox.AjmanCheckbox.checked &&
        !publicPrivate.includes("Private")
      ) {
        cards[i].style.display = "none";
      } else {
        cards[i].style.display = "none";
      }
    }
  }
  */

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.display = "block";
  }
});

function filter() {
  const cards = document.querySelectorAll(".card");

  const DubaiCheckbox = document.getElementById("Dubai");
  const SharjahCheckbox = document.getElementById("Sharjah");
  const AbuDhabiCheckbox = document.getElementById("Abu Dhabi");
  const RasAlKhaimaCheckbox = document.getElementById("RasAlKhaima");
  const AjmanCheckbox = document.getElementById("Ajman");
  const PrivateCheckbox = document.getElementById("Private");
  const PublicCheckbox = document.getElementById("Public");

  // we need thos as a string for each filter
  // Location
  let FDubaiCheckbox;
  let FSharjahCheckbox;
  let FAbuDhabiCheckbox;
  let FRasAlKhaimaCheckbox;
  let FAjmanCheckbox;
  // Private / Public
  let FPrivateCheckbox;
  let FPublicCheckbox;

  // empty page
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.display = "none";
  }

  if (DubaiCheckbox.checked) {
    FDubaiCheckbox = String(DubaiCheckbox.name);
  }
  if (SharjahCheckbox.checked) {
    FSharjahCheckbox = String(SharjahCheckbox.name);
  }
  if (AbuDhabiCheckbox.checked) {
    FAbuDhabiCheckbox = String(AbuDhabiCheckbox.name);
  }
  if (RasAlKhaimaCheckbox.checked) {
    FRasAlKhaimaCheckbox = String(RasAlKhaimaCheckbox.name);
  }
  if (AjmanCheckbox.checked) {
    FAjmanCheckbox = String(AjmanCheckbox.name);
  }

  if (PrivateCheckbox.checked) {
    FPrivateCheckbox = String(PrivateCheckbox.name.toLowerCase());
  }
  if (PublicCheckbox.checked) {
    FPublicCheckbox = String(PublicCheckbox.name.toLowerCase());
  }

  const Locarr = [
    FDubaiCheckbox,
    FSharjahCheckbox,
    FAbuDhabiCheckbox,
    FRasAlKhaimaCheckbox,
    FAjmanCheckbox,
  ];
  const PrPubarr = [FPrivateCheckbox, FPublicCheckbox];

  for (let i = 0; i < cards.length; i++) {
    {
      const Location = colleges[i].location;
      const publicPrivate = colleges[i].publicPrivate;

      // if both filterss are checked
      if (
        (DubaiCheckbox.checked ||
          SharjahCheckbox.checked ||
          AbuDhabiCheckbox.checked ||
          RasAlKhaimaCheckbox.checked ||
          AjmanCheckbox.checked) &&
        (PublicCheckbox.checked || PrivateCheckbox.checked)
      ) {
        console.log("--------------Both Filter");
        if (
          Locarr.includes(Location) &&
          PrPubarr.includes(publicPrivate)
          // Location == SharjahCheckbox.name
          // Location in (DubaiCheckbox.name, SharjahCheckbox.name) ||
          // publicPrivate in (PrivateCheckbox, PublicCheckbox)
          //        Locarr.includes(Location) ||
          //      PrPubarr.includes(publicPrivate)
        ) {
          cards[i].style.display = "block";
        }
      }

      // Location filter is checked
      if (
        (DubaiCheckbox.checked ||
          SharjahCheckbox.checked ||
          AbuDhabiCheckbox.checked ||
          RasAlKhaimaCheckbox.checked ||
          AjmanCheckbox.checked) &&
        !(PublicCheckbox.checked || PrivateCheckbox.checked)
      ) {
        console.log("--------------Location filter");
        if (
          Locarr.includes(Location)
          // Location == SharjahCheckbox.name
          // Location in (DubaiCheckbox.name, SharjahCheckbox.name) ||
          // publicPrivate in (PrivateCheckbox, PublicCheckbox)
          //        Locarr.includes(Location) ||
          //      PrPubarr.includes(publicPrivate)
        ) {
          cards[i].style.display = "block";
        }
      }

      // PubPrivate filter is checked
      if (
        (PublicCheckbox.checked || PrivateCheckbox.checked) &&
        !(
          DubaiCheckbox.checked ||
          SharjahCheckbox.checked ||
          AbuDhabiCheckbox.checked ||
          RasAlKhaimaCheckbox.checked ||
          AjmanCheckbox.checked
        )
      ) {
        console.log("--------------PubPrivate filter");
        if (PrPubarr.includes(publicPrivate)) {
          cards[i].style.display = "block";
        }
      }
      if (
        !(
          ((DubaiCheckbox.checked ||
            SharjahCheckbox.checked ||
            AbuDhabiCheckbox.checked ||
            RasAlKhaimaCheckbox.checked ||
            AjmanCheckbox.checked) &&
            (PublicCheckbox.checked || PrivateCheckbox.checked)) ||
          ((PublicCheckbox.checked || PrivateCheckbox.checked) &&
            !(
              (DubaiCheckbox.checked ||
                SharjahCheckbox.checked ||
                AbuDhabiCheckbox.checked ||
                RasAlKhaimaCheckbox.checked ||
                AjmanCheckbox.checked) &&
              (PublicCheckbox.checked || PrivateCheckbox.checked)
            )) ||
          ((DubaiCheckbox.checked ||
            SharjahCheckbox.checked ||
            AbuDhabiCheckbox.checked ||
            RasAlKhaimaCheckbox.checked ||
            AjmanCheckbox.checked) &&
            !(
              (DubaiCheckbox.checked ||
                SharjahCheckbox.checked ||
                AbuDhabiCheckbox.checked ||
                RasAlKhaimaCheckbox.checked ||
                AjmanCheckbox.checked) &&
              (PublicCheckbox.checked || PrivateCheckbox.checked)
            ))
        )
      ) {
        cards[i].style.display = "block";
      }
    }
  }
}
