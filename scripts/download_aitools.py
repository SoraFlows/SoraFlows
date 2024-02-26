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

# 查找所有<a>标签并提取href属性
for a_tag in soup.find_all('a', href=True):
    href = a_tag['href']  # 获取href属性
    h3_text = a_tag.find('h3').text if a_tag.find('h3') else 'No h3 tag found'  # 获取h3标签的文本内容
    print(f"href: {href}, h3: {h3_text}")
    if h3_text == 'No h3 tag found':
        continue
    structured_data.append({
        'href': href,
        'title': h3_text,
        "is_free": ""
    })


print(structured_data)
print("Total links found:", len(structured_data))
# 到处数据到JSON文件
with open('./public/data/aitools.json', 'w') as file:
    json.dump(structured_data, file, indent=4)

# 将数据写入到excel
import pandas as pd
df = pd.DataFrame(structured_data)
df.to_excel('./public/data/aitools.xlsx', index=False)
print("Data exported to aitools.xlsx")