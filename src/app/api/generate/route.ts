import { apiKey, baseUrl, model } from "@/config/openai";

export async function POST(req: Request, res: Response) {

  const json = await req.json();
  console.log(json);
  const prompt = json.prompt;
  const model = json.model;

  const body = {
    "model": model,
    "prompt": prompt,
    "size": "1920X1080",
    "quality": "medium",
    "duration": 30,
    "aspect_ratio": "16:9",
    "fps": 30
  }

  // 检查当前是在线环境还是本地环境 通过localhost判断
  let base_url: string;
  if (req.headers.get('host')?.includes('localhost')) {
    base_url = `http://${req.headers.get('host')}`;
  } else {
    base_url = baseUrl; // 使用先前声明的 baseUrl
  }

  const result = await fetch(`${base_url}/v1/video/generations`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${apiKey}`
    },
  }).then(v => v.json()).catch(err => console.log(err));
  return new Response(JSON.stringify(result), {
    headers: { "Content-Type": "application/json" },
    status: 200
  });
}
