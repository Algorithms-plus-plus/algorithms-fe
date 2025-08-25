import { Chapter } from "../side-nav/chapters/chapter";

export const chapter1:Chapter = 
    { 
        id: 1, 
        name: 'Chapter 1 - Introduction', 
        // navigate: '/chapter1',
        nextLevel: [
            { 
                id: 1, 
                name: 'Basic Math Definitions and Algorithms', 
                nextLevel: [
                    { 
                        id: 1, 
                        name: 'Basic Math Definitions', 
                        nextLevel: [
                            { id: 1, name: 'Sets', navigate: ['chapter1', 'sets'] },
                            { id: 2, name: 'Numbers', navigate: ['chapter1', 'numbers'] },
                            { id: 3, name: 'Modulo', navigate: ['chapter1', 'modulo'] },
                            { id: 4, name: 'Sum and Product', navigate: ['chapter1', 'sum-product'] },
                            { id: 5, name: 'Power, logN and sqrt', navigate: ['chapter1', 'power-log-sqrt'] },
                            { id: 6, name: 'Factorials and Recursion' },
                            { id: 7, name: 'Metrics' }
                        ] 
                    },
                ] 
            },
            { id: 2, name: 'Find Digit Numbers' },
            { id: 3, name: 'Prime Numbers', nextLevel: [
                { id: 1, name: 'Prime Number Check' },
                { id: 2, name: 'Eratosthenes Solution' },
                { id: 3, name: 'Prime Divisor' },
            ] },
            { id: 4, name: 'Mersen and Perfect Numbers' },
            // { id: 5, name: 'Graphs' },
            // { id: 6, name: 'Backtrace Search' },
            // { id: 7, name: 'Divide and Conquer' },
            // { id: 8, name: 'Dynamic Optimization' },
            // { id: 9, name: 'Heuristics and Biases Algorithms' },
            // { id: 10, name: 'Compression' }
        ]
    };