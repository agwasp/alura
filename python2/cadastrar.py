NOMES = []

def cadastrar_nomes():
    print ("Digite um nome:")
    nome = raw_input()
    NOMES.append(nome)

def remover_nomes(NOMES):
    print ("Qual nome gostaria de remover?")
    nome = raw_input()
    NOMES.remove(nome)

def mostrar_lista(NOMES):
    print ("A lista e: %s") %(NOMES)
