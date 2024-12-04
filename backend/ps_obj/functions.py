from os import listdir, stat, path
import mimetypes

def show_files(file_path_or_buffer: str) -> list:
    try:
        return [path.join(file_path_or_buffer, f) for f in listdir(file_path_or_buffer)]
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