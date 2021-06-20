
let userTitle = "";

// creating an array and passing the number, questions, options, and answers
let questions_1 = [
    {
    pics: "../image/question/huruf_vokal_asap.png",
    answer: "a",
    options: [
      "a",
      "i",
      "e",
      "o"
    ]
  },
    {
    pics: "../image/question/huruf_vokal_api.png",
    answer: "a",
    options: [
      "a",
      "u",
      "i",
      "e"
    ]
  },
    {
    pics: "../image/question/huruf_vokal_ayam.png",
    answer: "a",
    options: [
      "a",
      "e",
      "i",
      "o"
    ]
  },
    {
    pics: "../image/question/huruf_vokal_ayah.png",
    answer: "a",
    options: [
      "a",
      "u",
      "e",
      "i"
    ]
  },
     {
    pics: "../image/question/huruf_vokal_adik.png",
    answer: "a",
    options: [
      "a",
      "u",
      "e",
      "i"
    ]
  },
    {
    pics: "../image/question/huruf_vokal_abang.png",
    answer: "a",
    options: [
      "a",
      "u",
      "e",
      "i"
    ]
  },
    {
    pics: "../image/question/huruf_vokal_akar.png",
    answer: "a",
    options: [
      "a",
      "u",
      "e",
      "i"
    ]
  },
    {
    pics: "../image/question/huruf_vokal_air.png",
    answer: "a",
    options: [
      "a",
      "u",
      "e",
      "i"
    ]
  },
    {
    pics: "../image/question/huruf_vokal_itik.png",
    answer: "i",
    options: [
      "i",
      "u",
      "a",
      "e"
    ]
  },
    {
    pics: "../image/question/huruf_vokal_ikan.png",
    answer: "i",
    options: [
      "i",
      "o",
      "u",
      "a"
    ]
  },
    {
    pics: "../image/question/huruf_vokal_ibu.png",
    answer: "i",
    options: [
      "i",
      "e",
      "o",
      "u"
    ]
  },
    {
    pics: "../image/question/huruf_vokal_ubat.png",
    answer: "u",
    options: [
      "u",
      "a",
      "e",
      "i"
    ]
  },
    {
    pics: "../image/question/huruf_vokal_ubi.png",
    answer: "u",
    options: [
      "u",
      "o",
      "a",
      "e"
    ]
  },
    {
    pics: "../image/question/huruf_vokal_ukur.png",
    answer: "u",
    options: [
      "u",
      "i",
      "o",
      "a"
    ]
  },
    {
    pics: "../image/question/huruf_vokal_ular.png",
    answer: "u",
    options: [
      "u",
      "e",
      "i",
      "o"
    ]
  },
    {
    pics: "../image/question/huruf_vokal_ulat.png",
    answer: "u",
    options: [
      "u",
      "a",
      "e",
      "i"
    ]
  },
    {
    pics: "../image/question/huruf_vokal_udang.png",
    answer: "u",
    options: [
      "u",
      "a",
      "e",
      "i"
    ]
  },
    {
    pics: "../image/question/huruf_vokal_otak.png",
    answer: "o",
    options: [
      "o",
      "u",
      "a",
      "e"
    ]
  },
    {
    pics: "../image/question/huruf_vokal_otot.png",
    answer: "o",
    options: [
      "o",
      "i",
      "u",
      "a"
    ]
  },
    {
    pics: "../image/question/huruf_vokal_obor.png",
    answer: "o",
    options: [
      "o",
      "e",
      "i",
      "u"
    ]
  },
    {
    pics: "../image/question/huruf_vokal_oren.png",
    answer: "o",
    options: [
      "o",
      "a",
      "e",
      "i"
    ]
  },
    {
    pics: "../image/question/huruf_vokal_emak.png",
    answer: "e",
    options: [
      "e",
      "o",
      "u",
      "a"
    ]
  },
    {
    pics: "../image/question/huruf_vokal_emas.png",
    answer: "e",
    options: [
      "e",
      "i",
      "o",
      "u"
    ]
  },
    {
    pics: "../image/question/huruf_vokal_enam.png",
    answer: "e",
    options: [
      "e",
      "a",
      "i",
      "o"
    ]
  },
    {
    pics: "../image/question/huruf_vokal_epal.png",
    answer: "e",
    options: [
      "e",
      "u",
      "a",
      "i"
    ]
  },
    {
    pics: "../image/question/huruf_vokal_ekor.png",
    answer: "e",
    options: [
      "e",
      "a",
      "i",
      "o"
    ]
  },

  {
    pics: "../image/question/huruf_vokal_awan.png",
    answer: "a",
    options: [
      "a",
      "u",
      "e",
      "i"
    ]
  },
  // TODO
];


