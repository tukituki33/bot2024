//fijarse en https://inmuebles.mercadolibre.com.ar/_PublishedToday_YES#filter
const urlsARGP = [
    {
        provincia: "Bs.As. Costa Atlántica",
        ciudadjson: "BsAsCA Aguas Verdes",
        ciudad: "Aguas Verdes",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/aguas-verdes?orden-masnuevos"
    },
    {
        provincia: "Bs.As. Costa Atlántica",
        ciudadjson: "BsAsCA Cariló",
        ciudad: "Cariló",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/carilo?orden-masnuevos"
    },
    {
        provincia: "Bs.As. Costa Atlántica",
        ciudadjson: "BsAsCA Chapadmalal",
        ciudad: "Chapadmalal",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/chapadmalal-general-pueyrredon?orden-masnuevos"
    },
    {
        provincia: "Bs.As. Costa Atlántica",
        ciudadjson: "BsAsCA Costa Azul",
        ciudad: "Costa Azul",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/costa-azul?orden-masnuevos"
    },
    {
        provincia: "Bs.As. Costa Atlántica",
        ciudadjson: "BsAsCA Costa del Este",
        ciudad: "Costa del Este",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/costa-del-este?orden-masnuevos"
    },
    {
        provincia: "Bs.As. Costa Atlántica",
        ciudadjson: "BsAsCA La Lucila del Mar",
        ciudad: "La Lucila del Mar",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/la-lucila-del-mar?orden-masnuevos"
    },
    {
        provincia: "Bs.As. Costa Atlántica",
        ciudadjson: "BsAsCA Las Toninas",
        ciudad: "Las Toninas",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/las-toninas?orden-masnuevos"
    },
    {
        provincia: "Bs.As. Costa Atlántica",
        ciudadjson: "BsAsCA Mar Azul",
        ciudad: "Mar Azul",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/mar-azul?orden-masnuevos"
    },
    {
        provincia: "Bs.As. Costa Atlántica",
        ciudadjson: "BsAsCA Mar de Ajo",
        ciudad: "Mar de Ajo",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/mar-de-ajo?orden-masnuevos"
    },
    {
        provincia: "Bs.As. Costa Atlántica",
        ciudadjson: "BsAsCA Mar de las Pampas",
        ciudad: "Mar de las Pampas",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/mar-de-las-pampas?orden-masnuevos"
    },
    {
        provincia: "Bs.As. Costa Atlántica",
        ciudadjson: "BsAsCA Mar del Plata",
        ciudad: "Mar del Plata",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/mar-del-plata?orden-masnuevos"
    },
    {
        provincia: "Bs.As. Costa Atlántica",
        ciudadjson: "BsAsCA Mar del Tuyú",
        ciudad: "Mar del Tuyú",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/mar-del-tuyu?orden-masnuevos"
    },
    {
        provincia: "Bs.As. Costa Atlántica",
        ciudadjson: "BsAsCA Miramar",
        ciudad: "Miramar",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/miramar-general-alvarado?orden-masnuevos"
    },
    {
        provincia: "Bs.As. Costa Atlántica",
        ciudadjson: "BsAsCA Necochea",
        ciudad: "Necochea",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/necochea-necochea?orden-masnuevos"
    },
    {
        provincia: "Bs.As. Costa Atlántica",
        ciudadjson: "BsAsCA Nueva Atlantis",
        ciudad: "Nueva Atlantis",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/nueva-atlantis?orden-masnuevos"
    },
    {
        provincia: "Bs.As. Costa Atlántica",
        ciudadjson: "BsAsCA Ostende",
        ciudad: "Ostende",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/ostende?orden-masnuevos"
    },
    {
        provincia: "Bs.As. Costa Atlántica",
        ciudadjson: "BsAsCA Pinamar",
        ciudad: "Pinamar",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/pinamar-pinamar?orden-masnuevos"
    },
    {
        provincia: "Bs.As. Costa Atlántica",
        ciudadjson: "BsAsCA Punta Médanos",
        ciudad: "Punta Médanos",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/punta-medanos?orden-masnuevos"
    },
    {
        provincia: "Bs.As. Costa Atlántica",
        ciudadjson: "BsAsCA San Bernardo",
        ciudad: "San Bernardo",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/san-bernardo-del-tuyu?orden-masnuevos"
    },
    {
        provincia: "Bs.As. Costa Atlántica",
        ciudadjson: "BsAsCA San Clemente",
        ciudad: "San Clemente",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/san-clemente-del-tuyu?orden-masnuevos"
    },
    {
        provincia: "Bs.As. Costa Atlántica",
        ciudadjson: "BsAsCA Santa Clara del Mar",
        ciudad: "Santa Clara del Mar",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/santa-clara-del-mar?orden-masnuevos"
    },
    {
        provincia: "Bs.As. Costa Atlántica",
        ciudadjson: "BsAsCA Santa Teresita",
        ciudad: "Santa Teresita",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/santa-teresita?orden-masnuevos"
    },
    {
        provincia: "Bs.As. Costa Atlántica",
        ciudadjson: "BsAsCA Valeria del Mar",
        ciudad: "Valeria del Mar",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/valeria-del-mar?orden-masnuevos"
    },
    {
        provincia: "Bs.As. Costa Atlántica",
        ciudadjson: "BsAsCA Villa Gesell",
        ciudad: "Villa Gesell",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/villa-gesell-villa-gesell?orden-masnuevos"
    },
    {
        provincia: "Bs.As. G.B.A. Norte",
        ciudadjson: "BsAsN Escobar",
        ciudad: "Escobar",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/escobar?orden-masnuevos"
    },
    {
        provincia: "Bs.As. G.B.A. Norte",
        ciudadjson: "BsAsN General San Martín",
        ciudad: "General San Martín",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/general-san-martin?orden-masnuevos"
    },
    {
        provincia: "Bs.As. G.B.A. Norte",
        ciudadjson: "BsAsN José C. Paz",
        ciudad: "José C. Paz",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/jose-c-paz?orden-masnuevos"
    },
    {
        provincia: "Bs.As. G.B.A. Norte",
        ciudadjson: "BsAsN Malvinas Argentinas",
        ciudad: "Malvinas Argentinas",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/malvinas-argentinas?orden-masnuevos"
    },
    {
        provincia: "Bs.As. G.B.A. Norte",
        ciudadjson: "BsAsN Pilar",
        ciudad: "Pilar",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/pilar?orden-masnuevos"
    },
    {
        provincia: "Bs.As. G.B.A. Norte",
        ciudadjson: "BsAsN San Fernando",
        ciudad: "San Fernando",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/san-fernando?orden-masnuevos"
    },
    {
        provincia: "Bs.As. G.B.A. Norte",
        ciudadjson: "BsAsN San Isidro",
        ciudad: "San Isidro",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/san-isidro?orden-masnuevos"
    },
    {
        provincia: "Bs.As. G.B.A. Norte",
        ciudadjson: "BsAsN San Miguel",
        ciudad: "San Miguel",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/san-miguel?orden-masnuevos"
    },
    {
        provincia: "Bs.As. G.B.A. Norte",
        ciudadjson: "BsAsN Tigre",
        ciudad: "Tigre",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/tigre?orden-masnuevos"
    },
    {
        provincia: "Bs.As. G.B.A. Norte",
        ciudadjson: "BsAsN Vicente López",
        ciudad: "Vicente López",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/vicente-lopez?orden-masnuevos"
    },
    {
        provincia: "Bs.As. G.B.A. Oeste",
        ciudadjson: "BsAsO General Rodríguez",
        ciudad: "General Rodríguez",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/general-rodriguez?orden-masnuevos"
    },
    {
        provincia: "Bs.As. G.B.A. Oeste",
        ciudadjson: "BsAsO Hurlingham",
        ciudad: "Hurlingham",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/hurlingham?orden-masnuevos"
    },
    {
        provincia: "Bs.As. G.B.A. Oeste",
        ciudadjson: "BsAsO Ituzaingó",
        ciudad: "Ituzaingó",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/ituzaingo?orden-masnuevos"
    },
    {
        provincia: "Bs.As. G.B.A. Oeste",
        ciudadjson: "BsAsO La Matanza",
        ciudad: "La Matanza",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/la-matanza?orden-masnuevos"
    },
    {
        provincia: "Bs.As. G.B.A. Oeste",
        ciudadjson: "BsAsO Merlo",
        ciudad: "Merlo",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/merlo?orden-masnuevos"
    },
    {
        provincia: "Bs.As. G.B.A. Oeste",
        ciudadjson: "BsAsO Moreno",
        ciudad: "Moreno",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/moreno?orden-masnuevos"
    },
    {
        provincia: "Bs.As. G.B.A. Oeste",
        ciudadjson: "BsAsO Morón",
        ciudad: "Morón",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/moron?orden-masnuevos"
    },
    {
        provincia: "Bs.As. G.B.A. Oeste",
        ciudadjson: "BsAsO Tres de febrero",
        ciudad: "Tres de febrero",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/tres-de-febrero?orden-masnuevos"
    },
    {
        provincia: "Bs.As. G.B.A. Sur",
        ciudadjson: "BsAsS Almirante Brown",
        ciudad: "Almirante Brown",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/almirante-brown?orden-masnuevos"
    },
    {
        provincia: "Bs.As. G.B.A. Sur",
        ciudadjson: "BsAsS Avellaneda",
        ciudad: "Avellaneda",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/avellaneda?orden-masnuevos"
    },
    {
        provincia: "Bs.As. G.B.A. Sur",
        ciudadjson: "BsAsS Berazategui",
        ciudad: "Berazategui",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/berazategui?orden-masnuevos"
    },
    {
        provincia: "Bs.As. G.B.A. Sur",
        ciudadjson: "BsAsS Esteban Echeverría",
        ciudad: "Esteban Echeverría",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/esteban-echeverria?orden-masnuevos"
    },
    {
        provincia: "Bs.As. G.B.A. Sur",
        ciudadjson: "BsAsS Ezeiza",
        ciudad: "Ezeiza",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/ezeiza?orden-masnuevos"
    },
    {
        provincia: "Bs.As. G.B.A. Sur",
        ciudadjson: "BsAsS Florencio Varela",
        ciudad: "Florencio Varela",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/florencio-varela?orden-masnuevos"
    },
    {
        provincia: "Bs.As. G.B.A. Sur",
        ciudadjson: "BsAsS La Plata",
        ciudad: "La Plata",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/la-plata?orden-masnuevos"
    },
    {
        provincia: "Bs.As. G.B.A. Sur",
        ciudadjson: "BsAsS Lanús",
        ciudad: "Lanús",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/lanus?orden-masnuevos"
    },
    {
        provincia: "Bs.As. G.B.A. Sur",
        ciudadjson: "BsAsS Lomas de Zamora",
        ciudad: "Lomas de Zamora",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/lomas-de-zamora?orden-masnuevos"
    },
    {
        provincia: "Bs.As. G.B.A. Sur",
        ciudadjson: "BsAsS Presidente Perón",
        ciudad: "Presidente Perón",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/presidente-peron?orden-masnuevos"
    },
    {
        provincia: "Bs.As. G.B.A. Sur",
        ciudadjson: "BsAsS Quilmes",
        ciudad: "Quilmes",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/quilmes?orden-masnuevos"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI 25 de Mayo",
        ciudad: "25 de Mayo",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/25-de-mayo?orden-masnuevos"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI 9 de Julio",
        ciudad: "9 de Julio",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/9-de-julio?orden-masnuevos"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Arrecifes",
        ciudad: "Arrecifes",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/arrecifes?orden-masnuevos"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Azul",
        ciudad: "Azul",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/azul?orden-masnuevos"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Bahía Blanca",
        ciudad: "Bahía Blanca",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/bahia-blanca?orden-masnuevos"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Baradero",
        ciudad: "Baradero",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/baradero?orden-masnuevos"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Balcarce",
        ciudad: "Balcarce",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/balcarce?orden-masnuevos"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Benito Juárez",
        ciudad: "Benito Juárez",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/benito-juarez?orden-masnuevos"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Bolívar",
        ciudad: "Bolívar",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/bolivar?orden-masnuevos"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Bragado",
        ciudad: "Bragado",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/bragado?orden-masnuevos"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Brandsen",
        ciudad: "Brandsen",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/coronel-brandsen?orden-masnuevos"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Capitán Sarmiento",
        ciudad: "Capitán Sarmiento",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/capitan-sarmiento?orden-masnuevos"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Carmen de Areco",
        ciudad: "Carmen de Areco",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/carmen-de-areco?orden-masnuevos"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Chascomús",
        ciudad: "Chascomús",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/chascomus?orden-masnuevos"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Chivilcoy",
        ciudad: "Chivilcoy",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/chivilcoy?orden-masnuevos"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Coronel Rosales",
        ciudad: "Coronel Rosales",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/coronel-rosales?orden-masnuevos"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Coronel Dorrego",
        ciudad: "Coronel Dorrego",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/coronel-dorrego?orden-masnuevos"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Dolores",
        ciudad: "Dolores",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/dolores?orden-masnuevos"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI General Lavalle",
        ciudad: "General Lavalle",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/general-lavalle?orden-masnuevos"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI General Madariaga",
        ciudad: "General Madariaga",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/general-madariaga?orden-masnuevos"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI General Paz",
        ciudad: "General Paz",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/general-paz?orden-masnuevos"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI General Pueyrredón",
        ciudad: "General Pueyrredón",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/general-pueyrredon?orden-masnuevos"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Hipólito Yrigoyen",
        ciudad: "Hipólito Yrigoyen",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/hipolito-yrigoyen?orden-masnuevos"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Junín",
        ciudad: "Junín",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/junin?orden-masnuevos"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI La Plata",
        ciudad: "La Plata",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/la-plata-buenos-aires?orden-masnuevos"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Lincoln",
        ciudad: "Lincoln",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/lincoln?orden-masnuevos"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Lobería",
        ciudad: "Lobería",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/loberia?orden-masnuevos"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Lobos",
        ciudad: "Lobos",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/lobos?orden-masnuevos"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Luján",
        ciudad: "Luján",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/lujan-lujan?orden-masnuevos"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Magdalena",
        ciudad: "Magdalena",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/magdalena?orden-masnuevos"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Maipú",
        ciudad: "Maipú",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/maipu?orden-masnuevos"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Mar Chiquita",
        ciudad: "Mar Chiquita",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/mar-chiquita?orden-masnuevos"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Mercedes",
        ciudad: "Mercedes",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/mercedes?orden-masnuevos"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Monte Hermoso",
        ciudad: "Monte Hermoso",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/monte-hermoso?orden-masnuevos"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Navarro",
        ciudad: "Navarro",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/navarro?orden-masnuevos"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Necochea",
        ciudad: "Necochea",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/necochea?orden-masnuevos"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Olavarría",
        ciudad: "Olavarría",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/olavarria?orden-masnuevos"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Patagones",
        ciudad: "Patagones",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/patagones?orden-masnuevos"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Pehuajó",
        ciudad: "Pehuajó",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/pehuajo?orden-masnuevos"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Pergamino",
        ciudad: "Pergamino",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/pergamino?orden-masnuevos"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Pila",
        ciudad: "Pila",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/pila?orden-masnuevos"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Punta Indio",
        ciudad: "Punta Indio",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/punta-indio?orden-masnuevos"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Ramallo",
        ciudad: "Ramallo",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/ramallo?orden-masnuevos"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Roque Pérez",
        ciudad: "Roque Pérez",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/roque-perez?orden-masnuevos"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Saavedra",
        ciudad: "Saavedra",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/saavedra-bs?orden-masnuevos"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Saladillo",
        ciudad: "Saladillo",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/saladillo?orden-masnuevos"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Salto",
        ciudad: "Salto",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/salto-ba?orden-masnuevos"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI San Andrés de Giles",
        ciudad: "San Andrés de Giles",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/san-andres-de-giles?orden-masnuevos"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI San Antonio de Areco",
        ciudad: "San Antonio de Areco",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/san-antonio-de-areco?orden-masnuevos"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI San Nicolás",
        ciudad: "San Nicolás",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/san-nicolas-bs?orden-masnuevos"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI San Pedro",
        ciudad: "San Pedro",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/san-pedro?orden-masnuevos"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Tandil",
        ciudad: "Tandil",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/tandil?orden-masnuevos"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Tornquist",
        ciudad: "Tornquist",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/tornquist?orden-masnuevos"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Trenque Lauquen",
        ciudad: "Trenque Lauquen",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/trenque-lauquen?orden-masnuevos"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Tres Arroyos",
        ciudad: "Tres Arroyos",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/tres-arroyos?orden-masnuevos"
    },
    {
        provincia: "Buenos Aires Interior",
        ciudadjson: "BsAsI Villarino",
        ciudad: "Villarino",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/villarino?orden-masnuevos"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Almagro",
        ciudad: "Almagro",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/almagro?orden-masnuevos"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Agronomía",
        ciudad: "Agronomía",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/agronomia?orden-masnuevos"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Balvanera",
        ciudad: "Balvanera",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/balvanera?orden-masnuevos"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Barracas",
        ciudad: "Barracas",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/barracas?orden-masnuevos"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Barrio Norte",
        ciudad: "Barrio Norte",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/br-norte?orden-masnuevos"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Belgrano",
        ciudad: "Belgrano",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/belgrano?orden-masnuevos"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Belgrano Barrancas",
        ciudad: "Belgrano Barrancas",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/belgrano-barrancas?orden-masnuevos"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Belgrano Chico",
        ciudad: "Belgrano Chico",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/belgrano-chico?orden-masnuevos"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Belgrano C",
        ciudad: "Belgrano C",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/belgrano-c?orden-masnuevos"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Belgrano R",
        ciudad: "Belgrano R",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/belgrano-r?orden-masnuevos"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Boedo",
        ciudad: "Boedo",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/boedo?orden-masnuevos"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Botánico",
        ciudad: "Botánico",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/botanico?orden-masnuevos"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Caballito",
        ciudad: "Caballito",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/caballito?orden-masnuevos"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Chacarita",
        ciudad: "Chacarita",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/chacarita?orden-masnuevos"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Coghlan",
        ciudad: "Coghlan",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/coghlan?orden-masnuevos"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Colegiales",
        ciudad: "Colegiales",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/colegiales?orden-masnuevos"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Congreso",
        ciudad: "Congreso",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/congreso?orden-masnuevos"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Constitución",
        ciudad: "Constitución",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/constitucion?orden-masnuevos"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Flores",
        ciudad: "Flores",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/flores?orden-masnuevos"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Floresta",
        ciudad: "Floresta",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/floresta?orden-masnuevos"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Las Cañitas",
        ciudad: "Las Cañitas",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/las-canitas?orden-masnuevos"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Liniers",
        ciudad: "Liniers",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/liniers?orden-masnuevos"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Mataderos",
        ciudad: "Mataderos",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/mataderos?orden-masnuevos"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Monserrat",
        ciudad: "Monserrat",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/monserrat?orden-masnuevos"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Monte Castro",
        ciudad: "Monte Castro",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/monte-castro?orden-masnuevos"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Núñez",
        ciudad: "Núñez",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/nunez?orden-masnuevos"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Once",
        ciudad: "Once",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/once?orden-masnuevos"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Palermo",
        ciudad: "Palermo",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/palermo?orden-masnuevos"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Palermo Chico",
        ciudad: "Palermo Chico",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/palermo-chico?orden-masnuevos"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Palermo Hollywood",
        ciudad: "Palermo Hollywood",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/palermo-hollywood?orden-masnuevos"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Palermo Nuevo",
        ciudad: "Palermo Nuevo",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/palermo-nuevo?orden-masnuevos"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Palermo Soho",
        ciudad: "Palermo Soho",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/palermo-soho?orden-masnuevos"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Palermo viejo",
        ciudad: "Palermo viejo",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/palermo-viejo?orden-masnuevos"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Parque Avellaneda",
        ciudad: "Parque Avellaneda",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/parque-avellaneda?orden-masnuevos"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Parque Centenario",
        ciudad: "Parque Centenario",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/parque-centenario?orden-masnuevos"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Parque Chacabuco",
        ciudad: "Parque Chacabuco",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/parque-chacabuco?orden-masnuevos"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Parque Chas",
        ciudad: "Parque Chas",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/parque-chas?orden-masnuevos"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Parque Patricios",
        ciudad: "Parque Patricios",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/parque-patricios?orden-masnuevos"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Paternal",
        ciudad: "Paternal",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/paternal?orden-masnuevos"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Puerto Madero",
        ciudad: "Puerto Madero",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/puerto-madero?orden-masnuevos"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Recoleta",
        ciudad: "Recoleta",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/recoleta?orden-masnuevos"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Retiro",
        ciudad: "Retiro",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/retiro?orden-masnuevos"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Saavedra",
        ciudad: "Saavedra",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/saavedra?orden-masnuevos"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF San Cristóbal",
        ciudad: "San Cristóbal",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/san-cristobal?orden-masnuevos"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF San Nicolás",
        ciudad: "San Nicolás",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/san-nicolas?orden-masnuevos"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF San Telmo",
        ciudad: "San Telmo",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/san-telmo?orden-masnuevos"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Santa Rita",
        ciudad: "Santa Rita",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/br-santa-rita?orden-masnuevos"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Velez Sarsfield",
        ciudad: "Velez Sarsfield",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/velez-sarsfield?orden-masnuevos"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Versalles",
        ciudad: "Versalles",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/versalles?orden-masnuevos"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Villa Crespo",
        ciudad: "Villa Crespo",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/villa-crespo?orden-masnuevos"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Villa del Parque",
        ciudad: "Villa del Parque",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/villa-del-parque?orden-masnuevos"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Villa Devoto",
        ciudad: "Villa Devoto",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/villa-devoto?orden-masnuevos"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Villa Gral. Mitre",
        ciudad: "Villa Gral. Mitre",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/villa-general-mitre?orden-masnuevos"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Villa Lugano",
        ciudad: "Villa Lugano",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/villa-lugano?orden-masnuevos"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Villa Luro",
        ciudad: "Villa Luro",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/villa-luro?orden-masnuevos"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Villa Ortúzar",
        ciudad: "Villa Ortúzar",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/villa-ortuzar?orden-masnuevos"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Villa Pueyrredón",
        ciudad: "Villa Pueyrredón",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/villa-pueyrredon?orden-masnuevos"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Villa Real",
        ciudad: "Villa Real",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/villa-real?orden-masnuevos"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Villa Riachuelo",
        ciudad: "Villa Riachuelo",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/villa-riachuelo?orden-masnuevos"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Villa Soldati",
        ciudad: "Villa Soldati",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/villa-soldati?orden-masnuevos"
    },
    {
        provincia: "Capital Federal",
        ciudadjson: "BsAsCF Villa Urquiza",
        ciudad: "Villa Urquiza",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/villa-urquiza?orden-masnuevos"
    },
    {
        provincia: "Catamarca",
        ciudadjson: "Catamarca Ambato",
        ciudad: "Ambato",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/ambato?orden-masnuevos"
    },
    {
        provincia: "Catamarca",
        ciudadjson: "Catamarca Capayán",
        ciudad: "Capayán",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/capayan-capayan?orden-masnuevos"
    },
    {
        provincia: "Catamarca",
        ciudadjson: "Catamarca San Fernando del Valle de Catamarca",
        ciudad: "San Fernando del Valle de Catamarca",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/san-fdo-del-valle-de-catamarca?orden-masnuevos"
    },
    {
        provincia: "Catamarca",
        ciudadjson: "Catamarca Valle Viejo",
        ciudad: "Valle Viejo",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/valle-viejo?orden-masnuevos"
    },
    {
        provincia: "Catamarca",
        ciudadjson: "Catamarca Tinogasta",
        ciudad: "Tinogasta",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/tinogasta-tinogasta?orden-masnuevos"
    },
    {
        provincia: "Chaco",
        ciudadjson: "Chaco Resistencia",
        ciudad: "Resistencia",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/resistencia?orden-masnuevos"
    },
    {
        provincia: "Chubut",
        ciudadjson: "Chubut Futaleufú",
        ciudad: "Futaleufú",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/futaleufu-futaleufu?orden-masnuevos"
    },
    {
        provincia: "Chubut",
        ciudadjson: "Chubut Cushamen",
        ciudad: "Cushamen",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/cushamen-cushamen?orden-masnuevos"
    },
    {
        provincia: "Chubut",
        ciudadjson: "Chubut Escalante",
        ciudad: "Escalante",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/escalante?orden-masnuevos"
    },
    {
        provincia: "Chubut",
        ciudadjson: "Chubut Biedma",
        ciudad: "Biedma",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/biedma?orden-masnuevos"
    },
    {
        provincia: "Chubut",
        ciudadjson: "Chubut Rawson",
        ciudad: "Rawson",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/rawson-chubut?orden-masnuevos"
    },
    {
        provincia: "Córdoba",
        ciudadjson: "Córdoba Alta Gracia",
        ciudad: "Alta Gracia",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/alta-gracia-santa-maria?orden-masnuevos"
    },
    {
        provincia: "Córdoba",
        ciudadjson: "Córdoba Bialet Massé",
        ciudad: "Bialet Massé",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/bialet-masse-cor?orden-masnuevos"
    },
    {
        provincia: "Córdoba",
        ciudadjson: "Córdoba Calamuchita",
        ciudad: "Calamuchita",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/calamuchita?orden-masnuevos"
    },
    {
        provincia: "Córdoba",
        ciudadjson: "Córdoba Colón",
        ciudad: "Colón",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/colon-cor?orden-masnuevos"
    },
    {
        provincia: "Córdoba",
        ciudadjson: "Córdoba Córdoba",
        ciudad: "Córdoba",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/cordoba?orden-masnuevos"
    },
    {
        provincia: "Córdoba",
        ciudadjson: "Córdoba Cosquín",
        ciudad: "Cosquín",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/cosquin?orden-masnuevos"
    },
    {
        provincia: "Córdoba",
        ciudadjson: "Córdoba Cruz del Eje",
        ciudad: "Cruz del Eje",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/cruz-del-eje-cruz-del-eje?orden-masnuevos"
    },
    {
        provincia: "Córdoba",
        ciudadjson: "Córdoba Juárez Celman",
        ciudad: "Juárez Celman",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/juarez-celman?orden-masnuevos"
    },
    {
        provincia: "Córdoba",
        ciudadjson: "Córdoba La Bolsa",
        ciudad: "La Bolsa",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/villa-la-bolsa?orden-masnuevos"
    },
    {
        provincia: "Córdoba",
        ciudadjson: "Córdoba La Calera",
        ciudad: "La Calera",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/la-calera-colon?orden-masnuevos"
    },
    {
        provincia: "Córdoba",
        ciudadjson: "Córdoba La Falda",
        ciudad: "La Falda",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/la-falda-punilla?orden-masnuevos"
    },
    {
        provincia: "Córdoba",
        ciudadjson: "Córdoba Malagueño",
        ciudad: "Malagueño",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/malagueno?orden-masnuevos"
    },
    {
        provincia: "Córdoba",
        ciudadjson: "Córdoba Potrero de Garay",
        ciudad: "Potrero de Garay",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/potrero-de-garay?orden-masnuevos"
    },
    {
        provincia: "Córdoba",
        ciudadjson: "Córdoba Punilla",
        ciudad: "Punilla",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/punilla-punilla?orden-masnuevos"
    },
    {
        provincia: "Córdoba",
        ciudadjson: "Córdoba Río Ceballos",
        ciudad: "Río Ceballos",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/rio-ceballos?orden-masnuevos"
    },
    {
        provincia: "Córdoba",
        ciudadjson: "Córdoba Río Cuarto",
        ciudad: "Río Cuarto",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/rio-cuarto-rio-cuarto?orden-masnuevos"
    },
    {
        provincia: "Córdoba",
        ciudadjson: "Córdoba Río Segundo",
        ciudad: "Río Segundo",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/rio-segundo-rio-segundo?orden-masnuevos"
    },
    {
        provincia: "Córdoba",
        ciudadjson: "Córdoba San Alberto",
        ciudad: "San Alberto",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/san-alberto?orden-masnuevos"
    },
    {
        provincia: "Córdoba",
        ciudadjson: "Córdoba San Javier",
        ciudad: "San Javier",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/san-javier?orden-masnuevos"
    },
    {
        provincia: "Córdoba",
        ciudadjson: "Córdoba Santa Rosa de Calamuchita",
        ciudad: "Santa Rosa de Calamuchita",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/calamuchita-calamuchita?orden-masnuevos"
    },
    {
        provincia: "Córdoba",
        ciudadjson: "Córdoba Unión",
        ciudad: "Unión",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/union?orden-masnuevos"
    },
    {
        provincia: "Córdoba",
        ciudadjson: "Córdoba Tercero Arriba",
        ciudad: "Tercero Arriba",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/tercero-arriba?orden-masnuevos"
    },
    {
        provincia: "Córdoba",
        ciudadjson: "Córdoba Villa Allende",
        ciudad: "Villa Allende",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/villa-allende-colon?orden-masnuevos"
    },
    {
        provincia: "Córdoba",
        ciudadjson: "Córdoba Villa Carlos Paz",
        ciudad: "Villa Carlos Paz",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/villa-carlos-paz?orden-masnuevos"
    },
    {
        provincia: "Córdoba",
        ciudadjson: "Córdoba Villa General Belgrano",
        ciudad: "Villa General Belgrano",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/villa-general-belgrano?orden-masnuevos"
    },
    {
        provincia: "Córdoba",
        ciudadjson: "Córdoba Villa María",
        ciudad: "Villa María",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/villa-maria-col?orden-masnuevos"
    },
    {
        provincia: "Corrientes",
        ciudadjson: "Corrientes Goya",
        ciudad: "Goya",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/goya-goy-goy?orden-masnuevos"
    },
    {
        provincia: "Corrientes",
        ciudadjson: "Corrientes Corrientes",
        ciudad: "Corrientes",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/corrientes-cor?orden-masnuevos"
    },
    {
        provincia: "Corrientes",
        ciudadjson: "Corrientes Esquina",
        ciudad: "Esquina",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/esquina-esquina?orden-masnuevos"
    },
    {
        provincia: "Corrientes",
        ciudadjson: "Corrientes Ituzaingó",
        ciudad: "Ituzaingó",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/ituzaingo-itu-itu?orden-masnuevos"
    },
    {
        provincia: "Corrientes",
        ciudadjson: "Corrientes Lavalle",
        ciudad: "Lavalle",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/lavalle?orden-masnuevos"
    },
    {
        provincia: "Entre Ríos",
        ciudadjson: "Entre Ríos Paraná",
        ciudad: "Paraná",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/parana-parana?orden-masnuevos"
    },
    {
        provincia: "Entre Ríos",
        ciudadjson: "Entre Ríos Victoria",
        ciudad: "Victoria",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/victoria-victoria?orden-masnuevos"
    },
    {
        provincia: "Entre Ríos",
        ciudadjson: "Entre Ríos Gualeguaychú",
        ciudad: "Gualeguaychú",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/gualeguaychu-gualeguaychu?orden-masnuevos"
    },
    {
        provincia: "Entre Ríos",
        ciudadjson: "Entre Ríos Colón",
        ciudad: "Colón",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/colon-entre-rios?orden-masnuevos"
    },
    {
        provincia: "Entre Ríos",
        ciudadjson: "Entre Ríos Islas del Ibicuy",
        ciudad: "Islas del Ibicuy",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/islas-del-ibicuy?orden-masnuevos"
    },
    {
        provincia: "Entre Ríos",
        ciudadjson: "Entre Ríos Diamante",
        ciudad: "Diamante",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/diamante-diamante?orden-masnuevos"
    },
    {
        provincia: "Entre Ríos",
        ciudadjson: "Entre Ríos Nogoyá",
        ciudad: "Nogoyá",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/nogoya-nogoya?orden-masnuevos"
    },
    {
        provincia: "Entre Ríos",
        ciudadjson: "Entre Ríos Federación",
        ciudad: "Federación",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/federacion-federacion?orden-masnuevos"
    },
    {
        provincia: "Entre Ríos",
        ciudadjson: "Entre Ríos Rosario del Tala",
        ciudad: "Rosario del Tala",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/rosario-del-tala?orden-masnuevos"
    },
    {
        provincia: "Entre Ríos",
        ciudadjson: "Entre Ríos Libertador San Martín",
        ciudad: "Libertador San Martín",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/libertador-san-martin?orden-masnuevos"
    },
    {
        provincia: "Jujuy",
        ciudadjson: "Jujuy San Salvador de Jujuy",
        ciudad: "San Salvador de Jujuy",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/san-salvador-de-jujuy?orden-masnuevos"
    },
    {
        provincia: "Jujuy",
        ciudadjson: "Jujuy San Antonio",
        ciudad: "San Antonio",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/san-antonio?orden-masnuevos"
    },
    {
        provincia: "La Pampa",
        ciudadjson: "La Pampa Santa Rosa",
        ciudad: "Santa Rosa",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/santa-rosa-la-pampa?orden-masnuevos"
    },
    {
        provincia: "La Pampa",
        ciudadjson: "La Pampa Toay",
        ciudad: "Toay",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/toay-toay?orden-masnuevos"
    },
    {
        provincia: "Mendoza",
        ciudadjson: "Mendoza San Rafael",
        ciudad: "San Rafael",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/san-rafael?orden-masnuevos"
    },
    {
        provincia: "Mendoza",
        ciudadjson: "Mendoza General Alvear",
        ciudad: "General Alvear",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/general-alvear-ga-ga?orden-masnuevos"
    },
    {
        provincia: "Mendoza",
        ciudadjson: "Mendoza Mendoza",
        ciudad: "Mendoza",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/mendoza?orden-masnuevos"
    },
    {
        provincia: "Mendoza",
        ciudadjson: "Mendoza Godoy Cruz",
        ciudad: "Godoy Cruz",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/godoy-cruz-gc-gc?orden-masnuevos"
    },
    {
        provincia: "Mendoza",
        ciudadjson: "Mendoza Lavalle",
        ciudad: "Lavalle",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/lavalle-men?orden-masnuevos"
    },
    {
        provincia: "Mendoza",
        ciudadjson: "Mendoza Luján de Cuyo",
        ciudad: "Luján de Cuyo",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/lujan-de-cuyo-ldc-ldc?orden-masnuevos"
    },
    {
        provincia: "Mendoza",
        ciudadjson: "Mendoza Guaymallén",
        ciudad: "Guaymallén",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/guaymallen?orden-masnuevos"
    },
    {
        provincia: "Mendoza",
        ciudadjson: "Mendoza Maipú",
        ciudad: "Maipú",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/maipu-mai-mai?orden-masnuevos"
    },
    {
        provincia: "Mendoza",
        ciudadjson: "Mendoza Las Heras",
        ciudad: "Las Heras",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/las-heras-lh-lh?orden-masnuevos"
    },
    {
        provincia: "Mendoza",
        ciudadjson: "Mendoza Malargüe",
        ciudad: "Malargüe",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/malargue-malargue?orden-masnuevos"
    },
    {
        provincia: "Mendoza",
        ciudadjson: "Mendoza Tunuyán",
        ciudad: "Tunuyán",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/tunuyan-tun-tun?orden-masnuevos"
    },
    {
        provincia: "Mendoza",
        ciudadjson: "Mendoza Rivadavia",
        ciudad: "Rivadavia",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/rivadavia-riv-riv?orden-masnuevos"
    },
    {
        provincia: "Mendoza",
        ciudadjson: "Mendoza San Martín",
        ciudad: "San Martín",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/san-martin-men?orden-masnuevos"
    },
    {
        provincia: "Misiones",
        ciudadjson: "Misiones Posadas",
        ciudad: "Posadas",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/posadas?orden-masnuevos"
    },
    {
        provincia: "Misiones",
        ciudadjson: "Misiones Cainguás",
        ciudad: "Cainguás",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/cainguas?orden-masnuevos"
    },
    {
        provincia: "Misiones",
        ciudadjson: "Misiones Iguazú",
        ciudad: "Iguazú",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/iguazu?orden-masnuevos"
    },
    {
        provincia: "Misiones",
        ciudadjson: "Misiones Oberá",
        ciudad: "Oberá",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/obera-obera?orden-masnuevos"
    },
    {
        provincia: "Misiones",
        ciudadjson: "Misiones Garupá",
        ciudad: "Garupá",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/garupa?orden-masnuevos"
    },
    {
        provincia: "Neuquén",
        ciudadjson: "Neuquén Añelo",
        ciudad: "Añelo",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/anelo-anelo?orden-masnuevos"
    },
    {
        provincia: "Neuquén",
        ciudadjson: "Neuquén Arroyito",
        ciudad: "Arroyito",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/arroyito-confluencia?orden-masnuevos"
    },
    {
        provincia: "Neuquén",
        ciudadjson: "Neuquén San Martin de los Andes",
        ciudad: "San Martin de los Andes",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/san-martin-de-los-andes?orden-masnuevos"
    },
    {
        provincia: "Neuquén",
        ciudadjson: "Neuquén Aluminé",
        ciudad: "Aluminé",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/alumine-alumine?orden-masnuevos"
    },
    {
        provincia: "Neuquén",
        ciudadjson: "Neuquén Huiliches",
        ciudad: "Huiliches",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/huiliches?orden-masnuevos"
    },
    {
        provincia: "Neuquén",
        ciudadjson: "Neuquén Picún Leufú",
        ciudad: "Picún Leufú",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/picun-leufu-picun-leufu?orden-masnuevos"
    },
    {
        provincia: "Neuquén",
        ciudadjson: "Neuquén Los Lagos",
        ciudad: "Los Lagos",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/los-lagos?orden-masnuevos"
    },
    {
        provincia: "Neuquén",
        ciudadjson: "Neuquén Zapala",
        ciudad: "Zapala",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/zapala-zapala?orden-masnuevos"
    },
    {
        provincia: "Neuquén",
        ciudadjson: "Neuquén Plottier",
        ciudad: "Plottier",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/plottier?orden-masnuevos"
    },
    {
        provincia: "Neuquén",
        ciudadjson: "Neuquén Confluencia",
        ciudad: "Confluencia",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/neuquen?orden-masnuevos"
    },
    {
        provincia: "Neuquén",
        ciudadjson: "Neuquén Lácar",
        ciudad: "Lácar",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/lacar?orden-masnuevos"
    },
    {
        provincia: "Neuquén",
        ciudadjson: "Neuquén Villa La Angostura",
        ciudad: "Villa La Angostura",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/villa-la-angostura?orden-masnuevos"
    },
    {
        provincia: "Río Negro",
        ciudadjson: "Río Negro Bariloche",
        ciudad: "Bariloche",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/bariloche?orden-masnuevos"
    },
    {
        provincia: "Río Negro",
        ciudadjson: "Río Negro Pilcaniyeu",
        ciudad: "Pilcaniyeu",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/pilcaniyeu-pilcaniyeu?orden-masnuevos"
    },
    {
        provincia: "Río Negro",
        ciudadjson: "Río Negro Cipolletti",
        ciudad: "Cipolletti",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/cipolletti?orden-masnuevos"
    },
    {
        provincia: "Río Negro",
        ciudadjson: "Río Negro El Bolsón",
        ciudad: "El Bolsón",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/el-bolson-bariloche?orden-masnuevos"
    },
    {
        provincia: "Río Negro",
        ciudadjson: "Río Negro General Roca",
        ciudad: "General Roca",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/general-roca-general-roca?orden-masnuevos"
    },
    {
        provincia: "Río Negro",
        ciudadjson: "Río Negro San Antonio",
        ciudad: "San Antonio",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/san-antonio-rn?orden-masnuevos"
    },
    {
        provincia: "Río Negro",
        ciudadjson: "Río Negro El Cuy",
        ciudad: "El Cuy",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/el-cuy?orden-masnuevos"
    },
    {
        provincia: "Salta",
        ciudadjson: "Salta Salta",
        ciudad: "Salta",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/salta?orden-masnuevos"
    },
    {
        provincia: "Salta",
        ciudadjson: "Salta La Caldera",
        ciudad: "La Caldera",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/la-caldera?orden-masnuevos"
    },
    {
        provincia: "Salta",
        ciudadjson: "Salta Cafayate",
        ciudad: "Cafayate",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/cafayate-cafayate?orden-masnuevos"
    },
    {
        provincia: "Salta",
        ciudadjson: "Salta Rosario de Lerma",
        ciudad: "Rosario de Lerma",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/rosario-de-lerma-rosario-de-lerma?orden-masnuevos"
    },
    {
        provincia: "San Luis",
        ciudadjson: "San Luis Junín",
        ciudad: "Junín",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/junin-sl?orden-masnuevos"
    },
    {
        provincia: "San Luis",
        ciudadjson: "San Luis San Luis",
        ciudad: "San Luis",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/san-luis?orden-masnuevos"
    },
    {
        provincia: "San Luis",
        ciudadjson: "San Luis Ayacucho",
        ciudad: "Ayacucho",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/ayacucho-sl?orden-masnuevos"
    },
    {
        provincia: "San Luis",
        ciudadjson: "San Luis Chacabuco",
        ciudad: "Chacabuco",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/chacabuco-sl?orden-masnuevos"
    },
    {
        provincia: "Santa Fe",
        ciudadjson: "Santa Fe 9 de Julio",
        ciudad: "9 de Julio",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/9-de-julio-sf?orden-masnuevos"
    },
    {
        provincia: "Santa Fe",
        ciudadjson: "Santa Fe Castellanos",
        ciudad: "Castellanos",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/castellanos?orden-masnuevos"
    },
    {
        provincia: "Santa Fe",
        ciudadjson: "Santa Fe Constitución",
        ciudad: "Constitución",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/constitucion-sf?orden-masnuevos"
    },
    {
        provincia: "Santa Fe",
        ciudadjson: "Santa Fe General Obligado",
        ciudad: "General Obligado",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/general-obligado?orden-masnuevos"
    },
    {
        provincia: "Santa Fe",
        ciudadjson: "Santa Fe General López",
        ciudad: "General López",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/general-lopez?orden-masnuevos"
    },
    {
        provincia: "Santa Fe",
        ciudadjson: "Santa Fe Iriondo",
        ciudad: "Iriondo",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/iriondo"
    },
    {
        provincia: "Santa Fe",
        ciudadjson: "Santa Fe Las Colonias",
        ciudad: "Las Colonias",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/las-colonias?orden-masnuevos"
    },
    {
        provincia: "Santa Fe",
        ciudadjson: "Santa Fe Garay",
        ciudad: "Garay",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/garay?orden-masnuevos"
    },
    {
        provincia: "Santa Fe",
        ciudadjson: "Santa Fe Funes",
        ciudad: "Funes",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/funes?orden-masnuevos"
    },
    {
        provincia: "Santa Fe",
        ciudadjson: "Santa Fe San Jerónimo",
        ciudad: "San Jerónimo",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/san-jeronimo?orden-masnuevos"
    },
    {
        provincia: "Santa Fe",
        ciudadjson: "Santa Fe Rosario",
        ciudad: "Rosario",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/rosario?orden-masnuevos"
    },
    {
        provincia: "Santa Fe",
        ciudadjson: "Santa Fe Santa Fe capital",
        ciudad: "Santa Fe capital",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/santa-fe-santa-fe?orden-masnuevos"
    },
    {
        provincia: "Santa Fe",
        ciudadjson: "Santa Fe San Lorenzo",
        ciudad: "San Lorenzo",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/san-lorenzo-sf?orden-masnuevos"
    },
    {
        provincia: "San Juan",
        ciudadjson: "San Juan San Juan Capital",
        ciudad: "San Juan Capital",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/san-juan?orden-masnuevos"
    },
    {
        provincia: "San Juan",
        ciudadjson: "San Juan Iglesia",
        ciudad: "Iglesia",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/iglesia-iglesia?orden-masnuevos"
    },
    {
        provincia: "San Juan",
        ciudadjson: "San Juan Rawson",
        ciudad: "Rawson",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/rawson-sj?orden-masnuevos"
    },
    {
        provincia: "San Juan",
        ciudadjson: "San Juan Pocito",
        ciudad: "Pocito",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/pocito-pocito?orden-masnuevos"
    },
    {
        provincia: "San Juan",
        ciudadjson: "San Juan Santa Lucía",
        ciudad: "Santa Lucía",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/santa-lucia-santa-lucia?orden-masnuevos"
    },
    {
        provincia: "Santa Cruz",
        ciudadjson: "Santa Cruz Deseado",
        ciudad: "Deseado",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/deseado?orden-masnuevos"
    },
    {
        provincia: "Santiago del Estero",
        ciudadjson: "Santiago del Estero Santiago del Estero",
        ciudad: "Santiago del Estero",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/santiago-del-estero?orden-masnuevos"
    },
    {
        provincia: "Santiago del Estero",
        ciudadjson: "Santiago del Estero Termas de Río Hondo",
        ciudad: "Termas de Río Hondo",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/termas-de-rio-hondo?orden-masnuevos"
    },
    {
        provincia: "Tucumán",
        ciudadjson: "Tucumán San Miguel de Tucumán",
        ciudad: "San Miguel de Tucumán",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/san-miguel-de-tucuman?orden-masnuevos"
    },
    {
        provincia: "Tucumán",
        ciudadjson: "Tucumán Tafí Viejo",
        ciudad: "Tafí Viejo",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/tafi-viejo-tv-tv?orden-masnuevos"
    },
    {
        provincia: "Tucumán",
        ciudadjson: "Tucumán Tafí del Valle",
        ciudad: "Tafí del Valle",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/tafi-del-valle-tdv-tdv?orden-masnuevos"
    },
    {
        provincia: "Tucumán",
        ciudadjson: "Tucumán Lules",
        ciudad: "Lules",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/lules-lules?orden-masnuevos"
    },
    {
        provincia: "Tucumán",
        ciudadjson: "Tucumán Burruyacú",
        ciudad: "Burruyacú",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/burruyacu?orden-masnuevos"
    },
    {
        provincia: "Tucumán",
        ciudadjson: "Tucumán Trancas",
        ciudad: "Trancas",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/trancas-trancas?orden-masnuevos"
    },
    {
        provincia: "Tucumán",
        ciudadjson: "Tucumán Yerba Buena",
        ciudad: "Yerba Buena",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/yerba-buena-yb-yb?orden-masnuevos"
    },
    {
        provincia: "Tucumán",
        ciudadjson: "Tucumán Monteros",
        ciudad: "Monteros",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/monteros-monteros?orden-masnuevos"
    },
    {
        provincia: "Tierra del Fuego",
        ciudadjson: "Tierra del Fuego Ushuaia",
        ciudad: "Ushuaia",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/ushuaia-ushuaia?orden-masnuevos"
    },
    {
        provincia: "Tierra del Fuego",
        ciudadjson: "Tierra del Fuego Río Grande",
        ciudad: "Río Grande",
        url: "https://www.argenprop.com/campos-o-casas-o-cocheras-o-departamentos-o-fondos-de-comercio-o-galpones-o-hoteles-o-locales-o-negocios-especiales-o-oficinas-o-ph-o-quintas-o-terrenos/alquiler-o-alquiler-temporal-o-venta/rio-grande?orden-masnuevos"
    },
]
export default urlsARGP