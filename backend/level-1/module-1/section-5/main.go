package main

import (
	"fmt"
	"math"
)

type Circle struct{
	radius float64
}

func (c Circle) calcArea() float64 {
	return math.Pi * math.Pow(c.radius, 2)
}

func (c Circle) calcLength() float64 {
	return c.radius * 2 * math.Pi
}

type Point struct{
	x float64
	y float64
}

func (p Point) calcDistance(p2 Point) float64 {
	return math.Hypot(p.x - p2.x, p.y - p2.y)
}

type Employee struct{
	ID uint
	FirstName string
	LastName string
	Salary float64
}

func (e *Employee) raiseЫSalary(percent float64) {
	e.Salary *= (1 + percent / 100)
}

func main() {
	// Task 1
	circle := Circle{
		radius: 10,
	}

	fmt.Printf("Circle area: %f\n", circle.calcArea())
	fmt.Printf("Circle length: %f\n", circle.calcLength())

	pointOne := Point{
		x: 10,
		y: 20,
	}
	pointTwo := Point{
		x: 40,
		y: 30,
	}

	// Task 2
	fmt.Printf("Distance between points: %f\n", pointOne.calcDistance(pointTwo))

	// Task 3
	employee := Employee{
		ID: 1,
		FirstName: "John",
		LastName: "Doe",
		Salary: 50000,
	}

	employee.raiseЫSalary(45)
	
	fmt.Printf("New salary: %f\n", employee.Salary)
}