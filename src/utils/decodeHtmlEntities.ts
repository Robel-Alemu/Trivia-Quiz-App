function decodeHtmlEntities(htmlString: string): string {
  const entities: { [key: string]: string } = {
    amp: "&",
    lt: "<",
    gt: ">",
    quot: '"',
    apos: "'",
    nbsp: " ",
    iexcl: "¡",
    cent: "¢",
    pound: "£",
    curren: "¤",
    yen: "¥",
    brvbar: "¦",
    sect: "§",
    uml: "¨",
    copy: "©",
    ordf: "ª",
    laquo: "«",
    not: "¬",
    shy: "­",
    reg: "®",
    macr: "¯",
    deg: "°",
    plusmn: "±",
    sup2: "²",
    sup3: "³",
    acute: "´",
    micro: "µ",
    para: "¶",
    middot: "·",
    cedil: "¸",
    sup1: "¹",
    ordm: "º",
    raquo: "»",
    frac14: "¼",
    frac12: "½",
    frac34: "¾",
    iquest: "¿",
    Agrave: "À",
    Aacute: "Á",
    Acirc: "Â",
    Atilde: "Ã",
    Auml: "Ä",
    // Add more entities as needed
  };

  const namedEntityRegex = /&([a-zA-Z]+);/g;
  const numericEntityRegex = /&#(\d+);/g;

  // Replace named entities
  htmlString = htmlString.replace(namedEntityRegex, function (match, entity) {
    if (entities.hasOwnProperty(entity)) {
      return entities[entity];
    } else {
      return match;
    }
  });

  // Replace numeric entities
  htmlString = htmlString.replace(
    numericEntityRegex,
    function (match, entityCode) {
      const charCode = parseInt(entityCode, 10);
      return String.fromCharCode(charCode);
    }
  );

  return htmlString;
}
export default decodeHtmlEntities;
