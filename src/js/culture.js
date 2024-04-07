injectNavbar("culture");

const dataHeritageBuildings = [
  {
    id: 1,
    title: "Prambanan Temple",
    image: "https://techtitans.sirv.com/wonderful-yogyakarta/culture/h-pt.png",
    price: "IDR 48.000",
    desc: "The temple that is located at Shiva Plateau Ring, is considered as one of the emples that would satisfy your sight with its view. Situated at 425 masl, visitors are given a chance to enjoy the excellent view of Yogyakarta form above.",
    time: "06.00-17.00 WIB",
    location: "Kranggan, Bokoharjo, Prambanan,Sleman, Yogyakarta",
    yt: "MhifUwbQj6o",
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.3559336818375!2d110.49146739999999!3d-7.752020600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5ae3dbd859d1%3A0x19e7a03b25955a2d!2sPrambanan%20Temple!5e0!3m2!1sen!2sid!4v1712382913624!5m2!1sen!2sid",
  },
  {
    id: 2,
    title: "Keraton Yogyakarta",
    image: "https://techtitans.sirv.com/wonderful-yogyakarta/culture/h-ky.png",
    price: "IDR 25.000",
    desc: "Keraton Yogyakarta, or palace, is the official residence of the Sultan of Yogyakarta. It is a building complex that reflects Javanese architecture and culture. Visitors can tour the palace and watch traditional dance performances, such as the Ramayana ballet.",
    time: "08.30-14.30 WIB",
    location: "Ngayogyakarta Hadiningrat Palace",
    yt: "gsSsT0t7GMQ",
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.8539261539095!2d110.3642031!3d-7.8052845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5796db06c7ef%3A0x395271cf052b276c!2sKeraton%20Ngayogyakarta%20Hadiningrat!5e0!3m2!1sid!2sid!4v1712383735437!5m2!1sid!2sid",
  },
  {
    id: 3,
    title: "Kraton Ratu Boko",
    image: "https://techtitans.sirv.com/wonderful-yogyakarta/culture/h-krb.png",
    price: "IDR 85.000",
    desc: "Ratu BokoThis place is very popular for its sunrise and sunset view. If you are lucky, then you would be able to catch the superb view of the sun settle right in the middle of the main gate.",
    time: "06.00-17.00 WIB",
    location: "Gatak, Prambanan, Sleman, Yogyakarta",
    yt: "V37HO2J3IFc",
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.18176233424!2d110.48941579999999!3d-7.7705416000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5a92d354fe45%3A0x153f44f14476f95b!2sRatu%20Boko%20Temple!5e0!3m2!1sen!2sid!4v1712383809874!5m2!1sen!2sid",
  },
  {
    id: 4,
    title: "Ijo Temple",
    image: "https://techtitans.sirv.com/wonderful-yogyakarta/culture/h-it.png",
    price: "IDR 10.000",
    desc: "Ijo temple is a Hindu candi (temple) located 4 kilometers from Ratu Boko or around 18 kilometers east from Yogyakarta, Indonesia. The temple was built between 10th to 11th century CE during the Mataram Kingdom period.",
    time: "07.00-17.00 WIB",
    location: "Kikis, Sambirejo, Prambanan, Sleman, Yogyakarta",
    yt: "uU2vxLPhAdA",
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.056572103906!2d110.5118835!3d-7.783827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5b1232407aa5%3A0x645c50631c5aaaeb!2sCandi%20Ijo!5e0!3m2!1sen!2sid!4v1712383836936!5m2!1sen!2sid",
  },
  {
    id: 5,
    title: "Sambisari Temple",
    image: "https://techtitans.sirv.com/wonderful-yogyakarta/culture/h-st.png",
    price: "IDR 10.000",
    desc: "This Hindu-Shiva temple is also called as Underground Temple since its architecture got the shape of upside down trapessium with the main buildings situated 6.5 meters below the ground at the center of the temple complex.",
    time: "08.00-16.00 WIB",
    location: "Kranggan, Bokoharjo, Prambanan,Sleman, Yogyakarta",
    yt: "MrmpLjOsO4k",
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.2579177804782!2d110.4470388!3d-7.762448800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5a39b544a4ab%3A0xd8f5c2d79ac124f3!2sSambisari%20Temple!5e0!3m2!1sen!2sid!4v1712383907308!5m2!1sen!2sid",
  },
  {
    id: 6,
    title: "Plaosan Temple",
    image: "https://techtitans.sirv.com/wonderful-yogyakarta/culture/h-plt.png",
    price: "IDR 50.000",
    desc: "This Buddist temple can be found at 2 kilometers away to the north east from Prambanan Temple Complex. The sunset view that is offered in this area become one main reason for people to visit.",
    time: "09.00-17.00 WIB",
    location: "Candi Plaosan St. Bugisan, Prambanan, Klaten",
    yt: "D71nX5D2drI",
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.4614322014104!2d110.50467719999999!3d-7.740780699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5b6cbfffffff%3A0xf2f393c49bd04045!2sPlaosan%20Temple!5e0!3m2!1sen!2sid!4v1712383950947!5m2!1sen!2sid",
  },
  {
    id: 7,
    title: "Karst Stone Breksi",
    image: "https://techtitans.sirv.com/wonderful-yogyakarta/culture/h-ksb.png",
    price: "IDR 5.000",
    desc: "This area is used to be a karst stone mining location in the past. However, after it was discovered that the karst in this area is part of unique sedimentation of the ancient volcano, the government decided to change it into tourist destination that would provide you the sight of artsy ornaments and beautiful view all over the complex.",
    time: "05.00-18.00 WIB",
    location: "Gunung Sari, Sambirejo, Yogyakarta",
    yt: "8OFxUyp8tys",
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.0778419256762!2d110.50458270000001!3d-7.781571400000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5aa458b4665b%3A0xa4b0fc6ad0ae38c7!2sTebing%20Breksi!5e0!3m2!1sen!2sid!4v1712384001303!5m2!1sen!2sid",
  },
];

