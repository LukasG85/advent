/**
 * Found this on Stackoverflow https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
 * Shuffles array in place. ES6 version
 * @param {Array} a - An array containing the items.
 */
const shuffle = a => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

// Bad one-liners from https://onelinefun.com/christmas
export const hatchArray = [
  {
    id: "hatch-1",
    nr: 1,
    img: "./img/img1.jpg",
    text:
      "Tylko mając oczy otwarte, myśląc i obserwując, dostrzegasz, co się dzieje.",
    open: false
  },
  {
    id: "hatch-2",
    nr: 2,
    img: "./img/img2.jpg",
    text: "Pomagaj z serca, nie oczekując nagrody za okazaną pomoc.",
    open: false
  },
  {
    id: "hatch-3",
    nr: 3,
    img: "./img/img3.jpg",
    text:
      "Stać się tym, na kogo zostałeś stworzony, oznacza ostatecznie: stać się kompletnym, stać się integralną jednością i nieustannie się zmieniać.",
    open: false
  },
  {
    id: "hatch-4",
    nr: 4,
    img: "./img/img4.jpg",
    text:
      "Spełnienie się życzeń jest zarazem ich testem, sprawdzianem. Stawia duszę wobec pytania: czy naprawdę tego chciałem? Czy chciałem, by się to spełniło w taki sposób?",
    open: false
  },
  {
    id: "hatch-5",
    nr: 5,
    img: "./img/img5.jpg",
    text:
      "Mów sobie każdego ranka: „Jak wspaniale, że zyję! Cieszę się z tego i dziękuje za to”.",
    open: false
  },
  {
    id: "hatch-6",
    nr: 6,
    img: "./img/img6.jpg",
    text:
      "Na koniec każdego dnia zrób bilans: przez ile minut sam decydowałeś dzisiaj o swoim nastroju?",
    open: false
  },
  {
    id: "hatch-7",
    nr: 7,
    img: "./img/img7.jpg",
    text:
      "Każdy dzień jest drogocennym klejnotem. Przeżywaj go z dumą, wdzięcznością i radością. Spraw, żeby dookoła roztaczało się jego wyjątkowe piękno.",
    open: false
  },
  {
    id: "hatch-8",
    nr: 8,
    img: "./img/img8.jpg",
    text:
      "Bez względu na to, czy siedzisz, stoisz czy lezysz – nie garb się, nie chowaj głowy w ramionach, nie krzyżuj rąk, nie spuszczaj wzroku jak niewolnik czekający na chłostę. Pomyśl o Bogu, który stworzył cię na swój obraz, zauważ, jak piękna jest twoja postać.",
    open: false
  },
  {
    id: "hatch-9",
    nr: 9,
    img: "./img/img9.jpg",
    text:
      "Zgodnie z przysłowiem „darowanemu koniowi nie patrzy się w zęby”, a to znaczy, że podarunki należy przyjmować z wdzięcznością",
    open: false
  },
  {
    id: "hatch-10",
    nr: 10,
    img: "./img/img10.jpg",
    text:
      "Zastanów się, czy zdarza ci się otoczyć kogoś ramieniem i powiedzieć: „Pomogę ci to zrobić, żebyś uwierzył, że też potrafisz”.",
    open: false
  },
  {
    id: "hatch-11",
    nr: 11,
    img: "./img/img11.jpg",
    text:
      "Zrób porządek w swoim życiu, w swoich relacjach z innymi i swoich szufladach. Bałagan oznacza brak zainteresowania. Porządek jest formą miłości.",
    open: false
  },
  {
    id: "hatch-12",
    nr: 12,
    img: "./img/img12.jpg",
    text: "Zmierzaj w przyszłość zdecydowanym krokiem!",
    open: false
  },
  {
    id: "hatch-13",
    nr: 13,
    img: "./img/img13.jpg",
    text:
      "Naturalne zdolności, podobnie jak rośliny, wymagają starannej pielęgnacji.",
    open: false
  },
  {
    id: "hatch-14",
    nr: 14,
    img: "./img/img14.jpg",
    text: "Dzięki aktywności można wszystkiemu podołać.",
    open: false
  },
  {
    id: "hatch-15",
    nr: 15,
    img: "./img/img15.jpg",
    text:
      "Ludziom, których kochasz, powtarzaj że ich kochasz. Miłość żywi się dobrymi słowami.",
    open: false
  },
  {
    id: "hatch-16",
    nr: 16,
    img: "./img/img16.jpg",
    text:
      "Szukać prawdy, kochać piękno, chcieć dobra, czynić to, co najlepsze – oto zadanie i cel człowieka.",
    open: false
  },
  {
    id: "hatch-17",
    nr: 17,
    img: "./img/img17.jpg",
    text:
      "Chrystus jest: Drogą, która prowadzi nas do Ojca. Prawdą, która nas wyzwala. Życiem, które napełnia nas radością.",
    open: false
  },
  {
    id: "hatch-18",
    nr: 18,
    img: "./img/img18.jpg",
    text:
      "Ludzie, którzy tracą czas czekając, aż zaistnieją najbardziej sprzyjające warunki, nigdy nic nie zdziałają. Najlepszy czas na działanie jest teraz!",
    open: false
  },
  {
    id: "hatch-19",
    nr: 19,
    img: "./img/img19.jpg",
    text:
      "Jeśli nie czujesz się godny, by wyrosły Ci skrzydła, nigdy nie oderwiesz się od ziemi.",
    open: false
  },
  {
    id: "hatch-20",
    nr: 20,
    img: "./img/img20.jpg",
    text:
      "Przeciwności, z którymi musimy się zmierzyć, często sprawiają, że stajemy się silniejsi. A to, co dziś wydaje się stratą, jutro może okazać się zyskiem.",
    open: false
  },
  {
    id: "hatch-21",
    nr: 21,
    img: "./img/img21.jpg",
    text:
      "Nigdy nie rezygnuj z celu tylko dlatego, że osiągnięcie go wymaga czasu. Czas i tak upłynie.",
    open: false
  },
  {
    id: "hatch-22",
    nr: 22,
    img: "./img/img22.jpg",
    text:
      "Ludzie, którzy na tym świecie kroczą naprzód, wstają i szukają odpowiednich warunków, a jeśli ich nie mogą znaleźć, tworzą je.",
    open: false
  },
  {
    id: "hatch-23",
    nr: 23,
    img: "./img/img23.jpg",
    text: "Szczęście to jedyna rzecz, która się mnoży, gdy się ją dzieli.",
    open: false
  },
  {
    id: "hatch-24",
    nr: 24,
    img: "./img/img24.jpg",
    text:
      "Żadne zadanie nie jest szczególnie trudne, jeśli podzielisz je na mniejsze podzadania.",
    open: false
  }
];

export const createCalendar = () => shuffle(hatchArray);
