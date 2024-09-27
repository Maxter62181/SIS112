import tkinter as tk
from tkinter import messagebox, simpledialog
from PIL import Image, ImageTk


class EnteroApp:
    def __init__(self, master, numero_inicial):
        self.Num = numero_inicial
        self.master = master
        self.master.title("Menú de Operaciones")
        self.master.geometry("850x600")
        self.master.configure(bg="black")  # Fondo negro

        # Crear el frame para la imagen a la derecha
        self.image_frame = tk.Frame(master, bg="black")
        self.image_frame.pack(side="right", padx=10, pady=10)

        # Cargar y mostrar la imagen
        self.mostrarLogo()

        # Crear un Canvas para el menú y una Scrollbar
        self.canvas = tk.Canvas(master, bg="black")
        self.canvas.pack(side="left", fill="both", expand=True)

        # Añadir un frame dentro del Canvas
        self.menu_frame = tk.Frame(self.canvas, bg="black")
        self.canvas.create_window((0, 0), window=self.menu_frame, anchor="nw")

        # Añadir scrollbar
        self.scrollbar = tk.Scrollbar(master, orient="vertical", command=self.canvas.yview)
        self.scrollbar.pack(side="left", fill="y")
        self.canvas.configure(yscrollcommand=self.scrollbar.set)

        # Hacer que el canvas sea "scrollable"
        self.menu_frame.bind("<Configure>", lambda e: self.canvas.configure(scrollregion=self.canvas.bbox("all")))

        # Etiqueta de título con colores personalizados
        self.menu_label = tk.Label(self.menu_frame, text="Menú de Operaciones", font=("Arial", 18, "bold"), fg="light green", bg="black")
        self.menu_label.pack(pady=10)

        # Crear botones para cada opción del menú con colores llamativos
        self.create_menu_button("1. Establecer un nuevo número", self.setNum, "purple", "white")
        self.create_menu_button("2. Mostrar el número actual", self.showNum, "red", "white")
        self.create_menu_button("3. Incrementar el número", self.incrementarNum, "light green", "black")
        self.create_menu_button("4. Decrementar el número", self.DecrementarNum, "blue", "white")
        self.create_menu_button("5. Verificar si es par o impar", self.esParImpar, "orange", "white")
        self.create_menu_button("6. Verificar si es un número perfecto", self.esNumeroPerfecto, "pink", "black")
        self.create_menu_button("7. Verificar si es un número primo", self.esNumeroPrimo, "light blue", "black")
        self.create_menu_button("8. Buscar en la serie de Fibonacci", self.fibonacci, "purple", "white")
        self.create_menu_button("9. Generar la serie de Fibonacci", self.Pillarfibonacci, "green", "black")
        self.create_menu_button("10. Verificar si es un número Armstrong", self.esArmstrong, "yellow", "black")
        self.create_menu_button("11. Verificar si es un número perfecto generalizado", self.esPerfectoGeneralizado, "cyan", "black")
        self.create_menu_button("12. Calcular la fila N del triángulo de Pascal", self.calcularFilaPascal, "violet", "white")
        self.create_menu_button("13. Cifrar el número usando el cifrado César", self.cifrarCesar, "light green", "black")
        self.create_menu_button("14. Verificar si tiene primo gemelo", self.tienePrimoGemelo, "orange", "black")
        self.create_menu_button("15. Descomponer en factores primos", self.descomponerEnFactoresPrimos, "red", "white")
        self.create_menu_button("16. Calcular el número de Catalan", self.calcularCatalan, "light blue", "black")
        self.create_menu_button("17. Verificar si es un número de Mersenne", self.esMersenne, "pink", "black")
        self.create_menu_button("18. Salir", master.quit, "red", "white")

    def create_menu_button(self, text, command, bg_color, text_color):
        """Crea un botón estilizado en el menú."""
        button = tk.Button(self.menu_frame, text=text, width=45, command=command, bg=bg_color, fg=text_color, font=("Arial", 12, "bold"))
        button.pack(pady=5)

    def mostrarLogo(self):
        """Muestra la imagen proporcionada en el frame derecho."""
        try:
            img = Image.open("/mnt/data/antialias_logo_resized_final.png")
            img = img.resize((150, 150), Image.ANTIALIAS)
            img_tk = ImageTk.PhotoImage(img)

            label = tk.Label(self.image_frame, image=img_tk, bg="black")
            label.image = img_tk  # Mantener una referencia para evitar que la imagen se destruya
            label.pack()
        except Exception as e:
            messagebox.showerror("Error", f"No se pudo cargar la imagen: {e}")

    def setNum(self):
        """Establecer un nuevo número ingresado por el usuario."""
        nuevo_num = simpledialog.askinteger("Input", "Ingrese un nuevo número:")
        if nuevo_num is not None:
            self.Num = nuevo_num
            messagebox.showinfo("Número actualizado", f"El número se ha actualizado a {self.Num}")

    def showNum(self):
        """Mostrar el número actual."""
        messagebox.showinfo("Número actual", f"El número actual es {self.Num}")

    def incrementarNum(self):
        """Incrementar el número en 1."""
        self.Num += 1
        messagebox.showinfo("Número incrementado", f"El número incrementado es {self.Num}")

    def DecrementarNum(self):
        """Decrementar el número en 1."""
        self.Num -= 1
        messagebox.showinfo("Número decrementado", f"El número decrementado es {self.Num}")

    def esParImpar(self):
        """Verificar si el número es par o impar."""
        resultado = "par" if self.Num % 2 == 0 else "impar"
        messagebox.showinfo("Par o Impar", f"El número {self.Num} es {resultado}")

    def esNumeroPerfecto(self):
        """Verificar si el número es perfecto."""
        suma = sum(i for i in range(1, self.Num) if self.Num % i == 0)
        resultado = "perfecto" if suma == self.Num else "no es perfecto"
        messagebox.showinfo("Perfecto", f"El número {self.Num} {resultado}")

    def esNumeroPrimo(self):
        """Verificar si el número es primo."""
        if self.Num < 2:
            resultado = False
        else:
            resultado = all(self.Num % i != 0 for i in range(2, int(self.Num ** 0.5) + 1))
        messagebox.showinfo("Primo", f"El número {self.Num} es primo." if resultado else "El número no es primo.")

    def fibonacci(self):
        """Verificar si el número está en la serie de Fibonacci."""
        a, b = 0, 1
        while a <= self.Num:
            if a == self.Num:
                messagebox.showinfo("Fibonacci", f"El número {self.Num} pertenece a la serie de Fibonacci.")
                return
            a, b = b, a + b
        messagebox.showinfo("Fibonacci", f"El número {self.Num} no pertenece a la serie de Fibonacci.")

    def Pillarfibonacci(self):
        """Generar la serie de Fibonacci hasta el número ingresado."""
        serie = [0, 1]
        while len(serie) < self.Num:
            serie.append(serie[-1] + serie[-2])
        messagebox.showinfo("Serie de Fibonacci", f"Serie de Fibonacci hasta {self.Num} elementos: {serie[:self.Num]}")

    def esArmstrong(self):
        """Verificar si es un número Armstrong."""
        num_str = str(self.Num)
        num_digits = len(num_str)
        suma = sum(int(digit) ** num_digits for digit in num_str)
        resultado = "es un número de Armstrong" if suma == self.Num else "no es un número de Armstrong"
        messagebox.showinfo("Armstrong", f"El número {self.Num} {resultado}")

    def esPerfectoGeneralizado(self):
        """Verificar si es un número perfecto generalizado."""
        k = simpledialog.askinteger("Input", "Ingrese el valor de k:")
        suma = sum(i ** k for i in range(1, self.Num) if self.Num % i == 0)
        resultado = "es un número perfecto generalizado" if suma == self.Num else "no es un número perfecto generalizado"
        messagebox.showinfo("Perfecto Generalizado", f"El número {self.Num} {resultado} con respecto a k={k}")

    def calcularFilaPascal(self):
        """Calcular la fila N del triángulo de Pascal."""
        fila = [self.factorial(self.Num) // (self.factorial(k) * self.factorial(self.Num - k)) for k in range(self.Num + 1)]
        messagebox.showinfo("Triángulo de Pascal", f"La fila {self.Num} del triángulo de Pascal es: {fila}")

    def cifrarCesar(self):
        """Cifrar el número usando el cifrado César."""
        desplazamiento = simpledialog.askinteger("Input", "Ingrese el valor de desplazamiento para el cifrado César:")
        cifrado = ''.join(chr((ord(char) - 48 + desplazamiento) % 10 + 48) for char in str(self.Num))
        messagebox.showinfo("Cifrado César", f"El número cifrado con desplazamiento {desplazamiento} es: {cifrado}")

    def tienePrimoGemelo(self):
        """Verificar si el número tiene un primo gemelo."""
        if self.es_primo(self.Num) and (self.es_primo(self.Num + 2) or self.es_primo(self.Num - 2)):
            messagebox.showinfo("Primo Gemelo", f"El número {self.Num} tiene un primo gemelo.")
        else:
            messagebox.showinfo("Primo Gemelo", f"El número {self.Num} no tiene primo gemelo.")

    def descomponerEnFactoresPrimos(self):
        """Descomponer el número en factores primos."""
        n = self.Num
        factores = []
        divisor = 2
        while n > 1:
            while n % divisor == 0:
                factores.append(divisor)
                n //= divisor
            divisor += 1
        messagebox.showinfo("Factores Primos", f"Los factores primos de {self.Num} son: {factores}")

    def calcularCatalan(self):
        """Calcular el número de Catalan."""
        catalan = self.factorial(2 * self.Num) // (self.factorial(self.Num + 1) * self.factorial(self.Num))
        messagebox.showinfo("Número de Catalán", f"El número de Catalán para n={self.Num} es: {catalan}")

    def esMersenne(self):
        """Verificar si el número es de Mersenne."""
        import math
        if (math.log(self.Num + 1, 2)).is_integer():
            messagebox.showinfo("Número de Mersenne", f"El número {self.Num} es un número de Mersenne.")
        else:
            messagebox.showinfo("Número de Mersenne", f"El número {self.Num} no es un número de Mersenne.")

    def factorial(self, n):
        """Calcular el factorial de un número."""
        if n == 0:
            return 1
        else:
            return n * self.factorial(n - 1)

    def es_primo(self, num):
        """Verificar si un número es primo (para primo gemelo)."""
        if num < 2:
            return False
        for i in range(2, int(num ** 0.5) + 1):
            if num % i == 0:
                return False
        return True


if __name__ == "__main__":
    root = tk.Tk()
    app = EnteroApp(root, 10)
    root.mainloop()

