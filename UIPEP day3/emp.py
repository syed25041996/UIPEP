""" Create a class of employess and perform operations such as add,delete and print in it """

class Employee:

    company = "UIPEP"

    def __init__(self, name, age, department):
        self.name = name
        self.age = age
        self.department = department

    def info_emp(self):
        ll = [self.name,self.age,self.department]
        for emp in ll :
            print(emp, end="  ")
        print()

    @classmethod
    def comp_info(cls):
        print(f"The employee is working in : {Employee.company}")

class newEmployee(Employee):
    
    def __init__(self,name, age, department, employees=None):
        super().__init__(name, age, department)
        if employees is None:
            self.employees = []
        else:
            self.employees = employees

    def add_employee(self, emp):
        if emp not in self.employees:
            self.employees.append(emp)
    
    def del_employee(self,emp):
        if emp in self.employees:
            self.employees.remove(emp)

    def show_updated_employees(self):
        for emp in self.employees:
            print(f"{emp.name} {emp.age} {emp.department}")


# a, b, c = input("Enter the values(name,age and dept): ").split()
e1 = newEmployee("Syed",21,"Developer")
e2 = newEmployee("Bob",22,"Tester")
e3 = newEmployee("Susan",20,"HR")
# e1.info_emp()
# e1.comp_info()
e1.add_employee(e2)
e1.add_employee(e3)
e1.show_updated_employees()
e1.del_employee(e3)
e1.show_updated_employees()