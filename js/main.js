(() => {

  //variables
  const hotspots = document.querySelectorAll(".Hotspot");
  const materialTemplate = document.querySelector("#material-template");
  const materialList = document.querySelector("#material-list");



  //functions
 

   
    //add loader to html
    function materialListData() {
      fetch ("https://swiftpixel.com/earbud/api/materials")
      .then(response => response.json())
      .then(materials => {
        console.log(materials);
        // pass fetched materials into the existing renderer
        loadMaterialInfo(materials);
      })
      .catch(err => console.error(err));

    }

    materialListData();
    //make AJAX call here
    loadInfoBoxes();

    function loadInfoBoxes() {
    fetch("https://swiftpixel.com/earbud/api/infoboxes")
      .then(response => response.json())
      .then(infoBoxes => {
        console.log(infoBoxes);
      })
      .catch(err => console.error(err));
    };
  
  

  function loadMaterialInfo(materials) {
      if (!Array.isArray(materials)) return;
      materials.forEach((material) => {
        //clone template li with h3 and p inside
        const clone = materialTemplate && materialTemplate.content ? materialTemplate.content.cloneNode(true) : document.createElement('li');

        //populate clone template (support either class naming)
        const materialHeading = clone.querySelector && (clone.querySelector('.material-heading') || clone.querySelector('.materials-heading'));
        if (materialHeading) materialHeading.textContent = material.heading || material.name || '';

        const materialDescription = clone.querySelector && (clone.querySelector('.material-description') || clone.querySelector('.materials-description'));
        if (materialDescription) materialDescription.textContent = material.description || '';

        //append the populated template to list
        if (materialList) materialList.appendChild(clone);
      });
    };
    


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

