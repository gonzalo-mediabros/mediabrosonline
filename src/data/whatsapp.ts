export interface Contact {
  flag: string;
  label: string;
  tel: string;
}

export const whatsappMessage = "Hola, me gustaría saber más sobre sus servicios";

export const whatsappContacts: Contact[] = [
  { flag: "usa", label: "USA", tel: "+1 786 828 5062" },
  { flag: "mex", label: "MEX", tel: "+52 55 1328 5398" },
  { flag: "chi", label: "CHL", tel: "+56 2 2582 3484" },
  { flag: "arg", label: "ARG", tel: "+54 11 5983 9447" },
  { flag: "col", label: "COL", tel: "+57 601 508 7116" },
];
