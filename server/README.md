## Requirements
- Node LTS (16.x)
- `sqlite3`

## How to run
1. Install dependencies `npm i`
2. Create a `.env` file based on `.env.example`
3. Run migrations `npx prisma migrate dev`
4. Run seeder `npx prisma db seed`
5. Start server `npm run dev`


## To-do
- [ ] Use ZOD Validator