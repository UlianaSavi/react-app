### RU

**Инструкция по запуску:**

1) Склонировать репозиторий - `git clone <repo name>`
2) Выполнить команду в консоли от корня приложения - `npm i`
3) Создать .env файл в корне проекта
4) Сгенерировать ключ -  [https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-fine-grained-personal-access-token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic) (в доступах достаточно будет чекбокса `public_repo`)
5) Добавить сгенерированный ключ в .env файл в виде: `REACT_APP_TOKEN=token`
5) Выполнить команду запуска приложения - `npm run start`
6) Перейти в Chrome на `http://localhost:3000/`

### EN

**Start instructions:**

1) Clone the repository - `git clone <repo name>`
2) Run the command in the console from the root of the app - `npm i`
3) Create an .env file in the root of the project
4) Generate a key - [https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-fine-grained-personal-access-token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic) (the `public_repo` checkbox will be enough for access)
5) Add the generated key to the .env file in the way: `REACT_APP_TOKEN=token`
6) Execute the application launch command - `npm run start`
7) Go to Chrome on `http://localhost:3000 /`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run lint` && `npm run lint:fix`

Run linter to checks for problems.
