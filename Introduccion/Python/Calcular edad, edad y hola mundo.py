def HelloWorld():
    print("HelloWorld!!!")

def YourAgee():
    Age = input("please select your age")
    print("Your age is: ", Age)
    



def CalculateYourAge():
    
    BirthYear = int(input("please select your birthyear")) 
    
    if BirthYear > 2024: 
     while BirthYear > 2024:
        BirthYear = int(input("please select a usefull year"))
    
     print("Your age is: ", 2024 - BirthYear)
    else: print("Your age is: ", 2024 - BirthYear)


HelloWorld()
YourAgee()
CalculateYourAge()

        
