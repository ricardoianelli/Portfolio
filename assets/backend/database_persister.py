import json
import boto3

def extract_body_from_event(event):
    body = event.get("Records")[0].get("body")
    bodyJson = json.loads(body)
    message = bodyJson.get("Message")
    
    message = message.replace("You have received a new message from the website.", "")
    message = message.replace("From: ", "")
    
    split = message.split("Subject: ")
    
    message = split[1]
    sender = split[0]
    
    split = sender.split(" (")
    visitorName = split[0].replace("\n", "")
    visitorEmail = split[1].replace(")", "").replace("\n", "")
    
    message = message.replace("Subject: ", "")
    split = message.split("Message: ")
    
    subject = split[0].replace("\n", "")
    message = split[1].replace("Message: ", "")
    
    return {
        'visitorEmail': visitorEmail,
        'visitorName': visitorName,
        'subject': subject,
        'message': message, 
    }

def lambda_handler(event, context):
    
    dynamodb = boto3.resource('dynamodb')
    table_name = 'final-website-messages-table'
    table = dynamodb.Table(table_name)
    
    messageData = extract_body_from_event(event)
    
    data = table.put_item(Item=messageData)
    
    response = {'statusCode': 201}
    return response