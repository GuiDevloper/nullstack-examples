package main

func main() {
	println("Golang executed!")
}

//export multiply
func multiply(x int16, y int16) int16 {
	return x * y
}
