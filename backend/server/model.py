from pydantic import BaseModel
from typing import Union

class SetPasswordModel(BaseModel):
    password: Union[str, None] = None

class StartServerModel(BaseModel):
    interface: str
    port: int
    password: Union[str, None] = None

class SharedFilesModel(BaseModel):
    ip: str
    port: int
    password: Union[str, None] = None

class ConnectedDevicesModel(BaseModel):
    ip: str
    port: int
    password: Union[str, None] = None 