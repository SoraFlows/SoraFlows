// pages/api/favicon.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

interface FaviconResponse {
    error?: string;
}

const getFavicon = async (url: string): Promise<Buffer> => {
    const faviconUrl = `http://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=${url}`;
    const response = await fetch(faviconUrl);
    if (!response.ok) {
        throw new Error('Favicon could not be fetched.');
    }
    return response.buffer();
};

const handler = async (req: NextApiRequest, res: NextApiResponse<FaviconResponse | Buffer>): Promise<void> => {
    const { url } = req.query;

    if (typeof url !== 'string' || !url) {
        res.status(404).json({ error: 'URL is required and must be a string.' });
        return;
    }

    try {
        const favicon = await getFavicon(url);
        res.setHeader('Content-Type', 'image/x-icon');
        res.send(favicon);
    } catch (error) {
        res.status(404).json({ error: error instanceof Error ? error.message : 'An unknown error occurred' });
    }
};

export default handler;
