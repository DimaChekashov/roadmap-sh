package main

import "fmt"

func main() {
	fmt.Printf("Square area: %f\n", calcAreaSquare(10, 15))
	fmt.Printf("Is 10 even: %t\n", isEvenNumber(10))
	fmt.Printf("Celsius to Fahrenheit: %f\n", converCelsiusToFahrenheit(20))
	fmt.Printf("Max number: %d\n", getMaxNum(10, 20))
	fmt.Printf("Factorial: %d\n", calcFactorial(5))
}

// Task 1
func calcAreaSquare(width float64, height float64) float64 {
	return width * height
}

// Task 2
func isEvenNumber(num int) bool {
	return num % 2 == 0
}

// Task 3
func converCelsiusToFahrenheit(celsius float64) float64 {
	return (celsius * 9 / 5) + 32
}

// Task 4
func getMaxNum(a int, b int) int {
	if a > b {
		return a
	} else {
		return b
	}
}

// Task 5
func calcFactorial(n int) int {
	var sum int = 1

	for i := 2; i <= n; i++ {
		sum *= i
	}

	return sum
}
