https://tailwindcss.com/docs/guides/create-react-app

1. make the react app

2. Install tailwind css
   a. npm install -D tailwindcss
   b. npx tailwindcss init

3. Configure template paths (tailwind.config.js)
   a. content: [
   "./src/**/*.{js,jsx,ts,tsx}",
   ]

4. Add tailwind to base css
   a. @tailwind base;
   @tailwind components;
   @tailwind utilities;

5. build the application and make sure you have the 'dist' folder
   a. npm run build

tailwind docs for syntax: https://tailwindcss.com/docs/align-items
