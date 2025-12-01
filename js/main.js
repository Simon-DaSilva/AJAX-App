(() => {

  //variables
  const hotspots = document.querySelectorAll(".Hotspot");
  const materialTemplate = document.querySelector("#material-template");
  const materialList = document.querySelector("#material-list");


  //This information needs to be removed then pulled with an AJAX Call using the Fetch API
  //this is the api url https://swiftpixel.com/earbud/api/infoboxes"

  

  //This information needs to be removed then pulled with an AJAX Call using the Fetch API
  //this is the api url https://swiftpixel.com/earbud/api/materials"



  //functions
 

   
    //add loader to html
    function materialListData() {
      fetch ("https://swiftpixel.com/earbud/api/materials")
      .then(response => response.json())
      .then(materials => {
        console.log(materials);
      })
      .catch(error);

    }

    materialListData();
    //make AJAX call here

     function loadInfoBoxes() {
    fetch("https://swiftpixel.com/earbud/api/infoboxes")
    .then(response => response.json())
    .then(infoBoxes => {
      console.log(infoBoxes);
    })
    .catch(error);
    }

    

    function loadInfoBoxes() {
    infoBoxes.forEach((infoBox, index) => {
      let selected = document.querySelector(`#hotspot-${index + 1}`);

      const titleElement = document.createElement('h2');
      titleElement.textContent = infoBox.title;

      const textElement = document.createElement('p');
      textElement.textContent = infoBox.text;

      selected.appendChild(titleElement);
      selected.appendChild(textElement);
    });
    };

    loadInfoBoxes();
  
 

  function loadMaterialInfo() {
      materialListData.forEach((materials) => {
        //clone template li with h3 and p inside
        const clone = materialTemplate.content.cloneNode(true);

        //populate clone template
        const materialHeading = clone.querySelector(".materials-heading");
        materialHeading.textContent = materials.heading;

        const materialDescription = clone.querySelector(".materials-description");
        materialDescription.textContent = materials.description;

        //hide loader
        //append the populated template to li
        materialList.appendChild(clone);
        materialTemplate.appendChild(materialList);
      });
      
    };
    loadMaterialInfo();
    


  function showInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 1 });
  }

  showInfo();

  function hideInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 0 });
  }

  loadInfo();

  //Event listeners

  hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseenter", showInfo);
    hotspot.addEventListener("mouseleave", hideInfo);
  });

})();

