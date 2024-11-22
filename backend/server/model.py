from pydantic import BaseModel

class LANServerStartServer(BaseModel):
    port: int

class WANServerStartServer(BaseModel):
    port: int

class ShowFilesAddr(BaseModel):
    ip: str
    port: int

class SendMessageAddr(BaseModel):
    ip: str
    port: int
    message: str

class ConnectedDevice(BaseModel):
    ip: str
    port: int