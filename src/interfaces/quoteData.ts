export type TquoteData = {
    name: string;
    mail: string;
    number: number;
    date: string;
    uploads: number;
    status: "requested" | "inprogress" | "received";
}