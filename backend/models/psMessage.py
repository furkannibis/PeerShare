
def PeerShareMessage(status, ip, port, server_status, **kwargs):
    return {
        'status': status,
        'service_info': {
            'ip': ip,
            'port': port,
            'server_status': server_status
        },
        **kwargs
    }


def PeerShareException(status, err_code, err_desc, ip, port, server_status, **kwargs):
    return {
        'status': status,
        'err_info': {
            'error_code': err_code,
            'error_desc': err_desc,
        },
        'service_info': {
            'ip': ip,
            'port': port,
            'server_status': server_status
        },
        **kwargs
    }