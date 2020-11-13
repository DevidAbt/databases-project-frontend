subjectTypesFile = open('subject.sql', 'r')
lessonFile = open('lesson.sql', 'r')
resultFile = open('lessonsOfTimeable.sql', 'w')


codeClassList = list()
subjectTypeLines = subjectTypesFile.readlines()
for line in subjectTypeLines:
    line = line.split('(')[2].split(')')[0].split(',')
    codeClassList.append((line[0], line[2].strip()))

lessonList = list()
lessonLines = lessonFile.readlines()
for line in lessonLines:
    line = line.split('(')[2].split(')')[0].split(',')
    lessonList.append((line[0], line[1].strip(), line[2].strip()))

def getWeek(bool):
    if bool:
        return 1
    else:
        return 0

A_het = True
for lesson in lessonList:
    osztaly = "-1"
    for codeClass in codeClassList:
        if lesson[0] == codeClass[0]:
            osztaly = codeClass[1]
    if osztaly == "-1":
        print("HIBA")
        exit(1)
    query = f"INSERT INTO Tanorai (hanyadikos, A_het, targykod, nap, idopont) VALUES \
({osztaly}, {getWeek(A_het)}, {lesson[0]}, {lesson[1]}, {lesson[2]});\n"
    # print(query)
    resultFile.write(query)
    A_het = not A_het