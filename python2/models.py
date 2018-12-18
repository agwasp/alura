# -*- coding: UTF-8 -*-

class Perfil(object):
    'Classe para padrão de perfis de usuários'

    # def dentro de uma classe é um método
    def __init__(self, nome, telefone, empresa):
        self.nome = nome
        self.telefone = telefone
        self.empresa = empresa
    
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
