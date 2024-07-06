interface CustomerData {
    id: string;
    value: number;
}

const id: string[] = Array.from({ length: 95 }, (_, i) => (i + 1).toString().padStart(2, '0'));
const value: number = Math.random();

// export const customerData: CustomerData[] = [
//     { id: '06', value: 0.7 }, // California
//     { id: '36', value: 0.3 }, // New York
//     { id: '17', value: 0.5 }, // Illinois
//     { id: '12', value: 0.4 }, // Florida
//     { id: '48', value: 0.6 }, // Texas
//     { id: '42', value: 0.2 }, // Pennsylvania
//     { id: '37', value: 0.8 }, // North Carolina
//     { id: '34', value: 0.1 }, // New Jersey
//     { id: '39', value: 0.5 }, // Ohio
//     { id: '13', value: 0.9 }, // Georgia
//     { id: '53', value: 0.4 }, // Washington
//     { id: '27', value: 0.3 }, // Minnesota
//     { id: '26', value: 0.6 }, // Michigan
//     { id: '32', value: 0.7 }, // Nevada
//     { id: '49', value: 0.2 }, // Utah
// ];

export const customerData = id.map(id => ({
    id,
    value: Math.random()
}));