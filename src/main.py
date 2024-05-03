from functions.add import add

def validateUserNums(n):
    return n.isdigit()


print("welcome to binary calculator")

userInput = "7"

while(int(userInput) not in [1,2,3,4]):
    userInput = input("\n1. Add\n2. Subtract\n3. Multiply\n4. Division\n\nChoice: ")

print()

if userInput == '1':
    num1 = input("Number 1: ")
    while not validateUserNums(num1):
        num1 = input("Number 1: ")
    
    num2 = input("Number 2: ")
    while not validateUserNums(num2):
        num2 = input("Number 2: ")

    print("\nAddition: " + str(add(num1,num2)))

elif userInput == '2':
    pass
elif userInput == '3':
    pass
elif userInput == '4':
    pass