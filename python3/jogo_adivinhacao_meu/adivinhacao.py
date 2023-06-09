print("#################################")
print("Bem vindo ao jogo de adivinhacao")
print("#################################")

numero_secreto = 42

chute = input("Digite um numero: ")
chute = int(chute)

print("Voce digitou:", chute)

if(numero_secreto == chute):
    print("Voce acertou")
else:
    print("Voce errou")

print("O numero secreto e: ", numero_secreto)
