
def PeerShareMessage(status_code, status, message_code, message, public_ip, ip, port, server_status, **kwargs):
    return {
        'status_code': status_code,
        'status': status,
        'message_info': {
            'message_code': message_code,
            'message': message
        },
        'service_info': {
            'public_ip': public_ip,
            'ip': ip,
            'port': port,
            'server_status': server_status
        },
        **kwargs
    }


def PeerShareException(status_code, status, err_code, err_desc, public_ip, ip, port, server_status, **kwargs):
    return {
        'status_code': status_code,
        'status': status,
        'err_info': {
            'error_code': err_code,
            'error_desc': err_desc,
        },
        'service_info': {
            'public_ip': public_ip,
            'ip': ip,
            'port': port,
            'server_status': server_status
        },
        **kwargs
    }