var posts=["2022/10/20/hello-world/","2022/10/25/技术/技术/","2022/10/25/生活/first article/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};