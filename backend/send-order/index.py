import json
import os
import urllib.request


def handler(event: dict, context) -> dict:
    """Отправляет заявку с сайта цветочного магазина в мессенджер MAX владельцу"""
    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400',
            },
            'body': ''
        }

    body = json.loads(event.get('body') or '{}')
    name = body.get('name', '').strip()
    phone = body.get('phone', '').strip()
    occasion = body.get('occasion', '').strip()
    comment = body.get('comment', '').strip()

    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'ok': False, 'error': 'Имя и телефон обязательны'})
        }

    text = "Новая заявка с сайта!\n\n"
    text += f"Имя: {name}\n"
    text += f"Телефон: {phone}\n"
    if occasion:
        text += f"Повод: {occasion}\n"
    if comment:
        text += f"Пожелания: {comment}"

    bot_token = os.environ['MAX_BOT_TOKEN']
    user_id = os.environ['MAX_USER_ID']

    url = f"https://platform-api.max.ru/messages?user_id={user_id}"
    payload = json.dumps({"text": text}).encode('utf-8')

    req = urllib.request.Request(
        url,
        data=payload,
        headers={
            'Content-Type': 'application/json',
            'Authorization': bot_token
        },
        method='POST'
    )
    with urllib.request.urlopen(req) as resp:
        resp.read()

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'ok': True})
    }