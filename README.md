## Step 1: Install pnpm (package manager)
Open a terminal, and install pnpm.
```shell
npm install -g pnpm
```

## Step 2: Clone the repository
Clone the repository to your local machine.

## Step 3: Open a terminal in the root of the project
Run 
```shell
pnpm install
```

## Step 4: Create a Notion Database
Create a Notion database with these following properties:
1. Name
2. Status (Type: Select)

## Step 5: Create a Notion Integration Token
Head over to `https://developers.notion.com/` and click on `View my integrations` on the upper right of the web page.

## Step 6: Login to your Notion Account
Use the same account that you created your Notion Database with.

## Step 7: Create a new integration
Fill in the details of the integration then click on "Create"

## Step 8: Get the integration token
look for the token for the integration and add it into the .env file

## Step 9: Login to your social media Account for developers (linkedIn, Instagram , X)
go to the developer portal of the social media app

## Step 10: Create a new social media integration
Fill in the details of the integration then click on "Create"

## Step 11: Get the integration token
look for the tokens, or client ID and secrets for the integration and add it into the .env file

## Step 12: Launch and access the project
Run 
```shell
npm run dev
```
go to localhost:3000 or any other port number specified in your console
