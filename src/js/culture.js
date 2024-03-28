injectNavbar("culture");

const dataHeritageBuildings = [
  {
    id: 1,
    title: "Prambanan Temple",
    image: "https://techtitans.sirv.com/wonderful-yogyakarta/travel/s-mlt.png",
    price: "IDR 350.000 - 550.000",
    desc: "Jeep Tour or also known as Lava Tour is a tour for visitors who want to experience the sensation of riding a jeep enjoying the panorama of Mount Merapi along the eruption site. This tour is guided by an operator who will explain the area former eruption of Merapi.",
    time: "07.00-16.00 WIB",
    location: "ngipiksari, hargobinangun, pakem, sleman, yogyakarta",
    maps: "https://maps.app.goo.gl/V4tGD5Bx1DZDYNob7",
  },
];

const tabSleman = document.querySelector(".travels-sleman");

const renderCard = (listData, container) =>
  listData.forEach((data) => {
    let card;
    if (!(data.id % 2 === 0)) {
      card = `
        <div class="card card-travel rounded-4 p-3">
            <div class="card-travel-body d-flex flex-column flex-lg-row gap-3">
              <div class="img-container">
                <img src=${data.image} alt=${data.title} class="object-fit-cover rounded-5" style="width: 100%; height: 100%;" />
              </div>
              <div class="card-desc d-flex flex-column">
                <h1 class="mt-2">${data.title}</h1>
                <p style="padding-right: .5rem;">${data.desc}</p>
                <div class="desc-info"><i class="bi bi-clock-fill"></i><span>${data.time}</span></div>
                <div class="desc-info"><i class="bi bi-cash"></i><span>± ${data.price}</span></div>
                <div class="desc-info" style="margin-bottom: 1rem;"><i class="bi bi-geo-alt-fill"></i><span>${data.location}</span></div>
                <a href=${data.maps} target="_blank" class="btn-primary" style="width: 10.5rem;"> <i class="bi bi-eye-fill h6" style="margin-right: .5rem;"></i> Visit Now</a>
              </div>
            </div>
          </div>
        `;
    } else {
      card = `<div class="card card-travel card-travel-second rounded-4 p-3">
        <div class="card-travel-body d-flex flex-column-reverse flex-lg-row gap-3">
          <div class="card-desc d-flex flex-column">
            <h1 class="mt-2 card-left-p">${data.title}</h1>
            <p style="padding-right: .5rem;" class="card-left-p">${data.desc}</p>
            <div class="desc-info card-left-p"><i class="bi bi-clock-fill"></i><span>${data.time}</span></div>
            <div class="desc-info card-left-p"><i class="bi bi-cash"></i><span>± ${data.price}</span></div>
            <div class="desc-info card-left-p" style="margin-bottom: 1rem;"><i class="bi bi-geo-alt-fill"></i><span> ${data.location} </span></div>
            <a href=${data.maps} target="_blank" class="btn-primary card-left-p" style="width: 10.5rem;"> <i class="bi bi-eye-fill h6" style="margin-right: .5rem;"></i> Visit Now</a>
          </div>
          <div class="img-container">
            <img src=${data.image} alt=${data.title} class="object-fit-cover" style="width: 100%; height: 100%;" />
          </div>
        </div>
      </div>`;
    }
    container.innerHTML += card;
  });

renderCard(dataTravelsSleman, tabSleman);
