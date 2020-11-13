import random

subjectTypesFile = open('subject.sql', 'r')
resultFile = open('lesson.sql', 'w')

codeClassList = list()
lines = subjectTypesFile.readlines()
for line in lines:
    line = line.split('(')[2].split(')')[0].split(',')
    codeClassList.append((line[0], line[2].strip()))
    # print(line)

week = ["hétfő", "kedd", "szerda", "csütörtök", "péntek"]
times = [8, 9, 10, 11, 12]

for osztaly in range(1, 13):
    records = [line for line in codeClassList if line[1] == str(osztaly)]
    for weekday in week:
        for time in times:
            lesson = records[random.randint(0, len(records)-1)][0]
            lesson2 = records[random.randint(0, len(records)-1)][0]
            while lesson == lesson2:
                lesson2 = records[random.randint(0, len(records)-1)][0]
            query = f"INSERT INTO Tanorak (targykod, nap, idopont, teremszam) VALUES \
({lesson}, '{weekday}', {time}, {random.randint(1, 15)});\n"
            query2 = f"INSERT INTO Tanorak (targykod, nap, idopont, teremszam) VALUES \
({lesson2}, '{weekday}', {time}, {random.randint(1, 15)});\n"
            resultFile.write(query)
            resultFile.write(query2)
