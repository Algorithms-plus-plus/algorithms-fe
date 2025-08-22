export interface SetResponse {
    subset: boolean;
    union: Set<string>; 
    intersection: Set<string>; 
    diff1: Set<string>; 
    diff2: Set<string>; 
}