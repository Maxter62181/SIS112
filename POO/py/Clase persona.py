class Persona:
    def __init__(self, nombre, edad, carrera, universidad):
        self.nombre = nombre
        self.edad = edad
        self.carrera = carrera
        self.universidad = universidad

    #Funcion para modificar datos
    def modificar_nombre(self, nuevo_nombre):
        if nuevo_nombre.isalpha():
            self.nombre = nuevo_nombre
        else:
            print("El nombre no puede contener números ni caracteres especiales.")

    def modificar_edad(self, nueva_edad):
        if isinstance(nueva_edad, int) and 0 < nueva_edad < 120:
            self.edad = nueva_edad
        else:
            print("La edad debe ser un número entero positivo menor a 120.")

    def modificar_carrera(self, nueva_carrera):
        if nueva_carrera.isalpha():
            self.carrera = nueva_carrera
        else:
            print("La carrera no puede contener números ni caracteres especiales.")

    def modificar_universidad(self, nueva_universidad):
        if nueva_universidad.isalpha():
            self.universidad = nueva_universidad
        else:
            print("La universidad no puede contener números ni caracteres especiales.")

    # Método para "eliminar" datos
    def eliminar_dato(self, dato):
        if hasattr(self, dato):
            setattr(self, dato, None)
        else:
            print(f"La persona no tiene el atributo {dato}.")

# Datos preestablecidos
persona = Persona("Mateo Zambrana", 18, "Ingeniería Industrial", "Universidad Catolica Boliviana")
print("Hola!!, me llamo ", persona.nombre , " Y tengo " , persona.edad , "!!")
print("Hoy es mi cumpleaños! y he cumplido " , persona.edad , " años.")
print("Hola! yo estudio " , persona.carrera , " y me encanta mucho mi carrera!")
print("Yo soy estudiante de la " , persona.universidad , ", porfavor, arreglen el internet.")

# Función para interactuar con el usuario y modificar datos
def modificar_datos_persona(persona):
    nuevo_nombre = input("Ingrese el nuevo nombre: ")
    while not nuevo_nombre.isalpha(): 
        nuevo_nombre = input("Porfavor ingrese un nombre adecuado.")
    persona.modificar_nombre(nuevo_nombre)

    nueva_edad = input("Ingrese la nueva edad: ")
    while not nueva_edad.isdigit() or not (0 < int(nueva_edad) < 90):
        nueva_edad = input("La edad debe ser un número entero positivo menor a 90. Ingrese la nueva edad: ")
    persona.modificar_edad(int(nueva_edad))

    nueva_carrera = input("Ingrese la nueva carrera: ")
    while not nueva_carrera.isalpha(): 
        nueva_carrera = input("Porfavor ingrese una carrera adecuada.")
    persona.modificar_carrera(nueva_carrera)

    nueva_universidad = input("Ingrese la nueva universidad: ")
    while not nueva_universidad.isalpha(): 
        nueva_universidad = input("Porfavor ingrese una universidad adecuada.")
    persona.modificar_universidad(nueva_universidad)

    print("Hola!, mi nuevo nombre es: ", persona.nombre , "." )
    print("Mi nueva edad es: ", persona.edad , " años." )
    print("Me cambie de carrera!!, ahora estoy estudiando " , persona.carrera , ".")
    print("Ahora estudio en la " , persona.universidad , ".")
    

    # Ejemplo de eliminación de atributo
    while True:
        try:
            num_datos = int(input("¿Cuántos datos deseas eliminar? (0-4): "))
            if 0 <= num_datos <= 4:
                break
            else:
                print("Por favor ingrese un número entre 0 y 4.")
        except ValueError:
            print("Por favor ingrese un número válido.")

    if num_datos == 0:
        print("No se eliminará ningún dato.")
        return

    for _ in range(num_datos):
        while True:
            dato = input("Ingrese el dato que desea eliminar (nombre, edad, carrera, universidad): ").lower()
            if dato in ["nombre", "edad", "carrera", "universidad"]:
                if getattr(persona, dato) is not None:
                    persona.eliminar_dato(dato)
                    break
                else:
                    print(f"El dato '{dato}' ya ha sido eliminado. Por favor, elija otro.")
            else:
                print("Atributo no válido. Por favor ingrese uno de los siguientes: nombre, edad, carrera, universidad.")

    print("Los datos han sido eliminados exitosamente. ", persona.__dict__)
# Llamada a la función para modificar datos
modificar_datos_persona(persona)