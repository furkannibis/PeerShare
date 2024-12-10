
def PeerShareClientMessage(status_code, status, message_code, message, wan_ip, ip, port, **kwargs):
    return {
        'status_code': status_code,
        'status': status,
        'message_info': {
            'message_code': message_code,
            'message': message
        },
        'server_info': {
            'wan_ip': wan_ip,
            'ip': ip,
            'port': port
        },
        **kwargs
    }

def PeerShareClientException(status_code, status, err_code, err_desc, wan_ip, ip, port, **kwargs):
    return {
        'status_code': status_code,
        'status': status,
        'err_info': {
            'error_code': err_code,
            'error_desc': err_desc,
        },
        'server_info': {
            'wan_ip': wan_ip,
            'ip': ip,
            'port': port,
        },
        **kwargs
    }

def PeerShareServerMessage(status_code, status, message_code, message, wan_ip, ip, port, server_binding, server_listening, **kwargs):
    return {
        'status_code': status_code,
        'status': status,
        'message_info': {
            'message_code': message_code,
            'message': message
        },
        'server_info': {
            'wan_ip': wan_ip,
            'ip': ip,
            'port': port
        },
        'server_status': {
            'server_binding': server_binding,
            'server_listening': server_listening
        },
        **kwargs
    }

def PeerShareServerException(status_code, status, err_code, err_desc, wan_ip, ip, port, server_binding, server_listening, **kwargs):
    return {
        'status_code': status_code,
        'status': status,
        'err_info': {
            'error_code': err_code,
            'error_desc': err_desc,
        },
        'server_info': {
            'wan_ip': wan_ip,
            'ip': ip,
            'port': port,
        },
        'server_status': {
            'server_binding': server_binding,
            'server_listening': server_listening
        },
        **kwargs
    }
