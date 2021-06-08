
let userTitle = "";
let tabTitle  = "Huruf Vokal";

// creating an array and passing the number, questions, options, and answers
let questions = [
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

  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];