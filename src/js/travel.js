injectNavbar("travel");

const dataTravelsSleman = [
  {
    id: 1,
    title: "Merapi Lava Tour",
    image: "https://techtitans.sirv.com/wonderful-yogyakarta/travel/s-mlt.png",
    price: "IDR 350.000 - 550.000",
    desc: "Jeep Tour or also known as Lava Tour is a tour for visitors who want to experience the sensation of riding a jeep enjoying the panorama of Mount Merapi along the eruption site. This tour is guided by an operator who will explain the area former eruption of Merapi.",
    time: "07.00-16.00 WIB",
    location: "ngipiksari, hargobinangun, pakem, sleman, yogyakarta",
    yt: "rBoYIDWghZc",
    maps: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d253051.33004166433!2d110.2411895!3d-7.6909803!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a672c1d323637%3A0x2a3fc23ec8a3b2a5!2sLava%20Tour%20Merapi!5e0!3m2!1sid!2sid!4v1712457552360!5m2!1sid!2sid",
  },
  {
    id: 2,
    title: "Ullen Sentalu Museum",
    image: "https://techtitans.sirv.com/wonderful-yogyakarta/travel/s-usm.png",
    price: "IDR 40.000",
    desc: "The Ullen Sentalu Museum is a cultural museum of the Mataram Kingdom. It has many superior collections about the life of the Mataram Dynasty nobles such as their Javanese art and culture",
    time: "08.30-17.00",
    location: "Jl. Boyong, Hargobinangun, Pakem, Sleman, Yogyakarta",
    yt: "_bmCnOOMT9I",
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.786239664202!2d110.42282499999999!3d-7.5982280000000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5e02fd790ab9%3A0xa3fe6035b0792671!2sUllen%20Sentalu%20Museum!5e0!3m2!1sid!2sid!4v1712457588042!5m2!1sid!2sid",
  },
  {
    id: 3,
    title: "Kaliurang",
    image: "https://techtitans.sirv.com/wonderful-yogyakarta/travel/s-k.png",
    price: "IDR 10.000 - 25.000",
    desc: "Kaliurang is a resort located on the slopes of Mount Merapi. Visitors can visit this complex by trekking to the National Park and Telaga Putri. Apart from that, visitors can rent a jeep to get to the location. Kaliadem bunker.",
    time: "8.00-17.00 WIB",
    location: "Kaliurang, Hargobinangun, Pakem, Sleman, Yogyakarta",
    yt: "7eS1pH2QgfY",
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15819.145564516282!2d110.4283159!3d-7.5982115499999985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a60d2b6da28a7%3A0xc364d8fdf1472bcd!2sKaliurang%2C%20Hargobinangun%2C%20Kec.%20Pakem%2C%20Kabupaten%20Sleman%2C%20Daerah%20Istimewa%20Yogyakarta!5e0!3m2!1sid!2sid!4v1712457843305!5m2!1sid!2sid",
  },
  {
    id: 4,
    title: "Merapi Volcano Museum",
    image: "https://techtitans.sirv.com/wonderful-yogyakarta/travel/s-mvm.png",
    price: "IDR 10.000",
    desc: "This museum was founded as a record of the eruption of Mount Merapi and was inaugurated in 2010.",
    time: "8.00-15.00 WIB",
    location: "Bull, Hargobinangun, Pakem, Sleman, Yogyakarta",
    yt: "0XcEne8TUaM-",
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.6230838081474!2d110.4243329!3d-7.615927200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5e6ec08af943%3A0xa843109615445506!2sMuseum%20Gunungapi%20Merapi!5e0!3m2!1sid!2sid!4v1712457898758!5m2!1sid!2sid",
  },
];

