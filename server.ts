import { Serve, file } from 'bun';

export default {
    port: 80,
    development: true,
    fetch(req: Request) {
        return new Response(null, { status: 200 });
    },
    ca: file('./bundle.pem')
} satisfies Serve;