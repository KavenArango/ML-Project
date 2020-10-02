from sys import argv

def calc():
	"""based on the input text, return the operation result"""
	try:
		return "why am i here"
	except Exception as e:
		print(e)
		return "goodbye"

if __name__ == '__main__':
    print(calc())

