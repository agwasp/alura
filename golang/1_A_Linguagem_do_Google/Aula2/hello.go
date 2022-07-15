package main

import "fmt"
import "reflect"

func main() {
	var nome string = "Alex"
	var idade int = 36
	var versao float32 = 1.1

	fmt.Println("Olá Sr", nome, "sua idade é", idade)
	fmt.Println("Este programa está na versão:", versao)

	fmt.Println("##########")
	second()

	fmt.Println("##########")
	thrid()
}

func second() {
	var nome = "Alex"
	var idade = 36
	var versao = 1.1

	fmt.Println("O tipo da variável nome é:", reflect.TypeOf(nome))
	fmt.Println("O tipo da variável idade é:", reflect.TypeOf(idade))
	fmt.Println("O tipo da variável versao é:", reflect.TypeOf(versao))
}

func thrid() {
	nome := "Alex"
	idade := 36
	versao := 1.1

	fmt.Println("Olá Sr", nome, "sua idade é", idade)
	fmt.Println("Este programa está na versão:", versao)
}