const dataTravelsBantul = [
  {
    id: 1,
    title: "Parangritis Beach",
    image: "https://techtitans.sirv.com/wonderful-yogyakarta/travel/b-pb.png",
    price: "IDR 4.000",
    desc: "This beach is located approximately ± 27 km from the city center. Become one of the icons of Yogyakarta. This place is popular among tourists for its golden sunsets",
    time: "24 hours",
    location: "JI. Parangtritis, Kretek, Bantul, Yogyakarta",
    yt: "_PWY2RIax8w",
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15802.97256057396!2d110.32877135!3d-8.0253993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7b00975eac533d%3A0x351bfe1453e22e36!2sPantai%20Parangtritis!5e0!3m2!1sid!2sid!4v1712457922280!5m2!1sid!2sid",
  },
  {
    id: 2,
    title: "Imogiri Royal Cimetery",
    image: "https://techtitans.sirv.com/wonderful-yogyakarta/travel/b-ic.png",
    price: "IDR 50.000",
    desc: "This is the tomb of the Sultan of Mataram and is considered a holy place. Visitors can visit this tomb wearing traditional Javanese clothing traditional clothes. It is only open on Monday, Friday, Sunday.",
    time: "08.00-17.00 WIB",
    location: "Karang Kulon, Wukirsari, Imogiri, Bantul, Yogyakarta",
    yt: "httpsx5S_ZsRT4",
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126456.20381089445!2d110.3338222457441!3d-7.920497399999989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a54f951ef760f%3A0x99cd48194e507430!2sMakam%20Raja-Raja%20Imogiri!5e0!3m2!1sid!2sid!4v1712458061499!5m2!1sid!2sid",
  },
  {
    id: 3,
    title: "Mataram Cultural Tourism Area",
    image: "https://techtitans.sirv.com/wonderful-yogyakarta/travel/b-mcta.png",
    price: "IDR 5.000",
    desc: "This area is believed to be a historical site of the Mataram Kingdom and is now a tourist attraction because of its natural scenery. Many destinations around the area are popular such as Mangunan Fruit Plantation, Pine Forest, Sewu Watu Songgo Langit, and Bukit Lintang Sewu",
    time: "05.00-17.00 WIB",
    location: "Pantirejo, Terong, Dlingo, Bantul, Yogyakarta",
    yt: "FL2ONmT236o",
    maps: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d252964.0592824385!2d110.0735931!3d-7.8359427!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a57b3a9d1223f%3A0x1ac2236ad3f0d73f!2sKampoeng%20Mataraman!5e0!3m2!1sid!2sid!4v1712458102276!5m2!1sid!2sid",
  },
  {
    id: 4,
    title: "Kasongan",
    image: "https://techtitans.sirv.com/wonderful-yogyakarta/travel/b-k.png",
    price: "free",
    desc: "Kasongan is a collection of pottery and ceramic crafts located in Bangunjiwo village, Bantul Regency. There Many craftsmen around this area make them Kasongan has become an educational tourism area.",
    time: "Tuesday-Sunday 11.00-16.00 WIB",
    location: "JI. Kasongan, Bangunjiwo, Bantul Yogyakarta",
    yt: "qb62zOR4FRA",
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10952.82486436068!2d110.33048739763315!3d-7.8476520326143095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a562f41028b81%3A0xb5dcffcbde487e78!2sJl.%20Kasongan%2C%20Nyemengan%2C%20Tirtonirmolo%2C%20Kec.%20Kasihan%2C%20Kabupaten%20Bantul%2C%20Daerah%20Istimewa%20Yogyakarta!5e0!3m2!1sid!2sid!4v1712458165478!5m2!1sid!2sid",
  },
];

