import random
import datetime

nameFile = open('names.txt', 'r')
addressFile = open('addresses.txt', 'r')
resultFile = open('student.sql', 'w')

def getBirthday(osztaly):
    year = 2020 - 6 - osztaly
    return str(year) + "-" + str(random.randint(1,12)) + "-" + str(random.randint(1,28))

def getIranyitoszam():
    return 1000 + random.randint(100, 999)

def getStudentId():
    return 7 * pow(10,10) + random.randint(1111111111, 9999999999)

for osztaly in range(12):
    for j in range(10):
        name = nameFile.readline()[:-1]
        address = addressFile.readline()[:-2].split(';')
        query = f"INSERT INTO Diakok (diakig, nev, szul_datum, iranyitoszam, utca, hazszam, hanyadikos) VALUES \
('{getStudentId()}', '{name}', '{getBirthday(osztaly+1)}', {getIranyitoszam()}, '{address[0]}', {address[1]}, {str(osztaly+1)});\n"
        # print(query)
        resultFile.write(query)