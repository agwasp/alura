package main

import "fmt"

func main() {
	nome := "Alex"
	versao := 1.1

	fmt.Println("Olá Sr", nome)
	fmt.Println("Este programa está na versão:", versao)

	fmt.Println("##########")
	fmt.Println("0 - Sair")
	fmt.Println("1 - Iniciar Monitoramento")
	fmt.Println("2 - Exibir Logs")

	var comando int
	fmt.Scan(&comando)
}