const dataTravelsKulonprogo = [
  {
    id: 1,
    title: "Glagah Beach",
    image: "https://techtitans.sirv.com/wonderful-yogyakarta/travel/k-gb.png",
    price: "IDR 4.000",
    desc: "Glagah Beach is the main tourist attractions in Kulon Progo that has lagoon. Besides, there is a pier on the beach equipped with tetrappods and sea walls so visitors can enjoy the sensation of breaking the waves here.",
    time: "24 hours",
    location: "Glagah, Temon,Kulon Progo, Yogyakarta",
    yt: "9VWdxkaaZvo",
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7903.653851543925!2d110.06759500000001!3d-7.913141049999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7ae3eabc6bcd63%3A0x77a64b4be190f4ae!2sPantai%20Glagah%20Indah!5e0!3m2!1sid!2sid!4v1712458180785!5m2!1sid!2sid",
  },
  {
    id: 2,
    title: "Progo Rafting",
    image: "https://techtitans.sirv.com/wonderful-yogyakarta/travel/k-pr.png",
    price: "IDR 100.000 - 175.000",
    desc: "The adventure way to enjoy Progo river is by doing rafting. Progo river Rafting is a sports tourism for tourists who want a thrilling adventure experience and testing adrenaline along the swift currents of the river Progo.",
    time: "06.00-18.00 WIB",
    location: "Krisik, kreo, Kalibawang,Kulon Progo,Yogyakarta",
    yt: "8JEruvUdlEo",
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.6540835207643!2d110.23059990000002!3d-7.7202135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7af3fe1c68f4d7%3A0xb805fef3dba7e6a4!2sArus%20Progo%20Rafting!5e0!3m2!1sid!2sid!4v1712458214664!5m2!1sid!2sid",
  },
  {
    id: 3,
    title: "Kalibiru",
    image: "https://techtitans.sirv.com/wonderful-yogyakarta/travel/k-wk.png",
    price: "IDR 20.000",
    desc: "Kalibiru is located in the Menoreh hill. This Tourism Village is an ecotourism object that has beautiful scenery and natural landscape of Sermo Reservoir seen from a height. ",
    time: "08.00-17.00 WIB",
    location: "Waduk Sermo, Kokap, Kulon Progo, Yogyakarta",
    yt: "lZMPyPpgcxI",
    maps: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63248.97041536662!2d110.0851298!3d-7.7833945!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7aeff7861e0b91%3A0x5604e4ced3f4227e!2sWisata%20Alam%20Kalibiru!5e0!3m2!1sid!2sid!4v1712458241390!5m2!1sid!2sid",
  },
  {
    id: 4,
    title: "Nglinggo Tea",
    image: "https://techtitans.sirv.com/wonderful-yogyakarta/travel/k-nt.png",
    price: "IDR 5.000",
    desc: "Nglinggo Tea Plantation is a tourism object has a stretch of 136 hectares of tea plantations at an altitude of ± 900-1000 meters above sea level. Visitors can enjoy the beauty panorama of this tea plantation by using a jeep or motorbike trail.",
    time: "07.00-18.00 WIB",
    location: "JI. Kasongan, Bangunjiwo, Bantul Yogyakarta",
    yt: "MTdtwCMrgvw",
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.335233422359!2d110.14146989999999!3d-7.647054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7af2aa21b914df%3A0x99633b0e828534dc!2sKebun%20Teh%20Nglinggo!5e0!3m2!1sid!2sid!4v1712458274250!5m2!1sid!2sid",
  },
];

const dataTravelsGunungkidul = [
  {
    id: 1,
    title: "Nglanggeran",
    image: "https://techtitans.sirv.com/wonderful-yogyakarta/travel/w-n.png",
    price: "IDR 30.000",
    desc: "Nglanggeran is an ancient volcano area that can be used for trekking. Visitors who want to see the natural scenery of mountain ranges in the Gunung Sewu Geopark cluster are enable to trek to the top of the mountain.",
    time: "08.00-17.00 WIB",
    location: "Nglanggeran, Patuk, Gunung Kidul, Yogyakarta",
    yt: "lZ63NxUkHwo",
    maps: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d24299.831143151754!2d110.53254061621969!3d-7.851598138009882!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a4e18dcfe713b%3A0x760d05fd5684a99c!2sNglanggeran%2C%20Kec.%20Patuk%2C%20Kabupaten%20Gunung%20Kidul%2C%20Daerah%20Istimewa%20Yogyakarta!5e0!3m2!1sid!2sid!4v1712458324600!5m2!1sid!2sid",
  },
  {
    id: 2,
    title: "Timang Beach",
    image: "https://techtitans.sirv.com/wonderful-yogyakarta/travel/w-tb.png",
    price: "IDR 100.000",
    desc: "Timang Beach is a beautiful beach in Gunungkidul which has large stones in the middle of the sea which is often called Pulau Panjang.",
    time: "06.00-18.00 WIB",
    location: "Tepus, Gunungkidul, Yogyakarta",
    yt: "xCbIFsSIOs4",
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.2660883256103!2d110.66241959999999!3d-8.1759266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7bb36265782cf3%3A0x25efcb5e3a28afa8!2sPantai%20Timang!5e0!3m2!1sid!2sid!4v1712458348592!5m2!1sid!2sid",
  },
  {
    id: 3,
    title: "Jomblang Cave",
    image: "https://techtitans.sirv.com/wonderful-yogyakarta/travel/w-gj.png",
    price: "IDR 50.000",
    desc: 'Enjoy the "light around Goa Jomblang of ±heaven" 50 meters in Jomblang and go enter cave, avisitors depth around must enter ± 90 themeters cave from usingthe themouth SingleofRope the cave Technique with a (SRT) provided by the operator.',
    time: "09.15-12.30 WIB",
    location: "Jetis Wetan, Semanu, Pancarejo Gunung Kidul, Yogyakarta",
    yt: "BQeAnfCNQHI",
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.7163331208353!2d110.6383307!3d-8.0281562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7bb41fce34d717%3A0xf9ffcb6f9fbd5cce!2sGoa%20Jomblang!5e0!3m2!1sid!2sid!4v1712458375901!5m2!1sid!2sid",
  },
  {
    id: 4,
    title: "Sri Gethuk Waterfall",
    image: "https://techtitans.sirv.com/wonderful-yogyakarta/travel/w-sg.png",
    price: "IDR 25.000",
    desc: "Sri Gethuk Waterfall is located between 2 cliffs with a 50 meters height. Visitors can swim near the rocks of the waterfall or down the river using a canoe in the waterfall area.",
    time: "08.00-16.00 WIB",
    location: "Mungguran II, Bleberan, Playen, Gunungkidul, Yogyakarta",
    yt: "r5T0qMTd1z0",
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.5415080635926!2d110.4893259!3d-7.94285745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a52c5a2ffbded%3A0x1b21536ea267bf1!2sAir%20Terjun%20Sri%20Gethuk!5e0!3m2!1sid!2sid!4v1712458407155!5m2!1sid!2sid",
  },
];

