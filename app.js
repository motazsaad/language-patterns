const examples = [
  {
    topic: "being", label: "Being & identity", title: "I am an engineer.",
    en: ["I am an engineer."], fr: ["Je suis ingénieur.", "Je suis ingénieure."], it: ["Sono ingegnere."],
    ar: ["أنا مُهَنْدِسٌ.", "أنا مُهَنْدِسَةٌ."], transliteration: "anā muhandis / muhandisa",
    note: "<strong>Arabic leaves out “am” and has no separate word for “a.”</strong> Literally, أنا مهندس is “I engineer.” A noun and its subject make a complete present-tense sentence; the pronoun أنا (I) is optional when context is clear. The profession changes for masculine and feminine."
  },
  {
    topic: "feelings", label: "Feelings & needs", title: "I am hungry.",
    en: ["I am hungry."], fr: ["J’ai faim."], it: ["Ho fame."],
    ar: ["أنا جائِعٌ.", "أنا جائِعَةٌ."], transliteration: "anā jāʾiʿ / jāʾiʿa",
    note: "<strong>English uses “be”; French and Italian use “have.”</strong> Literally: “I have hunger” — avoir faim / avere fame. Arabic usually describes the person as hungry (جائع / جائعة)."
  },
  {
    topic: "being", label: "Being & identity", title: "I am 20 years old.",
    en: ["I am 20 years old."], fr: ["J’ai 20 ans."], it: ["Ho 20 anni."],
    ar: ["عُمْرِي عِشْرُونَ سَنَةً."], transliteration: "ʿumrī ʿishrūna sanatan",
    note: "<strong>French and Italian say “I have 20 years.”</strong> Arabic’s common expression is “my age is 20 years.” Notice the singular noun سنة after the number."
  },
  {
    topic: "feelings", label: "Feelings & needs", title: "I am thirsty.",
    en: ["I am thirsty."], fr: ["J’ai soif."], it: ["Ho sete."],
    ar: ["أنا عَطْشانُ.", "أنا عَطْشى."], transliteration: "anā ʿaṭshān / ʿaṭshā",
    note: "<strong>French and Italian again use “have”</strong> (soif / sete). Arabic has adjective forms that differ by gender; dialects also have their own everyday expressions."
  },
  {
    topic: "feelings", label: "Feelings & needs", title: "I am cold.",
    en: ["I am cold."], fr: ["J’ai froid."], it: ["Ho freddo."],
    ar: ["أَشْعُرُ بِالبَرْدِ."], transliteration: "ashʿuru bil-bardi",
    note: "<strong>“I have cold”</strong> is the literal shape in French and Italian. Arabic can say “I feel the cold”; colloquially, expressions like بردان / بردانة are common."
  },
  {
    topic: "feelings", label: "Feelings & needs", title: "I am sleepy.",
    en: ["I am sleepy."], fr: ["J’ai sommeil."], it: ["Ho sonno."],
    ar: ["أَنا نَعْسانُ.", "أَنا نَعْسى."], transliteration: "anā naʿsān / naʿsā",
    note: "<strong>Another “have” expression:</strong> French and Italian literally say “I have sleep.” Arabic commonly uses an adjective, with masculine and feminine forms."
  },
  {
    topic: "feelings", label: "Feelings & needs", title: "I am afraid.",
    en: ["I am afraid."], fr: ["J’ai peur."], it: ["Ho paura."],
    ar: ["أَنا خائِفٌ.", "أَنا خائِفَةٌ."], transliteration: "anā khāʾif / khāʾifa",
    note: "<strong>“I have fear”</strong> is the French and Italian construction. Arabic commonly uses the adjective خائف / خائفة (afraid)."
  },
  {
    topic: "structure", label: "Sentence structure", title: "I like coffee.",
    en: ["I like coffee."], fr: ["J’aime le café."], it: ["Mi piace il caffè."],
    ar: ["أُحِبُّ القَهْوَةَ."], transliteration: "uḥibbu al-qahwata",
    note: "<strong>Italian flips the perspective:</strong> mi piace is closer to “coffee is pleasing to me.” The thing liked is grammatically the subject, so “I like books” becomes mi piacciono i libri."
  },
  {
    topic: "structure", label: "Sentence structure", title: "I miss you.",
    en: ["I miss you."], fr: ["Tu me manques."], it: ["Mi manchi."],
    ar: ["أَشْتاقُ إِلَيْكَ.", "أَشْتاقُ إِلَيْكِ."], transliteration: "ashtāqu ilayka / ilayki",
    note: "<strong>French and Italian reverse the roles:</strong> literally, “you are missing to me” (tu me manques / mi manchi). Arabic says “I long for you”; the final form differs for a male or female “you.”"
  },
  {
    topic: "being", label: "Being & identity", title: "I have a book.",
    en: ["I have a book."], fr: ["J’ai un livre."], it: ["Ho un libro."],
    ar: ["عِنْدِي كِتابٌ.", "لَدَيَّ كِتابٌ."], transliteration: "ʿindī kitāb / ladayya kitāb",
    note: "<strong>Arabic often expresses possession as “at me / with me.”</strong> عندي (ʿindī) is especially common in everyday speech; لديّ (ladayya) is more formal. There is no single verb matching English “have” in every use."
  },
  {
    topic: "everyday", label: "Everyday grammar", title: "I am eating.",
    en: ["I am eating."], fr: ["Je mange."], it: ["Sto mangiando."],
    ar: ["أنا آكُلُ الآنَ."], transliteration: "anā ākulu al-āna",
    note: "<strong>English marks an action in progress</strong> with “am + -ing.” French often uses its ordinary present (je mange); Italian has a progressive form (sto mangiando). Arabic can use the present with context or الآن (now); dialects may mark ongoing action differently."
  },
  {
    topic: "everyday", label: "Everyday grammar", title: "I speak Arabic.",
    en: ["I speak Arabic."], fr: ["Je parle arabe."], it: ["Parlo arabo."],
    ar: ["أَتَكَلَّمُ العَرَبِيَّةَ."], transliteration: "atakallamu al-ʿarabiyyata",
    note: "<strong>Subject pronouns behave differently.</strong> English and French normally say “I”; Italian often drops it because the verb ending identifies the speaker. Arabic also marks the subject on the verb, so أتكلم means “I speak” without أنا."
  },
  {
    topic: "everyday", label: "Everyday grammar", title: "I don’t understand.",
    en: ["I don’t understand."], fr: ["Je ne comprends pas."], it: ["Non capisco."],
    ar: ["لا أَفْهَمُ."], transliteration: "lā afhamu",
    note: "<strong>Negation takes a different shape.</strong> Standard French surrounds the verb with ne … pas (ne is often dropped in casual speech); Italian puts non before it. Standard Arabic uses لا before the present-tense verb."
  }
];

