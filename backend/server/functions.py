import json

from datetime import datetime, timedelta
from requests import get

def write_to_event(object_to_be_written: dict, add_time:bool = True):
    if add_time:
        object_to_be_written['time'] = datetime.now().strftime('%d.%m.%Y %H:%M:%S')

    json_file = './server/event/event.json'
    with open(json_file, 'r') as file:
        data = json.load(file)
    
    data.append(object_to_be_written)

    with open(json_file, 'w') as file:
        json.dump(data, file, indent=4)

def server_week_stat(json_file = './server/event/event.json', day=7):
    with open(json_file, 'r') as file:
        events = json.load(file)

    now = datetime.now()
    one_week_ago = now - timedelta(days=day)
    daily_users = {}

    for event in events:
        if "ip" in event and event["event_code"] == "EUSL":
    
            event_time = datetime.strptime(event["time"], "%d.%m.%Y %H:%M:%S")

            if event_time >= one_week_ago:
                event_date = event_time.strftime("%d.%m.%Y")
                user_ip = event["ip"]

                if event_date not in daily_users:
                    daily_users[event_date] = set()
                daily_users[event_date].add(user_ip)

    result = {date: len(users) for date, users in daily_users.items()}
    return result

def hourly_user_stat(json_file='./server/event/event.json', hours_back=5):
    with open(json_file, 'r') as file:
        events = json.load(file)

    now = datetime.now()
    start_time = now - timedelta(hours=hours_back)
    hourly_users = {hour: set() for hour in range(24)}

    for event in events:
        if "ip" in event and event["event_code"] == "EUSL":
            event_time = datetime.strptime(event["time"], "%d.%m.%Y %H:%M:%S")
            event_hour = event_time.hour
            user_ip = event["ip"]

            if start_time <= event_time <= now:
                hourly_users[event_hour].add(user_ip)

    current_hour = now.hour
    analyzed_hours = [(current_hour - i) % 24 for i in range(hours_back + 1)]
    sorted_hours = sorted(analyzed_hours, key=lambda x: x if x >= analyzed_hours[-1] else x + 24)

    result = {}
    for hour in sorted_hours:
        hour_time = now.replace(hour=hour, minute=0, second=0, microsecond=0)
        if hour > current_hour:
            hour_time -= timedelta(days=1)
        formatted_time = hour_time.strftime("%Y-%m-%d %H:%M")
        result[formatted_time] = len(hourly_users[hour])

    return result

def wan_ip():
    return get('https://api.ipify.org').content.decode('utf8')