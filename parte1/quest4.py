import numpy as np
import matplotlib.pyplot as plt

entrada = [0,1,0,2,1,0,1,3,2,1,2,1]

i = 0
qtdSaida=0

while i < len(entrada): #para cada membro de entrada
    
    #encontra membros possíveis a esquerda
    esq = np.array(entrada[0:i])
    resq = np.where(esq >= entrada[i] )[0]
    
    #encontra membros possíveis a direita
    dir =np.array(entrada[i+1:])
    rdir = np.where(dir >= entrada[i])[0]

    if len(resq) > 0 and len(rdir) > 0 :
      qtdSaida = qtdSaida+1

    i += 1
    
print('reteu ', qtdSaida, ' poças de agua')
plt.show()
