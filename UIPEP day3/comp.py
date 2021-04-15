class MyComputer:

    def __init__(self):
        self.__processor = "i5 8th gen"
        self.__ram = "16GB"
        self.__storage = "1TB"

    def show(self):
        return f"features are {self.__processor} {self.__ram} and {self.__storage}"

    #Getter method
    def change_features(self, processor, ram, storage):
        self.__processor = processor
        self.__ram = ram
        self.__storage = storage


comp1 = MyComputer()
print(comp1.show())

# Cannot change ram as it is a private attribute
comp1.__ram = 32
print(comp1.show())

#We can change private atrributes using setter methods
comp1.change_features("i7 8th gen", "32GB", "2TB")
print(comp1.show())

