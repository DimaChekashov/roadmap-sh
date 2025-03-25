package main

import "fmt"

func main() {
	var num int = 10
	var str string = "Hello"
	var boolean bool = true
	var ft float32 = 3.14

	var numZero int
	var strZero string
	var booleanZero bool
	var ftZero float32

	var mean float32 = (20.0 + 15.0 + 13.0) / 3

	fmt.Println(num, str, boolean, ft)
	fmt.Println(numZero, strZero, booleanZero, ftZero)
	fmt.Println(mean)

	var a, b int

	fmt.Scanln(&a)
	fmt.Scanln(&b)

	fmt.Println(a + b)

	const lightSpeed = 299792458

	fmt.Println(lightSpeed * 60)
}