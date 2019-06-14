from models2 import *
arquivo = None
try:
    arquivo = open('nao_existe.txt', 'r')
    valores = arquivo.readline().split(':')
    Perfil(*valores)
    print('arquivo foi aberto')
    arquivo.close()
except (IOError, TypeError) as erro:
    print ('Deu IOError %s' % erro)
finally:
    if(arquivo is not None):
        print ('Fechando Arquivo')
        arquivo.close()