# -*- coding: UTF-8 -*-

class Perfil(object):
    'Classe para padrão de perfis de usuários'

    # def dentro de uma classe é um método
    def __init__(self, nome, telefone, empresa):
        self.nome = nome
        self.telefone = telefone
        self.empresa = empresa
        # Para deixarmos uma variável encapsulada (como se fosse private) temos que add o "__" na frente da mesma. O Python renomeia a variável internamente para que ela não seja acessível fora dos métodos que a utilizam.
        self.__curtidas = 0
    
    def curtir(self):
        self.__curtidas+=1

    def obter_curtidas(self):
        return self.__curtidas

    def imprimir(self):
        print 'Nome: %s, Telefone: %s, Empresa: %s' % (self.nome, self.telefone, self.empresa)

class Data(object):
   def __init__(self, dia, mes, ano):
      self.dia = dia
      self.mes = mes
      self.ano = ano

   def imprimir(self):
      print '%s/%s/%s' % (self.dia, self.mes, self.ano)

class IMCPessoa(object):
    def __init__(self, nome, peso, altura):
        self.nome = nome
        self.peso = float(peso)
        self.altura = float(altura)

    def imprimir(self):
        IMC = (self.altura **2) / self.peso
        print 'O IMC de %s é: %s' % (self.nome, IMC)
