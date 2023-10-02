import imagenes from "./imagenes"
const productos = [
  {
    id: 1,
    img: imagenes.img1,
    title: "Pc Gamer Intel Celeron 3.5ghz 8gb Ram Ddr4 Ssd240 Hdmi Vga",
    text: (
      <>
        MICRO: INTEL G5900 3.5 GHZ CON COOLER BOX, <br />
        VIDEO: INTEL GRAPHICS H610 (ONBOARD),<br />
        MOTHER: ASROCK/ECS/MSI H410/510<br />
        DISCO SSD: 240GB SATA3 500MB/s,<br />
        MEMORIA RAM: 8GB 2666MHZ DDR4,<br />
        GABINETE: ATX G28 POWER KIT FUENTE 500W,<br />
        KIT: TECLADO USB, MOUSE USB Y PARLANTES ó AURI
      </>
    ),
    precio: 339.999,
    categoria: "PC"
  },
  {
    id: 2,
    img: imagenes.img2,
    title: "Pc Gamer Armada Amd Ryzen 3 Vega 3200g Ssd 8gb Fortnite Pubg",
    text: (
      <>
        MICRO: AMD RYZEN 3 3200G CON COOLER BOX, <br />
        MOTHER: ASROCK/ECS/MSI H410/510<br />
        DISCO SSD: 240GB SATA3 500MB/s,<br />
        MEMORIA RAM: 8GB 2666MHZ DDR4,<br />
        GABINETE:  BRB G28 + TECLADO + MOUSE + PARLANTES + FUENTE 500W,<br />
      </>
    ),
    precio: 429.999,
    categoria: "PC"
  },
  {
    id: 3,
    img: imagenes.img3,
    title: "Computadora Completa Intel Core I5 16 Gb 480 Ssd Monitor 19",
    text: (
      <>
        MICRO: INTEL CORE i5 2400 DE 4 NUCLEOS 3.1 GHZ, <br />
        VIDEO: INTEL GRAPHICS HD2000 (ONBOARD),<br />
        MOTHER: ASROCK/ECS/MSI H410/510<br />
        DISCO SSD: 480GB SATA3 500MB/s,<br />
        MEMORIA RAM: 16GB 2666MHZ DDR3,<br />
        GABINETE: MELODY MKG550/7  FUENTE 500W,<br />
        MONITOR: ACONCAWA 19 PULGADAS,<br />
        KIT: TECLADO USB, MOUSE USB Y PARLANTES ó AURI
      </>
    ),
    precio: 279.999,
    categoria: "PC"
  },
  {
    id: 4,
    img: imagenes.img4,
    title: "Placa Madre Msi A520m-a Pro Am4 Amd Sata 6gb/s Micro Atx",
    text: (
      <>
        MARCA: MSI, <br />
        MODELO: A520M-A PRO,<br />
        COLOR:  NEGRO, <br />
        PLATAFORMA: AMD,<br />
        CHIPSETS: AMD a520(AM4),<br />
        RANURAS: 1 SLOT PCIE 3.0 X1,<br />
        PROCESADOR: NO INCLUIDO,<br />
      </>
    ),
    precio: 10.99,
    categoria: "PLACA MADRE"
  },
  {
    id: 5,
    img: imagenes.img5,
    title: "Motherboard A620m Pro Rs Asrock Amd Am5 (recomendado)",
    text: (
      <>
        MARCA: ASRock, <br />
        MODELO: A620M PRO RS,<br />
        COLOR:  BLANCO, <br />
        PLATAFORMA: AMD,<br />
        CHIPSETS: AMD a620(AM5),<br />
        RANURAS: 1 SLOT PCIE 3.0 X1,<br />
        PROCESADOR: NO INCLUIDO,<br />
        MEMORIA: DDR5,<br />
      </>
    ),
    precio: 77.999,
    categoria: "PLACA MADRE"
  },
  {
    id: 6,
    img: imagenes.img6,
    title: "Tarjeta Madre Gigabyte Micro-atx H510m H V2 Lg1200 Negro (recomendado)",
    text: (
      <>
        MARCA: GIGABYTE, <br />
        MODELO: H510M H V2,<br />
        COLOR:  NEGRO, <br />
        PLATAFORMA: INTEL,<br />
        CHIPSETS: INTELH470,<br />
        RANURAS: 1 SLOT PCIE X16,<br />
        PROCESADOR: NO INCLUIDO,<br />
      </>
    ),
    precio: 84.999,
    categoria: "PLACA MADRE"
  },
  {
    id: 7,
    img: imagenes.img7,
    title: "Placa de video AMD Sapphire Nitro+ Radeon 6700 Series RX 6700 XT 11306-01-20G 12GB",
    text: (
      <>
        MARCA: AMD, <br />
        SERIE: RADEON 6700 SERIES,<br />
        COLOR:  NEGRO/GRIS, <br />
        MEMORIA: 15GB,<br />
        INTERFAZ: PCI-EXPRESS 4.0,<br />
        BUS DE MEMORIA: 192 BIT,<br />
      </>
    ),
    precio: 650.259,
    categoria: "PLACA DE VIDEO"
  },
  {
    id: 8,
    img: imagenes.img8,
    title: "Placa de video Nvidia Evga FTW Gaming GeForce RTX 30 Series RTX 3090 24G-P5-3987-KR 24GB",
    text: (
      <>
        MARCA: NVIDIA, <br />
        SERIE:  RTX 3090,<br />
        COLOR:  NEGRO, <br />
        MEMORIA: 24GB,<br />
        INTERFAZ: PCI-EXPRESS 4.0,<br />
        CONECTIVIDAD: 3 DISPLAYPORT 1.4a, HDMI 2.1,<br />
      </>
    ),
    precio: 985.955,
    categoria: "PLACA DE VIDEO"
  },
  {
    id: 9,
    img: imagenes.img9,
    title: "Placa de video Nvidia Evga SC Gaming GeForce GTX 16 Series GTX 1650 SUPER 04G-P4-1357-KR 4GB",
    text: (
      <>
        MARCA: NVIDIA EVGA, <br />
        SERIE:  GTX 1650,<br />
        COLOR:  GRIS, <br />
        MEMORIA: 4GB,<br />
        INTERFAZ: PCI-EXPRESS 3.0,<br />
        CONECTIVIDAD: DL-DVI-D, DISPLAYPORT, HDMI,<br />
      </>
    ),
    precio:225.356,
    categoria: "PLACA DE VIDEO"
  },
  {
    id: 10,
    img: imagenes.img10,
    title: "Placa de video Nvidia PNY XLR8 Gaming GeForce RTX 30 Series RTX 3080 VCG308010LTFXPPB 10GB",
    text: (
      <>
        MARCA: NVIDIA EVGA, <br />
        SERIE:  RTX 3080,<br />
        COLOR:  NEGRO, <br />
        MEMORIA: 10GB,<br />
        INTERFAZ: PCI-EXPRESS 4.0,<br />
        CONECTIVIDAD: 3 DISPLAYPORT 1.4, HDMI 2.1,<br />
      </>
    ),
    precio: 699.999,
    categoria: "PLACA DE VIDEO"
  },

];

function fetchProductos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
}

export default fetchProductos;
