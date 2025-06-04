import os
from peewee import PostgresqlDatabase, Model, IntegerField, CharField
from dotenv import load_dotenv
import urllib.parse

load_dotenv()

connection_string = os.getenv('CONNECTIONSTRING')

global db

if connection_string:

    print('remote DB...')

    parsed_url = urllib.parse.urlparse(connection_string)
    username = parsed_url.username
    password = parsed_url.password
    host = parsed_url.hostname
    port = parsed_url.port if parsed_url.port else 5432
    database = parsed_url.path.lstrip('/')

    query_params = urllib.parse.parse_qs(parsed_url.query)
    sslmode = query_params.get('sslmode', [None])[0]
    
    db = PostgresqlDatabase(
        database,
        user=username,
        password=password,
        host=host,
        port=port,
        sslmode=sslmode,
        autoconnect=True
    )

else:
    dbname = os.getenv('DBNAME')
    user = os.getenv('DBUSER')
    password = os.getenv('DBPASSWORD')
    db = PostgresqlDatabase(
        database=dbname, 
        user=user, 
        password=password,
        autoconnect=True
    )

class NeonModel(Model):
    part = CharField(max_length=20)
    state = CharField(null=True, max_length=20)
    quantity1 = CharField(null = True)
    person = CharField(null = True)
    quantity = CharField(null = True)
    gender = CharField(null = True)
    menukad = CharField(max_length=50)
    chaser = CharField(null=True, max_length=50)
    transcription = CharField(null=True, max_length=50)
    meaning = CharField(null=True)
    gen_meaning = CharField(max_length=320)
    root = CharField(null=True)
    tense = CharField(null = True)
    binyan = CharField(null = True)

    class Meta:
        database = db

class Term(Model):
    part = CharField(max_length=20)
    state = CharField(null=True, max_length=20)
    quantity1 = CharField(null = True)
    person = CharField(null = True)
    quantity = CharField(null = True)
    gender = CharField(null = True)
    menukad = CharField(max_length=50)
    chaser = CharField(null=True, max_length=50)
    transcription = CharField(null=True, max_length=50)
    meaning = CharField(null=True)
    gen_meaning = CharField(max_length=320)
    root = CharField(null=True)
    tense = CharField(null = True)
    binyan = CharField(null = True)

    class Meta:
        database = db


