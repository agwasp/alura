from datetime import date

#calculo da sua idade
def calculoidade():
    print "Digite o seu ano de nascimento:"
    nascimento = raw_input()
    nascimento_int = int(nascimento)
    ano_atual = date.today().year
    resultado = ano_atual - nascimento_int
    print "Seu ano de nascimento e: %s" %(resultado)
    