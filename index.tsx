// シンプルなBun開発サーバー
const server = Bun.serve({
  port: 3000,
  async fetch(req) {
    const url = new URL(req.url);
    const path = url.pathname;

    // ルートアクセス
    if (path === '/') {
      return new Response(Bun.file('./index.html'), {
        headers: { 'Content-Type': 'text/html' }
      });
    }

    // client.jsのリクエスト（トランスパイル済みのJavaScript）
    if (path === '/client.js') {
      const result = await Bun.build({
        entrypoints: ['./client.tsx'],
        target: 'browser',
        define: {
          'process.env.NODE_ENV': '"development"'
        },
        external: ['figma:*']  // figmaアセットを外部化
      });

      if (result.success) {
        return new Response(result.outputs[0], {
          headers: { 'Content-Type': 'application/javascript' }
        });
      } else {
        return new Response('Build failed', { status: 500 });
      }
    }

    // CSSファイルを提供
    if (path === '/tailwind.css') {
      return new Response(Bun.file('./tailwind.css'), {
        headers: { 'Content-Type': 'text/css' }
      });
    }

    return new Response('Not Found', { status: 404 });
  }
});

console.log(`🚀 Server running at http://localhost:${server.port}`);
console.log('📁 Hot reload enabled - edit files to see changes');