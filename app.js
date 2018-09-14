const WordChain = require('./WordChain');

const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()

    server.get('/calculate', async (req, res) => {
      const { first, last } = req.query;
      try {
        if (first && last) {
          const wordChain = new WordChain(first, last, null);
          const words = await wordChain.loadWords();
          const result = wordChain.getChain();
          return res.json({ result });
        }
        return res.json({});
      } catch (error) {
        return res.json({ error });
      }
    });

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })