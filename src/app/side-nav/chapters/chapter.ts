export interface Chapter {
    id: number; 
    name: string;
    nextLevel?: Chapter[];
    navigate?: string[]; // Optional navigation path
}