import simplejson as json
import json

def main():
    with open('province.json', encoding='utf-8') as json_data:
        data = json.load(json_data)
    d = capitalize(data)
    print(json.dumps(d, indent=4, sort_keys=True))
    
def capitalize(x):
   if isinstance(x, list):
     return [capitalize(v) for v in x]
   elif isinstance(x, dict):
     return {k[0].upper() + k[1:]: capitalize(v) for k, v in x.items()}
   else:
     return x
     
if __name__ == "__main__":
    main()