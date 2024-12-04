from pydantic import BaseModel
from typing import Optional

class ServerSocketParameters(BaseModel):
    ip: str
    port: int
    password: str
    max_conn_count: int