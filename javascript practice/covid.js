function minDistanceToCentres(N, K, centre_positions) {
    centre_positions.sort((a, b) => a - b);

    let totalDistance = 0;
    let patientsLeft = N;

    while (patientsLeft > 0) {
        const groupSize = Math.min(K, patientsLeft);
        totalDistance += 2 * centre_positions[groupSize - 1];
        patientsLeft -= groupSize;
    }

    return totalDistance;
}

// Example usage
let n= 5
let k= 1
let centre_positions= [1,2,3,4,5]
const input = "5 1\n1 2 3 4 5\n";
const lines = input.trim().split("\n");
const [N, K] = lines[0].split(" ").map(Number);
const centrePositions = lines[1].split(" ").map(Number);
const result = minDistanceToCentres(N, K, centrePositions);
console.log(result);
