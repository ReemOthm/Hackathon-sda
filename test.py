d= open('./Hackathon-sda/dataset.txt')
# print(d.read())

q= open('./Hackathon-sda/./queries.txt')
dataset = d.read()
queries = q.read()

datasetArray = dataset.split("\n").sort()
queriesArray= queries.split("\n").sort()

print(datasetArray)