let questions_2 = [
  {
    pics: "../image/question/huruf_vokal_awan2.png",
    answer: "awan",
    options: [
      "asap",
      "itik",
      "emas",
      "awan"
    ]
  },
  {
    pics: "../image/question/huruf_vokal_asap2.png",
    answer: "asap",
    options: [
      "asap",
      "itik",
      "emas",
      "obor"
    ]
  },
    {
    pics: "../image/question/huruf_vokal_api2.png",
    answer: "api",
    options: [
      "api",
      "ukur",
      "ikan",
      "enam"
    ]
  },
    {
    pics: "../image/question/huruf_vokal_ayam2.png",
    answer: "ayam",
    options: [
      "ayam",
      "emak",
      "ibu",
      "otot"
    ]
  },
    {
    pics: "../image/question/huruf_vokal_ayah2.png",
    answer: "ayah",
    options: [
      "ayah",
      "ulat",
      "ekor",
      "ikan"
    ]
  },
     {
    pics: "../image/question/huruf_vokal_adik2.png",
    answer: "adik",
    options: [
      "adik",
      "ubi",
      "emak",
      "itik"
    ]
  },
    {
    pics: "../image/question/huruf_vokal_abang2.png",
    answer: "abang",
    options: [
      "abang",
      "ular",
      "enam",
      "ibu"
    ]
  },
    {
    pics: "../image/question/huruf_vokal_akar2.png",
    answer: "akar",
    options: [
      "akar",
      "udang",
      "emas",
      "ikan"
    ]
  },
    {
    pics: "../image/question/huruf_vokal_air2.png",
    answer: "air",
    options: [
      "air",
      "ular",
      "ayam",
      "itik"
    ]
  },
    {
    pics: "../image/question/huruf_vokal_itik2.png",
    answer: "itik",
    options: [
      "itik",
      "ulat",
      "api",
      "ikan"
    ]
  },
    {
    pics: "../image/question/huruf_vokal_ikan2.png",
    answer: "ikan",
    options: [
      "ikan",
      "otak",
      "ibu",
      "abang"
    ]
  },
    {
    pics: "../image/question/huruf_vokal_ibu2.png",
    answer: "ibu",
    options: [
      "ibu",
      "ekor",
      "oren",
      "itik"
    ]
  },
    {
    pics: "../image/question/huruf_vokal_ubat2.png",
    answer: "ubat",
    options: [
      "ubat",
      "ayah",
      "emas",
      "ukur"
    ]
  },
    {
    pics: "../image/question/huruf_vokal_ubi2.png",
    answer: "ubi",
    options: [
      "ubi",
      "obor",
      "adik",
      "ular"
    ]
  },
    {
    pics: "../image/question/huruf_vokal_ukur2.png",
    answer: "ukur",
    options: [
      "ukur",
      "udang",
      "enam",
      "akar"
    ]
  },
    {
    pics: "../image/question/huruf_vokal_ular2.png",
    answer: "ular",
    options: [
      "ular",
      "ubi",
      "itik",
      "oren"
    ]
  },
    {
    pics: "../image/question/huruf_vokal_ulat2.png",
    answer: "ulat",
    options: [
      "ulat",
      "ukur",
      "api",
      "ikan"
    ]
  },
    {
    pics: "../image/question/huruf_vokal_udang2.png",
    answer: "udang",
    options: [
      "udang",
      "asap",
      "ular",
      "emak"
    ]
  },
    {
    pics: "../image/question/huruf_vokal_otak2.png",
    answer: "otak",
    options: [
      "otak",
      "obor",
      "ayah",
      "ekor"
    ]
  },
    {
    pics: "../image/question/huruf_vokal_otot2.png",
    answer: "otot",
    options: [
      "otot",
      "oren",
      "ikan",
      "ayam"
    ]
  },
    {
    pics: "../image/question/huruf_vokal_obor2.png",
    answer: "obor",
    options: [
      "obor",
      "otak",
      "ibu",
      "ubat"
    ]
  },
    {
    pics: "../image/question/huruf_vokal_oren2.png",
    answer: "oren",
    options: [
      "oren",
      "otot",
      "epal",
      "adik"
    ]
  },
    {
    pics: "../image/question/huruf_vokal_emak2.png",
    answer: "emak",
    options: [
      "emak",
      "enam",
      "ubat",
      "abang"
    ]
  },
    {
    pics: "../image/question/huruf_vokal_emas2.png",
    answer: "emas",
    options: [
      "emas",
      "epal",
      "oren",
      "ubi"
    ]
  },
    {
    pics: "../image/question/huruf_vokal_enam2.png",
    answer: "enam",
    options: [
      "enam",
      "ekor",
      "itik",
      "ayah"
    ]
  },
    {
    pics: "../image/question/huruf_vokal_epal2.png",
    answer: "epal",
    options: [
      "epal",
      "ubat",
      "ukur",
      "akar"
    ]
  },
    {
    pics: "../image/question/huruf_vokal_ekor2.png",
    answer: "ekor",
    options: [
      "ekor",
      "air",
      "api",
      "oren"
    ]
  },

  // TODO
];
