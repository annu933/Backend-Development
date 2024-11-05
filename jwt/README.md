JWT has three part

1. Header: Algorithm & token type
2. Payload: Data
3. Verify Signature


Setup for Create User Account
mongoose
schema
model
user create 
while create user, change password to --> hash
create jwt token -> set cookie

login part :
received tocken
decrypt token --> email


<!-- database -->
database --> Collections --> Document

code <> database
mongoose.connect <> database.create // when connect mongodb to database, database will create
model create <> collections // when create model in code , collection will create in database
user create <> document create //user created in code , document will create in database

installed this package
 "bcrypt": "^5.1.1",
"cookie-parser": "^1.4.7",
"ejs": "^3.1.10",
"jsonwebtoken": "^9.0.2",
"mongoose": "^8.8.0"

