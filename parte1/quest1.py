# nums = [input('digite o numero'),input('digite o numero'),input('digite o numero')]

#
def comparanumeros(nums, aa):
    for x in range(len(nums)):  # agora farei uma busca comparativa varrendo a lista
        for y in nums:
            if x + y == aa:
                print(' é um ')
                return x, y
    print('é um segundo')
    return 0

def comparanumerosw(nums, aa):
    x = 0
    y = 1
    while x < len(nums)-1:  # agora farei uma busca comparativa varrendo a lista

        while y <len(nums):

            if nums[x] + nums[y] == aa:
                print(' é um ')
                return x, y
            y += 1
        x += 1
    print('é um segundo')
    return 0


nums = [2, 7, 11, 15]  # a ordem importa?
aa = 13
#print(comparanumeros(nums, aa))
print(comparanumerosw(nums, aa))



