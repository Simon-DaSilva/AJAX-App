(() => {

  //variables
  const hotspots = document.querySelectorAll(".Hotspot");
  const materialTemplate = document.querySelector("#material-template");
  const materialList = document.querySelector("#material-list");
  const hotspotTemplate = document.querySelector("#hotspot-template");
  const hotspotList = document.querySelector("#hotspot-list");



  //functions
 

   
    //add loader to html
    function materialListData() {
      fetch ("https://swiftpixel.com/earbud/api/materials")
      .then(response => response.json())
      .then(materials => {
        console.log(materials);
        loadMaterialInfo(materials);
      })
      .catch(error);

    }

    materialListData();
    //make AJAX call here
    infoBoxData();
    
    function infoBoxData() {
    fetch("https://swiftpixel.com/earbud/api/infoboxes")
      .then(response => response.json())
      .then(infoBoxes => {
        console.log(infoBoxes);
        loadInfoBoxes(infoBoxes);
      })
      .catch(error);
    };
  
  

  function loadMaterialInfo(materials) {
      
      materials.forEach((material) => {
  
        //clone template li with h3 and p inside
        const clone = materialTemplate.content.cloneNode(true);

        //populate clone template
        const materialHeading = clone.querySelector(".material-heading");
        materialHeading.textContent = material.heading;

        const materialDescription = clone.querySelector(".material-description");
        materialDescription.textContent = material.description;

        //hide loader
        //append the populated template to li
        materialList.appendChild(clone);
      });
    };

   function loadInfoBoxes(infoBoxes) {
    infoBoxes.forEach((infoBox, index) => {
      let selected = document.querySelector(`#hotspot-${index + 1}`);

      const titleElement = document.createElement("h2");
      titleElement.textContent = infoBox.title;
      selected.appendChild(titleElement);

      const textElement = document.createElement("p");
      textElement.textContent = infoBox.text;
      selected.appendChild(textElement);

      const imageElement = document.createElement("img");
      imageElement.src = infoBox.image;
      selected.appendChild(imageElement);
    })

  }
    


   function showInfo() {
    
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, { duration: 1, autoAlpha: 1 });
  }

  function hideInfo() {
  
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, { duration: 1, autoAlpha: 0 });
  }

  //Event listeners

  hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseenter", showInfo);
    hotspot.addEventListener("mouseleave", hideInfo);
  });

})();

