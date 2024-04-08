function getWebsites() {
  return fetch("section.json")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}

function showWebsites(websites) {
  let websitesContainer = document.querySelector(".websites-container");
  let websitesHTML = "";
  websites.forEach((website) => {
    websitesHTML += `
                <div class="row work-row"> 
                  <div class= ${website.imgClass} >
                      <img src="/placeholder.png" alt="">
                  </div>
                  <div class=${website.detailsClass}>
                      <div class="details details-ftm">
                          <h3>${website.name}</h3>
                          <p class="platform">Web</p>
                          <p class="icons"><i class="fa-solid fa-desktop"></i><i class="fa-solid fa-tablet-screen-button"></i><i class="fa-solid fa-mobile-screen"></i></p>
                          <p>${website.detail}</p>
                          <a class="my-button" href=${website.linkUrl}>Visit Website</a>
                      </div>
                  </div>
              </div>
          `;
  });
  websitesContainer.innerHTML = websitesHTML;
}

// when the application is loaded
getWebsites().then((data) => {
  showWebsites(data);
  console.log(data);
});
