export interface Contact {
  flag: string;
  label: string;
  tel: string;
}

export const whatsappMessage = "Hola, me gustaría saber más sobre sus servicios";



export const phoneNumbers: Contact[] = [
  { flag: "usa", label: "USA", tel: "+1 786 828 5062" },
  { flag: "mex", label: "MEX", tel: "+52 55 1328 5398" },
  { flag: "chi", label: "CHL", tel: "+56 2 2582 3484" },
  { flag: "arg", label: "ARG", tel: "+54 11 5983 9447" },
  { flag: "col", label: "COL", tel: "+57 601 508 7116" },
];

export type WhatsappContact = {
  flag: string;
  label: string;
  tel: string;
  mesagge: string;
};

export const whatsapp: WhatsappContact[] = [
  {
    flag: "usa",
    label: "USA",
    tel: "525513285398",
    mesagge: "Hola MediaBros, me gustaría incrementar los clientes potenciales de mi empresa con una estrategia de marketing digital a medida. ¿Me podrían brindar información?"
  },
  {
    flag: "mex",
    label: "MEX",
    tel: "525513285398",
    mesagge: "Hola MediaBros, me gustaría incrementar los clientes potenciales de mi empresa con una estrategia de marketing digital a medida. ¿Me podrían brindar información?"
  },
  {
    flag: "chi",
    label: "CHL",
    tel: "56225823484",
    mesagge: "Hola MediaBros, me gustaría incrementar los clientes potenciales de mi empresa con una estrategia de marketing digital a medida. ¿Me podrían brindar información?"
  },
  {
    flag: "arg",
    label: "ARG",
    tel: "5491168342300",
    mesagge: "Hola MediaBros, me gustaría incrementar los clientes potenciales de mi empresa con una estrategia de marketing digital a medida. ¿Me podrían brindar información?"
  },
  {
    flag: "col",
    label: "COL",
    tel: "525513285398",
    mesagge: "Hola MediaBros, me gustaría incrementar los clientes potenciales de mi empresa con una estrategia de marketing digital a medida. ¿Me podrían brindar información?"
  },
];