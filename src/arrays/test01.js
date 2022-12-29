function joinArrays2(arrayA, arrayB) {
  for (let i = 0; i < arrayB.length; i++) {
      arrayA.push(arrayB[i])
  }

  return arrayA
}

const numbers = [1, 2, 3, 4, 5]
const letters = ['a', 'b', 'c', 'd', 'e']

console.log(joinArrays2(numbers, letters))
