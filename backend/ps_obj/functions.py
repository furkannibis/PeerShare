from os import listdir, stat, path
import mimetypes
import json
from typing import Union
from io import StringIO

def show_files(file_path_or_buffer: str) -> list:
    try:
        return [f for f in listdir(file_path_or_buffer)]
    except FileNotFoundError:
        print(f"Error: Path '{file_path_or_buffer}' does not exist.")
        return []

def file_size(file_path_or_buffer: str) -> str:
    try:
        size_b = stat(file_path_or_buffer).st_size
        size_kb = size_b / 1024
        size_mb = size_kb / 1024
        size_gb = size_mb / 1024

        if size_b < 1024:
            return f"{size_b:.2f} B"
        elif size_kb < 1024:
            return f"{size_kb:.2f} KB"
        elif size_mb < 1024:
            return f"{size_mb:.2f} MB"
        else:
            return f"{size_gb:.2f} GB"
    except FileNotFoundError:
        return "File not found"
    except PermissionError:
        return "Permission denied"

def file_type(file_path_or_buffer: str) -> str:
    if not path.isfile(file_path_or_buffer):
        return "directory"
    
    mime_type, _ = mimetypes.guess_type(file_path_or_buffer)
    return mime_type if mime_type else "Unknown file type"


def files_info(file_path_or_buffer: str):
    files = show_files(file_path_or_buffer)
    if not files:
        print("No files found.")
        return

    for file in files:
        yield f"{path.basename(file)} - {file_size(file)} - {file_type(file)}"

def file_info(file_path_or_buffer: str):
    try: 
        return f"{path.basename(file_path_or_buffer)} - {file_size(file_path_or_buffer)} - {file_type(file_path_or_buffer)}"
    except:
        return 'No file'

def file_size(file_path_or_buffer: str) -> int:
    return path.getsize(file_path_or_buffer)

def find_downloaded_count(file_name: str, file_path_or_buffer: Union[str, StringIO] = './server/event/event.json') -> int:
    if isinstance(file_path_or_buffer, str):
        with open(file_path_or_buffer, 'r') as file:
            events = json.load(file)
    elif isinstance(file_path_or_buffer, StringIO):
        file_path_or_buffer.seek(0)
        events = json.load(file_path_or_buffer)
    else:
        raise ValueError("Unsupported input type. Provide a file path or StringIO buffer.")
    download_events = [
        event for event in events if event.get("event_code") == "EUDF" and event.get("file") == file_name
    ]
    return len(download_events)


def show_files_for_server(file_path_or_buffer: str):
    files_stats = []
    files = show_files(file_path_or_buffer=file_path_or_buffer)
    for file in files:
        files_stats.append({
            'file_name': file,
            'file_size': file_size(file_path_or_buffer=file_path_or_buffer+file),
            'file_type': file_type(file_path_or_buffer=file_path_or_buffer+file),
            'downloaded_count': find_downloaded_count(file_path_or_buffer+file)
        })
    return files_stats