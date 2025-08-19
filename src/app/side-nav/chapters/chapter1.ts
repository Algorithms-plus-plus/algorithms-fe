import { Chapter } from "./chapter";

export const chapter1:Chapter = 
    { 
        id: 1, 
        name: 'Chapter 1 - Introduction', 
        nextLevel: [
            { 
                id: 1, 
                name: 'Basic Math Definitions and Algorithms', 
                nextLevel: [
                    { 
                        id: 1, 
                        name: 'Basic Math Definitions', 
                        nextLevel: [
                            { id: 1, name: 'Sets' },
                            { id: 2, name: 'Numbers' },
                            { id: 3, name: 'Modulus' },
                            { id: 4, name: 'Sum and Product' },
                            { id: 5, name: 'Power, logN and sqrt' },
                            { id: 6, name: 'Factorials and Recursion' },
                            { id: 7, name: 'Metrics' }
                        ] 
                    },
                ] 
            },
            { id: 2, name: 'Find Digit Numbers' },
            { id: 3, name: 'Prime Numbers' },
            { id: 4, name: 'Mersen and Perfect Numbers' },
            // { id: 5, name: 'Graphs' },
            // { id: 6, name: 'Backtrace Search' },
            // { id: 7, name: 'Divide and Conquer' },
            // { id: 8, name: 'Dynamic Optimization' },
            // { id: 9, name: 'Heuristics and Biases Algorithms' },
            // { id: 10, name: 'Compression' }
        ]
    };