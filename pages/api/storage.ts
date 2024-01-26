import {API_HOST, OPENAI_API_KEY, OPENAI_API_TYPE} from '@/utils/app/const';

export const config = {
    runtime: 'edge',
};

const handler = async (req: Request): Promise<Response> => {
    try {
        const { key } = (await req.json()) as {
            key: string | null;
        };

        let apiKey = key === null ? OPENAI_API_KEY : key;
        let url = `${API_HOST}/v0/gateway/reset`;

        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                ...(OPENAI_API_TYPE === 'openai' && {
                    Authorization: `Bearer ${apiKey}`
                }),
            },
        });

        if (response.status === 401) {
            return new Response(response.body, {
                status: 500,
                headers: response.headers,
            });
        } else if (response.status !== 200) {
            console.error(
                `API returned an error ${
                    response.status
                }: ${await response.text()}`,
            );
            throw new Error('API returned an error');
        }

        const json = await response.json();

        return new Response(JSON.stringify(json), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response('Error', { status: 500 });
    }
};

export default handler;