const tabSleman = document.querySelector(".travels-sleman");
const tabBantul = document.querySelector(".travels-bantul");
const tabKulonprogo = document.querySelector(".travels-kulonprogo");
const tabGunungkidul = document.querySelector(".travels-gunungkidul");

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
                <div class="d-flex gap-3">
                  <button class="btn-card btn-primary" data-bs-toggle="modal" data-bs-target='#video-${data.yt}'
                  ><i class="fa-solid fa-video"></i> Watch Video</button>
                  <button data-bs-toggle="modal" data-bs-target='#map-${data.yt}' class="btn-card btn-secondary"> <i class="bi bi-map-fill"></i> See Map</button>
                </div>
              </div>
            </div>
            <!-- modal videos -->
            <div class="modal modal-lg fade" id="video-${data.yt}" data-bs-backdrop="static" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" >Video of ${data.title}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                  <iframe src="https://www.youtube.com/embed/${data.yt}" title='${data.title}' frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  </div>
                </div>
              </div>
            </div>

            <!-- modal map -->
            <div class="modal modal-lg fade" id="map-${data.yt}" data-bs-backdrop="static" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" >Map of ${data.title}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                  <iframe src=${data.maps} style="border:0;" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                </div>
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
            <div class="d-flex gap-3">
              <button class="btn-card btn-primary" data-bs-toggle="modal" data-bs-target='#video-${data.yt}'
              ><i class="fa-solid fa-video"></i> Watch Video</button>
              <button data-bs-toggle="modal" data-bs-target='#map-${data.yt}' class="btn-card btn-secondary"> <i class="bi bi-map-fill"></i> See Map</button>
          </div>
          </div>
          <div class="img-container">
            <img src=${data.image} alt=${data.title} class="object-fit-cover" style="width: 100%; height: 100%;" />
          </div>
        </div>
        <!-- modal videos -->
            <div class="modal modal-lg fade" id="video-${data.yt}" data-bs-backdrop="static" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" >Video of ${data.title}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                  <iframe src="https://www.youtube.com/embed/${data.yt}" title='${data.title}' frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  </div>
                </div>
              </div>
            </div>

            <!-- modal map -->
            <div class="modal modal-lg fade" id="map-${data.yt}" data-bs-backdrop="static" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" >Map of ${data.title}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                  <iframe src=${data.maps} style="border:0;" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                </div>
              </div>
            </div>
      </div>`;
    }
    container.innerHTML += card;
  });

renderCard(dataTravelsSleman, tabSleman);
renderCard(dataTravelsGunungkidul, tabGunungkidul);
renderCard(dataTravelsKulonprogo, tabKulonprogo);
renderCard(dataTravelsBantul, tabBantul);
