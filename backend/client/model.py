from pydantic import BaseModel
from typing import Union

class ClientSocketParameters(BaseModel):
    ip: str
    port: int
    password: str

class ClientSocketRequestFileParameters(BaseModel):
    file_name: str
    