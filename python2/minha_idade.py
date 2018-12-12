#calculo da sua idade
def calculoidade():
    print "Digite o seu ano de nascimento:"
    nascimento = raw_input()
    nascimento_int = int(nascimento)
    print "Digite o ano atual:"
    ano_atual = raw_input()
    ano_atual_int = int(ano_atual)
    resultado = ano_atual_int - nascimento_int
    print "Seu ano de nascimento e %s" %(resultado)
    