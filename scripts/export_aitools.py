import requests
from bs4 import BeautifulSoup
import json


# 目标网页URL
url = 'https://askaitools.ai/'

# 发送HTTP请求获取网页内容
response = requests.get(url)
html_content = response.text

# 解析HTML内容
soup = BeautifulSoup(html_content, 'html.parser')

# 初始化一个空列表来存储提取的数据
structured_data = []


def check_url(url:str)->bool:
    try:
        response = requests.get(url, timeout=3)  # 设置超时为3秒
        if response.status_code == 200:
            print(f"{url} is alive.")
            return True
        else:
            print(f"{url} might not be alive, status code: {response.status_code}")
            return False
    except requests.RequestException as e:
        print(f"Error checking {url}: {e}")
        return False


# 查找所有<a>标签并提取href属性
for a_tag in soup.find_all('a', href=True):
    href = a_tag['href']  # 获取href属性
    if href.startswith('http') or href.startswith('https'):  # 如果href属性不是以http开头的，跳过
        h3_text = a_tag.find('h3').text if a_tag.find('h3') else 'No h3 tag found'  # 获取h3标签的文本内容
        if h3_text == 'No h3 tag found':
            continue
        url = href.replace("https://", "").replace("http://", "")
        base_url = f"https://api.iowen.cn/favicon/{url}.png"
        # 获取网站的favicon,如果没有
        structured_data.append({
            'href': href,
            'title': h3_text,
            "icon": base_url,
            "is_submit": True,
            "is_free": True,
            "is_alive": True
        })


print(structured_data)
print("Total links found:", len(structured_data))

# # 将数据写入到excel
import pandas as pd
df = pd.DataFrame(structured_data)
df.to_excel('./src/data/aitools.xlsx', index=False)
print("Data exported to aitools.xlsx")