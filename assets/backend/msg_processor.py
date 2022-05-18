import json
import boto3

def lambda_handler(event, context):
    print(event)
    client = boto3.client('sns')
    
    body = json.loads(event.get("body"))
    
    msg = "You have received a new message from the website.\n"
    msg += f"From: {body.get('name')} ({body.get('email')})\n"
    msg += f"Subject: {body.get('subject')}\n"
    msg += f"Message: {body.get('msg')}"

    try:
        response = client.publish (
          TargetArn = "arn:aws:sns:us-east-1:394703212976:final-website-msg-topic",
          Message= json.dumps({
              'default': msg,
          }),
          MessageStructure = 'json'
        )
        
        return {
            'statusCode': 202,
            'headers': {
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
            },
            'body': json.dumps('Message received successfully.')
        }
    except Exception as e:
        print("[Exception] " + str(e));
        return {
        'statusCode': 500,
        'headers': {
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
    }
    
    
    