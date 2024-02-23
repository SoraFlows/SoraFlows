import requests
from bs4 import BeautifulSoup
import json

# 目标网页URL
url = 'https://www.stablevideo.com'

# 发送HTTP请求获取网页内容
response = requests.get(url)
html_content = response.text

# 解析HTML内容
soup = BeautifulSoup(html_content, 'html.parser')

# 初始化一个空列表来存储提取的数据
cdn_links = []

# 查找所有<link>标签和<script>标签
for link in soup.find_all('link', href=True):
    cdn_links.append(link['href'])

for script in soup.find_all('script', src=True):
    cdn_links.append(script['src'])

# 将CDN链接列表转换为结构化数据（例如JSON）
structured_data = json.dumps(cdn_links, indent=4)

print(structured_data)
