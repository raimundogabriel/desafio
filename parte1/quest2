
def strbalanceada(frase, bracket):
    if len(frase) % 2 != 0:
        print('desbalanceado 1')
        return 0
    else:
        i = 0
        j = -1
        while i < (len(frase)/2):    #do inicio ao meio
            if frase[i] + frase[j] not in bracket:
                print('desbalanceado 2')

                return 0

            j -= 1
            i += 1
        print('balanceado')
        return 1


frase = '{{[[(())))]]}}'
bracket = ['()', '[]', '{}']
strbalanceada(frase, bracket)