const dataCultureArts = [
  {
    id: 11,
    title: "Wayang Kulit",
    desc: "Shadow puppetry is a form of puppet theater in which shadow puppets made of leather are backlit and played by puppeteers. The performance is usually accompanied by a gamelan and a puppeteer who narrates the story. Shadow puppetry is a popular folk entertainment in Java, and there are many shadow puppet shows held in Yogyakarta.",
    image: "https://techtitans.sirv.com/wonderful-yogyakarta/culture/p-wk.png",
    location: "Sonobudoyo Museum",
    yt: "JdctwQWkMOc",
    maps: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3952.8818303505586!2d110.359438!3d-7.8023333!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a578f83070a4f%3A0x9d10431ac43ec5ee!2sMuseum%20Sonobudoyo%20Unit%20I!5e0!3m2!1sid!2sid!4v1712384042845!5m2!1sid!2sid",
    discover: "existed in Indonesia since the 10th century",
  },
  {
    id: 12,
    title: "Bedhaya Dance",
    desc: "Bedhaya Dance is Yogyakarta's most sacred classical dance. The Bedhaya dance is danced by nine female dancers and symbolizes purity and elegance.",
    image: "https://techtitans.sirv.com/wonderful-yogyakarta/culture/p-bd.png",
    location: "Ngayogyakarta Hadiningrat Palace",
    yt: "Swq0JrLrg0I",
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.8539261539095!2d110.3642031!3d-7.8052845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5796db06c7ef%3A0x395271cf052b276c!2sKeraton%20Ngayogyakarta%20Hadiningrat!5e0!3m2!1sid!2sid!4v1712384113980!5m2!1sid!2sid",
    discover: "by Sultan Agung Hanyokrokusumo ",
  },
  {
    id: 13,
    title: "Sekaten",
    desc: "Sekaten is a royal ceremony held twice a year to commemorate the birth of the Prophet Muhammad. The ceremony involves a large procession in an elaborately decorated golden carriage carrying offerings from the sultan to the Grand Mosque of Yogyakarta.",
    image: "https://techtitans.sirv.com/wonderful-yogyakarta/culture/p-s.png",
    location: "Ngayogyakarta Hadiningrat Palace",
    yt: "feWYlXUKZ1M",
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.8539261539095!2d110.3642031!3d-7.8052845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5796db06c7ef%3A0x395271cf052b276c!2sKeraton%20Ngayogyakarta%20Hadiningrat!5e0!3m2!1sid!2sid!4v1712384113980!5m2!1sid!2sid",
    discover: "by Sunan Kalijaga in the 15th century",
  },
  {
    id: 14,
    title: "Gamelan",
    desc: "Yogyakarta Gamelan is a type of gamelan that has its own characteristics. Yogyakarta gamelan has a smoother and more melodious sound compared to gamelan from other regions in Java. This is because Yogyakarta gamelan uses slendro tunings which use more pentatonic notes.",
    image: "https://techtitans.sirv.com/wonderful-yogyakarta/culture/p-g.png",
    location: "Ngayogyakarta Hadiningrat Palace",
    yt: "WpzJPVsvGIk",
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.8539261539095!2d110.3642031!3d-7.8052845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5796db06c7ef%3A0x395271cf052b276c!2sKeraton%20Ngayogyakarta%20Hadiningrat!5e0!3m2!1sid!2sid!4v1712384113980!5m2!1sid!2sid",
    discover: "Sultan Hamengkubuwono I (1755-1792)",
  },
  {
    id: 15,
    title: "Batik",
    desc: "Batik is a traditional wax resist dyeing technique applied to the entire fabric. It is an important part of Indonesian culture, and Yogyakarta is one of the most famous batik production centers. Batik cloth from Yogyakarta is famous for its intricate designs and bright colors.",
    image: "https://techtitans.sirv.com/wonderful-yogyakarta/culture/p-b.png",
    location: "Kauman Batik Village",
    yt: "YsexBjlds9A",
    maps: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7910.030564586846!2d110.825881!3d-7.573312!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a177fb06ec2e5%3A0x13604084a482227c!2sKampung%20Batik%20Kauman!5e0!3m2!1sid!2sid!4v1712384257901!5m2!1sid!2sid",
    discover: "existed since the 7th century.",
  },
];

