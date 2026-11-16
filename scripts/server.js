import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
const root=resolve(process.argv[2]||'.');
const types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml','.webmanifest':'application/manifest+json'};
const server=createServer(async(req,res)=>{
  const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
  const file=resolve(root,pathname.replace(/^\/+/, '')||'index.html');
  if(file!==root&&!file.startsWith(root+sep)){res.writeHead(403).end();return;}
  try {const info=await stat(file);const target=info.isDirectory()?resolve(file,'index.html'):file;const body=await readFile(target);res.writeHead(200,{'Content-Type':types[extname(target)]||'application/octet-stream'}).end(body);}
  catch{res.writeHead(404).end('Not found');}
});
server.listen(4173,'0.0.0.0',()=>console.log('Keresztbe: http://localhost:4173'));
