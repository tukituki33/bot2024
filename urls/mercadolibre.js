//fijarse en https://inmuebles.mercadolibre.com.ar/_PublishedToday_YES#filter
const urlsML = [
    {
        provincia: "Bs.As. Costa Atlántica",
        ciudadjson: "BsAsCA Aguas Verdes",
        ciudad: "Aguas Verdes",
        url: "https://inmuebles.mercadolibre.com.ar/bsas-costa-atlantica/aguas-verdes/_PublishedToday_YES"
    },
    {
        provincia: "Bs.As. Costa Atlántica",
        ciudadjson: "BsAsCA Cariló",
        ciudad: "Cariló",
        url: "https://inmuebles.mercadolibre.com.ar/bsas-costa-atlantica/carilo/_PublishedToday_YES"
    },
    {
        provincia: "Bs.As. Costa Atlántica",
        ciudadjson: "BsAsCA Chapadmalal",
        ciudad: "Chapadmalal",
        url: "https://inmuebles.mercadolibre.com.ar/bsas-costa-atlantica/chapadmalal/_PublishedToday_YES"
    },
    {
        provincia: "Bs.As. Costa Atlántica",
        ciudadjson: "BsAsCA Costa Azul",
        ciudad: "Costa Azul",
        url: "https://inmuebles.mercadolibre.com.ar/bsas-costa-atlantica/costa-azul/_PublishedToday_YES"
    },
    {
        provincia: "Bs.As. Costa Atlántica",
        ciudadjson: "BsAsCA Costa Chica",
        ciudad: "Costa Chica",
        url: "https://inmuebles.mercadolibre.com.ar/bsas-costa-atlantica/costa-chica/_PublishedToday_YES"
    },
    {
        provincia: "Bs.As. Costa Atlántica",
        ciudadjson: "BsAsCA Costa del Este",
        ciudad: "Costa del Este",
        url: "https://inmuebles.mercadolibre.com.ar/bsas-costa-atlantica/costa-del-este/_PublishedToday_YES"
    },
    {
        provincia: "Bs.As. Costa Atlántica",
        ciudadjson: "BsAsCA Costa Esmeralda",
        ciudad: "Costa Esmeralda",
        url: "https://inmuebles.mercadolibre.com.ar/bsas-costa-atlantica/costa-esmeralda/_PublishedToday_YES"
    },
    {
        provincia: "Bs.As. Costa Atlántica",
        ciudadjson: "BsAsCA La Lucila del Mar",
        ciudad: "La Lucila del Mar",
        url: "https://inmuebles.mercadolibre.com.ar/bsas-costa-atlantica/la-lucila-del-mar/_PublishedToday_YES"
    },
    {
        provincia: "Bs.As. Costa Atlántica",
        ciudadjson: "BsAsCA Las Toninas",
        ciudad: "Las Toninas",
        url: "https://inmuebles.mercadolibre.com.ar/bsas-costa-atlantica/las-toninas/_PublishedToday_YES"
    },
    {
        provincia: "Bs.As. Costa Atlántica",
        ciudadjson: "BsAsCA Mar Azul",
        ciudad: "Mar Azul",
        url: "https://inmuebles.mercadolibre.com.ar/bsas-costa-atlantica/mar-azul/_PublishedToday_YES"
    },
    {
        provincia: "Bs.As. Costa Atlántica",
        ciudadjson: "BsAsCA Mar de Ajo",
        ciudad: "Mar de Ajo",
        url: "https://inmuebles.mercadolibre.com.ar/bsas-costa-atlantica/mar-de-ajo/_PublishedToday_YES"
    },
    {
        provincia: "Bs.As. Costa Atlántica",
        ciudadjson: "BsAsCA Mar de las Pampas",
        ciudad: "Mar de las Pampas",
        url: "https://inmuebles.mercadolibre.com.ar/bsas-costa-atlantica/mar-de-las-pampas/_PublishedToday_YES"
    },
    {
        provincia: "Bs.As. Costa Atlántica",
        ciudadjson: "BsAsCA Mar del Plata",
        ciudad: "Mar del Plata",
        url: "https://inmuebles.mercadolibre.com.ar/bsas-costa-atlantica/mar-del-plata/_PublishedToday_YES"
    },
    {
        provincia: "Bs.As. Costa Atlántica",
        ciudadjson: "BsAsCA Mar del Sur",
        ciudad: "Mar del Sur",
        url: "https://inmuebles.mercadolibre.com.ar/bsas-costa-atlantica/mar-del-sur/_PublishedToday_YES"
    },
    {
        provincia: "Bs.As. Costa Atlántica",
        ciudadjson: "BsAsCA Mar del Tuyú",
        ciudad: "Mar del Tuyú",
        url: "https://inmuebles.mercadolibre.com.ar/bsas-costa-atlantica/mar-del-tuyu/_PublishedToday_YES"
    },
    {
        provincia: "Bs.As. Costa Atlántica",
        ciudadjson: "BsAsCA Miramar",
        ciudad: "Miramar",
        url: "https://inmuebles.mercadolibre.com.ar/bsas-costa-atlantica/miramar/_PublishedToday_YES"
    },
    {
        provincia: "Bs.As. Costa Atlántica",
        ciudadjson: "BsAsCA Necochea",
        ciudad: "Necochea",
        url: "https://inmuebles.mercadolibre.com.ar/bsas-costa-atlantica/necochea/_PublishedToday_YES"
    },
    {
        provincia: "Bs.As. Costa Atlántica",
        ciudadjson: "BsAsCA Nueva Atlantis",
        ciudad: "Nueva Atlantis",
        url: "https://inmuebles.mercadolibre.com.ar/bsas-costa-atlantica/nueva-atlantis/_PublishedToday_YES"
    },
    {
        provincia: "Bs.As. Costa Atlántica",
        ciudadjson: "BsAsCA Ostende",
        ciudad: "Ostende",
        url: "https://inmuebles.mercadolibre.com.ar/bsas-costa-atlantica/ostende/_PublishedToday_YES"
    },
    {
        provincia: "Bs.As. Costa Atlántica",
        ciudadjson: "BsAsCA Pinamar",
        ciudad: "Pinamar",
        url: "https://inmuebles.mercadolibre.com.ar/bsas-costa-atlantica/pinamar/_PublishedToday_YES"
    },
    {
        provincia: "Bs.As. Costa Atlántica",
        ciudadjson: "BsAsCA Punta Médanos",
        ciudad: "Punta Médanos",
        url: "https://inmuebles.mercadolibre.com.ar/bsas-costa-atlantica/punta-medanos/_PublishedToday_YES"
    },
    {
        provincia: "Bs.As. Costa Atlántica",
        ciudadjson: "BsAsCA San Bernardo",
        ciudad: "San Bernardo",
        url: "https://inmuebles.mercadolibre.com.ar/bsas-costa-atlantica/san-bernardo/_PublishedToday_YES"
    },
    {
        provincia: "Bs.As. Costa Atlántica",
        ciudadjson: "BsAsCA San Clemente",
        ciudad: "San Clemente",
        url: "https://inmuebles.mercadolibre.com.ar/bsas-costa-atlantica/san-clemente/_PublishedToday_YES"
    },
    {
        provincia: "Bs.As. Costa Atlántica",
        ciudadjson: "BsAsCA Santa Clara del Mar",
        ciudad: "Santa Clara del Mar",
        url: "https://inmuebles.mercadolibre.com.ar/bsas-costa-atlantica/santa-clara-del-mar/_PublishedToday_YES"
    },
    {
        provincia: "Bs.As. Costa Atlántica",
        ciudadjson: "BsAsCA Santa Teresita",
        ciudad: "Santa Teresita",
        url: "https://inmuebles.mercadolibre.com.ar/bsas-costa-atlantica/santa-teresita/_PublishedToday_YES"
    },
    {
        provincia: "Bs.As. Costa Atlántica",
        ciudadjson: "BsAsCA Valeria del Mar",
        ciudad: "Valeria del Mar",
        url: "https://inmuebles.mercadolibre.com.ar/bsas-costa-atlantica/valeria-del-mar/_PublishedToday_YES"
    },
    {
        provincia: "Bs.As. Costa Atlántica",
        ciudadjson: "BsAsCA Villa Gesell",
        ciudad: "Villa Gesell",
        url: "https://inmuebles.mercadolibre.com.ar/bsas-costa-atlantica/villa-gesell/_PublishedToday_YES"
    },
    {
        provincia: "Bs.As. Costa Atlántica",
        ciudadjson: "BsAsCA Villa Robles",
        ciudad: "Villa Robles",
        url: "https://inmuebles.mercadolibre.com.ar/bsas-costa-atlantica/villa-robles/_PublishedToday_YES"
    },
    {
        provincia: "Bs.As. G.B.A. Norte",
        ciudadjson: "BsAsN Beccar",
        ciudad: "Beccar",
        url: "https://inmuebles.mercadolibre.com.ar/bsas-gba-norte/beccar/_PublishedToday_YES"
    },
    {
        provincia: "Bs.As. G.B.A. Norte",
        ciudadjson: "BsAsN Del Viso",
        ciudad: "Del Viso",
        url: "https://inmuebles.mercadolibre.com.ar/bsas-gba-norte/del-viso/_PublishedToday_YES"
    },
    {
        provincia: "Bs.As. G.B.A. Norte",
        ciudadjson: "BsAsN Escobar",
        ciudad: "Escobar",
        url: "https://inmuebles.mercadolibre.com.ar/bsas-gba-norte/escobar/_PublishedToday_YES"
    },
    {
        provincia: "Bs.As. G.B.A. Norte",
        ciudadjson: "BsAsN General San Martín",
        ciudad: "General San Martín",
        url: "https://inmuebles.mercadolibre.com.ar/bsas-gba-norte/general-san-martin/_PublishedToday_YES"
    },
    {
        provincia: "Bs.As. G.B.A. Norte",
        ciudadjson: "BsAsN José C. Paz",
        ciudad: "José C. Paz",
        url: "https://inmuebles.mercadolibre.com.ar/bsas-gba-norte/jose-c-paz/_PublishedToday_YES"
    },
    {
        provincia: "Bs.As. G.B.A. Norte",
        ciudadjson: "BsAsN Malvinas Argentinas",
        ciudad: "Malvinas Argentinas",
        url: "https://inmuebles.mercadolibre.com.ar/bsas-gba-norte/malvinas-argentinas/_PublishedToday_YES"
    },
    {
        provincia: "Bs.As. G.B.A. Norte",
        ciudadjson: "BsAsN Pilar",
        ciudad: "Pilar",
        url: "https://inmuebles.mercadolibre.com.ar/bsas-gba-norte/pilar/_PublishedToday_YES"
    },
    {
        provincia: "Bs.As. G.B.A. Norte",
        ciudadjson: "BsAsN San Fernando",
        ciudad: "San Fernando",
        url: "https://inmuebles.mercadolibre.com.ar/bsas-gba-norte/san-fernando/_PublishedToday_YES"
    },
    {
        provincia: "Bs.As. G.B.A. Norte",
        ciudadjson: "BsAsN San Isidro",
        ciudad: "San Isidro",
        url: "https://inmuebles.mercadolibre.com.ar/bsas-gba-norte/san-isidro/_PublishedToday_YES"
    },
    {
        provincia: "Bs.As. G.B.A. Norte",
        ciudadjson: "BsAsN San Miguel",
        ciudad: "San Miguel",
        url: "https://inmuebles.mercadolibre.com.ar/bsas-gba-norte/san-miguel/_PublishedToday_YES"
    },
    {
        provincia: "Bs.As. G.B.A. Norte",
        ciudadjson: "BsAsN Tigre",
        ciudad: "Tigre",
        url: "https://inmuebles.mercadolibre.com.ar/bsas-gba-norte/tigre/_PublishedToday_YES"
    },
    {
        provincia: "Bs.As. G.B.A. Norte",
        ciudadjson: "BsAsN Vicente López",
        ciudad: "Vicente López",
        url: "https://inmuebles.mercadolibre.com.ar/bsas-gba-norte/vicente-lopez/_PublishedToday_YES"
    },
    {
        provincia: "Bs.As. G.B.A. Oeste",
        ciudadjson: "BsAsO Caseros",
        ciudad: "Caseros",
        url: "https://inmuebles.mercadolibre.com.ar/bsas-gba-oeste/caseros/_PublishedToday_YES"
    },
    {
        provincia: "Bs.As. G.B.A. Oeste",
        ciudadjson: "BsAsO Castelar",
        ciudad: "Castelar",
        url: "https://inmuebles.mercadolibre.com.ar/bsas-gba-oeste/castelar/_PublishedToday_YES"
    },
    {
        provincia: "Bs.As. G.B.A. Oeste",
        ciudadjson: "BsAsO General Rodríguez",
        ciudad: "General Rodríguez",
        url: "https://inmuebles.mercadolibre.com.ar/bsas-gba-oeste/general-rodriguez/_PublishedToday_YES"
    },
    {
        provincia: "Bs.As. G.B.A. Oeste",
        ciudadjson: "BsAsO Hurlingham",
        ciudad: "Hurlingham",
        url: "https://inmuebles.mercadolibre.com.ar/bsas-gba-oeste/hurlingham/_PublishedToday_YES"
    },
    {
        provincia: "Bs.As. G.B.A. Oeste",
        ciudadjson: "BsAsO Ituzaingó",
        ciudad: "Ituzaingó",
        url: "https://inmuebles.mercadolibre.com.ar/bsas-gba-oeste/ituzaingo/_PublishedToday_YES"
    },
    {
        provincia: "Bs.As. G.B.A. Oeste",
        ciudadjson: "BsAsO La Matanza",
        ciudad: "La Matanza",
        url: "https://inmuebles.mercadolibre.com.ar/bsas-gba-oeste/la-matanza/_PublishedToday_YES"
    },
    {
        provincia: "Bs.As. G.B.A. Oeste",
        ciudadjson: "BsAsO Merlo",
        ciudad: "Merlo",
        url: "https://inmuebles.mercadolibre.com.ar/bsas-gba-oeste/merlo/_PublishedToday_YES"
    },
    {
        provincia: "Bs.As. G.B.A. Oeste",
        ciudadjson: "BsAsO Moreno",
        ciudad: "Moreno",
        url: "https://inmuebles.mercadolibre.com.ar/bsas-gba-oeste/moreno/_PublishedToday_YES"
    },
    {
        provincia: "Bs.As. G.B.A. Oeste",
        ciudadjson: "BsAsO Morón",
        ciudad: "Morón",
        url: "https://inmuebles.mercadolibre.com.ar/bsas-gba-oeste/moron/_PublishedToday_YES"
    },
    {
        provincia: "Bs.As. G.B.A. Oeste",
        ciudadjson: "BsAsO Tres de febrero",
        ciudad: "Tres de febrero",
        url: "https://inmuebles.mercadolibre.com.ar/bsas-gba-oeste/tres-de-febrero/_PublishedToday_YES"
    },
    {
        provincia: "Bs.As. G.B.A. Sur",
        ciudadjson: "BsAsS Almirante Brown",
        ciudad: "Almirante Brown",
        url: "https://inmuebles.mercadolibre.com.ar/bsas-gba-sur/almirante-brown/_PublishedToday_YES"
    },
    {
        provincia: "Bs.As. G.B.A. Sur",
        ciudadjson: "BsAsS Avellaneda",
        ciudad: "Avellaneda",
        url: "https://inmuebles.mercadolibre.com.ar/bsas-gba-sur/avellaneda/_PublishedToday_YES"
    },
    {
        provincia: "Bs.As. G.B.A. Sur",
        ciudadjson: "BsAsS Berazategui",
        ciudad: "Berazategui",
        url: "https://inmuebles.mercadolibre.com.ar/bsas-gba-sur/berazategui/_PublishedToday_YES"
    },
    {
        provincia: "Bs.As. G.B.A. Sur",
        ciudadjson: "BsAsS Esteban Echeverría",
        ciudad: "Esteban Echeverría",
        url: "https://inmuebles.mercadolibre.com.ar/bsas-gba-sur/esteban-echeverria/_PublishedToday_YES"
    },
    {
        provincia: "Bs.As. G.B.A. Sur",
        ciudadjson: "BsAsS Ezeiza",
        ciudad: "Ezeiza",
        url: "https://inmuebles.mercadolibre.com.ar/bsas-gba-sur/ezeiza/_PublishedToday_YES"
    },
    {
        provincia: "Bs.As. G.B.A. Sur",
        ciudadjson: "BsAsS Florencio Varela",
        ciudad: "Florencio Varela",
        url: "https://inmuebles.mercadolibre.com.ar/bsas-gba-sur/florencio-varela/_PublishedToday_YES"
    },
    {
        provincia: "Bs.As. G.B.A. Sur",
        ciudadjson: "BsAsS La Plata",
        ciudad: "La Plata",
        url: "https://inmuebles.mercadolibre.com.ar/bsas-gba-sur/la-plata/_PublishedToday_YES"
    },
    {
        provincia: "Bs.As. G.B.A. Sur",
        ciudadjson: "BsAsS Lanús",
        ciudad: "Lanús",
        url: "https://inmuebles.mercadolibre.com.ar/bsas-gba-sur/lanus/_PublishedToday_YES"
    },
    {
        provincia: "Bs.As. G.B.A. Sur",
        ciudadjson: "BsAsS Lomas de Zamora",
        ciudad: "Lomas de Zamora",
        url: "https://inmuebles.mercadolibre.com.ar/bsas-gba-sur/lomas-de-zamora/_PublishedToday_YES"
    },
    {
        provincia: "Bs.As. G.B.A. Sur",
        ciudadjson: "BsAsS Presidente Perón",
        ciudad: "Presidente Perón",
        url: "https://inmuebles.mercadolibre.com.ar/bsas-gba-sur/presidente-peron/_PublishedToday_YES"
    },
    {
        provincia: "Bs.As. G.B.A. Sur",
        ciudadjson: "BsAsS Quilmes",
        ciudad: "Quilmes",
        url: "https://inmuebles.mercadolibre.com.ar/bsas-gba-sur/quilmes/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI 25 de Mayo",
        ciudad: "25 de Mayo",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/25-de-mayo/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI 9 de Julio",
        ciudad: "9 de Julio",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/9-de-julio/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Arrecifes",
        ciudad: "Arrecifes",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/arrecifes/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Azul",
        ciudad: "Azul",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/azul/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Bahía Blanca",
        ciudad: "Bahía Blanca",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/bahia-blanca/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Baradero",
        ciudad: "Baradero",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/baradero/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Balcarce",
        ciudad: "Balcarce",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/balcarce/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Benito Juárez",
        ciudad: "Benito Juárez",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/benito-juarez/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Berisso",
        ciudad: "Berisso",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/berisso/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Bolívar",
        ciudad: "Bolívar",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/bolivar/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Bragado",
        ciudad: "Bragado",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/bragado/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Brandsen",
        ciudad: "Brandsen",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/brandsen/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Campana",
        ciudad: "Campana",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/campana/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Cañuelas",
        ciudad: "Cañuelas",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/canuelas/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Capitán Sarmiento",
        ciudad: "Capitán Sarmiento",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/capitan-sarmiento/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Carmen de Areco",
        ciudad: "Carmen de Areco",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/carmen-de-areco/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Chascomús",
        ciudad: "Chascomús",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/chascomus/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Chivilcoy",
        ciudad: "Chivilcoy",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/chivilcoy/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Coronel Rosales",
        ciudad: "Coronel Rosales",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/coronel-rosales/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Coronel Dorrego",
        ciudad: "Coronel Dorrego",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/coronel-dorrego/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Dolores",
        ciudad: "Dolores",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/dolores/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Ensenada",
        ciudad: "Ensenada",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/ensenada/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Exaltación de la Cruz",
        ciudad: "Exaltación de la Cruz",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/exaltacion-de-la-cruz/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI General Alvear",
        ciudad: "General Alvear",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/general-alvear/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI General Alvarado",
        ciudad: "General Alvarado",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/general-alvarado/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI General Belgrano",
        ciudad: "General Belgrano",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/general-belgrano/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI General Las Heras",
        ciudad: "General Las Heras",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/general-las-heras/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI General Lavalle",
        ciudad: "General Lavalle",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/general-lavalle/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI General Madariaga",
        ciudad: "General Madariaga",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/general-madariaga/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI General Paz",
        ciudad: "General Paz",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/general-paz/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI General Pueyrredón",
        ciudad: "General Pueyrredón",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/general-pueyrredon/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI General Rodríguez",
        ciudad: "General Rodríguez",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/general-rodriguez/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Hipólito Yrigoyen",
        ciudad: "Hipólito Yrigoyen",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/hipolito-yrigoyen/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Junín",
        ciudad: "Junín",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/junin/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI La Plata",
        ciudad: "La Plata",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/la-plata/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Lincoln",
        ciudad: "Lincoln",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/lincoln/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Lobería",
        ciudad: "Lobería",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/loberia/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Lobos",
        ciudad: "Lobos",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/lobos/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Luján",
        ciudad: "Luján",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/lujan/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Magdalena",
        ciudad: "Magdalena",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/magdalena/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Maipú",
        ciudad: "Maipú",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/maipu/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Mar Chiquita",
        ciudad: "Mar Chiquita",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/mar-chiquita/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Marcos Paz",
        ciudad: "Marcos Paz",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/marcos-paz/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Mercedes",
        ciudad: "Mercedes",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/mercedes/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Monte",
        ciudad: "Monte",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/monte/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Monte Hermoso",
        ciudad: "Monte Hermoso",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/monte-hermoso/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Navarro",
        ciudad: "Navarro",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/navarro/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Necochea",
        ciudad: "Necochea",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/necochea/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Olavarría",
        ciudad: "Olavarría",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/olavarria/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Patagones",
        ciudad: "Patagones",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/patagones/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Pehuajó",
        ciudad: "Pehuajó",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/pehuajo/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Pergamino",
        ciudad: "Pergamino",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/pergamino/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Pila",
        ciudad: "Pila",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/pila/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Punta Indio",
        ciudad: "Punta Indio",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/punta-indio/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Ramallo",
        ciudad: "Ramallo",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/ramallo/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Ranchos",
        ciudad: "Ranchos",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/ranchos/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Roque Pérez",
        ciudad: "Roque Pérez",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/roque-perez/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Saavedra",
        ciudad: "Saavedra",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/saavedra/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Saladillo",
        ciudad: "Saladillo",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/saladillo/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Salto",
        ciudad: "Salto",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/salto/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI San Andrés de Giles",
        ciudad: "San Andrés de Giles",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/san-andres-de-giles/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI San Antonio de Areco",
        ciudad: "San Antonio de Areco",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/san-antonio-de-areco/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI San Nicolás",
        ciudad: "San Nicolás",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/san-nicolas/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI San Pedro",
        ciudad: "San Pedro",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/san-pedro/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI San Vicente",
        ciudad: "San Vicente",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/san-vicente/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Tandil",
        ciudad: "Tandil",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/tandil/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Tornquist",
        ciudad: "Tornquist",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/tornquist/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Trenque Lauquen",
        ciudad: "Trenque Lauquen",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/trenque-lauquen/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Tres Arroyos",
        ciudad: "Tres Arroyos",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/tres-arroyos/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Villarino",
        ciudad: "Villarino",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/villarino/_PublishedToday_YES"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Zárate",
        ciudad: "Zárate",
        url: "https://inmuebles.mercadolibre.com.ar/buenos-aires-interior/zarate/_PublishedToday_YES"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Almagro",
        ciudad: "Almagro",
        url: "https://inmuebles.mercadolibre.com.ar/capital-federal/almagro/_PublishedToday_YES"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Agronomía",
        ciudad: "Agronomía",
        url: "https://inmuebles.mercadolibre.com.ar/capital-federal/agronomia/_PublishedToday_YES"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Balvanera",
        ciudad: "Balvanera",
        url: "https://inmuebles.mercadolibre.com.ar/capital-federal/balvanera/_PublishedToday_YES"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Barracas",
        ciudad: "Barracas",
        url: "https://inmuebles.mercadolibre.com.ar/capital-federal/barracas/_PublishedToday_YES"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Barrio Norte",
        ciudad: "Barrio Norte",
        url: "https://inmuebles.mercadolibre.com.ar/capital-federal/barrio-norte/_PublishedToday_YES"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Belgrano",
        ciudad: "Belgrano",
        url: "https://inmuebles.mercadolibre.com.ar/capital-federal/belgrano/_PublishedToday_YES"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Belgrano Barrancas",
        ciudad: "Belgrano Barrancas",
        url: "https://inmuebles.mercadolibre.com.ar/capital-federal/belgrano-barrancas/_PublishedToday_YES"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Belgrano Chico",
        ciudad: "Belgrano Chico",
        url: "https://inmuebles.mercadolibre.com.ar/capital-federal/belgrano-chico/_PublishedToday_YES"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Belgrano C",
        ciudad: "Belgrano C",
        url: "https://inmuebles.mercadolibre.com.ar/capital-federal/belgrano-c/_PublishedToday_YES"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Belgrano R",
        ciudad: "Belgrano R",
        url: "https://inmuebles.mercadolibre.com.ar/capital-federal/belgrano-r/_PublishedToday_YES"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Boedo",
        ciudad: "Boedo",
        url: "https://inmuebles.mercadolibre.com.ar/capital-federal/boedo/_PublishedToday_YES"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Botánico",
        ciudad: "Botánico",
        url: "https://inmuebles.mercadolibre.com.ar/capital-federal/botanico/_PublishedToday_YES"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Caballito",
        ciudad: "Caballito",
        url: "https://inmuebles.mercadolibre.com.ar/capital-federal/caballito/_PublishedToday_YES"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Chacarita",
        ciudad: "Chacarita",
        url: "https://inmuebles.mercadolibre.com.ar/capital-federal/chacarita/_PublishedToday_YES"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Coghlan",
        ciudad: "Coghlan",
        url: "https://inmuebles.mercadolibre.com.ar/capital-federal/coghlan/_PublishedToday_YES"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Colegiales",
        ciudad: "Colegiales",
        url: "https://inmuebles.mercadolibre.com.ar/capital-federal/colegiales/_PublishedToday_YES"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Congreso",
        ciudad: "Congreso",
        url: "https://inmuebles.mercadolibre.com.ar/capital-federal/congreso/_PublishedToday_YES"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Constitución",
        ciudad: "Constitución",
        url: "https://inmuebles.mercadolibre.com.ar/capital-federal/constitucion/_PublishedToday_YES"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Flores",
        ciudad: "Flores",
        url: "https://inmuebles.mercadolibre.com.ar/capital-federal/flores/_PublishedToday_YES"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Floresta",
        ciudad: "Floresta",
        url: "https://inmuebles.mercadolibre.com.ar/capital-federal/floresta/_PublishedToday_YES"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF La Boca",
        ciudad: "La Boca",
        url: "https://inmuebles.mercadolibre.com.ar/capital-federal/la-boca/_PublishedToday_YES"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Las Cañitas",
        ciudad: "Las Cañitas",
        url: "https://inmuebles.mercadolibre.com.ar/capital-federal/las-canitas/_PublishedToday_YES"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Liniers",
        ciudad: "Liniers",
        url: "https://inmuebles.mercadolibre.com.ar/capital-federal/liniers/_PublishedToday_YES"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Mataderos",
        ciudad: "Mataderos",
        url: "https://inmuebles.mercadolibre.com.ar/capital-federal/mataderos/_PublishedToday_YES"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Monserrat",
        ciudad: "Monserrat",
        url: "https://inmuebles.mercadolibre.com.ar/capital-federal/monserrat/_PublishedToday_YES"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Monte Castro",
        ciudad: "Monte Castro",
        url: "https://inmuebles.mercadolibre.com.ar/capital-federal/monte-castro/_PublishedToday_YES"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Nueva Pompeya",
        ciudad: "Nueva Pompeya",
        url: "https://inmuebles.mercadolibre.com.ar/capital-federal/nueva-pompeya/_PublishedToday_YES"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Núñez",
        ciudad: "Núñez",
        url: "https://inmuebles.mercadolibre.com.ar/capital-federal/nunez/_PublishedToday_YES"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Once",
        ciudad: "Once",
        url: "https://inmuebles.mercadolibre.com.ar/capital-federal/once/_PublishedToday_YES"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Palermo",
        ciudad: "Palermo",
        url: "https://inmuebles.mercadolibre.com.ar/capital-federal/palermo/_PublishedToday_YES"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Palermo Chico",
        ciudad: "Palermo Chico",
        url: "https://inmuebles.mercadolibre.com.ar/capital-federal/palermo-chico/_PublishedToday_YES"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Palermo Hollywood",
        ciudad: "Palermo Hollywood",
        url: "https://inmuebles.mercadolibre.com.ar/capital-federal/palermo-hollywood/_PublishedToday_YES"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Palermo Nuevo",
        ciudad: "Palermo Nuevo",
        url: "https://inmuebles.mercadolibre.com.ar/capital-federal/palermo-nuevo/_PublishedToday_YES"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Palermo Soho",
        ciudad: "Palermo Soho",
        url: "https://inmuebles.mercadolibre.com.ar/capital-federal/palermo-soho/_PublishedToday_YES"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Palermo viejo",
        ciudad: "Palermo viejo",
        url: "https://inmuebles.mercadolibre.com.ar/capital-federal/palermo-viejo/_PublishedToday_YES"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Parque Avellaneda",
        ciudad: "Parque Avellaneda",
        url: "https://inmuebles.mercadolibre.com.ar/capital-federal/parque-avellaneda/_PublishedToday_YES"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Parque Centenario",
        ciudad: "Parque Centenario",
        url: "https://inmuebles.mercadolibre.com.ar/capital-federal/parque-centenario/_PublishedToday_YES"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Parque Chacabuco",
        ciudad: "Parque Chacabuco",
        url: "https://inmuebles.mercadolibre.com.ar/capital-federal/parque-chacabuco/_PublishedToday_YES"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Parque Chas",
        ciudad: "Parque Chas",
        url: "https://inmuebles.mercadolibre.com.ar/capital-federal/parque-chas/_PublishedToday_YES"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Parque Patricios",
        ciudad: "Parque Patricios",
        url: "https://inmuebles.mercadolibre.com.ar/capital-federal/parque-patricios/_PublishedToday_YES"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Paternal",
        ciudad: "Paternal",
        url: "https://inmuebles.mercadolibre.com.ar/capital-federal/paternal/_PublishedToday_YES"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Puerto Madero",
        ciudad: "Puerto Madero",
        url: "https://inmuebles.mercadolibre.com.ar/capital-federal/puerto-madero/_PublishedToday_YES"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Recoleta",
        ciudad: "Recoleta",
        url: "https://inmuebles.mercadolibre.com.ar/capital-federal/recoleta/_PublishedToday_YES"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Retiro",
        ciudad: "Retiro",
        url: "https://inmuebles.mercadolibre.com.ar/capital-federal/retiro/_PublishedToday_YES"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Saavedra",
        ciudad: "Saavedra",
        url: "https://inmuebles.mercadolibre.com.ar/capital-federal/saavedra/_PublishedToday_YES"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF San Cristóbal",
        ciudad: "San Cristóbal",
        url: "https://inmuebles.mercadolibre.com.ar/capital-federal/san-cristobal/_PublishedToday_YES"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF San Nicolás",
        ciudad: "San Nicolás",
        url: "https://inmuebles.mercadolibre.com.ar/capital-federal/san-nicolas/_PublishedToday_YES"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF San Telmo",
        ciudad: "San Telmo",
        url: "https://inmuebles.mercadolibre.com.ar/capital-federal/san-telmo/_PublishedToday_YES"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Santa Rita",
        ciudad: "Santa Rita",
        url: "https://inmuebles.mercadolibre.com.ar/capital-federal/santa-rita/_PublishedToday_YES"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Velez Sarsfield",
        ciudad: "Velez Sarsfield",
        url: "https://inmuebles.mercadolibre.com.ar/capital-federal/velez-sarsfield/_PublishedToday_YES"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Versalles",
        ciudad: "Versalles",
        url: "https://inmuebles.mercadolibre.com.ar/capital-federal/versalles/_PublishedToday_YES"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Villa Crespo",
        ciudad: "Villa Crespo",
        url: "https://inmuebles.mercadolibre.com.ar/capital-federal/villa-crespo/_PublishedToday_YES"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Villa del Parque",
        ciudad: "Villa del Parque",
        url: "https://inmuebles.mercadolibre.com.ar/capital-federal/villa-del-parque/_PublishedToday_YES"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Villa Devoto",
        ciudad: "Villa Devoto",
        url: "https://inmuebles.mercadolibre.com.ar/capital-federal/villa-devoto/_PublishedToday_YES"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Villa Gral. Mitre",
        ciudad: "Villa Gral. Mitre",
        url: "https://inmuebles.mercadolibre.com.ar/capital-federal/villa-gral-mitre/_PublishedToday_YES"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Villa Lugano",
        ciudad: "Villa Lugano",
        url: "https://inmuebles.mercadolibre.com.ar/capital-federal/villa-lugano/_PublishedToday_YES"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Villa Luro",
        ciudad: "Villa Luro",
        url: "https://inmuebles.mercadolibre.com.ar/capital-federal/villa-luro/_PublishedToday_YES"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Villa Ortúzar",
        ciudad: "Villa Ortúzar",
        url: "https://inmuebles.mercadolibre.com.ar/capital-federal/villa-ortuzar/_PublishedToday_YES"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Villa Pueyrredón",
        ciudad: "Villa Pueyrredón",
        url: "https://inmuebles.mercadolibre.com.ar/capital-federal/villa-pueyrredon/_PublishedToday_YES"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Villa Real",
        ciudad: "Villa Real",
        url: "https://inmuebles.mercadolibre.com.ar/capital-federal/villa-real/_PublishedToday_YES"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Villa Riachuelo",
        ciudad: "Villa Riachuelo",
        url: "https://inmuebles.mercadolibre.com.ar/capital-federal/villa-riachuelo/_PublishedToday_YES"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Villa Soldati",
        ciudad: "Villa Soldati",
        url: "https://inmuebles.mercadolibre.com.ar/capital-federal/villa-soldati/_PublishedToday_YES"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Villa Urquiza",
        ciudad: "Villa Urquiza",
        url: "https://inmuebles.mercadolibre.com.ar/capital-federal/villa-urquiza/_PublishedToday_YES"
    },
    {
        provincia: "Catamarca",
        ciudadjson: "Catamarca Ambato",
        ciudad: "Ambato",
        url: "https://inmuebles.mercadolibre.com.ar/catamarca/ambato/_PublishedToday_YES"
    },
    {
        provincia: "Catamarca",
        ciudadjson: "Catamarca Capayán",
        ciudad: "Capayán",
        url: "https://inmuebles.mercadolibre.com.ar/catamarca/capayan/_PublishedToday_YES"
    },
    {
        provincia: "Catamarca",
        ciudadjson: "Catamarca Santa Rosa",
        ciudad: "Santa Rosa",
        url: "https://inmuebles.mercadolibre.com.ar/catamarca/santa-rosa/_PublishedToday_YES"
    },
    {
        provincia: "Catamarca",
        ciudadjson: "Catamarca San Fernando del Valle de Catamarca",
        ciudad: "San Fernando del Valle de Catamarca",
        url: "https://inmuebles.mercadolibre.com.ar/catamarca/san-fernando-del-valle-de-catamarca/_PublishedToday_YES"
    },
    {
        provincia: "Catamarca",
        ciudadjson: "Catamarca Valle Viejo",
        ciudad: "Valle Viejo",
        url: "https://inmuebles.mercadolibre.com.ar/catamarca/valle-viejo/_PublishedToday_YES"
    },
    {
        provincia: "Catamarca",
        ciudadjson: "Catamarca Tinogasta",
        ciudad: "Tinogasta",
        url: "https://inmuebles.mercadolibre.com.ar/catamarca/tinogasta/_PublishedToday_YES"
    },
    {
        provincia: "Chaco",
        ciudadjson: "Chaco Santa Rosa",
        ciudad: "Santa Rosa",
        url: "https://inmuebles.mercadolibre.com.ar/chaco/santa-rosa/_PublishedToday_YES"
    },
    {
        provincia: "Chaco",
        ciudadjson: "Chaco Resistencia",
        ciudad: "Resistencia",
        url: "https://inmuebles.mercadolibre.com.ar/chaco/resistencia/_PublishedToday_YES"
    },
    {
        provincia: "Chubut",
        ciudadjson: "Chubut Futaleufú",
        ciudad: "Futaleufú",
        url: "https://inmuebles.mercadolibre.com.ar/chubut/futaleufu/_PublishedToday_YES"
    },
    {
        provincia: "Chubut",
        ciudadjson: "Chubut Cushamen",
        ciudad: "Cushamen",
        url: "https://inmuebles.mercadolibre.com.ar/chubut/cushamen/_PublishedToday_YES"
    },
    {
        provincia: "Chubut",
        ciudadjson: "Chubut Escalante",
        ciudad: "Escalante",
        url: "https://inmuebles.mercadolibre.com.ar/chubut/escalante/_PublishedToday_YES"
    },
    {
        provincia: "Chubut",
        ciudadjson: "Chubut Biedma",
        ciudad: "Biedma",
        url: "https://inmuebles.mercadolibre.com.ar/chubut/biedma/_PublishedToday_YES"
    },
    {
        provincia: "Chubut",
        ciudadjson: "Chubut Rawson",
        ciudad: "Rawson",
        url: "https://inmuebles.mercadolibre.com.ar/chubut/rawson/_PublishedToday_YES"
    },
    {
        provincia: "Córdoba",
        ciudadjson: "Córdoba Alta Gracia",
        ciudad: "Alta Gracia",
        url: "https://inmuebles.mercadolibre.com.ar/cordoba/alta-gracia/_PublishedToday_YES"
    },
    {
        provincia: "Córdoba",
        ciudadjson: "Córdoba Bialet Massé",
        ciudad: "Bialet Massé",
        url: "https://inmuebles.mercadolibre.com.ar/cordoba/bialet-masse/_PublishedToday_YES"
    },
    {
        provincia: "Córdoba",
        ciudadjson: "Córdoba Calamuchita",
        ciudad: "Calamuchita",
        url: "https://inmuebles.mercadolibre.com.ar/cordoba/calamuchita/_PublishedToday_YES"
    },
    {
        provincia: "Córdoba",
        ciudadjson: "Córdoba Colón",
        ciudad: "Colón",
        url: "https://inmuebles.mercadolibre.com.ar/cordoba/colon/_PublishedToday_YES"
    },
    {
        provincia: "Córdoba",
        ciudadjson: "Córdoba Córdoba",
        ciudad: "Córdoba",
        url: "https://inmuebles.mercadolibre.com.ar/cordoba/cordoba/_PublishedToday_YES"
    },
    {
        provincia: "Córdoba",
        ciudadjson: "Córdoba Cosquín",
        ciudad: "Cosquín",
        url: "https://inmuebles.mercadolibre.com.ar/cordoba/cosquin/_PublishedToday_YES"
    },
    {
        provincia: "Córdoba",
        ciudadjson: "Córdoba Cruz del Eje",
        ciudad: "Cruz del Eje",
        url: "https://inmuebles.mercadolibre.com.ar/cordoba/cruz-del-eje/_PublishedToday_YES"
    },
    {
        provincia: "Córdoba",
        ciudadjson: "Córdoba Juárez Celman",
        ciudad: "Juárez Celman",
        url: "https://inmuebles.mercadolibre.com.ar/cordoba/juarez-celman/_PublishedToday_YES"
    },
    {
        provincia: "Córdoba",
        ciudadjson: "Córdoba La Bolsa",
        ciudad: "La Bolsa",
        url: "https://inmuebles.mercadolibre.com.ar/cordoba/la-bolsa/_PublishedToday_YES"
    },
    {
        provincia: "Córdoba",
        ciudadjson: "Córdoba La Calera",
        ciudad: "La Calera",
        url: "https://inmuebles.mercadolibre.com.ar/cordoba/la-calera/_PublishedToday_YES"
    },
    {
        provincia: "Córdoba",
        ciudadjson: "Córdoba La Falda",
        ciudad: "La Falda",
        url: "https://inmuebles.mercadolibre.com.ar/cordoba/la-falda/_PublishedToday_YES"
    },
    {
        provincia: "Córdoba",
        ciudadjson: "Córdoba Malagueño",
        ciudad: "Malagueño",
        url: "https://inmuebles.mercadolibre.com.ar/cordoba/malagueno/_PublishedToday_YES"
    },
    {
        provincia: "Córdoba",
        ciudadjson: "Córdoba Potrero de Garay",
        ciudad: "Potrero de Garay",
        url: "https://inmuebles.mercadolibre.com.ar/cordoba/potrero-de-garay/_PublishedToday_YES"
    },
    {
        provincia: "Córdoba",
        ciudadjson: "Córdoba Punilla",
        ciudad: "Punilla",
        url: "https://inmuebles.mercadolibre.com.ar/cordoba/punilla/_PublishedToday_YES"
    },
    {
        provincia: "Córdoba",
        ciudadjson: "Córdoba Río Ceballos",
        ciudad: "Río Ceballos",
        url: "https://inmuebles.mercadolibre.com.ar/cordoba/rio-ceballos/_PublishedToday_YES"
    },
    {
        provincia: "Córdoba",
        ciudadjson: "Córdoba Río Cuarto",
        ciudad: "Río Cuarto",
        url: "https://inmuebles.mercadolibre.com.ar/cordoba/rio-cuarto/_PublishedToday_YES"
    },
    {
        provincia: "Córdoba",
        ciudadjson: "Córdoba Río Segundo",
        ciudad: "Río Segundo",
        url: "https://inmuebles.mercadolibre.com.ar/cordoba/rio-segundo/_PublishedToday_YES"
    },
    {
        provincia: "Córdoba",
        ciudadjson: "Córdoba San Alberto",
        ciudad: "San Alberto",
        url: "https://inmuebles.mercadolibre.com.ar/cordoba/san-alberto/_PublishedToday_YES"
    },
    {
        provincia: "Córdoba",
        ciudadjson: "Córdoba San Javier",
        ciudad: "San Javier",
        url: "https://inmuebles.mercadolibre.com.ar/cordoba/san-javier/_PublishedToday_YES"
    },
    {
        provincia: "Córdoba",
        ciudadjson: "Córdoba Santa María",
        ciudad: "Santa María",
        url: "https://inmuebles.mercadolibre.com.ar/cordoba/santa-maria/_PublishedToday_YES"
    },
    {
        provincia: "Córdoba",
        ciudadjson: "Córdoba Santa Rosa de Calamuchita",
        ciudad: "Santa Rosa de Calamuchita",
        url: "https://inmuebles.mercadolibre.com.ar/cordoba/santa-rosa-de-calamuchita/_PublishedToday_YES"
    },
    {
        provincia: "Córdoba",
        ciudadjson: "Córdoba Unión",
        ciudad: "Unión",
        url: "https://inmuebles.mercadolibre.com.ar/cordoba/union/_PublishedToday_YES"
    },
    {
        provincia: "Córdoba",
        ciudadjson: "Córdoba Tercero Arriba",
        ciudad: "Tercero Arriba",
        url: "https://inmuebles.mercadolibre.com.ar/cordoba/tercero-arriba/_PublishedToday_YES"
    },
    {
        provincia: "Córdoba",
        ciudadjson: "Córdoba Villa Allende",
        ciudad: "Villa Allende",
        url: "https://inmuebles.mercadolibre.com.ar/cordoba/villa-allende/_PublishedToday_YES"
    },
    {
        provincia: "Córdoba",
        ciudadjson: "Córdoba Villa Carlos Paz",
        ciudad: "Villa Carlos Paz",
        url: "https://inmuebles.mercadolibre.com.ar/cordoba/villa-carlos-paz/_PublishedToday_YES"
    },
    {
        provincia: "Córdoba",
        ciudadjson: "Córdoba Villa General Belgrano",
        ciudad: "Villa General Belgrano",
        url: "https://inmuebles.mercadolibre.com.ar/cordoba/villa-general-belgrano/_PublishedToday_YES"
    },
    {
        provincia: "Córdoba",
        ciudadjson: "Córdoba Villa María",
        ciudad: "Villa María",
        url: "https://inmuebles.mercadolibre.com.ar/cordoba/villa-maria/_PublishedToday_YES"
    },
    {
        provincia: "Corrientes",
        ciudadjson: "Corrientes Goya",
        ciudad: "Goya",
        url: "https://inmuebles.mercadolibre.com.ar/corrientes/goya/_PublishedToday_YES"
    },
    {
        provincia: "Corrientes",
        ciudadjson: "Corrientes Corrientes",
        ciudad: "Corrientes",
        url: "https://inmuebles.mercadolibre.com.ar/corrientes/corrientes/_PublishedToday_YES"
    },
    {
        provincia: "Corrientes",
        ciudadjson: "Corrientes Esquina",
        ciudad: "Esquina",
        url: "https://inmuebles.mercadolibre.com.ar/corrientes/esquina/_PublishedToday_YES"
    },
    {
        provincia: "Corrientes",
        ciudadjson: "Corrientes Ituzaingó",
        ciudad: "Ituzaingó",
        url: "https://inmuebles.mercadolibre.com.ar/corrientes/ituzaingo/_PublishedToday_YES"
    },
    {
        provincia: "Corrientes",
        ciudadjson: "Corrientes Lavalle",
        ciudad: "Lavalle",
        url: "https://inmuebles.mercadolibre.com.ar/corrientes/lavalle/_PublishedToday_YES"
    },
    {
        provincia: "Entre Ríos",
        ciudadjson: "Entre Ríos Paraná",
        ciudad: "Paraná",
        url: "https://inmuebles.mercadolibre.com.ar/entre-rios/parana/_PublishedToday_YES"
    },
    {
        provincia: "Entre Ríos",
        ciudadjson: "Entre Ríos Victoria",
        ciudad: "Victoria",
        url: "https://inmuebles.mercadolibre.com.ar/entre-rios/victoria/_PublishedToday_YES"
    },
    {
        provincia: "Entre Ríos",
        ciudadjson: "Entre Ríos Gualeguaychú",
        ciudad: "Gualeguaychú",
        url: "https://inmuebles.mercadolibre.com.ar/entre-rios/gualeguaychu/_PublishedToday_YES"
    },
    {
        provincia: "Entre Ríos",
        ciudadjson: "Entre Ríos Colón",
        ciudad: "Colón",
        url: "https://inmuebles.mercadolibre.com.ar/entre-rios/colon/_PublishedToday_YES"
    },
    {
        provincia: "Entre Ríos",
        ciudadjson: "Entre Ríos Islas del Ibicuy",
        ciudad: "Islas del Ibicuy",
        url: "https://inmuebles.mercadolibre.com.ar/entre-rios/islas-del-ibicuy/_PublishedToday_YES"
    },
    {
        provincia: "Entre Ríos",
        ciudadjson: "Entre Ríos Diamante",
        ciudad: "Diamante",
        url: "https://inmuebles.mercadolibre.com.ar/entre-rios/diamante/_PublishedToday_YES"
    },
    {
        provincia: "Entre Ríos",
        ciudadjson: "Entre Ríos Nogoyá",
        ciudad: "Nogoyá",
        url: "https://inmuebles.mercadolibre.com.ar/entre-rios/nogoya/_PublishedToday_YES"
    },
    {
        provincia: "Entre Ríos",
        ciudadjson: "Entre Ríos Federación",
        ciudad: "Federación",
        url: "https://inmuebles.mercadolibre.com.ar/entre-rios/federacion/_PublishedToday_YES"
    },
    {
        provincia: "Entre Ríos",
        ciudadjson: "Entre Ríos Rosario del Tala",
        ciudad: "Rosario del Tala",
        url: "https://inmuebles.mercadolibre.com.ar/entre-rios/rosario-del-tala/_PublishedToday_YES"
    },
    {
        provincia: "Entre Ríos",
        ciudadjson: "Entre Ríos Libertador San Martín",
        ciudad: "Libertador San Martín",
        url: "https://inmuebles.mercadolibre.com.ar/entre-rios/libertador-san-martin/_PublishedToday_YES"
    },
    {
        provincia: "Entre Ríos",
        ciudadjson: "Entre Ríos C. del Uruguay",
        ciudad: "C. del Uruguay",
        url: "https://inmuebles.mercadolibre.com.ar/entre-rios/c-del-uruguay/_PublishedToday_YES"
    },
    {
        provincia: "Jujuy",
        ciudadjson: "Jujuy San Salvador de Jujuy",
        ciudad: "San Salvador de Jujuy",
        url: "https://inmuebles.mercadolibre.com.ar/jujuy/san-salvador-de-jujuy/_PublishedToday_YES"
    },
    {
        provincia: "Jujuy",
        ciudadjson: "Jujuy San Antonio",
        ciudad: "San Antonio",
        url: "https://inmuebles.mercadolibre.com.ar/jujuy/san-antonio/_PublishedToday_YES"
    },
    {
        provincia: "La Pampa",
        ciudadjson: "La Pampa Santa Rosa",
        ciudad: "Santa Rosa",
        url: "https://inmuebles.mercadolibre.com.ar/la-pampa/santa-rosa/_PublishedToday_YES"
    },
    {
        provincia: "La Pampa",
        ciudadjson: "La Pampa Toay",
        ciudad: "Toay",
        url: "https://inmuebles.mercadolibre.com.ar/la-pampa/toay/_PublishedToday_YES"
    },
    {
        provincia: "Mendoza",
        ciudadjson: "Mendoza San Rafael",
        ciudad: "San Rafael",
        url: "https://inmuebles.mercadolibre.com.ar/mendoza/san-rafael/_PublishedToday_YES"
    },
    {
        provincia: "Mendoza",
        ciudadjson: "Mendoza General Alvear",
        ciudad: "General Alvear",
        url: "https://inmuebles.mercadolibre.com.ar/mendoza/general-alvear/_PublishedToday_YES"
    },
    {
        provincia: "Mendoza",
        ciudadjson: "Mendoza Mendoza",
        ciudad: "Mendoza",
        url: "https://inmuebles.mercadolibre.com.ar/mendoza/mendoza/_PublishedToday_YES"
    },
    {
        provincia: "Mendoza",
        ciudadjson: "Mendoza Godoy Cruz",
        ciudad: "Godoy Cruz",
        url: "https://inmuebles.mercadolibre.com.ar/mendoza/godoy-cruz/_PublishedToday_YES"
    },
    {
        provincia: "Mendoza",
        ciudadjson: "Mendoza Lavalle",
        ciudad: "Lavalle",
        url: "https://inmuebles.mercadolibre.com.ar/mendoza/Lavalle/_PublishedToday_YES"
    },
    {
        provincia: "Mendoza",
        ciudadjson: "Mendoza Luján de Cuyo",
        ciudad: "Luján de Cuyo",
        url: "https://inmuebles.mercadolibre.com.ar/mendoza/lujan-de-cuyo/_PublishedToday_YES"
    },
    {
        provincia: "Mendoza",
        ciudadjson: "Mendoza Guaymallén",
        ciudad: "Guaymallén",
        url: "https://inmuebles.mercadolibre.com.ar/mendoza/guaymallen/_PublishedToday_YES"
    },
    {
        provincia: "Mendoza",
        ciudadjson: "Mendoza Maipú",
        ciudad: "Maipú",
        url: "https://inmuebles.mercadolibre.com.ar/mendoza/maipu/_PublishedToday_YES"
    },
    {
        provincia: "Mendoza",
        ciudadjson: "Mendoza Las Heras",
        ciudad: "Las Heras",
        url: "https://inmuebles.mercadolibre.com.ar/mendoza/las-heras/_PublishedToday_YES"
    },
    {
        provincia: "Mendoza",
        ciudadjson: "Mendoza Malargüe",
        ciudad: "Malargüe",
        url: "https://inmuebles.mercadolibre.com.ar/mendoza/malargue/_PublishedToday_YES"
    },
    {
        provincia: "Mendoza",
        ciudadjson: "Mendoza Tunuyán",
        ciudad: "Tunuyán",
        url: "https://inmuebles.mercadolibre.com.ar/mendoza/tunuyan/_PublishedToday_YES"
    },
    {
        provincia: "Mendoza",
        ciudadjson: "Mendoza Rivadavia",
        ciudad: "Rivadavia",
        url: "https://inmuebles.mercadolibre.com.ar/mendoza/rivadavia/_PublishedToday_YES"
    },
    {
        provincia: "Mendoza",
        ciudadjson: "Mendoza San Martín",
        ciudad: "San Martín",
        url: "https://inmuebles.mercadolibre.com.ar/mendoza/san-martin/_PublishedToday_YES"
    },
    {
        provincia: "Misiones",
        ciudadjson: "Misiones Posadas",
        ciudad: "Posadas",
        url: "https://inmuebles.mercadolibre.com.ar/misiones/posadas/_PublishedToday_YES"
    },
    {
        provincia: "Misiones",
        ciudadjson: "Misiones Cainguás",
        ciudad: "Cainguás",
        url: "https://inmuebles.mercadolibre.com.ar/misiones/cainguas/_PublishedToday_YES"
    },
    {
        provincia: "Misiones",
        ciudadjson: "Misiones Iguazú",
        ciudad: "Iguazú",
        url: "https://inmuebles.mercadolibre.com.ar/misiones/iguazu/_PublishedToday_YES"
    },
    {
        provincia: "Misiones",
        ciudadjson: "Misiones Oberá",
        ciudad: "Oberá",
        url: "https://inmuebles.mercadolibre.com.ar/misiones/obera/_PublishedToday_YES"
    },
    {
        provincia: "Misiones",
        ciudadjson: "Misiones General Manuel Belgrano",
        ciudad: "General Manuel Belgrano",
        url: "https://inmuebles.mercadolibre.com.ar/misiones/general-manuel-belgrano/_PublishedToday_YES"
    },
    {
        provincia: "Misiones",
        ciudadjson: "Misiones Garupá",
        ciudad: "Garupá",
        url: "https://inmuebles.mercadolibre.com.ar/misiones/garupa/_PublishedToday_YES"
    },
    {
        provincia: "Neuquén",
        ciudadjson: "Neuquén Añelo",
        ciudad: "Añelo",
        url: "https://inmuebles.mercadolibre.com.ar/neuquen/anelo/_PublishedToday_YES"
    },
    {
        provincia: "Neuquén",
        ciudadjson: "Neuquén Arroyito",
        ciudad: "Arroyito",
        url: "https://inmuebles.mercadolibre.com.ar/neuquen/Arroyito/_PublishedToday_YES"
    },
    {
        provincia: "Neuquén",
        ciudadjson: "Neuquén San Martin de los Andes",
        ciudad: "San Martin de los Andes",
        url: "https://inmuebles.mercadolibre.com.ar/neuquen/san-martin-de-los-andes/_PublishedToday_YES"
    },
    {
        provincia: "Neuquén",
        ciudadjson: "Neuquén Neuquén",
        ciudad: "Neuquén",
        url: "https://inmuebles.mercadolibre.com.ar/neuquen/neuquen/_PublishedToday_YES"
    },
    {
        provincia: "Neuquén",
        ciudadjson: "Neuquén Aluminé",
        ciudad: "Aluminé",
        url: "https://inmuebles.mercadolibre.com.ar/neuquen/alumine/_PublishedToday_YES"
    },
    {
        provincia: "Neuquén",
        ciudadjson: "Neuquén Huiliches",
        ciudad: "Huiliches",
        url: "https://inmuebles.mercadolibre.com.ar/neuquen/huiliches/_PublishedToday_YES"
    },
    {
        provincia: "Neuquén",
        ciudadjson: "Neuquén Picún Leufú",
        ciudad: "Picún Leufú",
        url: "https://inmuebles.mercadolibre.com.ar/neuquen/picun-leufu/_PublishedToday_YES"
    },
    {
        provincia: "Neuquén",
        ciudadjson: "Neuquén Los Lagos",
        ciudad: "Los Lagos",
        url: "https://inmuebles.mercadolibre.com.ar/neuquen/los-lagos/_PublishedToday_YES"
    },
    {
        provincia: "Neuquén",
        ciudadjson: "Neuquén Zapala",
        ciudad: "Zapala",
        url: "https://inmuebles.mercadolibre.com.ar/neuquen/zapala/_PublishedToday_YES"
    },
    {
        provincia: "Neuquén",
        ciudadjson: "Neuquén Plottier",
        ciudad: "Plottier",
        url: "https://inmuebles.mercadolibre.com.ar/neuquen/plottier/_PublishedToday_YES"
    },
    {
        provincia: "Neuquén",
        ciudadjson: "Neuquén Confluencia",
        ciudad: "Confluencia",
        url: "https://inmuebles.mercadolibre.com.ar/neuquen/confluencia/_PublishedToday_YES"
    },
    {
        provincia: "Neuquén",
        ciudadjson: "Neuquén Lácar",
        ciudad: "Lácar",
        url: "https://inmuebles.mercadolibre.com.ar/neuquen/lacar/_PublishedToday_YES"
    },
    {
        provincia: "Neuquén",
        ciudadjson: "Neuquén Villa La Angostura",
        ciudad: "Villa La Angostura",
        url: "https://inmuebles.mercadolibre.com.ar/neuquen/villa-la-angostura/_PublishedToday_YES"
    },
    {
        provincia: "Río Negro",
        ciudadjson: "Río Negro Bariloche",
        ciudad: "Bariloche",
        url: "https://inmuebles.mercadolibre.com.ar/rio-negro/bariloche/_PublishedToday_YES"
    },
    {
        provincia: "Río Negro",
        ciudadjson: "Río Negro Pilcaniyeu",
        ciudad: "Pilcaniyeu",
        url: "https://inmuebles.mercadolibre.com.ar/rio-negro/pilcaniyeu/_PublishedToday_YES"
    },
    {
        provincia: "Río Negro",
        ciudadjson: "Río Negro Cipolletti",
        ciudad: "Cipolletti",
        url: "https://inmuebles.mercadolibre.com.ar/rio-negro/cipolletti/_PublishedToday_YES"
    },
    {
        provincia: "Río Negro",
        ciudadjson: "Río Negro El Bolsón",
        ciudad: "El Bolsón",
        url: "https://inmuebles.mercadolibre.com.ar/rio-negro/el-bolson/_PublishedToday_YES"
    },
    {
        provincia: "Río Negro",
        ciudadjson: "Río Negro General Roca",
        ciudad: "General Roca",
        url: "https://inmuebles.mercadolibre.com.ar/rio-negro/general-roca/_PublishedToday_YES"
    },
    {
        provincia: "Río Negro",
        ciudadjson: "Río Negro San Antonio",
        ciudad: "San Antonio",
        url: "https://inmuebles.mercadolibre.com.ar/rio-negro/san-antonio/_PublishedToday_YES"
    },
    {
        provincia: "Río Negro",
        ciudadjson: "Río Negro El Cuy",
        ciudad: "El Cuy",
        url: "https://inmuebles.mercadolibre.com.ar/rio-negro/el-cuy/_PublishedToday_YES"
    },
    {
        provincia: "Salta",
        ciudadjson: "Salta Salta",
        ciudad: "Salta",
        url: "https://inmuebles.mercadolibre.com.ar/salta/salta/_PublishedToday_YES"
    },
    {
        provincia: "Salta",
        ciudadjson: "Salta La Caldera",
        ciudad: "La Caldera",
        url: "https://inmuebles.mercadolibre.com.ar/salta/la-caldera/_PublishedToday_YES"
    },
    {
        provincia: "Salta",
        ciudadjson: "Salta Cafayate",
        ciudad: "Cafayate",
        url: "https://inmuebles.mercadolibre.com.ar/salta/cafayate/_PublishedToday_YES"
    },
    {
        provincia: "Salta",
        ciudadjson: "Salta Rosario de Lerma",
        ciudad: "Rosario de Lerma",
        url: "https://inmuebles.mercadolibre.com.ar/salta/rosario-de-lerma/_PublishedToday_YES"
    },
    {
        provincia: "San Luis",
        ciudadjson: "San Luis Junín",
        ciudad: "Junín",
        url: "https://inmuebles.mercadolibre.com.ar/san-luis/junin/_PublishedToday_YES"
    },
    {
        provincia: "San Luis",
        ciudadjson: "San Luis San Luis",
        ciudad: "San Luis",
        url: "https://inmuebles.mercadolibre.com.ar/san-luis/san-luis/_PublishedToday_YES"
    },
    {
        provincia: "San Luis",
        ciudadjson: "San Luis Ayacucho",
        ciudad: "Ayacucho",
        url: "https://inmuebles.mercadolibre.com.ar/san-luis/ayacucho/_PublishedToday_YES"
    },
    {
        provincia: "San Luis",
        ciudadjson: "San Luis Chacabuco",
        ciudad: "Chacabuco",
        url: "https://inmuebles.mercadolibre.com.ar/san-luis/chacabuco/_PublishedToday_YES"
    },
    {
        provincia: "San Luis",
        ciudadjson: "San Luis Coronel Pringles",
        ciudad: "Coronel Pringles",
        url: "https://inmuebles.mercadolibre.com.ar/san-luis/coronel-pringles/_PublishedToday_YES"
    },
    {
        provincia: "Santa Fe",
        ciudadjson: "Santa Fe 9 de Julio",
        ciudad: "9 de Julio",
        url: "https://inmuebles.mercadolibre.com.ar/santa-fe/9-de-julio/_PublishedToday_YES"
    },
    {
        provincia: "Santa Fe",
        ciudadjson: "Santa Fe Castellanos",
        ciudad: "Castellanos",
        url: "https://inmuebles.mercadolibre.com.ar/santa-fe/castellanos/_PublishedToday_YES"
    },
    {
        provincia: "Santa Fe",
        ciudadjson: "Santa Fe Constitución",
        ciudad: "Constitución",
        url: "https://inmuebles.mercadolibre.com.ar/santa-fe/constitucion/_PublishedToday_YES"
    },
    {
        provincia: "Santa Fe",
        ciudadjson: "Santa Fe General Obligado",
        ciudad: "General Obligado",
        url: "https://inmuebles.mercadolibre.com.ar/santa-fe/general-obligado/_PublishedToday_YES"
    },
    {
        provincia: "Santa Fe",
        ciudadjson: "Santa Fe General López",
        ciudad: "General López",
        url: "https://inmuebles.mercadolibre.com.ar/santa-fe/general-lopez/_PublishedToday_YES"
    },
    {
        provincia: "Santa Fe",
        ciudadjson: "Santa Fe Iriondo",
        ciudad: "Iriondo",
        url: "https://inmuebles.mercadolibre.com.ar/santa-fe/iriondo/_PublishedToday_YES"
    },
    {
        provincia: "Santa Fe",
        ciudadjson: "Santa Fe Las Colonias",
        ciudad: "Las Colonias",
        url: "https://inmuebles.mercadolibre.com.ar/santa-fe/las-colonias/_PublishedToday_YES"
    },
    {
        provincia: "Santa Fe",
        ciudadjson: "Santa Fe Garay",
        ciudad: "Garay",
        url: "https://inmuebles.mercadolibre.com.ar/santa-fe/garay/_PublishedToday_YES"
    },
    {
        provincia: "Santa Fe",
        ciudadjson: "Santa Fe Funes",
        ciudad: "Funes",
        url: "https://inmuebles.mercadolibre.com.ar/santa-fe/funes/_PublishedToday_YES"
    },
    {
        provincia: "Santa Fe",
        ciudadjson: "Santa Fe San Jerónimo",
        ciudad: "San Jerónimo",
        url: "https://inmuebles.mercadolibre.com.ar/santa-fe/san-jeronimo/_PublishedToday_YES"
    },
    {
        provincia: "Santa Fe",
        ciudadjson: "Santa Fe Rosario",
        ciudad: "Rosario",
        url: "https://inmuebles.mercadolibre.com.ar/santa-fe/rosario/_PublishedToday_YES"
    },
    {
        provincia: "Santa Fe",
        ciudadjson: "Santa Fe Santo Tomé",
        ciudad: "Santo Tomé",
        url: "https://inmuebles.mercadolibre.com.ar/santa-fe/santo-tome/_PublishedToday_YES"
    },
    {
        provincia: "Santa Fe",
        ciudadjson: "Santa Fe Santa Fe capital",
        ciudad: "Santa Fe capital",
        url: "https://inmuebles.mercadolibre.com.ar/santa-fe/santa-fe-capital/_PublishedToday_YES"
    },
    {
        provincia: "Santa Fe",
        ciudadjson: "Santa Fe San Lorenzo",
        ciudad: "San Lorenzo",
        url: "https://inmuebles.mercadolibre.com.ar/santa-fe/san-lorenzo/_PublishedToday_YES"
    },
    {
        provincia: "Santa Fe",
        ciudadjson: "Santa Fe Reconquista",
        ciudad: "Reconquista",
        url: "https://inmuebles.mercadolibre.com.ar/santa-fe/reconquista/_PublishedToday_YES"
    },
    {
        provincia: "Santa Fe",
        ciudadjson: "Santa Fe Vera",
        ciudad: "Vera",
        url: "https://inmuebles.mercadolibre.com.ar/santa-fe/vera/_PublishedToday_YES"
    },
    {
        provincia: "San Juan",
        ciudadjson: "San Juan San Juan Capital",
        ciudad: "San Juan Capital",
        url: "https://inmuebles.mercadolibre.com.ar/san-juan/san-juan-capital/_PublishedToday_YES"
    },
    {
        provincia: "San Juan",
        ciudadjson: "San Juan Iglesia",
        ciudad: "Iglesia",
        url: "https://inmuebles.mercadolibre.com.ar/san-juan/iglesia/_PublishedToday_YES"
    },
    {
        provincia: "San Juan",
        ciudadjson: "San Juan Rawson",
        ciudad: "Rawson",
        url: "https://inmuebles.mercadolibre.com.ar/san-juan/rawson/_PublishedToday_YES"
    },
    {
        provincia: "San Juan",
        ciudadjson: "San Juan Pocito",
        ciudad: "Pocito",
        url: "https://inmuebles.mercadolibre.com.ar/san-juan/pocito/_PublishedToday_YES"
    },
    {
        provincia: "San Juan",
        ciudadjson: "San Juan Santa Lucía",
        ciudad: "Santa Lucía",
        url: "https://inmuebles.mercadolibre.com.ar/san-juan/santa-lucia/_PublishedToday_YES"
    },
    {
        provincia: "San Juan",
        ciudadjson: "San Juan Sarmiento",
        ciudad: "Sarmiento",
        url: "https://inmuebles.mercadolibre.com.ar/san-juan/sarmiento/_PublishedToday_YES"
    },
    {
        provincia: "Santa Cruz",
        ciudadjson: "Santa Cruz Deseado",
        ciudad: "Deseado",
        url: "https://inmuebles.mercadolibre.com.ar/santa-cruz/deseado/_PublishedToday_YES"
    },
    {
        provincia: "Santiago del Estero",
        ciudadjson: "Santiago del Estero Santiago del Estero",
        ciudad: "Santiago del Estero",
        url: "https://inmuebles.mercadolibre.com.ar/santiago-del-estero/santiago-del-estero/_PublishedToday_YES"
    },
    {
        provincia: "Santiago del Estero",
        ciudadjson: "Santiago del Estero Termas de Río Hondo",
        ciudad: "Termas de Río Hondo",
        url: "https://inmuebles.mercadolibre.com.ar/santiago-del-estero/termas-de-rio-hondo/_PublishedToday_YES"
    },
    {
        provincia: "Tucumán",
        ciudadjson: "Tucumán San Miguel de Tucumán",
        ciudad: "San Miguel de Tucumán",
        url: "https://inmuebles.mercadolibre.com.ar/tucuman/san-miguel-de-tucuman/_PublishedToday_YES"
    },
    {
        provincia: "Tucumán",
        ciudadjson: "Tucumán Tafí Viejo",
        ciudad: "Tafí Viejo",
        url: "https://inmuebles.mercadolibre.com.ar/tucuman/tafi-viejo/_PublishedToday_YES"
    },
    {
        provincia: "Tucumán",
        ciudadjson: "Tucumán Tafí del Valle",
        ciudad: "Tafí del Valle",
        url: "https://inmuebles.mercadolibre.com.ar/tucuman/tafi-del-valle/_PublishedToday_YES"
    },
    {
        provincia: "Tucumán",
        ciudadjson: "Tucumán Lules",
        ciudad: "Lules",
        url: "https://inmuebles.mercadolibre.com.ar/tucuman/lules/_PublishedToday_YES"
    },
    {
        provincia: "Tucumán",
        ciudadjson: "Tucumán Burruyacú",
        ciudad: "Burruyacú",
        url: "https://inmuebles.mercadolibre.com.ar/tucuman/burruyacu/_PublishedToday_YES"
    },
    {
        provincia: "Tucumán",
        ciudadjson: "Tucumán Trancas",
        ciudad: "Trancas",
        url: "https://inmuebles.mercadolibre.com.ar/tucuman/trancas/_PublishedToday_YES"
    },
    {
        provincia: "Tucumán",
        ciudadjson: "Tucumán Yerba Buena",
        ciudad: "Yerba Buena",
        url: "https://inmuebles.mercadolibre.com.ar/tucuman/yerba-buena/_PublishedToday_YES"
    },
    {
        provincia: "Tucumán",
        ciudadjson: "Tucumán Monteros",
        ciudad: "Monteros",
        url: "https://inmuebles.mercadolibre.com.ar/tucuman/monteros/_PublishedToday_YES"
    },
    {
        provincia: "Tierra del Fuego",
        ciudadjson: "Tierra del Fuego Ushuaia",
        ciudad: "Ushuaia",
        url: "https://inmuebles.mercadolibre.com.ar/tierra-del-fuego/ushuaia/_PublishedToday_YES"
    },
    {
        provincia: "Tierra del Fuego",
        ciudadjson: "Tierra del Fuego Río Grande",
        ciudad: "Río Grande",
        url: "https://inmuebles.mercadolibre.com.ar/tierra-del-fuego/rio-grande/_PublishedToday_YES"
    },
]
console.log(urlsML.length)
export default urlsML