const languageNames = [
  ["en", "ENGLISH"],
  ["fr", "FRANÇAIS"],
  ["it", "ITALIANO"],
  ["ar", "العَرَبِيَّة"]
];
const cardsElement = document.querySelector("#cards");
const searchInput = document.querySelector("#search");
const filters = [...document.querySelectorAll(".filter")];
const emptyState = document.querySelector("#empty-state");
const resultCount = document.querySelector("#result-count");
let activeFilter = "all";

function render() {
  const query = searchInput.value.trim().toLocaleLowerCase();
  const visibleExamples = examples.filter((example) => {
    const text = `${example.title} ${example.en} ${example.fr} ${example.it} ${example.ar} ${example.transliteration} ${example.note}`.toLocaleLowerCase();
    return (activeFilter === "all" || example.topic === activeFilter) && text.includes(query);
  });

  cardsElement.innerHTML = visibleExamples.map((example) => {
    const number = String(examples.indexOf(example) + 1).padStart(2, "0");
    const translations = languageNames.map(([code, name]) => {
      const phrases = example[code].map((phrase) => `<span class="phrase" lang="${code}"${code === "ar" ? ' dir="rtl"' : ""}>${phrase}</span>`).join("");
      const transliteration = code === "ar" ? `<span class="transliteration">${example.transliteration}</span>` : "";
      return `<div class="translation"><span class="language-label">${name}</span>${phrases}${transliteration}</div>`;
    }).join("");

    return `<article class="card"><div class="card-top"><span class="card-topic">${example.label}</span><span class="card-number">${number} / ${String(examples.length).padStart(2, "0")}</span></div><h3>${example.title}</h3><div class="translations">${translations}</div><p class="card-note">${example.note}</p></article>`;
  }).join("");

  emptyState.hidden = visibleExamples.length > 0;
  resultCount.textContent = `${visibleExamples.length} ${visibleExamples.length === 1 ? "pattern" : "patterns"}`;
  const allFilter = filters.find((filter) => filter.dataset.filter === "all");
  allFilter.querySelector("span").textContent = examples.length;
}

filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    activeFilter = filter.dataset.filter;
    filters.forEach((button) => {
      const isActive = button === filter;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
    render();
  });
});

searchInput.addEventListener("input", render);
document.addEventListener("keydown", (event) => {
  if (event.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
    event.preventDefault();
    searchInput.focus();
  }
  if (event.key === "Escape" && document.activeElement === searchInput) {
    searchInput.value = "";
    render();
    searchInput.blur();
  }
});

render();
