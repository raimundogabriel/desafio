

def calculaacao(valores):
    menorvalor = valores[0]
    menorposicao = 0
    i = 0
    while i < len(valores):
        if valores[i] < menorvalor and i != len(valores) - 1:
            menorvalor = valores[i]
            menorposicao = i
        i += 1

    maiorvalor = valores[1]
    maiorposicao = 0
    j = 1
    while j < len(valores):
        if valores[j] > maiorvalor and j > menorposicao:
            maiorvalor = valores[j]
            maiorposicao = j
        j += 1
    lucro = maiorvalor - menorvalor
    if maiorposicao < menorposicao:
        print('0 (Nesse caso nenhuma transação deve ser feita, lucro máximo igual a 0')
    else:
        print(f'{lucro} (Comprou no dia {menorposicao + 1} (preço igual a {menorvalor}) e vendeu no dia {maiorposicao + 1} (preço igual a {maiorvalor}), lucro foi de {maiorvalor} – {menorvalor} = {lucro}')


valores = [7, 1, 5, 3, 6, 4]
print(calculaacao(valores))
