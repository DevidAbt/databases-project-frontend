import requests
from bs4 import BeautifulSoup


page = requests.get(
    "https://www.bestrandoms.com/random-address-in-hu?quantity=120")
soup = BeautifulSoup(page.content, 'html.parser')

resultSet = soup.select('#main > div > div.col-xs-12.col-sm-9.main > div.content > ul > li > p:nth-child(1) > span')

file = open('addresses.txt', 'a')

for result in resultSet:
    address = str(result).split('</b>\xa0\xa0')[1].split('</span>')[0]
    num = address[-3:].strip()
    address = address[:-3].strip()
    print(address + ' ; ' + num)
    file.write(address + ';' + num + '\n')

# print(resultSet)
