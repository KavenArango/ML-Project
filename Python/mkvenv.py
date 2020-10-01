def calc():
    try:
        return ("HELLO")
    except Exception as e:
        return ("Failed to create venv", e)
    
    
if __name__ == '__main__':
    print(calc())

