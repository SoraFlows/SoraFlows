import {allExampleVideoList} from "@/app/data/openaiExampleVideo";


export const getExampleVideo = async (prompt:string) => {
  // 将输入转换为小写以进行大小写不敏感的比较
  const words = prompt.toLowerCase().split(" ");
  // 找出关键词数量最多的那个视频
  const result = {
    revised_prompt: '3D animation of a small, round, fluffy creature with big, expressive eyes explores a vibrant, enchanted forest. The creature, a whimsical blend of a rabbit and a squirrel, has soft blue fur and a bushy, striped tail. It hops along a sparkling stream, its eyes wide with wonder. The forest is alive with magical elements: flowers that glow and change colors, trees with leaves in shades of purple and silver, and small floating lights that resemble fireflies. The creature stops to interact playfully with a group of tiny, fairy-like beings dancing around a mushroom ring. The creature looks up in awe at a large, glowing tree that seems to be the heart of the forest.', // 设置一个默认提示
    video_url: 'https://cdn.openai.com/sora/videos/big-eyed-fluff-ball.mp4' // 设置一个默认视频URL
  };
  let matchCount = 0;
  for (let i = 0; i < allExampleVideoList.length; i++) {
    const currentVideo = allExampleVideoList[i];
    // 同样将视频提示转换为小写
    const currentPrompt = currentVideo.prompt.toLowerCase().split(" ");

    let currentMatchCount = 0;
    for (let j = 0; j < currentPrompt.length; j++) {
      if (words.includes(currentPrompt[j])) {
        currentMatchCount += 1;
      }
    }
    if (currentMatchCount > matchCount) {
      matchCount = currentMatchCount;
      result.revised_prompt = currentVideo.prompt;
      result.video_url = currentVideo.videoUrl;
    }
  }

  // 如果没有任何匹配，可以在这里决定是否要返回默认值或进行其他处理
  // 如果 matchCount > 0，说明找到了匹配，否则将返回上面设置的默认值
  return result;
}
