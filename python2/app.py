# -*- coding: UTF-8 -*-

def cadastrar(nomes):
    print 'Digite o nome'
    nome = raw_input()
    nomes.append(nome)

def listar(nomes):
    print 'Listando nomes'
    for nome in nomes:
        print nome

def remover(nomes):
    print 'Qual nome gostaria de remover?'
    nome = raw_input()
    nomes.remove(nome)

def alterar(nomes):
    print 'Qual nome vc gostaria de alterar?'
    nome = raw_input()
    if(nome in nomes):
        index = nomes.index(nome)
        print 'Qual o novo nome?'
        novo_nome = raw_input()
        nomes[index] = novo_nome

def procurar(nomes):
    print 'Qual nome gostaria de procurar?'
    search = raw_input()
    if(search in nomes):
        print 'O nome %s está na lista' %(search)
    else:
        print 'O nome %s NÃO está na lista' %(search)

def menu():
    nomes = []
    escolha = ''
    while(escolha != '0')
        print 'Escolha uma opção:'
        print '1 - Cadastrar'
        print '2 - Listar'
        print '3 - Remover'
        print '4 - Alterar'
        print '5 - Procurar'
        print '0 - Sair'
        escolha = raw_input()

        if(escolha == '1'):
            cadastrar(nomes)

        if(escolha == '2'):
            listar(nomes)

        if(escolha == '3'):
            remover(nomes)
        
        if(escolha == '4'):
            alterar(nomes)
        
        if(escolha == '5'):
            procurar(nomes)

menu()