const heritagesContainer = document.querySelector(".heritagesContainer");
const culturalsContainer = document.querySelector(".culturalsContainer");

const renderCard = (listData, container) =>
  listData.forEach((data) => {
    let card;
    if (!(data.id % 2 === 0)) {
      card = `
        <div class="card card-travel rounded-4 p-3" id="card-${data.id}">
            <div class="card-travel-body d-flex flex-column flex-lg-row gap-3">
              <div class="img-container">
                <img src=${data.image} alt=${
        data.title
      } class="object-fit-cover rounded-5" style="width: 100%; height: 100%;" />
              </div>
              <div class="card-desc d-flex flex-column">
                <h1 class="mt-2">${data.title}</h1>
                <p style="padding-right: .5rem;">${data.desc}</p>
                ${
                  data.time
                    ? `<div class="desc-info"><i class='bi bi-clock-fill'></i><span>${data.time}</span></div> <div class="desc-info"><i class="bi bi-cash"></i><span>± ${data.price}</span></div>`
                    : `<div class="desc-info"><i class="bi bi-clipboard-check-fill"></i><span>${data.discover}</span></div>`
                }
                <div class="desc-info" style="margin-bottom: 1rem;"><i class="bi bi-geo-alt-fill"></i><span>${
                  data.location
                }</span></div>
                <div class="d-flex gap-3">
                  <button class="btn-card btn-primary" data-bs-toggle="modal" data-bs-target='#video-${
                    data.id
                  }'
                  ><i class="fa-solid fa-video"></i> Watch Video</button>
                  <button data-bs-toggle="modal" data-bs-target='#map-${
                    data.id
                  }' class="btn-card btn-secondary"> <i class="bi bi-map-fill"></i> See Map</button>
                </div>
              </div>
            </div>
            <!-- modal videos -->
            <div class="modal modal-lg fade" id="video-${
              data.id
            }" data-bs-backdrop="static" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" >Video of ${data.title}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                  <iframe data-src="https://www.youtube.com/embed/${
                    data.yt
                  }" title='${
        data.title
      }' frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen autoplay></iframe>
                  </div>
                </div>
              </div>
            </div>

            <!-- modal map -->
            <div class="modal modal-lg fade" id="map-${
              data.id
            }" data-bs-backdrop="static" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" >Map of ${data.title}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                  <iframe data-src=${
                    data.maps
                  } style="border:0;" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
    } else {
      card = `<div class="card card-travel card-travel-second rounded-4 p-3" id="card-${
        data.id
      }">
        <div class="card-travel-body d-flex flex-column-reverse flex-lg-row gap-3">
          <div class="card-desc d-flex flex-column">
            <h1 class="mt-2 card-left-p">${data.title}</h1>
            <p style="padding-right: .5rem;" class="card-left-p">${
              data.desc
            }</p>
            ${
              data.time
                ? `<div class="desc-info card-left-p"><i class='bi bi-clock-fill'></i><span>${data.time}</span></div> <div class="desc-info card-left-p"><i class="bi bi-cash"></i><span>± ${data.price}</span></div>`
                : `<div class="desc-info card-left-p"><i class="bi bi-clipboard-check-fill"></i><span>${data.discover}</span></div>`
            }
            <div class="desc-info card-left-p" style="margin-bottom: 1rem;"><i class="bi bi-geo-alt-fill"></i><span> ${
              data.location
            } </span></div>
            <div class="d-flex gap-3">
              <button class="btn-card btn-primary" data-bs-toggle="modal" data-bs-target='#video-${
                data.id
              }'
              ><i class="fa-solid fa-video"></i> Watch Video</button>
              <button data-bs-toggle="modal" data-bs-target='#map-${
                data.id
              }' class="btn-card btn-secondary"> <i class="bi bi-map-fill"></i> See Map</button>
          </div>
          </div>
          <div class="img-container">
            <img src=${data.image} alt=${
        data.title
      } class="object-fit-cover" style="width: 100%; height: 100%;" />
          </div>
        </div>

        <!-- modal videos -->
            <div class="modal modal-lg fade" id="video-${
              data.id
            }" data-bs-backdrop="static" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" >Video of ${data.title}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                  <iframe data-src="https://www.youtube.com/embed/${
                    data.yt
                  }" title='${
        data.title
      }' frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  </div>
                </div>
              </div>
            </div>

            <!-- modal map -->
            <div class="modal modal-lg fade" id="map-${
              data.id
            }" data-bs-backdrop="static" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" >Map of ${data.title}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                  <iframe data-src=${
                    data.maps
                  } style="border:0;" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                </div>
              </div>
            </div>
      </div>`;
    }
    container.innerHTML += card;
  });

renderCard(dataHeritageBuildings, heritagesContainer);
renderCard(dataCultureArts, culturalsContainer);

// Implementasi Intersection Observer - Improve Performance Website
document.addEventListener("DOMContentLoaded", function () {
  const lazyVideos = [].slice.call(
    document.querySelectorAll("iframe[data-src]")
  );

  if ("IntersectionObserver" in window) {
    let lazyVideoObserver = new IntersectionObserver(function (
      entries,
      observer
    ) {
      entries.forEach(function (video) {
        if (video.isIntersecting) {
          let videoSrc = video.target.getAttribute("data-src");
          video.target.setAttribute("src", videoSrc);
          video.target.removeAttribute("data-src");
          lazyVideoObserver.unobserve(video.target);
        }
      });
    });

    lazyVideos.forEach(function (video) {
      lazyVideoObserver.observe(video);
    });
  }
});
