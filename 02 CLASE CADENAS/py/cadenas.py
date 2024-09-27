class Cadena:
    def __init__(self, cadena):
        self.cadena = cadena

    # Obtiene el valor asignado a la cadena
    def get_cadena(self):
        return self.cadena

    # Unir una cadena con otra
    def concatenar(self, otra_cadena):
        self.cadena += otra_cadena

    # Invertir los caracteres de la cadena
    def invertir(self):
        self.cadena = self.cadena[::-1]

    # Compara si la cadena está vacía
    def es_vacia(self):
        return len(self.cadena) == 0

    # Compara si la subcadena existe dentro de la cadena
    def contiene(self, subcadena):
        return subcadena in self.cadena

    # Compara si la cadena empieza con el prefijo "caracter"
    def comienza_con(self, prefijo):
        return self.cadena.startswith(prefijo)

    # Compara si la cadena termina con el sufijo "caracter"
    def termina_con(self, sufijo):
        return self.cadena.endswith(sufijo)

    # Obtiene la cantidad de caracteres que tiene la cadena
    def longitud(self):
        return len(self.cadena)

    # Obtiene la cadena transformada a mayúsculas
    def a_mayusculas(self):
        return self.cadena.upper()

    # Obtiene la cadena transformada a minúsculas
    def a_minusculas(self):
        return self.cadena.lower()


# Menú interactivo
def menu():
    cadena = Cadena(input("Introduce la cadena inicial: "))
    
    while True:
        print("\nMenu:")
        print("1. Obtener la cadena actual")
        print("2. Concatenar otra cadena")
        print("3. Invertir cadena")
        print("4. Verificar si está vacía")
        print("5. Verificar si contiene subcadena")
        print("6. Verificar si comienza con un prefijo")
        print("7. Verificar si termina con un sufijo")
        print("8. Obtener la longitud de la cadena")
        print("9. Convertir a mayúsculas")
        print("10. Convertir a minúsculas")
        print("11. Salir")
        
        opcion = input("Elige una opción: ")
        
        if opcion == '1':
            print("Cadena actual:", cadena.get_cadena())
        elif opcion == '2':
            otra_cadena = input("Introduce la cadena a concatenar: ")
            cadena.concatenar(otra_cadena)
            print("Cadena resultante:", cadena.get_cadena())
        elif opcion == '3':
            cadena.invertir()
            print("Cadena invertida:", cadena.get_cadena())
        elif opcion == '4':
            print("¿Es vacía?", cadena.es_vacia())
        elif opcion == '5':
            subcadena = input("Introduce la subcadena a buscar: ")
            print("¿Contiene subcadena?", cadena.contiene(subcadena))
        elif opcion == '6':
            prefijo = input("Introduce el prefijo: ")
            print("¿Comienza con el prefijo?", cadena.comienza_con(prefijo))
        elif opcion == '7':
            sufijo = input("Introduce el sufijo: ")
            print("¿Termina con el sufijo?", cadena.termina_con(sufijo))
        elif opcion == '8':
            print("Longitud de la cadena:", cadena.longitud())
        elif opcion == '9':
            print("Cadena en mayúsculas:", cadena.a_mayusculas())
        elif opcion == '10':
            print("Cadena en minúsculas:", cadena.a_minusculas())
        elif opcion == '11':
            print("Saliendo del programa.")
            break
        else:
            print("Opción no válida, por favor intenta de nuevo.")


# Ejecutar el menú
menu()