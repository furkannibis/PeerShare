from requests import get

def wan_ip():
    return get('https://api.ipify.org').content.decode('utf8')