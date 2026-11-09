import http from 'node:http';
import {readFile} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.dirname(fileURLToPath(import.meta.url));
const mime={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.jpg':'image/jpeg','.jpeg':'image/jpeg','.png':'image/png','.webp':'image/webp','.svg':'image/svg+xml','.json':'application/json; charset=utf-8'};
const server=http.createServer(async(req,res)=>{
  try{const url=new URL(req.url,'http://localhost');const name=decodeURIComponent(url.pathname);const filename=path.resolve(root,'.'+(name==='/'?'/index.html':name));
    if(!filename.startsWith(root+path.sep)){res.writeHead(403);res.end();return}
    const data=await readFile(filename);res.writeHead(200,{'Content-Type':mime[path.extname(filename)]||'application/octet-stream','X-Content-Type-Options':'nosniff'});res.end(data);
  }catch{res.writeHead(404);res.end('Not found')}
});
server.on('error',error=>{console.error('Khong mo duoc may chu:',error.message);process.exitCode=1});
server.listen(4173,'127.0.0.1',()=>console.log('\nMoonroom 1.3: http://127.0.0.1:4173\nGiu cua so nay mo. Nhan Ctrl+C de dung.\n'));
