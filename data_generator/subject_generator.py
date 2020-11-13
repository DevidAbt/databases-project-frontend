subjectTypesFile = open('subjectTypes.txt', 'r')
resultFile = open('subject.sql', 'w')

subjectList = list()
for i in range(13):
    line = subjectTypesFile.readline().split('\'')
    subject = line[1]
    subjectList.append(subject)

code = 100
for osztaly in range(12):
    for i in range(13):
        query = f"INSERT INTO Tantargyak (targykod, targynev, hanyadikos) \
VALUES ({code}, '{subjectList[i]}', {osztaly+1});\n"
        # print(query)
        resultFile.write(query)
        code += 1