package main

import "fmt"

func main() {
	for idx, char := range "Test" {
		fmt.Printf("Index %d: char: %c\n", idx, char)
	}

	// Task 1
	var year int = 2025

	if (year % 4 == 0 && year % 100 != 0) || year % 400 == 0 {
		fmt.Println(year, "is a leap year")
	} else {
		fmt.Println(year, "is not a leap year")
	}

	// Task 2
	var num int = 8

	for i := 1; i <= 10; i++ {
		fmt.Printf("%d * %d = %d\n", num, i, i * num)
	}

	// Task 3
	var sum int = 0

	for i := 2; i <= 10; i += 2 {
		sum += i
	}

	fmt.Println(sum)

	// Task 4
	var vowels int = 0
	
	for _, char := range "some text" {
		if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
			vowels++
		}
	}

	fmt.Println("Vowels of 'some text':", vowels)

	// Task 5
	var first, second int = 0, 1

	for {
		first, second = second, first + second

		if (first + second) > 500 {
			break
		}
		
		fmt.Println(first + second)
	}
}